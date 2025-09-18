# Zen Browser Marketplace Submission Guide

This document explains how to submit the `tab-context-organizer` mod to the official Zen Browser marketplace.

## ✅ Compliance Verification

Our mod meets all Zen marketplace requirements:

### Technical Requirements
- ✅ **Compatible with Zen Browser**: Tested and functional
- ✅ **Open Source**: Code available under MIT license
- ✅ **No malicious code**: Transparent and auditable code
- ✅ **Copyright compliance**: Original content

### Mod Validation
- ✅ **Unique name < 25 characters**: "tab-context-organizer" (21 characters)
- ✅ **Description < 100 characters**: 85 characters used
- ❌ **600x400 PNG screenshot**: To create (see instructions below)
- ✅ **Valid README**: Complete documentation provided
- ✅ **JSON preferences**: `preferences.json` file configured

## 📸 Screenshot Creation

### Required Specifications
- **Dimensions**: Exactly 600x400 pixels
- **Format**: PNG
- **Name**: `screenshot.png`
- **Location**: `/mods/tab-context-organizer/screenshot.png`

### Suggested Content
The screenshot should show:
1. **Before/After**: Context menu comparison
2. **Features**: "Move Tab" submenu in action
3. **Interface**: Design integrated with Zen Browser

### Recommended Tools
```bash
# Capture with Firefox/Zen Developer Tools
# Or use a tool like:
- GIMP (free)
- Photoshop 
- Figma (online)
- Canva (online)
```

## 📋 Submission Process

### 1. Final Preparation
```bash
# Verify all files are present
cd /home/berenger/Projects/baxyz/zen-mods/mods/tab-context-organizer/
ls -la

# Required files:
# ├── mod.json
# ├── userChrome.css  
# ├── tabContextOrganizer.js
# ├── preferences.json
# ├── README.md
# └── screenshot.png (to create)
```

### 2. GitHub Issue Creation
1. Go to: https://github.com/zen-browser/theme-store/issues/new?assignees=&labels=new-theme&projects=&template=create-theme.yml&title=%5Bcreate-theme%5D%3A+
2. Fill the template with:

#### Mod Information
```yaml
Mod Name: Tab Context Menu Organizer
Description: Reorganizes tab context menu by grouping related tab movement options into submenus
Author: Berenger
Version: 1.0.0
License: MIT
```

#### Links and Files
```yaml
Repository: https://github.com/username/zen-mods
Mod Path: /mods/tab-context-organizer/
Screenshot: [Attach screenshot.png file]
README: [Copy README.md content]
```

#### JSON Preferences
```json
[
  {
    "property": "mod.tab_context_organizer.enabled",
    "label": "Enable Tab Context Organizer",
    "type": "checkbox",
    "defaultValue": true
  },
  {
    "property": "mod.tab_context_organizer.submenu_label",
    "label": "Submenu Label",
    "type": "string",
    "defaultValue": "Move Tab",
    "placeholder": "e.g: Move Tab, Organize, Actions..."
  },
  {
    "property": "mod.tab_context_organizer.include_containers",
    "label": "Include Container Options",
    "type": "checkbox",
    "defaultValue": true
  },
  {
    "property": "mod.tab_context_organizer.include_devices",
    "label": "Include Send to Device",
    "type": "checkbox",
    "defaultValue": true
  },
  {
    "property": "mod.tab_context_organizer.menu_position",
    "label": "Menu Position",
    "type": "dropdown",
    "defaultValue": "auto",
    "placeholder": "Select position",
    "options": [
      { "label": "Automatic", "value": "auto" },
      { "label": "Top of menu", "value": "top" },
      { "label": "Bottom of menu", "value": "bottom" },
      { "label": "Before Close Tab", "value": "before-close" }
    ]
  }
]
```

### 3. Wait for Analysis
- A bot will automatically analyze the mod
- A Pull Request will be created automatically
- The development team will review the code

### 4. Respond to Comments
- Fix any reported issues
- Update files if necessary
- Answer team questions

## 🚀 After Approval

### Mod Approved
- The mod will be added to the mod registry
- It will appear in the Zen Browser interface
- Users will be able to install it easily

### Updates
To update the mod:
1. Create a new issue: https://github.com/zen-browser/theme-store/issues/new
2. Explain the changes made
3. Provide the new files

## 📞 Support

### In Case of Problems
- **GitHub Issues**: https://github.com/zen-browser/theme-store/issues
- **Zen Discord**: Join the official community
- **Documentation**: https://docs.zen-browser.app/themes-store/

### Final Checklist
Before submitting, verify:

- [ ] All files are present and correct
- [ ] 600x400 PNG screenshot created
- [ ] Mod tested in Zen Browser
- [ ] README complete and up to date
- [ ] Preferences tested
- [ ] Code clean and commented
- [ ] MIT license applied

---

**🎉 Your mod is ready for submission to the Zen Browser marketplace!**