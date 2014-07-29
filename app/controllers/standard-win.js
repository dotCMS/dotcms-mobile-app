// Sending the main container to the slide menu widget
$.slideMenu.setMainContainer($.standardView);

$.setMainContent = function(contentView) {
    $.standardView.add(contentView);
}

$.setHeaderButtons = function(button) {
    $.header.setButtons(button);
}

function slideNav() {
    $.slideMenu.toggleMenu();
}

// Show the back button only when is more than one window opened
if (Alloy.Globals.navcontroller.windowsInfo().stackLength > 0) {
    $.header.showBackButton();
}


