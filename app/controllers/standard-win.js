// Sending the main container to the slide menu widget
$.slideMenu.setMainContainer($.standardScrollView);

$.setMainContent = function(contentView) {
    $.standardScrollView.add(contentView);
}

function slideNav() {
    $.slideMenu.toggleMenu();
}

// Show the back button only when is more than one window opened
if (Alloy.Globals.navcontroller.windowsInfo().stackLength > 0) {
    $.header.showBackButton();
}

