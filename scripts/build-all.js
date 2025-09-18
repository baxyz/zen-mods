#!/usr/bin/env node

/**
 * This file is part of Zen Mods.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = dirname(__dirname);
const modsDir = join(rootDir, 'mods');
const distDir = join(rootDir, 'dist');

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function buildMod(modName) {
  console.log(`Building mod: ${modName}`);

  const modDir = join(modsDir, modName);
  const modConfigPath = join(modDir, 'mod.json');

  try {
    const configContent = await readFile(modConfigPath, 'utf-8');
    const config = JSON.parse(configContent);

    const outputDir = join(distDir, modName);
    await ensureDir(outputDir);

    // Copier tous les fichiers du mod vers dist
    const files = await readdir(modDir, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const sourceFile = join(modDir, file.name);
        const destFile = join(outputDir, file.name);
        const content = await readFile(sourceFile);
        await writeFile(destFile, content);
      }
    }

    console.log(`✅ Built ${modName} successfully`);
    return config;
  } catch (error) {
    console.error(`❌ Failed to build ${modName}:`, error.message);
    return null;
  }
}

async function buildAll() {
  console.log('🔨 Building all mods...\n');

  await ensureDir(distDir);

  try {
    const modFolders = await readdir(modsDir, { withFileTypes: true });
    const mods = modFolders.filter((item) => item.isDirectory()).map((item) => item.name);

    if (mods.length === 0) {
      console.log('No mods found to build.');
      return;
    }

    const builtMods = [];

    for (const modName of mods) {
      const config = await buildMod(modName);
      if (config) {
        builtMods.push({ name: modName, ...config });
      }
    }

    // Créer un index des mods disponibles
    const indexPath = join(distDir, 'index.json');
    await writeFile(
      indexPath,
      JSON.stringify(
        {
          mods: builtMods,
          buildTime: new Date().toISOString(),
          version: process.env.npm_package_version || '1.0.0',
        },
        null,
        2
      )
    );

    console.log(`\n✅ Built ${builtMods.length} mods successfully`);
    console.log('📦 Distribution ready in ./dist/');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

buildAll();
