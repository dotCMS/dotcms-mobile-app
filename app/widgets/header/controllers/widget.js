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

$.setButtons = function(button) {
    $.righButton.backgroundImage = '/images/icn-header-' + button.icon + '.png';
    $.righButton.visible = true;

    $.righButton.addEventListener('singletap', function() {
        openController(button);
    });
}

var openController = function(button) {
    Alloy.Globals.openWindow({
        id: button.id,
        title: button.title
    });
}