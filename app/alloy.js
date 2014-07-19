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

//Dotcms env
Alloy.Globals.dotcms = {
    url: 'http://demo.dotcms.com',
    hostId: '48190c8c-42c4-46af-8d1a-0cd5db894797',
}

// Menu options
// The id is the name of the controller
Alloy.Globals.menuOptions = [
    {
        first: true,
        id: 'home',
        title: 'Home'
    },
    {
        id: 'about-us',
        title: 'About Us'
    },
    {
        id: 'our-team',
        title: 'Our Team'
    },
    {
        id: 'products',
        title: 'Products'
    },
    {
        id: 'news',
        title: 'News'
    },
    {
        id: 'events',
        title: 'Events'
    },
    {
        id: 'contact-us',
        title: 'Contact Us'
    }
];

// Creating NavigationController as a global object
var NavigationController = require('NavigationController'); // use the NavigationController library
var navController = new NavigationController();
Alloy.Globals.navcontroller = navController;

// Opening new windows
Alloy.Globals.openWindow = function(option) {
    var standardWin = Alloy.createController('standard-win');
    var standardWinView = standardWin.getView();
    standardWinView.title = option.title;
    Alloy.Globals.navcontroller.open(standardWinView);

    // Setting the content into the just opened window
    var homeContent = Alloy.createController(option.id, option);
    standardWin.setMainContent(homeContent.getView());
}


// Utils
Alloy.Globals.screenWidth = Ti.Platform.osname == 'android' ? Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160) : Ti.Platform.displayCaps.platformWidth
Alloy.Globals.isAndroid = Ti.Platform.osname == 'android';

// Colors
Alloy.Globals.colors = {
    blue: '#26333F',
    blueLight: '#9FC5E2',
    blueLightest: '#ECF3F9',
    green: '#7ED321',
    red: '#D0021B',
    white: 'white',
    gray: '89939C'
}
Alloy.Globals.colors.slideMenuBg = Alloy.Globals.colors.blue;
Alloy.Globals.colors.headerBg = Alloy.Globals.colors.blue;

// Fonts
var buildFonts = function () {
    var fonts = {
        primary: 'Kameron',
        secondary: 'Oxygen'
    };

    var weights = {
        primary: {
            regular: '-Regular',
            bold: '-Bold',
        },
        secondary: {
            regular: '',
            bold: '-Bold',
            bolditalic: '-BoldItalic',
            italic: '-Italic',
        }
    };

    var sizes = {
        header1: 26,
        header2: 24,
        header3: 22,
        header4: 20,
        header5: 18,
        body1: 16,
        body2: 14,
        mouse: 12
    };

    _.each(_.keys(fonts), function (levelName) {
        var font = fonts[levelName];
        fonts[levelName] = {};
        _.each(_.keys(sizes), function (sizeName) {
            var size = sizes[sizeName];
            fonts[levelName][sizeName] = {};
            _.each(_.keys(weights[levelName]), function (weightName) {
                var weight = weights[levelName][weightName];
                fonts[levelName][sizeName][weightName] = {
                    fontFamily: font + weight,
                    fontSize: size
                };
            });
        });
    });
    return fonts;
}

Alloy.Globals.fonts = buildFonts();
