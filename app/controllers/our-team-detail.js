// TODO:
// Actions:
// -- Add to contacts
// -- Share
// Avatar

$.args = arguments[0] || {};
var content = $.args.content;
var standardWinView = $.args.standardWinView;

// Opening the window when all the content is ready
Alloy.Globals.navcontroller.open(standardWinView);

$.teamMemberName.text = content.firstName + ' ' + content.lastName;
$.teamMemberjobTitle.text = content.jobTitle;
$.teamMemberPhoneLabel.text = content.phone.indexOf('ext') != -1 ? content.phone.substr(0, content.phone.indexOf('ext')) : content.phone;
$.teamMemberEmailLabel.text = content.email;

$.teamMemberPhone.addEventListener('singletap', function() {
    Ti.Platform.openURL('tel:' + $.teamMemberPhoneLabel.getText());
});

$.teamMemberEmail.addEventListener('singletap', function() {
    Ti.Platform.openURL('mailto:' + $.teamMemberEmailLabel.getText());
});

$.addToContacts.addEventListener('singletap', function() {
    console.log('Add to contacts');
});

$.share.addEventListener('singletap', function() {
    console.log('Share contact');
});