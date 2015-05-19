# WLPN 105.5 FM - Lumpen Radio Chicago

The Lumpen Radio App is here. Almost...

![App screenshot.](https://github.com/vhs/react-native-es6-reflux/blob/master/screenshot.png)

## Features

- Streams Lumpen Radio over HTTP
- Shows connection status in app
- Alerts when not connected to Wi-Fi
- Plays video loop in background

## Todo

- [ ] Add background playback support
- [x] Show progress for initial connection
- [ ] Indicate progress for long-running ops
- [ ] Allow audio disruption for calls, etc.
- [ ] Provide on-air off-air user feedback
- [x] Automatically reconnect if disconnected
- [ ] Icon long-press resets HTTP connection

## Getting started

1. Clone this project
2. Install dependencies:

    ```sh
    npm install
    ```

3. Run `npm start` to start the Webpack watcher and the React Packager.
   **Note:** The Webpack watcher builds the `index.ios.js` file expected by React Native.
4. Open `ReactNativeEs6Reflux.xcodeproj` in XCode and run the project.
