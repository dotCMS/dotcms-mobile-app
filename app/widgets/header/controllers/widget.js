var fireToggleEvent = function() {
    Ti.App.fireEvent('toggleSlide');
}

$.toggleMenu.addEventListener('singletap', fireToggleEvent);

$.logo.addEventListener('singletap', function() {
    Ti.App.fireEvent('goToHome');
});

$.backMenu.addEventListener('singletap', function() {
    Alloy.Globals.navcontroller.close();
});

$.showBackButton = function() {
    $.backMenu.visible = true;
}