# WLPN 105.5 FM Lumpen Radio Chicago

[![Stack Share](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/vhs/lumpen-radio)
[![Dependency Status](https://david-dm.org/vhs/lumpen-radio.svg)](https://david-dm.org/vhs/lumpen-radio)
[![devDependency Status](https://david-dm.org/vhs/lumpen-radio/dev-status.svg)](https://david-dm.org/vhs/lumpen-radio#info=devDependencies)
[![Tips](https://img.shields.io/gratipay/vhs.svg)](https://gratipay.com/vhs)

Never listen to a radio commercial again. The free [Lumpen Radio app](https://appsto.re/us/NdeV7.i) is here!

![WLPN neon artowrk](https://github.com/vhs/lumpen-radio/blob/master/photo-original.jpg)

## Features

- Streams WLPN-LP 105.5 FM Lumpen Radio Chicago
- Gorgeous video loop with AirPlay support
- Intelligent handling of common audio interruptions
- Detailed connection status and play state messaging
- Translations for English, Spanish, German and Chinese
- Remote control via Bluetooth and compatible headset
- Supports iPad and iPhone with iOS 8+

## Usage

- Tapping radio button starts and stops the audio
- Long-pressing the radio button restarts the audio
- If the app crashes for any reason please close and reopen it

## Getting started

1. Clone this project.
2. Install dependencies.

    ```sh
    pod install
    npm install
    ```

    **Note:** If, no when, you run into problems with the Pod installation please review [CocoaPods Troubleshooting](https://guides.cocoapods.org/using/troubleshooting.html) and pay special attetion to any error messages received during the Pod installation.

3. Run `npm start` to start the Webpack watcher, Webpack Dev Server and the React Packager in a single shot.

   **Note:** The Webpack watcher builds the `index.[platform].js` file expected by React Native.

4. Open `WLPN.xcworkspace` in XCode and run the project.

## Bundling for distribution

1. Run `npm run bundle` to generate a bundled version of your JS.
2. Update `AppDelegate.m` to load from pre-bundled file on disk.
3. Test the application and then submit it to the store.

Learn more about [Submitting to App Store](https://vhs.codeberg.page/reflecting-on-react-native-development/#submitting-to-app-store).

## Digging in

To learn more about React Native and how this app is built check out [the slides](https://slides.com/vhs/streaming-audio-react-native/) originating from [my talk](https://www.meetup.com/React-Chicago/events/222510246/) on <time datetime="2015-06-30 18:00">30 Jun 2015</time>. Additional materials will become available following a [free Webcast](https://www.oreilly.com/pub/e/3483) offered in partnership with O'Reilly Media (scheduled <time datetime="2015-08-27 18:00">27 Aug 2015</time>).

## File Structure

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

## Todo

- [x] Add background playback support
- [x] Show progress for initial connection
- [x] Indicate progress for long-running ops
- [x] Allow audio disruption for calls, etc.
- [x] Automatically reconnect if disconnected
- [x] Icon long-press restarts stream
- [x] Support Control Center / Remote Control events (thanks to Wayne Wright for the suggestion)
- [ ] Integrate push notifications

# Ideas

- [ ] Long-pauses restart stream
- [ ] Add now playing metadata (if available)
- [ ] Provide on-air/off-air indication

## Known issues

- [x] [Background video delays device wake then turns black](https://github.com/brentvatne/react-native-video/issues/44).
- [x] Audio stream does not automatically restart after some device interruptions (e.g. incoming call sent to voice mail)
- [ ] Audio buffer out after 20 seconds of interrupted call time followed by 20 seconds of play
- [ ] Play button does not function when disconnected from the Internet
- [ ] App appears to buffer indefinitely if playing and Internet connection restarted
- [x] Launch screen skews on iPad

## Credits

Developed for Public Media Institute by VHS.

Artwork by [Jermiah Chiu](https://weareplural.com/).
App interface and icon by [VHS](https://vhs.codeberg.page).

Turntable loop video by [Scott Schiller](https://www.scottschiller.com/), BSD.

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
