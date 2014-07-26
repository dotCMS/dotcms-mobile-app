$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

var moment = require('alloy/moment');

var createHeaderView = function(date) {
    // TODO: move this to a widget maybe?
    var label = Ti.UI.createLabel({
        bottom: 3,
        color: Alloy.Globals.colors.blue,
        font: Alloy.Globals.fonts.secondary.body1.regular,
        left: 5,
        text: date,
        top: 3,
    });
    var inner = Ti.UI.createView({
        left: 15,
        backgroundColor: Alloy.Globals.colors.blueLightest,
        height: 22,
    });
    var view = Ti.UI.createView();
    inner.add(label);
    view.add(inner);

    return view;
}

var eventsParse = function(data) {
    var allSections = [];
    var contentlets = data.contentlets;
    var eventsData = [];
    var oldDate = _.first(contentlets).startDate;
    var section = Ti.UI.createListSection({
        headerView: createHeaderView(moment(oldDate).format('MMMM D, YYYY'))
    });

    _.each(contentlets, function(item, index) {
        if (oldDate != item.startDate) {
            section.setItems(eventsData);
            allSections.push(section)
            section = Ti.UI.createListSection({
                headerView: createHeaderView(moment(item.startDate).format('MMMM D, YYYY'))
            });
            eventsData = [];
            oldDate = item.startDate;
        }
        eventsData.push({
            eventStart: {
                text: moment(item.startDate).format('hh:mma')
            },
            eventEnd: {
                text: moment(item.startDate).format('hh:mma')
            },
            eventTitle: {
                text: item.title
            },
            eventDesc: {
                text: Alloy.Globals.stripHtml(item.description)
            },
            id: item.identifier
        });
    });
    $.events.setSections(allSections);
    $.events.addEventListener('itemclick', eventDetail);

    // Opening the window when all the content is ready
    // TODO: height is not ok, check that!
    Alloy.Globals.navcontroller.open(standardWinView);
}

var eventDetail = function(e) {
    Alloy.Globals.openWindow({
        id: 'event-detail',
        title: e.row.detail.title,
        detail: e.row.detail
    });
}

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('calendarEvent', 'startDate%20desc', eventsParse);