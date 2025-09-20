# Tab Context Menu Organizer

A simple mod for Zen Browser that allows you to organize the tab context menu by showing/hiding different sections according to your preferences.

## ✨ Features

### 🎯 Simple Organization
- **Conditional show/hide** of different context menu sections
- **Configurable preferences** via Zen Browser interface
- **Pure CSS approach** - No JavaScript required
- **Compatible** with all Zen themes

### 📋 Configurable Sections

The mod allows you to control the visibility of these sections:

1. **Tab movement options**:
   - Move to start
   - Move to end
   - Move to new window

2. **Workspace options**:
   - Move to another workspace

3. **Device options**:
   - Send tab to another device

4. **Container options**:
   - Open in new container tab

5. **Visual separators** (optional):
   - Separation lines between sections

## 🔧 Installation

1. Copy the content of `style.css` into your `chrome/userChrome.css` file
2. Restart Zen Browser
3. Configure preferences according to your needs (optional)

## ⚙️ Configuration

### Available Preferences

| Preference | Description | Default |
|-----------|-------------|---------|
| `mod.tab_context_organizer.enabled` | Enable the mod | `true` |
| `mod.tab_context_organizer.show_tab_movement` | Show tab movement options | `true` |
| `mod.tab_context_organizer.show_workspace` | Show workspace options | `true` |
| `mod.tab_context_organizer.show_device` | Show device options | `true` |
| `mod.tab_context_organizer.show_container` | Show container options | `true` |
| `mod.tab_context_organizer.show_separators` | Show visual separators | `false` |

### Configuration via Zen Browser

1. Open Zen Browser settings
2. Go to the "Mods" section
3. Find "Tab Context Menu Organizer"
4. Adjust options according to your preferences

### Configuration via about:config

You can also directly modify preferences in `about:config` by searching for `mod.tab_context_organizer`.

## 🎨 Customization

The mod uses modern CSS functions to automatically adapt to themes:

- **Automatic adaptation** to light/dark themes
- **Colored separators** that harmonize with your theme
- **Compatible** with accessibility preferences

## 🛠️ File Structure

```
tab-context-organizer/
├── style.css              # Main CSS styles
├── preferences.json       # Preferences configuration
├── mod.json              # Mod metadata
└── README.md             # This documentation
```

## 🔧 Troubleshooting

### The mod doesn't work
1. Check that `userChrome.css` is enabled in Zen
2. Confirm the file is in the correct `chrome/` folder
3. Restart Zen Browser completely

### Some options don't appear
1. Check the mod preferences
2. Some options may not be available depending on your configuration

### Conflict with other mods
- This mod only uses conditional `display: none`
- Minimal conflict risk with other mods

## 💡 Use Cases

### Minimalist
- Disable all options except those you actually use
- Keep only "Close tab" and your favorite actions

### Power User
- Enable all options according to your needs
- Use visual separators for better organization

### Specific Workflow
- Enable only containers if you use them
- Hide device options if you don't sync

## 📊 Compatibility

- **Zen Browser**: ≥ 1.15.0
- **Firefox**: ≥ 120.0 (Zen base)
- **Themes**: Compatible with all themes
- **JavaScript**: None required

## 📄 License

AGPL-3.0-or-later
