$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

var moment = require('alloy/moment');

//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5EGSPC%22%2C%22%5EIXIC%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
var quotesResult = {"query":{"count":2,"created":"2014-07-16T23:11:11Z","lang":"es-ES","results":{"quote":[{"symbol":"^GSPC","Ask":null,"AverageDailyVolume":"0","Bid":null,"AskRealtime":null,"BidRealtime":null,"BookValue":null,"Change_PercentChange":"+8.29 - +0.42%","Change":"+8.29","Commission":null,"Currency":"USD","ChangeRealtime":"+8.29","AfterHoursChangeRealtime":"N/A - N/A","DividendShare":null,"LastTradeDate":"7/16/2014","TradeDate":null,"EarningsShare":null,"ErrorIndicationreturnedforsymbolchangedinvalid":null,"EPSEstimateCurrentYear":null,"EPSEstimateNextYear":null,"EPSEstimateNextQuarter":null,"DaysLow":"1975.67","DaysHigh":"1983.94","YearLow":"1627.47","YearHigh":"1985.59","HoldingsGainPercent":"- - -","AnnualizedGain":null,"HoldingsGain":null,"HoldingsGainPercentRealtime":"- - -","HoldingsGainRealtime":null,"MoreInfo":"cn","OrderBookRealtime":null,"MarketCapitalization":null,"MarketCapRealtime":null,"EBITDA":null,"ChangeFromYearLow":null,"PercentChangeFromYearLow":null,"LastTradeRealtimeWithTime":"Jul 16 - <b>1981.57</b>","ChangePercentRealtime":"+8.29 - +0.42%","ChangeFromYearHigh":null,"PercebtChangeFromYearHigh":null,"LastTradeWithTime":"Jul 16 - <b>1981.57</b>","LastTradePriceOnly":"1981.57","HighLimit":null,"LowLimit":null,"DaysRange":"1975.67 - 1983.94","DaysRangeRealtime":"1975.67 - 1983.94","FiftydayMovingAverage":null,"TwoHundreddayMovingAverage":null,"ChangeFromTwoHundreddayMovingAverage":null,"PercentChangeFromTwoHundreddayMovingAverage":null,"ChangeFromFiftydayMovingAverage":null,"PercentChangeFromFiftydayMovingAverage":null,"Name":"S&P 500","Notes":null,"Open":"1976.35","PreviousClose":"1973.28","PricePaid":null,"ChangeinPercent":"+0.42%","PriceSales":null,"PriceBook":null,"ExDividendDate":null,"PERatio":null,"DividendPayDate":null,"PERatioRealtime":null,"PEGRatio":null,"PriceEPSEstimateCurrentYear":null,"PriceEPSEstimateNextYear":null,"Symbol":"^GSPC","SharesOwned":null,"ShortRatio":null,"LastTradeTime":"4:29pm","TickerTrend":null,"OneyrTargetPrice":null,"Volume":"517539712","HoldingsValue":null,"HoldingsValueRealtime":null,"YearRange":"1627.47 - 1985.59","DaysValueChange":"- - +0.42%","DaysValueChangeRealtime":"- - +0.42%","StockExchange":"SNP","DividendYield":null,"PercentChange":"+0.42%"},{"symbol":"^IXIC","Ask":null,"AverageDailyVolume":"0","Bid":null,"AskRealtime":null,"BidRealtime":null,"BookValue":null,"Change_PercentChange":"+9.58 - +0.22%","Change":"+9.58","Commission":null,"Currency":"USD","ChangeRealtime":"+9.58","AfterHoursChangeRealtime":"N/A - N/A","DividendShare":null,"LastTradeDate":"7/16/2014","TradeDate":null,"EarningsShare":null,"ErrorIndicationreturnedforsymbolchangedinvalid":null,"EPSEstimateCurrentYear":null,"EPSEstimateNextYear":null,"EPSEstimateNextQuarter":null,"DaysLow":"4419.707","DaysHigh":"4448.868","YearLow":"3573.53","YearHigh":"4485.93","HoldingsGainPercent":"- - -","AnnualizedGain":null,"HoldingsGain":null,"HoldingsGainPercentRealtime":"- - -","HoldingsGainRealtime":null,"MoreInfo":"cnv","OrderBookRealtime":null,"MarketCapitalization":null,"MarketCapRealtime":null,"EBITDA":null,"ChangeFromYearLow":null,"PercentChangeFromYearLow":null,"LastTradeRealtimeWithTime":"Jul 16 - <b>4425.968</b>","ChangePercentRealtime":"+9.58 - +0.22%","ChangeFromYearHigh":null,"PercebtChangeFromYearHigh":null,"LastTradeWithTime":"Jul 16 - <b>4425.968</b>","LastTradePriceOnly":"4425.968","HighLimit":null,"LowLimit":null,"DaysRange":"4419.707 - 4448.868","DaysRangeRealtime":"4419.707 - 4448.868","FiftydayMovingAverage":null,"TwoHundreddayMovingAverage":null,"ChangeFromTwoHundreddayMovingAverage":null,"PercentChangeFromTwoHundreddayMovingAverage":null,"ChangeFromFiftydayMovingAverage":null,"PercentChangeFromFiftydayMovingAverage":null,"Name":"NASDAQ Composite","Notes":null,"Open":"4446.167","PreviousClose":"4416.388","PricePaid":null,"ChangeinPercent":"+0.22%","PriceSales":null,"PriceBook":null,"ExDividendDate":null,"PERatio":null,"DividendPayDate":null,"PERatioRealtime":null,"PEGRatio":null,"PriceEPSEstimateCurrentYear":null,"PriceEPSEstimateNextYear":null,"Symbol":"^IXIC","SharesOwned":null,"ShortRatio":null,"LastTradeTime":"5:15pm","TickerTrend":null,"OneyrTargetPrice":null,"Volume":"0","HoldingsValue":null,"HoldingsValueRealtime":null,"YearRange":"3573.53 - 4485.93","DaysValueChange":"- - +0.22%","DaysValueChangeRealtime":"- - +0.22%","StockExchange":"NIM","DividendYield":null,"PercentChange":"+0.22%"}, {"symbol":"^IXIC","Ask":null,"AverageDailyVolume":"0","Bid":null,"AskRealtime":null,"BidRealtime":null,"BookValue":null,"Change_PercentChange":"+9.58 - +0.22%","Change":"+9.58","Commission":null,"Currency":"USD","ChangeRealtime":"+9.58","AfterHoursChangeRealtime":"N/A - N/A","DividendShare":null,"LastTradeDate":"7/16/2014","TradeDate":null,"EarningsShare":null,"ErrorIndicationreturnedforsymbolchangedinvalid":null,"EPSEstimateCurrentYear":null,"EPSEstimateNextYear":null,"EPSEstimateNextQuarter":null,"DaysLow":"4419.707","DaysHigh":"4448.868","YearLow":"3573.53","YearHigh":"4485.93","HoldingsGainPercent":"- - -","AnnualizedGain":null,"HoldingsGain":null,"HoldingsGainPercentRealtime":"- - -","HoldingsGainRealtime":null,"MoreInfo":"cnv","OrderBookRealtime":null,"MarketCapitalization":null,"MarketCapRealtime":null,"EBITDA":null,"ChangeFromYearLow":null,"PercentChangeFromYearLow":null,"LastTradeRealtimeWithTime":"Jul 16 - <b>4425.968</b>","ChangePercentRealtime":"+9.58 - +0.22%","ChangeFromYearHigh":null,"PercebtChangeFromYearHigh":null,"LastTradeWithTime":"Jul 16 - <b>4425.968</b>","LastTradePriceOnly":"4425.968","HighLimit":null,"LowLimit":null,"DaysRange":"4419.707 - 4448.868","DaysRangeRealtime":"4419.707 - 4448.868","FiftydayMovingAverage":null,"TwoHundreddayMovingAverage":null,"ChangeFromTwoHundreddayMovingAverage":null,"PercentChangeFromTwoHundreddayMovingAverage":null,"ChangeFromFiftydayMovingAverage":null,"PercentChangeFromFiftydayMovingAverage":null,"Name":"DOW","Notes":null,"Open":"4446.167","PreviousClose":"4416.388","PricePaid":null,"ChangeinPercent":"-0.42%","PriceSales":null,"PriceBook":null,"ExDividendDate":null,"PERatio":null,"DividendPayDate":null,"PERatioRealtime":null,"PEGRatio":null,"PriceEPSEstimateCurrentYear":null,"PriceEPSEstimateNextYear":null,"Symbol":"^IXIC","SharesOwned":null,"ShortRatio":null,"LastTradeTime":"5:15pm","TickerTrend":null,"OneyrTargetPrice":null,"Volume":"0","HoldingsValue":null,"HoldingsValueRealtime":null,"YearRange":"3573.53 - 4485.93","DaysValueChange":"- - +0.22%","DaysValueChangeRealtime":"- - +0.22%","StockExchange":"NIM","DividendYield":null,"PercentChange":"+0.22%"}]}}}
var quotes = quotesResult.query.results.quote;

for (var i = 0; i < 3; i++) {
    $.homeQuotes.add(createQuote(quotes[i].Name, quotes[i].Open, quotes[i].ChangeinPercent, i));
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
    _.each(contentlets, function(item, index) {
        var row = Alloy.createWidget('news-item-small', {
            title: item.title,
            date: moment(item.sysPublishDate).format('MMMM Do YYYY'),
            image: Alloy.Globals.dotcms.url + '/contentAsset/raw-data/' + item.identifier + '/image',
            //image: 'http://demo.dotcms.com/contentAsset/image/' + item.inode + '/image/byInode/1/filter/Resize/resize_w/150',
            id: item.identifier
        }).getView();
        newsData.push(row);
    });
    $.homeNews.setData(newsData);

    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);
}

var newDetail = function(e) {
    Alloy.Globals.openWindow({
        id: 'new-detail',
        title: e.row.detail.title,
        detail: e.row.detail
    });
}

var HTTPClient = require('HTTPClient');
HTTPClient('News', 'sysPublishDate', newsParse);