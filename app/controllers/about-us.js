$.args = arguments[0] || {};
var pageTitle = $.args.title;
var standardWinView = $.args.standardWinView;

var aboutUsParse = function(data) {
    var aboutUsHtml = data.contentlets[0].body;
    var imageUrl = aboutUsHtml.match(/"([^>]+)/g)[0];

    $.aboutImage.image = 'http://demo.dotcms.com/contentAsset/image/7de092d3-d051-4898-8623-48113b4ec1ca/fileAsset/byInode/1/filter/Resize/resize_w/700';
    $.title.text = pageTitle;
    $.aboutBody.text = Alloy.Globals.stripHtml(aboutUsHtml);

    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);
}

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('', '', aboutUsParse, '767509b1-2392-4661-a16b-e0e31ce27719');