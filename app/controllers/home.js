$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;


function parseQuotes(quotesResult) {
    var quotes = quotesResult.query.results.quote;
    _.each(quotes, function(quote, i) {
        $.homeQuotes.add(createQuote(quote.Name, quote.Open, quote.Change, i));
    });
}

function createQuote(name, open, changeinPercent, index) {
    name == 'NASDAQ Composite' ? name = 'NASDAQ' : name = name;

    var itemWrapper = Ti.UI.createView({
        id: 'item' + index
    });
    var name = Ti.UI.createLabel({
        text: name
    });
    var open = Ti.UI.createLabel({
        text: open
    });
    var change = Ti.UI.createLabel({
        text: changeinPercent
    });

    var quoteClass;
    changeinPercent[0] == '+' ? quoteClass = 'quote-change-up' : quoteClass = 'quote-change-down';

    $.resetClass(itemWrapper, 'quote-item');
    $.resetClass(name, 'quote-name');
    $.resetClass(open, 'quote-open');
    $.resetClass(change, quoteClass);

    itemWrapper.add(name);
    itemWrapper.add(open);
    itemWrapper.add(change);

    return itemWrapper;
}

var newsParse = function(data) {
    var contentlets = data.contentlets;
    var newsData = [];
    _.each(contentlets, function(newitem) {
        var row = Alloy.createWidget('news-item-small', {
            content: newitem
        }).getView();
        row.addEventListener('click', newDetail);
        newsData.push(row);
    });
    $.homeNews.setData(newsData);

    // Opening the window when all the content is ready
    Alloy.Globals.openWindow(standardWinView);
};

var newDetail = function(e) {
    Alloy.Globals.winToOpen({
        id: 'new-detail',
        title: e.row.content.title,
        content: e.row.content
    });
};

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('News', 'sysPublishDate', newsParse);

var data = encodeURIComponent('select * from yahoo.finance.quotes where symbol in ("^GSPC","^IXIC","AAPL")');
var yahooFinanceUrl = Alloy.Globals.dotcms.yahooApi + 'q=' + data + '&format=json&diagnostics=true&env=http://datatables.org/alltables.env';
HTTPClient.makeRequest(yahooFinanceUrl, parseQuotes)