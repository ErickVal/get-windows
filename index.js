import process from 'node:process';

export async function activeWindow(options) {
  if (process.platform === 'darwin') {
    const { activeWindow } = await import('./lib/macos.js');
    return activeWindow(options);
  }

  if (process.platform === 'linux') {
    const { activeWindow } = await import('./lib/linux.js');
    return activeWindow(options);
  }

  if (process.platform === 'win32') {
    const { activeWindow } = await import('./lib/windows.js');
    return activeWindow(options);
  }

  throw new Error('macOS, Linux, and Windows only');
}

// export function activeWindowSync(options) {
//   if (process.platform === 'darwin') {
//     const { activeWindowSync } = require('./lib/macos.js');
//     return activeWindowSync(options);
//   }

//   if (process.platform === 'linux') {
//     const { activeWindowSync } = require('./lib/linux.js');
//     return activeWindowSync(options);
//   }

//   if (process.platform === 'win32') {
//     const { activeWindowSync } = require('./lib/windows.js');
//     return activeWindowSync(options);
//   }

//   throw new Error('macOS, Linux, and Windows only');
// }

export async function openWindows(options) {
  if (process.platform === 'darwin') {
    const { openWindows } = await import('./lib/macos.js');
    return openWindows(options);
  }

  if (process.platform === 'linux') {
    const { openWindows } = await import('./lib/linux.js');
    return openWindows(options);
  }

  if (process.platform === 'win32') {
    const { openWindows } = await import('./lib/windows.js');
    return openWindows(options);
  }

  throw new Error('macOS, Linux, and Windows only');
}

// export function openWindowsSync(options) {
//   if (process.platform === 'darwin') {
//     const { openWindowsSync } = require('./lib/macos.js');
//     return openWindowsSync(options);
//   }

//   if (process.platform === 'linux') {
//     const { openWindowsSync } = require('./lib/linux.js');
//     return openWindowsSync(options);
//   }

//   if (process.platform === 'win32') {
//     const { openWindowsSync } = require('./lib/windows.js');
//     return openWindowsSync(options);
//   }

//   throw new Error('macOS, Linux, and Windows only');
// }

// Note to self: The `main` field in package.json is requried for pre-gyp.
