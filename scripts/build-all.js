#!/usr/bin/env node

/**
 * This file is part of baxyz's zen mods.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { readdir, readFile, mkdir, copyFile, stat, writeFile } from 'fs/promises';
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

async function getFileSize(filePath) {
  try {
    const stats = await stat(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

async function buildModFolder(modName, modDir, outputDir) {
  const modDistDir = join(outputDir, modName);
  await ensureDir(modDistDir);

  let filesAdded = 0;
  const addedFiles = [];
  let totalSize = 0;

  // Get all files in the mod directory
  const items = await readdir(modDir, { withFileTypes: true });
  const files = items.filter(item => item.isFile());

  // Copy all files
  for (const file of files) {
    const sourcePath = join(modDir, file.name);
    const destPath = join(modDistDir, file.name);

    try {
      await copyFile(sourcePath, destPath);
      filesAdded++;
      addedFiles.push(file.name);
      totalSize += await getFileSize(sourcePath);
      console.log(`  ✅ Copied: ${file.name}`);
    } catch (error) {
      console.error(`  ❌ Failed to copy ${file.name}:`, error.message);
    }
  }

  return {
    folder: modDistDir,
    filesCount: filesAdded,
    size: totalSize,
    files: addedFiles
  };
}

async function buildMod(modName) {
  console.log(`\n🔨 Building mod: ${modName}`);

  const modDir = join(modsDir, modName);
  const modConfigPath = join(modDir, 'mod.json');

  try {
    // Read mod configuration (if exists)
    let config = { name: modName, version: '1.0.0' };
    try {
      const configContent = await readFile(modConfigPath, 'utf-8');
      config = JSON.parse(configContent);
    } catch {
      console.log(`  ℹ️  No mod.json found, using defaults`);
    }

    // Create mod folder and copy all files
    const buildResult = await buildModFolder(modName, modDir, distDir);

    console.log(`  📦 Created ${modName}/ (${buildResult.filesCount} files, ${Math.round(buildResult.size / 1024)} KB)`);
    console.log(`  ✅ Built ${modName} v${config.version} successfully`);

    return {
      ...config,
      build: {
        folder: modName,
        filesCount: buildResult.filesCount,
        size: buildResult.size,
        files: buildResult.files,
        buildTime: new Date().toISOString()
      }
    };

  } catch (error) {
    console.error(`  ❌ Failed to build ${modName}:`, error.message);
    return null;
  }
}

async function buildAll() {
  console.log('🚀 Building all mods (copying all files)...\n');

  await ensureDir(distDir);

  try {
    const modFolders = await readdir(modsDir, { withFileTypes: true });
    const mods = modFolders.filter((item) => item.isDirectory()).map((item) => item.name);

    if (mods.length === 0) {
      console.log('❌ No mods found to build.');
      return;
    }

    console.log(`📁 Found ${mods.length} mod(s): ${mods.join(', ')}`);

    const builtMods = [];
    let totalSize = 0;

    for (const modName of mods) {
      const config = await buildMod(modName);
      if (config) {
        builtMods.push(config);
        totalSize += config.build.size;
      }
    }

    // Create an index of built mods
    const indexData = {
      mods: builtMods,
      buildSummary: {
        totalMods: builtMods.length,
        totalSize: totalSize,
        buildTime: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0'
      }
    };

    const indexPath = join(distDir, 'index.json');
    await writeFile(indexPath, JSON.stringify(indexData, null, 2));

    console.log('\n📊 Build Summary:');
    console.log(`  ✅ Built ${builtMods.length} mods successfully`);
    console.log(`  📦 Total size: ${Math.round(totalSize / 1024)} KB`);
    console.log(`  📂 Output directory: ./dist/`);
    console.log('  📋 Created index.json with build information');

    if (builtMods.length > 0) {
      console.log('\n📦 Generated mod folders:');
      builtMods.forEach(mod => {
        console.log(`  • ${mod.build.folder}/ (${mod.build.filesCount} files, ${Math.round(mod.build.size / 1024)} KB)`);
      });
    }

  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

buildAll();