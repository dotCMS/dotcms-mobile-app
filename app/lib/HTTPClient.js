var HTTPClient = function(structure, orderBy, callback) {
    var order = orderBy || 'modDate%20desc';
    var structureName = structure || 'webPageContent';
    var url = Alloy.Globals.dotcms.url + '/api/content/limit/0/render/false/query/+structureName:' + structureName + '%20+(conhost:' + Alloy.Globals.dotcms.hostId + '%20conhost:SYSTEM_HOST)%20+languageId:1*%20+deleted:false%20%20+working:true/orderby/' + structureName + '.' + order;
    var client = Ti.Network.createHTTPClient({
        // function called when the response data is available
        onload: function(e) {
            //Ti.API.info('Received text: ' + this.responseText);
            callback(this.responseText);
        },
        // function called when an error occurs, including a timeout
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 5000  // in milliseconds
    });
    // Prepare the connection.
    client.open('GET', url);
    // Send the request.
    client.send();
}

module.exports = HTTPClient;