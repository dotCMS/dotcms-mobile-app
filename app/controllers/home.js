$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;


function parseQuotes(quotesResult) {
    var quotes = quotesResult.query.results.quote;
    _.each(quotes, function(quote, i) {
        $.homeQuotes.add(createQuote(quote.Name, quote.Open, quote.Change, i));
    });
}

function createQuote(name, open, changeinPercent, index) {
    name = name == 'NASDAQ Composite' ? 'NASDAQ' : name;

    var itemWrapper = Ti.UI.createView({
        id: 'item' + index
    });
    var nameLabel = Ti.UI.createLabel({
        text: name
    });
    var openLabel = Ti.UI.createLabel({
        text: open
    });
    var changeLabel = Ti.UI.createLabel({
        text: changeinPercent
    });

    var quoteClass = changeinPercent[0] == '+' ? 'quote-change-up' : 'quote-change-down';

    $.resetClass(itemWrapper, 'quote-item');
    $.resetClass(nameLabel, 'quote-name');
    $.resetClass(openLabel, 'quote-open');
    $.resetClass(changeLabel, quoteClass);

    itemWrapper.add(nameLabel);
    itemWrapper.add(openLabel);
    itemWrapper.add(changeLabel);

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
HTTPClient.makeRequest(yahooFinanceUrl, parseQuotes);