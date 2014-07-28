$.args = arguments[0] || {};
var content = $.args.content;

var date = moment(content.sysPublishDate).format('MMMM Do YYYY');
var id = content.id;
var image = Alloy.Globals.dotcms.url + '/contentAsset/image/' + content.inode + '/image/byInode/1/filter/Resize/resize_w/400';
var title = content.title;

$.newDate.text = date;
$.newImage.image = image;
$.newRow.content = content;
$.newRow.id = id;
$.newTitle.text = title;