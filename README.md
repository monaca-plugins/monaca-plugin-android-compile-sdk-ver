# Android Compile SDK Version Setting Plugin for monaca

The plugin sets the compile SDK version for `build.gradle` when building Android apps.

By default, the compile SDK version is set to the same value as the target SDK version.
This plugin allows you to set the compile SDK version to a different value than the target SDK version.

> Compile SDK version value should be set to the target SDK version value or above.
> `compileSdkVersion >= targetSdkVersion`

## Supported Platforms

- cordova-android@10.0.0 or later

## Setting the Compile SDK Version

The `COMPILE_SDK_VERSION` value can be set in one of the following ways.

- Use with Cordova CLI

Set the `COMPILE_SDK_VERSION` value by `--variable` option.

```
cordova plugin add @monaca/monaca-plugin-android-compile-sdk-ver --variable COMPILE_SDK_VERSION=31
```

- Configure by `preference`

1. Open `config.xml` at project root directory.
2. Set the `COMPILE_SDK_VERSION` value as follows

```
  <preference name="COMPILE_SDK_VERSION" value="31"/>
```

## License

see [LICENSE](./LICENSE)
