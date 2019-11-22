# WLPN 105.5 FM Lumpen Radio Chicago

Never listen to a radio commercial again. The free [Lumpen Radio app](https://appsto.re/us/NedV7.i) is here!

![Lumpen Radio](https://codeberg.org/vhs/lumpen-radio/raw/branch/trunk/app-cover-fs8.png "Application simulated in iOS 13")

## About

- Built with [React Native](https://facebook.github.io/react-native/) and [Webpack](https://webpack.js.org/)
- Created using [React Native Webpack Starter Kit](https://vhs.codeberg.page/code/react-native-webpack-starter-kit)

## Features

- Streams any `audio/mpeg` stream listed in `Constants.h`
- Background audio playback and lock screen integration
- Gorgeous video loop with AirPlay support
- Intelligent handling of common audio interruptions
- Detailed connection status and play state messaging
- Translations for English, Spanish, Chinese, Korean and German
- Remote control via Bluetooth and compatible headset
- Supports iPad and iPhone with iOS 8+

## Usage

- Tapping radio button starts and stops the audio
- Long-pressing the radio button restarts the audio
- If the app crashes for any reason please close and reopen it

## Development

Looking to build your own React Native project with ES6/7? Check out my [React Native Starter Kit](https://github.com/vhs/react-native-webpack-starter-kit). Otherwise proceed enthusiastically.

1. Clone this project.
2. Install dependencies.

    ```sh
    npm install
    pod install
    ```

3. Run `npm start` to start the Webpack watcher, Webpack Dev Server and the React Packager in a single shot.

   **Note:** The Webpack watcher builds the `index.[platform].js` file expected by React Native.

4. Open `WLPN.xcworkspace` in XCode and run the project.

### Bundling for distribution

1. Execute `npm run bundle` to generate the [offline JS bundle](https://facebook.github.io/react-native/docs/running-on-device-ios.html#using-offline-bundle).
2. For iOS, update `AppDelegate.m` to load from pre-bundled file on disk.
3. Test the application, create an archive and submit to the store.

Learn more about [Submitting to App Store](https://vhs.codeberg.page/reflecting-on-react-native-development/#submitting-to-app-store).

### File structure

    ├── android                     # Source code for Android
    ├── iOS                         # Source code for iOS
    │   ├── Classes                 # Objective-C, Swift classes
    │   │   ├── AppDelegate         # Application initialization and React Native config
    │   │   ├── AudioManager        # Lib to access platform APIs and bridge to JS
    │   │   └── RootViewController  # RCTRootViewController override to manage Remote Control events
    │   ├── Images.xcassets         # Launch screens and native image assets
    │   ├── Resources               # Other native resources
    │   ├── Constants.h             # Native globals
    │   ├── Info.plist              # Project configuration
    │   ├── main.jsbundle           # React Native placeholder file
    │   └── main.m                  # Application entry point
    ├── src                         # Source code
    │   ├── assets                  # Static resources
    │   │   └── videos              # Video assets
    │   ├── components              # React Native Components
    │   ├── lib                     # JS libraries
    │   ├── stores                  # JS persistence with Flux
    │   ├── actions.es6             # Flux actions
    │   ├── main.es6                # JS application entry point
    │   └── styles.es6              # React Native Style Rules
    ├── .eslintrc                   # JS linter configuration
    ├── .flowconfig                 # Facebook flow config file
    ├── .gitignore                  # VCS blacklist
    ├── Podfile                     # CocoaPods dependency specs
    ├── Podfile.lock                # Native dependency lock file
    ├── WLPN-Bridging-Header.h      # Objective-C, Swift bridge support file
    ├── ignored-modules.js          # RegExp containing modules ignored by watcher
    ├── npm-shrinkwrap.js           # JS dependency lock file
    ├── package.json                # NPM dependency specs
    ├── webpack-watch.js            # Filesystem watcher for JS
    └── webpack-config.js           # WebPack configuration

### Resources

To learn more about React Native and how this app is built check out [the slides](https://slides.com/vhs/streaming-audio-react-native/) originating from [my talk](https://www.meetup.com/React-Chicago/events/222510246/) on <time datetime="2015-06-30 18:00">30 Jun 2015</time>. There's also a [free Webcast](https://www.oreilly.com/pub/e/3483) on app construction given for O'Reilly Media on <time datetime="2015-08-27 18:00">27 Aug 2015</time>.

## Todo

- [x] Add background playback support
- [x] Show progress for initial connection
- [x] Indicate progress for long-running ops
- [x] Allow audio disruption for calls, etc.
- [x] Automatically reconnect if disconnected
- [x] Icon long-press restarts stream
- [x] Support Control Center / Remote Control events (thanks to Wayne Wright for the suggestion)
- [ ] Add [Expo](https://expo.io/) and [TypeScript](https://www.typescriptlang.org/) support
- [ ] Reverse proxy audio using TLS with [Traefik](https://traefik.io/)

# Ideas

- [ ] Press-and-hold button open modal after 1st stream restart
- [ ] Long-pauses restart stream or select a back-up stream
- [ ] Add now playing metadata (if available) from stream `http` headers
- [ ] Provide on-air/off-air indication (stop animation if signal off-air)

## Known issues

- [x] [Background video delays device wake then turns black](https://github.com/brentvatne/react-native-video/issues/44).
- [x] Audio stream does not automatically restart after some device interruptions (e.g. incoming call sent to voice mail)
- [ ] Audio buffer out after 20 seconds of interrupted call time followed by 20 seconds of resumed play
- [ ] Play button does not function when disconnected from the Internet
- [ ] App appears to buffer indefinitely if playing and Internet connection restarted
- [x] Launch screen skews on iPad

## Credits

Designed and developed by VHS without fee for Public Media Institute.

Splash screen and vectors by [Jermiah Chiu](https://jeremiahchiu.com).<br>
App interface and icon by [VHS](https://vhs.codeberg.page).

Turntable loop video by [Scott Schiller](https://www.scottschiller.com/), BSD and used with permission.<br>
Inspired by [open source work](https://github.com/stetro/domradio-ios/) by Steffen Tröster.

Many thanks to [Public Media Institute](https://www.publicmediainstitute.com/), [Lumpen Radio](https://www.lumpenradio.com) and all the wonderful beta testers for helping make this happen. You are beautiful.

- Ed Marszewski
- Logan Bay
- Eric Olson
- Wayne Wright
- Elizabeth Rossman
- Joseph Alfallah
- Harrison Jones
- Nick Hausman
