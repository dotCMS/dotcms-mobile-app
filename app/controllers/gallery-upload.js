$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;
var image;

//Create a dialog with options
var dialog = Titanium.UI.createOptionDialog({
    //title of dialog
    title: 'Choose an image source...',
    //options
    options: ['Camera','Photo Gallery', 'Cancel'],
    //index of cancel button
    cancel: 2
});

//add event listener
dialog.addEventListener('click', function(e) {
    //if first option was selected
    if (e.index === 0) {
        //then we are getting image from camera
        Titanium.Media.showCamera({
            //we got something
            success:function(event) {
                proccessImage(event);
            },
            cancel: function() {
                //do somehting if user cancels operation
            },
            error: function(error) {
                //error happend, create alert
                var a = Titanium.UI.createAlertDialog({
                    title: 'Camera'
                });
                //set message
                if (error.code == Titanium.Media.NO_CAMERA) {
                    a.setMessage('Device does not have camera');
                } else {
                    a.setMessage('Unexpected error: ' + error.code);
                }
                // show alert
                a.show();
            },
            allowImageEditing: true,
            saveToPhotoGallery: true
        });
    } else if (e.index == 1) {
        //obtain an image from the gallery
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                proccessImage(event);
            },
            cancel: function() {
                //user cancelled the action fron within
                //the photo gallery
            }
        });
    } else {
        //cancel was tapped
        //user opted not to choose a photo
    }
});

//show dialog
dialog.show();

function proccessImage(event) {
    image = event.media;
    //checking if it is photo
    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
        $.image.image = image;
        // Opening the window when all the content is ready
        Alloy.Globals.openWindow(standardWinView);
    }
}

$.uploadLabel.addEventListener('click', validateFields);

var HTTPClient = require('HTTPClient');
function uploadContent() {
    var content = {
        'description1': $.fileDescription.getValue(),
        'fileAsset': image,
        'fileName': createFileName($.fileTitle.getValue()),
        'hostFolder': 'demo.dotcms.com',
        'stName': 'Document',
        'title': $.fileTitle.getValue()
    };

    if (!Alloy.Globals.isAndroid) {
        content.sysPublishDate = new Date();
    }
    HTTPClient.uploadContent(content, finishUpload);
}

function finishUpload() {
    Ti.App.fireEvent('reloadGallery');
    Alloy.Globals.navcontroller.close();
}

$.fileTitle.addEventListener('change', validateTitle);
$.fileDescription.addEventListener('change', validateDescription);

function validateFields() {
    if ($.fileTitle.getValue().length > 0 && $.fileDescription.getValue().length > 0) {
        uploadContent();
    } else {
        validateTitle();
        validateDescription();
    }
}

function validateTitle() {
    if ($.fileTitle.getValue().length === 0) {
        $.requiredTitle.height = Alloy.Globals.isAndroid ? 20 : 12;
        $.requiredTitle.visible = true;
        $.requiredTitle.bottom = Alloy.Globals.isAndroid ? 12 : 12;
        $.fileTitle.borderColor = Alloy.Globals.colors.red;
    } else {
        $.requiredTitle.height = 0;
        $.requiredTitle.visible = false;
        $.requiredTitle.bottom = 10;
        $.fileTitle.borderColor = Alloy.Globals.colors.gray;
    }
}

function validateDescription() {
    if ($.fileDescription.getValue().length === 0) {
        $.requiredDescription.height = Alloy.Globals.isAndroid ? 20 : 12;
        $.requiredDescription.visible = true;
        $.requiredDescription.bottom = Alloy.Globals.isAndroid ? 12 : 12;
        $.fileDescription.borderColor = Alloy.Globals.colors.red;
    } else {
        $.requiredDescription.height = 0;
        $.requiredDescription.visible = false;
        $.requiredDescription.bottom = 10;
        $.fileDescription.borderColor = Alloy.Globals.colors.gray;
    }
}

function createFileName(fileTitle) {
    var prefix = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(var i=0; i < 5; i++) {
        prefix += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return fileTitle.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '-' + prefix + '.jpg';
}