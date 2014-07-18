var HTTPClient = function(url, callback) {
    var url = 'http://demo.dotcms.com/api/content/render/false/query/+structureName:Products%20+(conhost:48190c8c-42c4-46af-8d1a-0cd5db894797%20conhost:SYSTEM_HOST)%20+languageId:1*%20+deleted:false%20%20+working:true/orderby/modDate%20desc';
    var client = Ti.Network.createHTTPClient({
        // function called when the response data is available
        onload: function(e) {
            Ti.API.info('Received text: ' + this.responseText);
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