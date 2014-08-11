$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

var createHeaderView = function(content) {
    var sectionHeader = Alloy.createWidget('listview-header');
    sectionHeader.load(content);
    return sectionHeader.getView();
};

var allSections = [];
var eventsParse = function(data) {
    var contentlets = data.contentlets;
    var eventsData = [];
    var oldDate = _.first(contentlets).startDate;
    var section = Ti.UI.createListSection({
        headerView: createHeaderView(moment(oldDate).format('MMMM D, YYYY'))
    });

    _.each(contentlets, function(item, index) {
        if (oldDate != item.startDate) {
            section.setItems(eventsData);
            allSections.push(section);
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
            id: item.identifier,
            content: item
        });
    });
    $.events.setSections(allSections);
    $.events.addEventListener('itemclick', eventDetail);

    // Opening the window when all the content is ready
    // TODO: height is not ok, check that!
    Alloy.Globals.openWindow(standardWinView);
};

var eventDetail = function(e) {
    var detail = allSections[e.sectionIndex].getItemAt(e.itemIndex).content;
    Alloy.Globals.winToOpen({
        id: 'event-detail',
        title: detail.title,
        content: detail
    });
};

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('calendarEvent', 'startDate%20desc', eventsParse);