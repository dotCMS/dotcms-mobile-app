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

var news = {"contentlets":[{"URL_MAP_FOR_CONTENT":"\/news\/the-gas-price-rollercoaster","stInode":"28039964-5615-4ccf-bb96-ded62adbcc6a","tags":"Gas, Oil, Prices, Investment","owner":"dotcms.org.1","lastReview":"2013-02-07 16:14:41.493","modUser":"dotcms.org.1","identifier":"2943b5eb-9105-4dcf-a1c7-87a9d4dc92a6","sortOrder":0,"__DOTNAME__":"The Gas Price Rollercoaster","host":"48190c8c-42c4-46af-8d1a-0cd5db894797","modDate":"2013-02-07 16:14:41.506","languageId":1,"title":"The Gas Price Rollercoaster","byline":"Jean Folger","lead":"Historically, the price of gasoline has been tied to changes in the cost of crude oil; as crude prices rise, consumers can expect to pay more at the pump, and the reverse is also true.","image":"\/contentAsset\/raw-data\/2943b5eb-9105-4dcf-a1c7-87a9d4dc92a6\/image","story":"<p><strong>Dynamic Factors Affect Crude Prices<\/strong><br \/>Crude oil and, by default, gasoline prices, are driven by a complex assortment of factors that affect supply and demand, including geopolitical risks, weather, inventories, global economic growth, exchange rates, speculation, hedging and investment activity. From the risk of piracy in the Straits of Malacca and Hormuz, to transit vulnerability in the Caspian and extreme weather in the United States, crude is constantly susceptible to a variety of price-driving forces.<br \/><br \/><br \/>The worldwide demand for crude oil, gasoline and petroleum products that are made from crude is expected to increase as the U.S. and global economies strive to recover. This growing demand, coupled with political instability in the Middle East and North Africa (MENA) region and the decline in the U.S. dollar's value, are what pushed gasoline prices to $4 per gallon earlier this year. While gas prices climbed, the average cost for crude oil rose from about $90 per barrel in mid-February, 2011, to about $127 per barrel two months later.<\/p>\n<p><\/p>\n<p><br \/>Figure 1 shows average regular gasoline prices in the U.S. over the past three years. Crude oil and gasoline reached record highs during 2008, following surges in worldwide demand due in part to increased demand from emerging markets like China and India. During the second half of 2008, demand and prices both tumbled in response to deteriorating economic conditions. From June to December of 2008, gasoline prices fell from just over $4 per gallon to $1.59. Prices rose steadily through the middle of 2009, bounced up and down for the next year, and then by September 2010, gas prices took off with unrelenting daily price increases. Fears of $6 gas, a slowing economy and decreased demand put the brakes on the uptrend, and price increases finally slowed by mid-May, 2011.<\/p>\n<p><br \/><strong>Where Do Our Dollars Go At The Pump?<\/strong><br \/>According to the EIA data from 2010, 68% of every dollar at the gas pump goes to crude oil - the raw material used to produce gasoline. Refining the crude oil into gasoline and retailing, which includes distribution and marketing, adds 18% to the price that consumers pay for gasoline. The remaining 14% of every dollar goes towards excise taxes.<br \/><br \/>In the United States, the federal government excise tax is currently 18.4 cents per gallon. The average fuel tax paid by consumers, however, is 49.5 cents per gallon. The difference comes from state and local government taxes, which vary widely across the U.S. The tax in Alaska, for example, is about 26 cents per gallon; in Connecticut, the rate is more than 70 cents per gallon.<br \/><br \/>Perhaps surprisingly, the United States produces 51% of the oil and petroleum products that it consumes. The rest is imported from other countries, including Canada at the top of the list (25%); Saudi Arabia (12%); Venezuela (10%) and Mexico (9%).<br \/><br \/><strong>What's Ahead?<\/strong><br \/>The Energy Information Administration (EIA) expects that the annual price of WTI (West Texas Intermediate) crude will average $103 per barrel in 2011 and $107 per barrel in 2012; the 2010 average was $79. The EIA projects rising crude costs will add an average of 85 cents more per gallon of gasoline during 2011, with an additional three cents per gallon during 2012. The 2010 average regular pump price was $2.78 per gallon; EIA's forecast for 2011 and 2012 is $3.63 and $3.66, respectively.<br \/><br \/>Despite these carefully crafted forecasts, any one of a vast number of factors could trigger strong changes in crude and gasoline prices - both to the upside and downside.<br \/><br \/><strong>Up and Down (and Up and Down)<\/strong><br \/>The weak U.S. dollar only exaggerates rising global oil prices for American consumers. Countries with strong currencies, including those using the euro and the yen, are generally exposed to smaller price increases. Though high gas prices are never welcome, they have come at a particularly tricky time as unemployment and foreclosure rates remain high and food prices soar. While gas prices in the U.S. are still a dollar higher than this time last year, they continue to drop from the early May highs.<\/p>","inode":"df08a197-7e52-4201-b1a6-d3c070382da2","caption":"","commentscount":3,"sysPublishDate":"2011-06-29 09:00:00.0","urlTitle":"the-gas-price-rollercoaster","expire":"2017-01-15 16:19:00.0","folder":"SYSTEM_FOLDER","imageContentAsset":"2943b5eb-9105-4dcf-a1c7-87a9d4dc92a6\/image"},{"URL_MAP_FOR_CONTENT":"\/news\/how-can-mlps-pay-out-higher-dividends-than-their-earnings","stInode":"28039964-5615-4ccf-bb96-ded62adbcc6a","tags":"Dividents, Earnings, Investment, Investment Banking","owner":"dotcms.org.1","lastReview":"2013-02-07 16:09:28.781","modUser":"dotcms.org.1","identifier":"1bc64711-2cec-4eec-9368-6673ff2732d4","sortOrder":0,"__DOTNAME__":"How Can MLPs Pay Out Higher Dividends Than Their Earnings?","host":"48190c8c-42c4-46af-8d1a-0cd5db894797","modDate":"2013-02-07 16:09:28.795","languageId":1,"title":"How Can MLPs Pay Out Higher Dividends Than Their Earnings?","byline":"Quest staff","lead":"A common question we get about master limited partnerships (MLPs) is how can they pay out higher dividends than their earnings?","story":"<p>A common question we get about master limited partnerships (MLPs) is how can they pay out higher dividends than their earnings?<\/p>\n<p>The answer to this question has to do with the way that depreciation and, in the case of natural resource producers, depletion expenses are treated. Depreciation and depletion expenses are a means of assigning the cost of a long-term asset, such as a pipeline or natural resource, over its useful life. These items are called \"non-cash\" expenses because cash is not actually being paid out for the depreciation or depletion of the long-term asset.<\/p>\n<p>A corporation typically reinvests much of its cash flow to upgrade its equipment, keep pace with technological advancements, and\/or expand its business. After these payments are made, the remaining cash flow can then be paid out as dividends. MLP assets, such as pipelines, however, are generally long-lived; require very little maintenance; and are not subject to major technological changes.<\/p>\n<p>It is for these reasons that an MLP can pay out a very high level of its cash flow to unitholders without hurting the long-term basic earnings power of the business. This is also why investors should value MLPs based off metrics related to distributable cash flow (DCF) and not earnings.<\/p>\n<p>DCF is the cash flow available to the partnership to pay distributions to LP unitholders and the GP. Since DCF strips out all non-cash items, it is a truer measure of how much cash an MLP is generating and whether it can continue to pay out or increase its dividend.<\/p>","inode":"4543cd44-e7bc-4e29-8841-0c9a2d9146e2","caption":"","commentscount":0,"sysPublishDate":"2013-02-07 16:09:00.0","urlTitle":"how-can-mlps-pay-out-higher-dividends-than-their-earnings","expire":"2018-02-07 16:09:00.0","folder":"SYSTEM_FOLDER","image":"\/contentAsset\/raw-data\/1bc64711-2cec-4eec-9368-6673ff2732d4\/image","imageContentAsset":"1bc64711-2cec-4eec-9368-6673ff2732d4\/image"},{"URL_MAP_FOR_CONTENT":"\/news\/how-to-invest-in-equities-and-stay-sane","stInode":"28039964-5615-4ccf-bb96-ded62adbcc6a","tags":"vanguard","owner":"dotcms.org.1","lastReview":"2013-02-07 16:09:13.568","modUser":"dotcms.org.1","identifier":"5246d270-224d-4f5d-a0d4-aff20584328e","sortOrder":0,"__DOTNAME__":"How to invest in equities and stay sane","host":"48190c8c-42c4-46af-8d1a-0cd5db894797","modDate":"2013-02-07 16:09:13.583","languageId":1,"title":"How to invest in equities and stay sane","byline":"Edward Hocknell","lead":"Most financial news is irrelevant to our personal situation and can be safely ignored. Especially pointless are the frequent predictions of things that cannot be predicted. For instance, the forecasting records of even the best economists are very poor.","image":"\/contentAsset\/raw-data\/5246d270-224d-4f5d-a0d4-aff20584328e\/image","story":"<p>Life is more secure now than it has ever been. Uncertainty has been reduced to levels that previous generations would find incredible. Their lives were plagued (literally) with disease, famine, war, floods, religious manias, and social upheavals. No wonder the ancients erected massive temples and performed endless sacrifices. It was all an effort to reduce the terrifying uncertainty of life.<\/p>\n<p>We are lucky&mdash;on the whole. In the modern world, risk has been squashed and repressed wherever it appears. The big exception is in our savings, which for many of us is now the riskiest part of our lives. When we try to preserve our wealth, we immediately become medieval peasants, helpless victims of an implacable fate. Two hundred years ago, Nathan Mayer Rothschild, the greatest banker of his day, said that it was ten times harder to preserve wealth than it was to make it in the first place. Not much has changed.<\/p>\n<p>Unfortunately, we have to take risks. We have no choice, because the cost of not doing so has become immense. The entry fee to safe havens is prohibitive. Bond markets are behaving like an insurance salesman who wants to charge you more to insure your house than it would cost to rebuild. Safety guarantees loss.<\/p>\n<p>If we want a reasonable prospect of real returns, we have to consider investing a part of our portfolios in equities; and that means having to cope with uncertainty. As the economist John Maynard Keynes put it in the 1930s: \"The modern organisation of the capital market requires for the holder of quoted equities much more nerve, patience and fortitude than from the holder of wealth in other forms.\" My purpose in writing this piece is to instill in you, Dear Reader, that Nerve, Patience, and Fortitude. The evidence is clear: It is worth it&mdash;and, anyway, we have no choice.<\/p>\n<p>It seems to me that the greatest enemy of successful investment is \"Events.\" We are willing or unwilling participants in an endless parade of happenings. Being human, we continuously try to integrate them into our worldview&mdash;but there are too many events for us to treat them critically or test them for relevance. With our wealth at stake, we adopt a semiconscious policy of worrying about as much as possible, and discounting as little as we can&mdash;especially if it sounds alarming. There is plenty of academic evidence for this. It is best summarized in Daniel Kahneman's excellent book Thinking, Fast and Slow. He shows how we instinctively default to the most recent or striking piece of evidence, and that our urge to leap to conclusions overwhelms our better, rational selves.<\/p>\n<p>Modern media make the problem much worse, of course. \"News\" is crafted to grab our attention; it is not created spontaneously by the world. It is said that in 1936 a BBC announcer solemnly announced over the wireless: \"Good evening. It is six o'clock. There has been no news today.\" Those days are long gone.<\/p>\n<p>So, if news and events are our enemies, how do we cope with them? The first step is to regard them with the suspicion they deserve, and to be more discriminating in how we react. From the investor's point of view, most events can be put into one of three categories: a large proportion of them are simply irrelevant, even though they may look vital and pressing; some are misleading, sending us haring off in the wrong direction; but some are boring, underreported&mdash;and very helpful.<\/p>","inode":"405eb672-0bd7-4d4c-aaf4-79660b0fe11c","caption":"Life is more secure now than it has ever been.","commentscount":0,"sysPublishDate":"2013-02-07 16:09:00.0","urlTitle":"how-to-invest-in-equities-and-stay-sane","expire":"2018-02-07 16:09:00.0","folder":"88051711-96d3-4f0b-997d-cc414daded48","imageContentAsset":"5246d270-224d-4f5d-a0d4-aff20584328e\/image"},{"URL_MAP_FOR_CONTENT":"\/news\/rethinking-the-budget-6-counterintuitive-tips","stInode":"28039964-5615-4ccf-bb96-ded62adbcc6a","tags":"Debt, GDP, Investment","owner":"dotcms.org.1","lastReview":"2013-02-07 16:09:03.917","modUser":"dotcms.org.1","identifier":"7a3d042f-aae4-4e60-8385-7fc5320f572f","sortOrder":0,"__DOTNAME__":"Rethinking The Budget: 6 Counterintuitive Tips","host":"48190c8c-42c4-46af-8d1a-0cd5db894797","modDate":"2013-02-07 16:09:03.941","languageId":1,"title":"Rethinking The Budget: 6 Counterintuitive Tips","byline":"Annie Mueller","lead":"","story":"<p>Handling money is something we all have to learn to do in order to survive. And the basic concept of budgeting - spend less than you make - seems so, well, basic that we fail to look closely enough at how budgeting can help us handle our finances well. If you think you know everything there is to know about setting, maintaining and succeeding with a budget, think again. These tips are less obvious, running counter to our commonly held intuitions about money.<\/p>\n<p><strong>1. Indulge in what matters to you.<\/strong><br \/> Quick: what's the first thing you do when you start making a budget? Usually it's make a list of your expenses, add them all up, grimace painfully at the total amount, and then start figuring out which expenses you can eliminate. There's no point in spending money on things you don't want or need. However, common budgeting technique often has you cutting out absolutely anything that could fall into an \"optional\" category. The $5 latte from the coffee shop is a favorite example; cut that daily or biweekly or weekly expense out, budgeting experts say, and you'll save X dollars per year for your savings account!<\/p>\n<p>The problem is that cutting out every optional expense may lead you to meet a new and bigger foe to your budget: the feeling of deprivation. It's the same concept that makes you want to cheat on your diet, even though you really do want to fit into your skinny jeans again. You start a diet, or a budget, and cut out all the eating or spending you enjoy (but don't necessarily need), and soon all you can think about is what you can't have.<\/p>\n<p>Do go ahead and make your list of expenses, and definitely get rid of the optional things that don't add value or enjoyment to your life. But don't just get rid of the optional stuff that you do really value; instead, make it part of your budget, even if it seems like a luxury. You're much more likely to stick with a budget that allows you the little luxuries you do enjoy than one which leaves you feeling continually deprived.<\/p>\n<p><strong>2. Don't automatically choose the cheapest option.<\/strong><br \/> Choosing the cheapest option, whether it's for food or a car or clothes or a vacation, will certainly save you money in the present. But spending a little less for the cheapest choice isn't always smart. The old adage of \"you get what you pay for\" should be echoing through your memory right about now, and that's the point. When you always get the cheapest option, you end up with lower quality items.<\/p>\n<p>In some cases, it doesn't really matter: disposable items, or name-brand versus big-brand. You can't always tell the difference beyond the packaging. But sometimes if you save a few dollars on the initial purchase but end up with a much lower quality item, you'll end up having to spend more to maintain it and then spend again, sooner, to replace it because it won't last as long as the higher quality option.<\/p>\n<p><strong>3. Skip the coupons.<\/strong><br \/> If you've watched an episode or two of \"Extreme Couponing,\" you may have visions of free groceries dancing in your head. And what could be better for the budget? If you can save all that money on groceries and household supplies, you'll have more money for paying off debt, saving or, um, indulging in that latte.<\/p>\n<p>However, coupons aren't always a boon to your budget. In fact, many of us end up clipping coupons for stuff we wouldn't normally buy, and then spending our money on grocery and household items we really don't need just because we happen to have a coupon handy. It's tempting, and you feel good about your purchase because you just saved $1 off the normal price! But wouldn't it be better to save the total price by not buying that item at all?<\/p>\n<p><strong>4. Increase your income rather than simply decreasing your spending.<\/strong><br \/> Cut costs, reduce spending, limit expenses; however you word it, this concept is unavoidable in most budgeting methods. Instead of focusing only on spending less, try putting your attention on making more. You can pick up a part-time job, sell your excess stuff, consult, start freelancing or find another way to turn your talents and a little extra time into some additional income. In fact, once you get to a certain point in the reducing-expenses exercise, you'll find that it's actually easier to make more than to spend less.<\/p>\n<p><strong>5. Spend money on maintenance.<\/strong><br \/> When you're concerned about your bank account, the last thing you want to do is spend money that doesn't have to be spent. So you skip certain, non-urgent things, things like getting the oil changed, getting the chimney cleaned, getting your sore tooth checked out.<\/p>\n<p>And you are saving money - until the car's engine locks up because it ran out of oil, or the chimney catches on fire because of the soot build-up, or you end up having to pay for a root canal because you didn't get that cavity taken care of soon enough. Take care of maintenance before the need is urgent, and you're almost certain to spend less than you'll have to if you wait until it becomes a crisis.<\/p>\n<p><strong>6. Don't panic about your non-existent savings account.<\/strong><br \/> You need and want to save money. And every financial expert has told you that you should be saving money. Meanwhile, you're paying off a car loan, a house mortgage, a student loan and a couple of credit cards, plus trying to avoid more debt with the costs of daily life. But every now and then you wake up in a state of panic, with one thought beating in your budget-weary brain: \"I've got to start saving! I've got to start saving! I've got to start saving!\"<\/p>\n<p>Having a hefty savings account will be a great feeling once you get there. In the meantime, however, take a deep breath and calm down. If you take money away from paying off an interest-bearing debt in order to put it in a savings account, you'll likely be losing money because that debt will keep accumulating interest at a much higher rate that your savings account will. Focus on paying off the debt as fast as you can, which will save you hundreds of dollars in interest. Then focus on building up your savings.<\/p>\n<p><strong>The Bottom Line<\/strong><br \/> We tend to be kind of private about our money, but there's one last tip that might help you reach your financial goals more than all the other tips put together: talk about your budget. Tell your friends. Tell your family. Go public. Why? Research shows that people who talk to friends about what they want to accomplish and set up some sort of accountability system are 33% more likely to reach their goals. And if your goal is to set a good budget and stick to it, you might as well get all the help you can get.<\/p>","inode":"9cf4ba3a-1b4b-4d9b-b4c9-085c27b21047","caption":"National Debt versus Percentage of GDP","commentscount":2,"sysPublishDate":"2013-02-07 16:08:00.0","urlTitle":"rethinking-the-budget-6-counterintuitive-tips","expire":"2018-02-07 16:08:00.0","folder":"SYSTEM_FOLDER","image":"\/contentAsset\/raw-data\/7a3d042f-aae4-4e60-8385-7fc5320f572f\/image","imageContentAsset":"7a3d042f-aae4-4e60-8385-7fc5320f572f\/image"},{"stInode":"28039964-5615-4ccf-bb96-ded62adbcc6a","tags":"","owner":"dotcms.org.1","lastReview":"2013-02-07 16:08:51.555","modUser":"dotcms.org.1","identifier":"13bf259e-c14b-4a3a-85eb-1020cf8a6497","sortOrder":0,"__DOTNAME__":"Airbus to open factory on rival Boeing's U.S. turf","host":"48190c8c-42c4-46af-8d1a-0cd5db894797","modDate":"2013-02-07 16:08:51.584","languageId":1,"title":"Airbus to open factory on rival Boeing's U.S. turf","byline":"Karen Jacobs and Kelli Dugan","lead":"Flanked by local Gulf Coast politicians, top executives from European planemaker Airbus unveiled their plans to build their first U.S. factory.","image":"\/contentAsset\/raw-data\/13bf259e-c14b-4a3a-85eb-1020cf8a6497\/image","story":"<p>MOBILE, Alabama (Reuters) - Flanked by local Gulf Coast politicians, top executives from European planemaker Airbus unveiled their plans to build their first U.S. factory -- a move they said that would help them take market share from rival Boeing Co.<\/p>\n<p>The unit of EADS believes that opening a plant in Mobile, Alabama, which will assemble its narrow-body A320 aircraft, will help it take \"more than a few percentage points\" of market share from its prime rival in the world's busiest aviation market, according to Airbus sales chief John Leahy.<\/p>\n<p>Due to open in 2016 and expected to create some 1,000 jobs, the company said it will be only the second Airbus plant outside Europe that builds its top-selling workhorse jet; the other one is in China.<\/p>\n<p>Airbus currently has a 20 percent market share in the narrow body jet segment in the United States, compared with 53 percent of the market worldwide.<\/p>\n<p>Even though assembly is a relatively small part of the work of building an aircraft, Airbus is betting having an assembly line will boost its credentials and help it win deals.<\/p>\n<p>\"I think we became American with this,\" said New York-born Leahy. \"Even if we have been spending $12 billion a year in the U.S. and have 40 percent of our procurement in the U.S., that doesn't quite make you American in the way an assembly line does.\"<\/p>\n<p>Airbus' announcement drew a lineup of heavy-hitters from U.S. airlines and suppliers, including American Airlines CEO Tom Horton, JetBlue Airways Corp CEO Dave Barger and Goodrich Corp CEO Marshall Larsen.<\/p>\n<p>They arrived to the strains of the rock group Steve Miller Band's 1977 hit \"Jet Airliner\" -- that homage to Boeing's 707 is something of an anthem for the aviation industry, and Boeing last year hired Miller himself to perform it for workers at its Everett, Washington, factory.<\/p>\n<p>Airbus and Boeing are locked in a tussle at the World Trade Organization, with each accusing the other of receiving illegal subsidies.<\/p>\n<p>\"While it is interesting once again to see Airbus promising to move jobs from Europe to the United States, no matter how many are created, the numbers pale in comparison to the thousands of U.S. jobs destroyed by illegal subsidies,\" Boeing spokesman Thomas Brabant said in an e-mailed statement.<\/p>\n<p>SHOT IN THE ARM FOR GULF COAST<\/p>\n<p>Analysts said the move could reshape the U.S. aerospace industry and boost manufacturing on the U.S. Gulf Coast.<\/p>\n<p>\"The town is right, the talent is right and the time is right,\" Airbus Chief Executive Fabrice Bregier told a crowd that included U.S. Senator Richard Shelby of Alabama and the state's governor, Robert Bentley.<\/p>\n<p>Local economic development officials said the new plant could help generate new jobs, as big manufacturing operations tend to lure suppliers and additional jobs. State officials had been lobbying Airbus for years.<\/p>\n<p>\"It's like giving birth to a baby -- after seven years of labor,\" former Alabama Governor Bob Riley said.<\/p>\n<p>The region in the southeastern United States is still recovering from the devastation of 2005's Hurricane Katrina.<\/p>\n<p>\"Something like this just gives us new marketing opportunities, new opportunities to talk to a lot of different aerospace companies,\" said Neal Wade, chairman of the Aerospace Alliance, an association of government and business leaders from the states of Louisiana, Mississippi, Alabama and Florida. \"You immediately put yourself into a different category.\"<\/p>\n<p>Airbus suppliers welcomed its move.<\/p>\n<p>\"It makes all the sense in the world for Airbus to be here,\" said David Hess, president of United Technologies Corp's Pratt &amp; Whitney unit. \"We're glad they are here.\"<\/p>\n<p>Manufacturing has been a relative bright spot for a U.S. economy still struggling to recover from a 2007-2009 recession. However, data on Monday showed manufacturing activity unexpectedly contracted in June, the first dip in three years.<\/p>\n<p>JOINING THE ONSHORERS<\/p>\n<p>In building a U.S. factory, Airbus will follow a broader trend in the manufacturing sector -- producing goods closer to where they are used. While the Mobile operation is an overseas excursion for the European company, it comes as many U.S. companies are bringing manufacturing back home after finding the low wages they had found overseas came with bigger-than-expected costs for logistics, quality control and other expenses.<\/p>\n<p>\"As globalization matures, companies have a better understanding of the total costs of full life cycle production and the U.S. offers a number of advantages,\" said Jack McDougle, senior vice president at the U.S. Council on Competitiveness and a former Commerce Department official.<\/p>\n<p>He cited the emergence of abundant natural gas, intellectual property protection, quality control, shorter lead times and high productivity.<\/p>\n<p>Companies such as General Electric Co and Fortune Brands Home &amp; Security Inc have already returned manufacturing to the United States.<\/p>\n<p>Boeing has also embraced the trend after suffering through years of delays in the launch of its 787 Dreamliner aircraft after handing off much of the manufacturing responsibility for the aircraft to outside suppliers.<\/p>\n<p>\"We, lemming-like, over the last 15 years extended our supply chains a little too far globally in the name of low cost,\" Boeing CEO Jim McNerney said at a Washington summit on manufacturing held in February. \"We lost control in some cases over quality and service when we did that.\"<\/p>\n<p>(Additional reporting by Tim Hepher in Paris and Jed Horowitz in New York; writing by Scott Malone in Boston; editing by Maureen Bavdek, Jeffrey Benkoe and Leslie Gevirtz)<\/p>","inode":"d6af8f14-8b6a-4789-9311-9e24bb72f81e","caption":"The nose of an Airbus A380, the world's largest passenger jet, is seen at Nice International Airport during test flight over Nice, south eastern France, June 3, 2008. REUTERS\/Eric Gaillard","commentscount":0,"sysPublishDate":"2013-02-07 16:08:00.0","urlTitle":"airbus-to-open-factory-on-rival-boeing-s-u-s-turf","expire":"2018-02-07 16:08:00.0","folder":"88051711-96d3-4f0b-997d-cc414daded48","imageContentAsset":"13bf259e-c14b-4a3a-85eb-1020cf8a6497\/image"}]};
var contentlets = news.contentlets;

var data = [];
_.each(contentlets, function(item) {
    var row = Alloy.createWidget('news-item-small', {
        title: item.title,
        date: moment(item.sysPublishDate).format('MMMM Do YYYY'),
        image: 'http://demo.dotcms.com/contentAsset/image/' + item.inode + '/image/byInode/1/filter/Resize/resize_w/150',
        id: item.identifier
    }).getView();
    data.push(row);
});

$.homeNews.setData(data);