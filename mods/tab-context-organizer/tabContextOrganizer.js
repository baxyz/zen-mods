/**
 * This file is part of baxyz's zen mods.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// ==UserScript==
// @name         Tab Context Menu Organizer for Zen Browser
// @version      1.0.0
// @description  Reorganizes tab context menu by grouping tab movement options
// @author       baxyz
// @match        chrome://browser/content/browser.xhtml
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  console.log('[Tab Context Organizer] Initializing...');

  /**
   * Configuration for the mod
   */
  const CONFIG = {
    SUBMENU_ID: 'zen-tab-move-submenu',
    DEFAULT_SUBMENU_LABEL: 'Move Tab',
    TARGET_ITEMS: [
      'context_moveToStart',
      'context_moveToEnd',
      'context_moveToNewWindow',
      'context_moveTabOptions', // Workspace options
      'context_sendTabToDevice',
      'context_reopenInContainer',
    ],
    LABELS: {
      context_moveToStart: 'To Beginning',
      context_moveToEnd: 'To End',
      context_moveToNewWindow: 'To New Window',
      context_moveTabOptions: 'To Workspace',
      context_sendTabToDevice: 'Send to Device',
      context_reopenInContainer: 'Open in Container',
    },
    CSS_CLASSES: {
      context_moveToStart: 'zen-tab-move-start',
      context_moveToEnd: 'zen-tab-move-end',
      context_moveToNewWindow: 'zen-tab-move-window',
      context_moveTabOptions: 'zen-tab-move-workspace',
      context_sendTabToDevice: 'zen-tab-move-device',
      context_reopenInContainer: 'zen-tab-move-container',
    },
  };

  /**
   * Get preference value from browser preferences
   */
  function getPreference(name, defaultValue) {
    try {
      const prefService = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefBranch);

      switch (typeof defaultValue) {
        case 'boolean':
          return prefService.getBoolPref(name, defaultValue);
        case 'string':
          return prefService.getCharPref(name, defaultValue);
        case 'number':
          return prefService.getIntPref(name, defaultValue);
        default:
          return defaultValue;
      }
    } catch (e) {
      console.warn(`[Tab Context Organizer] Could not get preference ${name}:`, e);
      return defaultValue;
    }
  }

  /**
   * Check if mod is enabled via preferences
   */
  function isModEnabled() {
    return getPreference('mod.tab_context_organizer.enabled', true);
  }

  /**
   * Check if workspace options should be included
   */
  function shouldIncludeWorkspace() {
    return getPreference('mod.tab_context_organizer.include_workspace', true);
  }

  /**
   * Check if containers should be included
   */
  function shouldIncludeContainers() {
    return getPreference('mod.tab_context_organizer.include_container', true);
  }

  /**
   * Check if device options should be included
   */
  function shouldIncludeDevices() {
    return getPreference('mod.tab_context_organizer.include_device', true);
  }

  /**
   * Creates the "Move Tab" submenu
   */
  function createMoveTabSubmenu() {
    // Check if mod is enabled first
    if (!isModEnabled()) {
      return null;
    }

    const contextMenu = document.getElementById('tabContextMenu');
    if (!contextMenu) {
      console.warn('[Tab Context Organizer] Tab context menu not found');
      return null;
    }

    // Create submenu element
    const submenu = document.createXULElement('menu');
    submenu.id = CONFIG.SUBMENU_ID;
    submenu.setAttribute('label', CONFIG.DEFAULT_SUBMENU_LABEL);
    submenu.setAttribute('class', 'zen-tab-move-submenu');

    // Create menupopup container
    const menupopup = document.createXULElement('menupopup');
    submenu.appendChild(menupopup);

    return { submenu, menupopup };
  }

  /**
   * Moves existing menu items to the submenu
   */
  function reorganizeMenuItems() {
    const contextMenu = document.getElementById('tabContextMenu');
    if (!contextMenu) return;

    const submenuData = createMoveTabSubmenu();
    if (!submenuData) return;

    const { submenu, menupopup } = submenuData;
    let itemsFound = 0;

    // Find and move target items
    CONFIG.TARGET_ITEMS.forEach((itemId, index) => {
      const item = document.getElementById(itemId);
      if (item) {
        // Skip workspace options if disabled in preferences
        if (itemId === 'context_moveTabOptions' && !shouldIncludeWorkspace()) {
          return;
        }

        // Skip containers if disabled in preferences
        if (itemId === 'context_reopenInContainer' && !shouldIncludeContainers()) {
          return;
        }

        // Skip device options if disabled in preferences
        if (itemId === 'context_sendTabToDevice' && !shouldIncludeDevices()) {
          return;
        }

        // Clone the item to preserve functionality
        const clonedItem = item.cloneNode(true);
        clonedItem.id = `zen-${itemId}`;
        clonedItem.setAttribute(
          'class',
          `${clonedItem.getAttribute('class') || ''} zen-tab-move-item ${CONFIG.CSS_CLASSES[itemId] || ''}`.trim()
        );

        // Update label if specified
        if (CONFIG.LABELS[itemId]) {
          clonedItem.setAttribute('label', CONFIG.LABELS[itemId]);
        }

        // Add to submenu
        menupopup.appendChild(clonedItem);

        // Add separator after basic movement options (moveToEnd)
        if (itemId === 'context_moveToEnd' && index < CONFIG.TARGET_ITEMS.length - 1) {
          const separator = document.createXULElement('menuseparator');
          menupopup.appendChild(separator);
        }

        // Hide original item
        item.style.display = 'none';
        itemsFound++;
      }
    });

    // Only add submenu if we found items to organize
    if (itemsFound > 0) {
      // Find a good position for the submenu (after separator before close tab)
      const closeTabItem = document.getElementById('context_closeTab');
      const referenceElement = closeTabItem?.previousElementSibling?.previousElementSibling;

      if (referenceElement) {
        contextMenu.insertBefore(submenu, referenceElement.nextSibling);
      } else {
        contextMenu.appendChild(submenu);
      }

      console.log(`[Tab Context Organizer] Reorganized ${itemsFound} menu items`);
      return true;
    }

    return false;
  }

  /**
   * Initialize the mod when the DOM is ready
   */
  function init() {
    // Wait for the browser to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Try to reorganize menu items
    const success = reorganizeMenuItems();

    if (success) {
      console.log('[Tab Context Organizer] Successfully initialized');
    } else {
      // Retry after a delay if elements weren't ready
      setTimeout(() => {
        if (reorganizeMenuItems()) {
          console.log('[Tab Context Organizer] Successfully initialized (delayed)');
        } else {
          console.warn('[Tab Context Organizer] Failed to initialize - menu items not found');
        }
      }, 1000);
    }
  }

  /**
   * Cleanup function for mod removal
   */
  function cleanup() {
    const submenu = document.getElementById(CONFIG.SUBMENU_ID);
    if (submenu) {
      submenu.remove();
    }

    // Restore original items
    CONFIG.TARGET_ITEMS.forEach((itemId) => {
      const item = document.getElementById(itemId);
      if (item) {
        item.style.display = '';
      }
    });

    console.log('[Tab Context Organizer] Cleanup completed');
  }

  // Expose cleanup function globally for debugging
  window.zenTabContextOrganizerCleanup = cleanup;

  // Initialize the mod
  init();
})();
