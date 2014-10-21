// Create the controller
var standardWin = Alloy.createController('standard-win');

// Get the object window in this controller
var standardWinView = standardWin.getView();

// Create an object that contains:
// id: name of the controller to add to the window
// title: title of the controller
// standardWinView: object window of controller standard-win
var options = {
    id: 'our-team',
    title: 'Our Team',
    standardWinView: standardWinView
};

// Set title to the window object
standardWinView.title = options.title;
// Set name to the window object
standardWinView.name = options.id;

// Create the new controller we want to add to the standard-win
// We pass the controller name (our-team) and the options
var mainContent = Alloy.createController(options.id, options);

// Set the controller (our-team) inside the controller standard-wins
standardWin.setMainContent(mainContent.getView());