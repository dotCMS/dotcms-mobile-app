$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

var productsParse = function(data) {
    var contentlets = data.contentlets;

    var productsData = [];
    _.each(contentlets, function(product) {
        var row = Titanium.UI.createTableViewRow({
            detail: product
        });

        if (Alloy.Globals.isAndroid) {
            var label = Ti.UI.createLabel({
                color: Alloy.Globals.colors.blue,
                font: Alloy.Globals.fonts.secondary.body1.regular,
                height: 44,
                left: Alloy.Globals.margin,
                text: product.title
            });
            row.add(label);
        } else {
            $.resetClass(row, 'product-row');
        }

        row.title = product.title;
        row.addEventListener('click', productDetail);
        productsData.push(row);
    });

    $.products.setData(productsData);

    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);
};

var productDetail = function(e) {
    Alloy.Globals.openWindow({
        id: 'product-detail',
        title: e.row.detail.title,
        content: e.row.detail
    });
};

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('Products', 'title', productsParse);