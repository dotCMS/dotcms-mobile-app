// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Menu options
// The id is the name of the controller
Alloy.Globals.menuOptions = [
    {
        first: true,
        id: 'home',
        title: 'Home'
    },
    {
        id: 'option-one',
        title: 'Option one'
    }
];


// Creating NavigationController as a global object
var NavigationController = require('NavigationController'); // use the NavigationController library
var navController = new NavigationController();
Alloy.Globals.navcontroller = navController;


// Utils
Alloy.Globals.screenWidth = Ti.Platform.osname == 'android' ? Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160) : Ti.Platform.displayCaps.platformWidth
Alloy.Globals.isAndroid = Ti.Platform.osname == 'android';
