// Jest setup file
// Add any global test setup here

// Mock browser APIs that might be used in mods
global.chrome = {
  storage: {
    local: {
      get: jest.fn(),
      set: jest.fn(),
    },
  },
};

// Mock XUL elements for Firefox/Zen
global.document.createXULElement = jest.fn(() => {
  const element = document.createElement('div');
  element.setAttribute = jest.fn();
  return element;
});
