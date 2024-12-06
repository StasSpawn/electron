## Install
https://www.electronjs.org/docs/latest/tutorial/quick-start

```bash
npm install --save-dev electron
npm start
```

## Usage
* **Main** - APIs that are much closer to the OS (low-level). These include the file system, OS-based notification popups, taskbar, etc. These were made possible through the combination of Electron's core APIs and Node.js


* **Preload** - A somewhat recent addendum in order to prevent powerful APIs available in the main environment from leaking


* **Renderer** - APIs of a modern web browser such as DOM and front-end JavaScript (high-level). This was made possible through Chromium.

## Build
```bash
npm run make
```
Creates exe file in out folder
