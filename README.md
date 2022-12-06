### Android
1. Run `yarn install`
2. Run `cd android`
3. Run `./gradlew clean`
4. Run `adb reverse tcp:8081 tcp:8081`
5. Run `yarn start` to start Metro server
6. In Android Studio, run `react-native run-android` with an Android device connect (and USB debugging enabled) or an Android simulator selected

### iOS
1. Run `yarn install`
2. Run `cd ios`
3. Run `pod install`
4. Run `yarn start` to start Metro server
5. In XCode, press play for a connected iPhone or iPhone simulator