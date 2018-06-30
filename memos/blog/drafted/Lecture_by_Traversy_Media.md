# Lecture by Traversy Media

https://www.youtube.com/watch?v=mkualZPRZCs


## What This Guide Covers
- What is React Native ?
- React Native Installation & Setup
- Initializing & Running An App
- Creating Components
- Key React Native UI Features
- Key API Features
- Much More In The Full Course..

## What Is React Native ?
- Framework for building mobile apps using JS and the React library
- Build cross platform apps (Android / iOS)
- Uses almost all React.js concepts including components, state, props, lifecycles, etc

## Real Mobile Apps
- React Native apps are not hybrid apps
- Don't run in  WebView
- Uses the same fundamental building blocks as a native app built with Swift / Object-C / Java
- Better and faster than Cordova / PhoneGap / Ionic

## Advantages Of React Native
- Cross Platform
- Much Less Expensive
- Eaiser to Code
- Save Massive Amounts of Time
- Open Source

## UI Component Examples
- TextInput, Picker, Switch, Slider
- Touchable Elements
- ListView & ScrollView
- Alerts, Modals, ProgressBars
- StatusBar
- TabBarIOS
- ToolbarAndroid

## APIS for Device Interaction
- CameraRoll
- AsyncStorage
- Geolocation
- ImageEditor
- PushNotifications
- Vibration
- Share / Messages

## Development Environments & Specs
- Windows
  - Android Studio
  - Android SDK (6.0 Marshmallow)
  - Android AVD
- Mac
  - Xcode
  - Simulator

## Boilerplate 
```js
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class MyApp extends Component {
  rener() {
    return (
      <View>
        <Text>Hello world</Text>
      </Vidw>
    )
  }
}
AppRegistry.registerComponent('MyApp', () => MyApp)
```

## 
```bash
npm i -g react-native-cli yarn

react-native init my_first_app
```

