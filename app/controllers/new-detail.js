// TODO:
// Add comments

$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;
var content = $.args.content;

var byline = content.byline;
var commentscount = content.commentscount;
var date = moment(content.sysPublishDate).format('MMMM Do YYYY');
var image = Alloy.Globals.dotcms.url + '/contentAsset/image/' + content.inode + '/image/byInode/1/filter/Resize/resize_w/400';
var story = Alloy.Globals.stripHtml(content.story);
var title = content.title;

$.newByLine.text = byline;
$.newCommnets.text = commentscount;
$.newDate.text = date;
$.newImage.image = image;
$.newStory.text = story;
$.newTitle.text = title;

// Opening the window when all the content is ready
Alloy.Globals.openWindow(standardWinView);