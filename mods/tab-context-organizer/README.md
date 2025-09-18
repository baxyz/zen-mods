# Tab Context Menu Organizer

A mod for Zen browser that reorganizes the tab context menu by grouping all tab movement options into a dedicated submenu.

## Features

### 🎯 Menu Organization

- **Groups** all tab movement options into a "Move Tab" submenu
- **Simplifies** the interface by reducing the number of visible elements
- **Preserves** all existing functionality
- **Customizable** via Zen preferences

### 📋 Grouped Options

The "Move Tab" submenu contains:

- **Position movement**:
  - Move to beginning
  - Move to end
- **Move to new window**
- **Move to workspace**
- **Send to device** (configurable)
- **Open in tab container** (configurable)

### ⚙️ Configurable Preferences

- **Enable/Disable mod**: General mod control
- **Submenu label**: Customize the displayed name (e.g., "Move Tab", "Organize", etc.)
- **Include containers**: Show/hide container options
- **Include device sending**: Show/hide sending to other devices
- **Menu position**: Control where to place the submenu

## Installation

### Method 1: CSS only (Recommended)

1. Locate your Zen profile folder
2. Navigate to the `chrome/` folder (create it if it doesn't exist)
3. Copy the content of `userChrome.css` into your `userChrome.css` file
4. Restart Zen

### Method 2: With JavaScript (Advanced features)

1. Follow method 1 steps for CSS
2. Copy `tabContextOrganizer.js` into your `chrome/` folder
3. Add the script as a userscript or reference it in your configuration
4. Restart Zen

## File Structure

```
tab-context-organizer/
├── mod.json                    # Mod metadata
├── userChrome.css             # CSS styles for reorganization
├── tabContextOrganizer.js     # JavaScript script (optional)
├── preferences.json           # Preferences configuration
└── README.md                  # This file
```

## Configuration

### Preferences

The mod supports several preferences to customize the behavior:

#### Via Zen Browser Interface (Method 1)
1. Open Zen preferences
2. Go to "Mods" section
3. Find "Tab Context Organizer" 
4. Adjust the available options

#### Via about:config (Method 2)
Access `about:config` and modify:

- `zen.tabs.context.organizer.groupMovement`: Enable/disable movement options grouping (default: true)
- `zen.tabs.context.organizer.showSeparators`: Display separators between groups (default: true)  
- `zen.tabs.context.organizer.compactMode`: Use compact display mode (default: false)

### Customization

You can modify the CSS to adjust visual appearance:

```css
/* Modify separator color */
.tabContextOrganizer-separator {
  border-color: your-color !important;
}

/* Adjust grouping margins */  
.tabContextOrganizer-group {
  margin: your-margin !important;
}
```

## Compatibility

- **Zen Browser**: ≥ 1.0.0
- **Firefox**: ≥ 115.0 (Zen base)
- **Themes**: Compatible with dark and light themes

## Troubleshooting

### Submenu doesn't appear

1. Verify that `userChrome.css` is enabled in Zen
2. Confirm the file is in the correct `chrome/` folder
3. Completely restart Zen

### Some options are missing

1. Verify that all extensions are up to date
2. Some options may not be available depending on your configuration

### Conflict with other mods

1. Load this mod last
2. Check CSS selectors for conflicts
3. Use the `zenTabContextOrganizerCleanup()` function to temporarily disable

## Development

### Code Structure

- **CSS**: Styles to hide original elements and style the submenu
- **JavaScript**: Logic to dynamically create the submenu and move elements

### Testing

To test the mod:

1. Open multiple tabs
2. Right-click on a tab
3. Verify the presence of the "Move Tab" submenu
4. Test each submenu option

## Contributing

Contributions are welcome! See the main project's contribution guide.

## License

MIT - See the main project's LICENSE file.
