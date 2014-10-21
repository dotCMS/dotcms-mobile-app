#dotCMS Stater App
Build with [Appcelerator Titanium](http://google.com) a development environment thats allows build, test, package and publish mobile apps for iOS, Android, Blackerry and other SO's using only JavaScript and a single code base.

## DotCMS Backend
```
http://demo30.dotcms.com/c
Username: admin@dotcms.com
Password: admin
```
### Load and save content with dotCMS content api:
* http://dotcms.com/docs/latest/ContentAPI
* http://dotcms.com/docs/latest/RESTSaveContent

-------------

## How to run locally?
### Install Xcode an Titanium?
1. Download and install xCode from the AppStore.
2. [Download](http://www.appcelerator.com/titanium/download-titanium/) and [install](http://docs.appcelerator.com/titanium/3.0/#!/guide/Quick_Start-section-37538717_QuickStart-DownloadandInstallTitaniumStudio) Titanium. Make sure you do all the extra install (node, titanium cli, alloy, etc) when you open Titanium for the first time.
3. For Android download and install [genymotion simularor](http://www.genymotion.com/) way faster that the regular one. More info at: https://wiki.appcelerator.org/display/guides2/Installing+Genymotion

### After all the installs are done

```
git clone https://github.com/dotCMS/dotcms-mobile-app.git
npm install
```

### Run the project in the simulators:
1. You can use Titanium Studio
2. Or you can use Titanium Command Line Interface:

```
titanium build --platform <platform> [--build-only] [--force] [--project-dir <value>] [--sdk <value>] [--log-level <level>] [ <platform_build_options> ]
```

More info at: [Titanium Comand Line Interface Documentation](http://docs.appcelerator.com/titanium/3.0/#!/guide/Titanium_Command-Line_Interface_Reference-section-35619828_TitaniumCommand-LineInterfaceReference-Build)

### Grunt tasks
Build and upload to Testflight:
```
grunt tf
```

Build the iOS .ipa
```
grunt ios
```

Build the Android .apk
```
grunt android
```

Build the iOS .ipa and Android .apk
```
grunt build
```

All the build files are saved in /dist/ folder.

-------

### TODO:
1. Create a grunt task for run project Android and iOS simulators
2. iPad version maybe?
3. Add share for Android
4. Clean a few things that may be causing some memory leaks according to a new article I read.
