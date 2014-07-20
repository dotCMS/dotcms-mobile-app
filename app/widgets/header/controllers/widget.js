$.toggleMenu.addEventListener('singletap', function() {
    Ti.App.fireEvent('toggleSlide');
});

$.logo.addEventListener('singletap', function() {
    Ti.App.fireEvent('goToHome');
});

$.backMenu.addEventListener('singletap', function() {
    Alloy.Globals.navcontroller.close();
});

$.showBackButton = function() {
    $.backMenu.visible = true;
}