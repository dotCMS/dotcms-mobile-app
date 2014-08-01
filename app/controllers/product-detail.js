$.loaderIndicator.style = Alloy.Globals.isAndroid ? Ti.UI.ActivityIndicatorStyle.DARK : Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
$.loaderIndicator.show();

$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;
var content = $.args.content;

$.productTitle.text = $.args.title.toUpperCase();
$.textShortened.load(Alloy.Globals.stripHtml(content.summary));

// Opening the window when all the content is ready
Alloy.Globals.navcontroller.open(standardWinView);

function yahooInfoParse(data) {
    var content = data.query.results.quote;
    $.productPrice.text = content.PreviousClose;
    $.productChange.text = content.Change + ' (' + content.PercentChange + ')';
    $.productChange.color = content.Change[0] == '-' ? Alloy.Globals.colors.red : Alloy.Globals.colors.green;
    $.priceAndChange.remove($.viewIndicator);
    $.priceAndChange.setHeight(Ti.UI.SIZE);
}

function yahooPerformance(data) {
    var content = data.query.results.quote;
}

var HTTPClient = require('HTTPClient');
HTTPClient.makeRequest(Alloy.Globals.dotcms.yahooApi + 'q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + content.tickerSymbol + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', yahooInfoParse);
//HTTPClient.makeRequest('http://query.yahooapis.com/v1/public/yql?q=use%20"http%3A%2F%2Fyqlblog.net%2Fsamples%2Fdata.html.cssselect.xml"%20as%20data.html.cssselect%3B%20select%20*%20from%20data.html.cssselect%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D' + content.tickerSymbol + '%22%20and%20css%3D%22%23yfi_perf_risk%20.bd%20table%20tr%22&format=json', yahooPerformance);

