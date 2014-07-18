// Sending the main container to the slide menu widget
$.slideMenu.setMainContainer($.standardScrollView);

$.setMainContent = function(contentView) {
    $.standardScrollView.add(contentView);
}

function slideNav() {
    $.slideMenu.toggleMenu();
}