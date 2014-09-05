if (Alloy.Globals.isiOS) {
    var Social = require('dk.napp.social');
}

$.share = function(content) {
    if (Alloy.Globals.isiOS) {
        _.extend(content, {removeIcons: 'print,copy,contact,camera,readinglist'});
        Social.activityView(content);
    }

    // TOOD: Need to test this on the device
    if (Alloy.Globals.isAndroid) {
        var activity = Ti.Android.currentActivity;
        var intent = Ti.Android.createIntent({
            action: Ti.Android.ACTION_SEND,
            type: 'text/plain'
        });

        intent.putExtra(Ti.Android.EXTRA_TEXT, content.text + '\n' + content.url);
        intent.putExtraUri(Ti.Android.EXTRA_STREAM, content.image)
        activity.startActivity(Ti.Android.createIntentChooser(intent, 'Share'));
    }
}