$.args = arguments[0] || {};

$.image.image = Alloy.Globals.dotcms.url + '/contentAsset/image/' + $.args.inode + '/fileAsset/byInode/1/filter/Resize/resize_w/1000';

var matrix2d = Ti.UI.create2DMatrix();
matrix2d = matrix2d.rotate(45);
var a = Ti.UI.createAnimation({
    transform: matrix2d,
    duration: 0,
});
$.closeIcon.animate(a);

$.close.addEventListener('singletap', function() {
    Alloy.Globals.navcontroller.close();
});

var baseWidth = Alloy.Globals.screenWidth;
$.image.width = baseWidth;

$.image.addEventListener('pinch', function(e) {
    var width = baseWidth * e.scale;
    if (width > Alloy.Globals.screenWidth) {
        $.image.width = width;
    }
});

$.image.addEventListener('touchstart', function(e) {
    baseWidth = $.image.width;
});