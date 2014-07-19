$.toggleMenu.addEventListener('singletap', function() {
    Ti.App.fireEvent('toggleSlide');
});

//$.logo.addEventListener('singletap', Alloy.Globals.navcontroller.home);
$.logo.addEventListener('singletap', function() {
    Ti.App.fireEvent('goToHome');
});