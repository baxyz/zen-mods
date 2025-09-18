# Zen Mods 🚀

A collection of mods for Zen browser aimed at enhancing user experience by customizing and simplifying the interface.

[![CI/CD](https://github.com/username/zen-mods/workflows/CI/CD/badge.svg)](https://github.com/username/zen-mods/actions)
[![Code Quality](https://github.com/username/zen-mods/workflows/Code%20Quality/badge.svg)](https://github.com/username/zen-mods/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

- [Overview](#overview)
- [Available Mods](#available-mods)
- [Installation](#installation)
- [Development](#development)
- [Contributing](#contributing)
- [Support](#support)

## 🎯 Overview

This project contains a collection of carefully designed mods for Zen browser. Each mod is developed to solve specific usability issues while maintaining compatibility and performance.

### Key Features

- 🎨 **Enhanced Interface**: Menu simplification and reorganization
- 🔧 **Easy to Install**: Clear instructions and ready-to-use files
- 🚀 **Performance**: Optimized code with no speed impact
- 🌓 **Themes**: Full support for dark and light themes
- 📱 **Responsive**: Adaptation to different screen sizes

## 📦 Available Mods

### 1. Tab Context Menu Organizer

**Version**: 1.0.0 | **Status**: ✅ Stable

Reorganizes the tab context menu by grouping all tab movement options into a dedicated submenu.

**Features**:

- Groups tab movement options (start, end, new window)
- Includes workspace and container options
- Integrates sending to other devices
- Cleaner and more organized interface

[📖 Detailed Documentation](./mods/tab-context-organizer/README.md)

---

_More mods will be added soon..._

## 🚀 Installation

### Quick Installation

1. **Download** the latest release from the [releases page](https://github.com/username/zen-mods/releases)
2. **Extract** the archive
3. **Choose** the mods you want to install
4. **Follow** the specific instructions for each mod

### Installation from Source Code

```bash
# Clone the repository
git clone https://github.com/username/zen-mods.git
cd zen-mods

# Install dependencies
npm install

# Build all mods
npm run build

# Built mods are located in ./dist/
```

### Zen Browser Configuration

For the mods to work, you need to:

1. **Enable userChrome.css** in Zen:
   - Go to `about:config`
   - Search for `toolkit.legacyUserProfileCustomizations.stylesheets`
   - Set to `true`

2. **Locate your profile**:
   - Go to `about:support`
   - Click "Open Folder" next to "Profile Folder"

3. **Create the chrome folder** (if it doesn't exist):
   ```
   profile-folder/
   └── chrome/
       ├── userChrome.css
       └── (other mod files)
   ```

## 🛠️ Development

### Prerequisites

- Node.js ≥ 18.0.0
- npm ≥ 9.0.0
- Git

### Environment Setup

```bash
# Clone and install
git clone https://github.com/username/zen-mods.git
cd zen-mods
npm install

# Install Git hooks
npm run prepare

# Run in development mode
npm run dev
```

### Project Structure

```
zen-mods/
├── mods/                    # Mods folder
│   └── mod-name/
│       ├── mod.json        # Mod metadata
│       ├── userChrome.css  # CSS styles
│       ├── script.js       # JavaScript (optional)
│       └── README.md       # Documentation
├── scripts/                # Build scripts
├── docs/                   # Documentation
├── .github/                # CI/CD workflows
└── dist/                   # Built mods
```

### Creating a New Mod

1. **Create the folder**:

   ```bash
   mkdir mods/my-new-mod
   ```

2. **Create mod.json**:

   ```json
   {
     "name": "my-new-mod",
     "displayName": "My New Mod",
     "version": "1.0.0",
     "description": "Mod description",
     "author": "Your Name"
   }
   ```

3. **Develop** the mod (CSS, JS)
4. **Test** with `npm run build`
5. **Document** in README.md

### Available Scripts

```bash
npm run build          # Build all mods
npm run dev           # Development mode with watch
npm run test          # Run tests
npm run lint          # Check code
npm run lint:fix      # Fix automatically
npm run format        # Format code
npm run format:check  # Check formatting
```

## 🤝 Contributing

Contributions are welcome! Check out our [Contributing Guide](./docs/CONTRIBUTING.md) to get started.

### Contributing Process

1. **Fork** the project
2. **Create** a branch for your feature (`git checkout -b feature/my-feature`)
3. **Commit** your changes (`git commit -m 'feat: add my feature'`)
4. **Push** to the branch (`git push origin feature/my-feature`)
5. **Open** a Pull Request

### Code Standards

- **ESLint**: Follow the ESLint configuration
- **Prettier**: Code automatically formatted
- **Tests**: Include tests if applicable
- **Documentation**: Document new features

## 📄 License

This project is under MIT license. See the [LICENSE](LICENSE) file for more details.

## 🆘 Support

- **Issues**: [Open an issue](https://github.com/username/zen-mods/issues)
- **Discussions**: [GitHub Discussions](https://github.com/username/zen-mods/discussions)
- **Email**: support@zen-mods.dev (if configured)

## 🙏 Acknowledgments

- **Zen Browser Team**: For this fantastic browser
- **Mozilla Community**: For the tools and documentation
- **Contributors**: Thanks to everyone who improves this project

---

**⭐ If you like this project, feel free to give it a star!**
