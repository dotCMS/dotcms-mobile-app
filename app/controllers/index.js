// Opening the first window and controller
Alloy.Globals.openWindow(Alloy.Globals.menuOptions[0]);

// From the slide-menu widget trigger this event to open every menu section
Ti.App.addEventListener('openSection', function(option) {
Ti.App.fireEvent('toggleSlide'); // this one is to close the slide menu
    if (option.first) {
        Alloy.Globals.navcontroller.home();
    } else {
        Alloy.Globals.openWindow(option);
    }
});

Ti.App.addEventListener('goToHome', function() {
    Alloy.Globals.navcontroller.home();
});

