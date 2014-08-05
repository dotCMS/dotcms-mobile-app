$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;
var galleryData = [];
var galleryItems = [];

var photoGalleryDetail = function(e){
    var detailWindow = Alloy.createController('gallery-detail',  {
        inode: e.source.data.inode
    });
    var detailWindowView = detailWindow.getView();
    detailWindowView.title = "Whatever";
    Alloy.Globals.navcontroller.open(detailWindowView);
};

$.fg.init({
    columns: 2,
    space: 5,
    gridBackgroundColor: '#fff',
    itemHeightDelta: 0,
    itemBackgroundColor: '#eee',
    itemBorderColor: 'transparent',
    itemBorderWidth: 0,
    itemBorderRadius: 0,
    onItemClick: photoGalleryDetail
});

var galleryParse = function(data) {
    var contentlets = data.contentlets;
    _.each(contentlets, function(image) {
        galleryData.push({
            title: image.title,
            image: Alloy.Globals.dotcms.url + '/contentAsset/image/' + image.inode + '/fileAsset/byInode/1/filter/Resize/resize_w/400',
            inode: image.inode
        });
    });

    _.each(galleryData, function(item) {
        var view = Alloy.createController('gallery-item',{
            image: item.image,
            width: $.fg.getItemWidth(),
            height: $.fg.getItemHeight()
        }).getView();

        var values = {
            title: item.title,
            image: item.image,
            inode: item.inode
        };

        galleryItems.push({
            view: view,
            data: values
        });
    });

    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);

    $.fg.addGridItems(galleryItems);
};

var HTTPClient = require('HTTPClient');
HTTPClient.makeRequest(Alloy.Globals.dotcms.url + '/api/content/limit/0/render/false/type/json/query/+structureName:Document%20+(conhost:48190c8c-42c4-46af-8d1a-0cd5db894797%20conhost:SYSTEM_HOST)%20+Document.metaData:*jpeg**%20+languageId:1%20+deleted:false%20%20+working:true/orderby/modDate%20desc', galleryParse);