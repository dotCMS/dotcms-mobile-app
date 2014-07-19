var productsParse = function(data) {
    var contentlets = data.contentlets;

    var productsData = [];
    _.each(contentlets, function(product) {
        var row = Titanium.UI.createTableViewRow({
            title: product.title,
            detail: product
        });
        $.resetClass(row, 'product-row');
        row.addEventListener('click', productDetail);
        productsData.push(row);
    });

    $.products.setData(productsData);
}

var productDetail = function(e) {
    Alloy.Globals.openWindow({
        id: 'product-detail',
        title: e.row.detail.title,
        detail: e.row.detail
    });
}

var HTTPClient = require('HTTPClient');
HTTPClient('Products', 'title', productsParse);