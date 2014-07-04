// Pushing the first controller
var standardWin = Alloy.createController('standard-win');
var standardWinView = standardWin.getView();
standardWinView.title = Alloy.Globals.menuOptions[0].title;
Alloy.Globals.navcontroller.open(standardWinView);

// Pushing the content to the window
var homeContent = Alloy.createController(Alloy.Globals.menuOptions[0].id);
standardWin.setMainContent(homeContent.getView());

// From the slide-menu widget trigger this event to open every menu section
Ti.App.addEventListener('openSection', function(option) {
    Ti.App.fireEvent('toggleSlide');
    if (option.first) {
        Alloy.Globals.navcontroller.home();
    } else {
        var nextWin = Alloy.createController('standard-win');
        var nextWinView = nextWin.getView();
        nextWinView.title = option.title;
        Alloy.Globals.navcontroller.open(nextWinView);

        var contentController = Alloy.createController(option.id);
        nextWin.setMainContent(contentController.getView());
    }
})
