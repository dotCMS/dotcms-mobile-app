$.args = arguments[0] || {};
var content = $.args.content;

var commentscount = content.commentscount;
var date = moment(content.sysPublishDate).format('MMMM Do YYYY');
var id = content.id;
var image = Alloy.Globals.dotcms.url + '/contentAsset/image/' + content.inode + '/image/byInode/1/filter/Resize/resize_w/' + Alloy.Globals.platformWidth;
var lead = content.lead || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
var title = content.title;
var newUrl = Alloy.Globals.dotcms.url + '/news/' + content.urlTitle;

// $.newComments.text = commentscount;
$.newDate.text = date;
$.newImage.image = image;
$.newLead.text = lead;
$.newRow.content = content;
$.newRow.id = id;
$.newTitle.text = title;

if (Alloy.Globals.isiOS) {
    $.shareButton.addEventListener('singletap', function() {
        var content = {
            text: $.newTitle.text,
            image: $.newImage.image,
            url: newUrl
        };
        var shareWidget = Alloy.createWidget('share');
        shareWidget.share(content);
    });
}