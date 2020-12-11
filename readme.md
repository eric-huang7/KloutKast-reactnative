# KloutKast

This is react native project.

## Getting Started

### Installing

#### Project Settings

1. Installing react native in project folder
```
yarn install
(If Yarn is not installed on your pc, you need to run `npm install -g yarn`.)
```

2. Replace the Text.js file of `/additional/` to `/node_modules/react-native/Libraries/Text/` folder.


#### iOS

3. Creating main.jsbundle file.
```
yarn build:ios 
```

4. Installing xcode cocoapods on ios folder
```
cd ios 
pod install
```

#### Android

5. Setting PATH for Android.
```
export ANDROID_SDK=<path to Android SDK directory>
export ANDROID_NDK=<path to Android NDK directory> 
export PATH=$PATH:$ANDROID_SDK/tools:$ANDROID_SDK/platform-tools:$ANDROID_NDK

export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
```

6. Clean before building files.
```
cd android
./gradlew clearCacheModules
```

7. Creating Apk file
```
cd android
./gradlew assembleRelease
```


# Example
```
export PATH=/Volumes/Data/Data/Android_SDK/platform-tools:$PATH
export PATH=/Volumes/Data/Data/Android_SDK/tools:$PATH
export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
```

# Create Key File
```
keytool -genkey -v -keystore finderscope.keystore -alias finderscope -keyalg RSA -keysize 2048 -validity 10000
keytool -importkeystore -srckeystore finderscope.keystore -destkeystore finderscope.keystore -deststoretype pkcs12
```

# Version Update
```
npm i -g npm-check-updates
ncu -u
npm install
```

Alert.alert((await result).message, "", 
  [ { text: "OK", onPress: () => goBack() }],
  { cancelable: false }
);