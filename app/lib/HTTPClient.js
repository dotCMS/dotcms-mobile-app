var HTTPClient = {};

HTTPClient.makeRequest = function(url, callback) {
    var client = Ti.Network.createHTTPClient({
        // function called when the response data is available
        onload: function(e) {
            callback(JSON.parse(this.responseText));
        },
        // function called when an error occurs, including a timeout
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 15000  // in milliseconds
    });
    // Prepare the connection.
    console.log('!!! HTTP REQUEST TO: ' + url);
    client.open('GET', url);
    // Send the request.
    client.send();
};

HTTPClient.contentAPI = function(structure, orderBy, callback, identifier) {
    var identifierQuery = identifier ? '%20+identifier:' + identifier : '';
    var structureName = structure || 'webPageContent';
    var order = orderBy ? structure + '.' + orderBy : 'modDate%20desc';
    var url = Alloy.Globals.dotcms.url + '/api/content/limit/0/render/false/query/+structureName:' + structureName + '%20+(conhost:' + Alloy.Globals.dotcms.hostId + '%20conhost:SYSTEM_HOST)' + identifierQuery + '%20+languageId:1*%20+deleted:false%20%20+working:true/orderby/' + order;
    this.makeRequest(url, callback);
};

HTTPClient.uploadContent = function(content, callback) {
    var putContent = Ti.Network.createHTTPClient({
        onload: function(e) {
            //handle response, which at minimum will be an HTTP status code
            Ti.API.info('LOAD ------->');
            Ti.API.info(JSON.stringify(e));
            callback();
            Ti.App.fireEvent('hideLoading');
        },
        onerror: function(e) {
            Ti.API.info('ERROR ------->');
            Ti.API.info(JSON.stringify(e));
            // TODO: Find a better way to handle errors
            //{"type":"error","source":{"cache":false},"code":3,"error":"Authentication needed","success":false}
            //{"type":"error","source":{"cache":false},"code":1,"error":"A connection failure occurred","success":false}
            alert('Please try again later')
            Ti.App.fireEvent('hideLoading');
        },
        onreadystatechange: function() {
            switch(this.readyState) {
                case 0:
                    // after HTTPClient declared, prior to open()
                    // though Ti won't actually report on this readyState
                    Ti.API.info('case 0, readyState = ' + this.readyState);
                break;
                case 1:
                    // open() has been called, now is the time to set headers
                    Ti.API.info('case 1, readyState = ' + this.readyState);

                    if (Alloy.Globals.isiOS) {
                        var authCoded = Ti.Utils.base64encode('admin@dotcms.com:admin');
                        putContent.setRequestHeader('DOTAUTH', authCoded);
                        //putContent.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                        //putContent.setRequestHeader('Content-Type', 'multipart/form-data');
                    }
                break;
                case 2:
                    // headers received, xhr.status should be available now
                    Ti.API.info('case 2, readyState = ' + this.readyState);
                break;
                case 3:
                    // data is being received, onsendstream/ondatastream being called now
                    Ti.API.info('case 3, readyState = ' + this.readyState);
                break;
                case 4:
                    // done, onload or onerror should be called now
                    Ti.API.info('case 4, readyState = ' + this.readyState);
                break;
            }
        },
        timeout: 5000
    });
    Ti.App.fireEvent('showLoading');
    if (Alloy.Globals.isAndroid) {
        var authCoded = Ti.Utils.base64encode('admin@dotcms.com:admin');
        putContent.setRequestHeader('DOTAUTH', authCoded);
    }
    putContent.open('POST', Alloy.Globals.dotcms.url + '/api/content/publish/1/');
    putContent.send(content);
}

module.exports = HTTPClient;