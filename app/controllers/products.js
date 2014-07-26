$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

var productsParse = function(data) {
    var contentlets = data.contentlets;

    var productsData = [];
    _.each(contentlets, function(product) {
        var row = Titanium.UI.createTableViewRow({
            title: product.title,
            detail: product
        });
        var rowClass = 'product-row';
        if (Alloy.Globals.isAndroid) {
            row.className = rowClass;
        } else {
            $.resetClass(row, rowClass);
        }
        row.addEventListener('click', productDetail);
        productsData.push(row);
    });

    $.products.setData(productsData);

    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);
}

var productDetail = function(e) {
    Alloy.Globals.openWindow({
        id: 'product-detail',
        title: e.row.detail.title,
        content: e.row.detail
    });
}

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('Products', 'title', productsParse);