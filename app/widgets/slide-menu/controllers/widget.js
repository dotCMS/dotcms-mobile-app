//TODO: add drag-swipe action to the menu;

$.args = arguments[0] || {};
var slideMenuwidth = $.args.width || 200;
var duration = $.args.duration || 200;
var mainContainer;
var menuRows = [];

$.slideMenu.width = slideMenuwidth;
$.slideMenu.left = -(slideMenuwidth);

function createRow(option) {
    var row = Ti.UI.createTableViewRow({
        id: option.id,
        title: option.title,
    });
    row.addEventListener('click', function() {
        Ti.App.fireEvent('openSection', option);
    })
    menuRows.push(row);
}

function populateMenu() {
    _.each(Alloy.Globals.menuOptions, function(option) {
        createRow(option);
    });
    $.menuOptions.setData(menuRows);
}

$.setMainContainer = function(container) {
    mainContainer = container;
}

$.toggleMenu = function () {
    var slideMenuPosition = $.slideMenu.left < 0 ? 0 : -(slideMenuwidth);
    var mainContainerPosition = slideMenuPosition == 0 ? slideMenuPosition + slideMenuwidth : 0;

    var slideMenuAnimation = Ti.UI.createAnimation({
        left: slideMenuPosition,
        duration: duration
    });

    $.slideMenu.animate(slideMenuAnimation, function() {
        $.slideMenu.left = slideMenuPosition;
    });

    var mainContainerAnimation = Ti.UI.createAnimation({
        left: mainContainerPosition,
        duration: duration
    });

    mainContainer.width = Alloy.Globals.screenWidth;
    mainContainer.animate(mainContainerAnimation);
}

populateMenu();
Ti.App.addEventListener('toggleSlide', $.toggleMenu);