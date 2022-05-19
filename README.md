# Android コンパイルSDKバージョン設定

Androidアプリにおいて、`build.gradle`のコンパイルSDKバージョン(`compileSDKVersion`)を設定するプラグインです。

デフォルトではコンパイルSDKバージョンはターゲットSDKバージョンと同じ値に設定されます。
このプラグインを使用することで、コンパイルSDKバージョンをターゲットSDKバージョンと別の値に設定することができます。

::: warn
コンパイルSDKバージョンの値はターゲットSDKバージョン以上に設定する必要があります。
`compileSdkVersion >= targetSdkVersion`
:::

## サポート対象のプラットフォーム

- Android
- Cordova 10 以降

## プラグインの追加方法(Monaca上での操作)

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、
`CompileSdkVersion` プラグインを[有効](https://ja.docs.monaca.io/products_guide/monaca_ide/dependencies/cordova_plugin#cordova-puraguin-noinpto)にします。

## コンパイルSDKバージョンの設定

1. プロジェクトを開き、`config.xml`を開きます。
2. 以下のように、`COMPILE_SDK_VERSION`の値を設定します。
```
  <platform name="android">
    <preference name="COMPILE_SDK_VERSION" value="31"/>
  </platform>
```
