$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

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
    if (e.index == 0) {
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
                var a = Titanium.UI.createAlertDialog({title:'Camera'});
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

function proccessImage(event) {
    var image = event.media;
    //checking if it is photo
    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
        $.image.image = image;
        // Opening the window when all the content is ready
        Alloy.Globals.openWindow(standardWinView);
    }
}

//show dialog
dialog.show();