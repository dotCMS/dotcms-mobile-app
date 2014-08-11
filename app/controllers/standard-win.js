// Sending the main container to the slide menu widget
$.slideMenu.setMainContainer($.standardView);

$.setMainContent = function(contentView) {
    $.standardView.add(contentView);
};

$.setHeaderButtons = function(button) {
    $.header.setButtons(button);
};

function slideNav() {
    $.slideMenu.toggleMenu();
}

// Show the back button only when is more than one window opened
if (Alloy.Globals.navcontroller.windowsInfo().stackLength > 0) {
    $.header.showBackButton();
}

Ti.App.addEventListener('showLoading', function() {
    $.loaderIndicator.show();
    $.loaderView.visible = true;
    var a = Titanium.UI.createAnimation({
        opacity: 1,
        duration: 200
    });
    $.loaderView.animate(a, function() {
        $.loaderView.opacity = 1;
    });
});

Ti.App.addEventListener('hideLoading', function() {
    $.loaderIndicator.hide();
    $.loaderView.visible = false;

    var a = Titanium.UI.createAnimation({
        opacity: 0,
        duration: 200
    });
    $.loaderView.animate(a, function() {
        $.loaderView.opacity = 0;
    });
});

