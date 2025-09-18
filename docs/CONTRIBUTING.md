# Contributing to Zen Mods

Thank you for your interest in contributing to Zen Mods! This guide will help you get started and understand our development process.

## Table of Contents

- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Adding a New Mod](#adding-a-new-mod)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Deployment](#deployment)

## Development Environment

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0
- **Git**
- **Zen Browser** (for testing mods)

### Installation

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/zen-mods.git
   cd zen-mods
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install Git hooks:
   ```bash
   npx husky install
   ```

## 📜 Code of Conduct

By participating in this project, you agree to respect our code of conduct based on:

- **Respect**: Treat all participants with respect and courtesy
- **Inclusivity**: Create a welcoming environment for everyone
- **Collaboration**: Work together constructively
- **Quality**: Maintain high standards of code and documentation

## 🚀 How to Contribute

### 1. Setup

```bash
# Fork the project on GitHub
# Then clone your fork
git clone https://github.com/YOUR-USERNAME/zen-mods.git
cd zen-mods

# Add the original repository as upstream remote
git remote add upstream https://github.com/username/zen-mods.git

# Install dependencies
npm install
```

### 2. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b type/short-description

# Examples:
git checkout -b feat/tab-grouping-mod
git checkout -b fix/context-menu-icons
git checkout -b docs/installation-guide
```

### 3. Development

- Respect the existing project structure
- Follow naming conventions
- Write readable and well-commented code
- Test your changes

### 4. Commit and Push

```bash
# Add modified files
git add .

# Commit with a descriptive message
git commit -m "feat: add tab grouping mod"

# Push to your fork
git push origin feat/tab-grouping-mod
```

### 5. Pull Request

1. Go to GitHub and create a Pull Request
2. Use the provided template
3. Clearly describe your changes
4. Link related issues if applicable

## 📏 Development Standards

### Commit Convention

Use the [Conventional Commits](https://www.conventionalcommits.org/) convention:

```
type(scope): description

type: feat, fix, docs, style, refactor, test, chore
scope: mod or component name (optional)
```

**Examples**:

- `feat(tab-organizer): add container support`
- `fix: correct icon display in dark mode`
- `docs: update installation guide`
- `style: improve CSS formatting`

### Mod Structure

```
mods/mod-name/
├── mod.json              # Required metadata
├── userChrome.css        # CSS styles
├── script.js            # JavaScript (optional)
├── README.md            # Documentation
├── assets/              # Resources (images, etc.)
└── tests/              # Tests (if applicable)
```

### mod.json

Required structure:

```json
{
  "name": "mod-name",
  "displayName": "Display Name",
  "version": "1.0.0",
  "description": "Short mod description",
  "author": "Your Name",
  "license": "MIT",
  "type": "userChrome",
  "compatibility": {
    "zen": ">=1.0.0",
    "firefox": ">=115.0"
  },
  "features": ["List of features"],
  "tags": ["tag1", "tag2"]
}
```

### CSS Guidelines

```css
/* Use specific selectors to avoid conflicts */
#zenModSpecificSelector {
  /* Your styles */
}

/* Use CSS variables for consistency */
:root {
  --zen-mod-primary-color: #007acc;
  --zen-mod-secondary-color: #005a9e;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --zen-mod-primary-color: #4da6ff;
}

/* Comments to explain complex sections */
/* ========================================
   Section Title
   ======================================== */
```

### JavaScript Guidelines

```javascript
// Use IIFE to avoid global pollution
(() => {
  'use strict';

  // Configuration at the beginning
  const CONFIG = {
    MOD_NAME: 'my-mod',
    VERSION: '1.0.0',
  };

  // Function documentation
  /**
   * Function description
   * @param {string} param - Parameter description
   * @returns {boolean} Return description
   */
  function myFunction(param) {
    // Implementation
  }

  // Error handling
  try {
    // Main code
  } catch (error) {
    console.error(`[${CONFIG.MOD_NAME}] Error:`, error);
  }
})();
```

## 🔍 Review Process

### Review Criteria

1. **Functionality**: Does the code do what it's supposed to do?
2. **Quality**: Is the code readable and maintainable?
3. **Performance**: Is there a negative impact on performance?
4. **Compatibility**: Does it work with different versions?
5. **Documentation**: Is the documentation complete and clear?

### Pre-submission Checklist

- [ ] Code follows project standards
- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Formatting is correct (`npm run format:check`)
- [ ] Documentation is up to date
- [ ] Mod has been tested in Zen
- [ ] Screenshots are included if relevant

## 🎯 Types of Contributions

### 🆕 New Mods

1. **Propose** an issue first to discuss the idea
2. **Check** that a similar mod doesn't already exist
3. **Develop** according to project standards
4. **Test** thoroughly
5. **Document** completely

### 🐛 Bug Fixes

1. **Create** an issue describing the bug if it doesn't exist
2. **Reproduce** the problem
3. **Fix** while minimizing changes
4. **Test** the correction
5. **Update** tests if necessary

### 📚 Documentation Improvements

1. **Identify** sections to improve
2. **Write** clearly and concisely
3. **Include** examples when appropriate
4. **Check** spelling and grammar

### 🎨 UI/UX Improvements

1. **Document** the user experience problem
2. **Propose** a solution with mockups if possible
3. **Implement** responsively
4. **Test** on different configurations

## 🏷️ Labels and Issues

### Issue Types

- `bug`: Problem to fix
- `feature`: New functionality
- `enhancement`: Improvement of existing
- `documentation`: Related to documentation
- `good first issue`: Good for beginners
- `help wanted`: Help sought

### Priorities

- `priority: high`: Urgent
- `priority: medium`: Important
- `priority: low`: Can wait

## 🆘 Need Help?

- **Issues**: To report bugs and propose features
- **Discussions**: For general questions and ideas
- **Discord/Chat**: (if configured) For real-time help

## 🎉 Acknowledgments

Your contribution is valuable! All contributors are recognized in our acknowledgments section.

---

**Thank you for making Zen Browser even better! 🚀**
