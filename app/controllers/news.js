// TODO: check why is returning only 3 news items

var newsParse = function(data) {
    var contentlets = JSON.parse(data).contentlets;

    var newsData = [];
    _.each(contentlets, function(newitem) {
        var row = Alloy.createWidget('news-item', {
            title: newitem.title,
            date: moment(newitem.sysPublishDate).format('MMMM Do YYYY'),
            image: 'http://demo.dotcms.com/contentAsset/image/' + newitem.inode + '/image/byInode/1/filter/Resize/resize_w/400',
            lead: newitem.lead,
            id: newitem.identifier
        }).getView();
        $.resetClass(row, 'newitem-row');
        row.addEventListener('click', newDetail);
        newsData.push(row);
    });

    $.news.setData(newsData);
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