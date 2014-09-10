$.args = arguments[0] || {};
var pageTitle = $.args.title;
var standardWinView = $.args.standardWinView;
var callback = $.args.callback;

// Opening the window when all the content is ready
Alloy.Globals.openWindow(standardWinView);

$.message.text = Titanium.Network.online ? 'We\'re experiencing some technical issues' : 'Looks like you don\'t have a internet connection';
$.tryAgain.title = 'Try again';
$.tryAgain.addEventListener('singletap', callback);