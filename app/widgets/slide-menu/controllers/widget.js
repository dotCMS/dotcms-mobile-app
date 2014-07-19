//TODO: add drag-swipe action to the menu;

$.args = arguments[0] || {};
var animateLeftPanel = $.args.animateLeftPanel || false;
var duration = $.args.duration || 200;
var mainContainer;
var menuRows = [];
var slideMenuwidth = $.args.width || 200;

$.slideMenu.width = slideMenuwidth;
$.slideMenu.left = animateLeftPanel ? -(slideMenuwidth) : 0;

function createRow(option) {
    var row = Ti.UI.createTableViewRow({
        id: option.id
    });
    var label = Ti.UI.createLabel({
        text: option.title,
    })
    $.resetClass(label, 'menu-item-label');
    row.add(label);
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
    mainContainer.left = 0;
}

$.toggleMenu = function () {
    if (animateLeftPanel) {
        var slideMenuPosition = $.slideMenu.left < 0 ? 0 : -(slideMenuwidth);
        var slideMenuAnimation = Ti.UI.createAnimation({
            left: slideMenuPosition,
            duration: duration
        });
        $.slideMenu.animate(slideMenuAnimation, function() {
            $.slideMenu.left = slideMenuPosition;
        });
    }

    var mainContainerPosition = mainContainer.left == 0 ? mainContainer.left + slideMenuwidth : 0;
    var mainContainerAnimation = Ti.UI.createAnimation({
        left: mainContainerPosition,
        duration: duration
    });
    mainContainer.width = Alloy.Globals.screenWidth;
    mainContainer.animate(mainContainerAnimation, function() {
        mainContainer.left = mainContainerPosition;
    });
}

populateMenu();
Ti.App.addEventListener('toggleSlide', $.toggleMenu);