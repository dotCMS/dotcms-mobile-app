// Improve:
// -- Add to contacts: a cooler way to let the user know the contact
// has been added and check if the contact exist

$.args = arguments[0] || {};
var content = $.args.content;
var standardWinView = $.args.standardWinView;

// Opening the window when all the content is ready
Alloy.Globals.openWindow(standardWinView);

$.teamMemberAvatar.image = Alloy.Globals.dotcms.url + '/contentAsset/image/' + content.inode + '/photo/byInode/1/filter/Resize/resize_w/200';
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
    addNewContact();
});

$.share.addEventListener('singletap', function() {
    var content = {
        text: $.teamMemberName.text + '\n' + $.teamMemberjobTitle.text + '\n' + $.teamMemberPhoneLabel.text + '\n' + $.teamMemberEmailLabel.text,
        url: '',
        image: $.teamMemberAvatar.image
    }
    var shareWidget = Alloy.createWidget('share');
    shareWidget.share(content);
});

function addNewContact() {
    if (Alloy.Globals.isAndroid) {
        createNewContact();
    } else {
        if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
            createNewContact();
        } else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
            Ti.Contacts.requestAuthorization(function(e){
                if (e.success) {
                    createNewContact();
                } else {
                    addNewContact();
                }
            });
        } else {
            addNewContact();
        }
    }
}

function createNewContact() {
    var person = {
        firstName: content.firstName,
        lastName: content.lastName,
        organization: 'Dotcms',
        url: {
            work: ['www.dotcms.com']
        },
        email: {
            work: []
        },
        phone: {
            work: [],
            mobile: [],
            fax: []
        },
        image: $.teamMemberAvatar.toImage()
    };

    if (content.email) {
        person.email.work = [content.email];
    }
    if (content.phone) {
        person.phone.work = [content.phone.indexOf('ext') != -1 ? content.phone.substr(0, content.phone.indexOf('ext')) : content.phone];
    }
    if (content.mobile) {
        person.phone.mobile = [content.mobile];
    }
    if (content.fax) {
        person.phone.fax = [content.fax];
    }

    Ti.Contacts.createPerson(person);
    alert(content.firstName + ' ' + content.lastName + ' contact information has been saved');
}


