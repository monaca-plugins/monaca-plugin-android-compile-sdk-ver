/**
 * Copyright (c) 2022 Asial Corporation. All rights reserved.
 */
 module.exports = function(context) {

  if (context.opts.platforms.indexOf("android") == -1) {
    console.log("replaceCompileSdkVersion: no android");
    return;
  }

  var path = require('path');
  var fse = require('fs-extra');
  var root = context.opts.projectRoot;

  // get compileSdkVersion value
  var ConfigParser = context.requireCordovaModule('cordova-common').ConfigParser;
  var cfg = new ConfigParser("config.xml");
  var compileSdkVersion = cfg.getPreference("COMPILE_SDK_VERSION", "android");
  if (!compileSdkVersion) {
    console.log("replaceCompileSdkVersion: compileSDKVersion not replaced because COMPILE_SDK_VERSION is not defined.");
    return;
  }

  try {
    var settingsFile = path.resolve(root,"platforms","android","app", "build.gradle");
    var settings = fse.readFileSync( settingsFile , { encoding: 'utf-8' } );
    // replace compileSdkVersion cordovaConfig.SDK_VERSION => other version
    settings = settings.replace(/(compileSdkVersion\s)(cordovaConfig.SDK_VERSION)/,"$1" + compileSdkVersion);

    fse.writeFileSync( settingsFile , settings , { encoding: 'utf-8' } );
  } catch (e) {
    console.log("replaceCompileSdkVersion: skip compileSdkVersion settings for build.gradle");
  }
};
