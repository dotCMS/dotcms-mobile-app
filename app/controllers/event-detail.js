$.args = arguments[0] || {};
var content = $.args.content;
var standardWinView = $.args.standardWinView;

var eventDate = moment(content.startDate).format('MMM Do YYYY');
var eventStartDate = moment(content.startDate).format('hh:mma');
var eventEndDate = moment(content.endDate).format('hh:mma');
var eventUrl = Alloy.Globals.dotcms.url + '/news-events/events/' + content.urlTitle;

$.eventDate.text = eventDate;
$.eventTime.text = 'From ' + eventStartDate + ' to ' + eventEndDate;
$.eventTitle.text = content.title;
$.textShortened.load(Alloy.Globals.stripHtml(content.description));

Alloy.Globals.openWindow(standardWinView);

$.addToCalendar.addEventListener('click', addToCalendar);

$.share.addEventListener('singletap', function() {
    var content = {
        text: $.eventTitle.text + '\n' + $.eventDate.text + '\n' + $.eventTime.text,
        url: eventUrl
    };
    var shareWidget = Alloy.createWidget('share');
    shareWidget.share(content);
});

function createEvent() {
    var defCalendar;
    if (Alloy.Globals.isAndroid) {
        var CALENDAR_TO_USE = 3;
        defCalendar = Ti.Android.Calendar.getCalendarById(CALENDAR_TO_USE);
    } else {
        defCalendar = Ti.Calendar.defaultCalendar;
    }
    var startDate = new Date(moment(content.startDate).format('2014/MM/D'));
    var endDate = new Date(moment(content.endDate).format('2014/MM/D'));
    var event1 = defCalendar.createEvent({
                    title: content.title,
                    notes: Alloy.Globals.stripHtml(content.description),
                    begin: startDate,
                    end: endDate,
                    availability: Ti.Calendar.AVAILABILITY_FREE,
                    allDay: false,
                });
    event1.save(Ti.Calendar.SPAN_THISEVENT);
    alert(content.title + ' event saved in your calendar');
}

function addToCalendar() {
    if (Alloy.Globals.isAndroid) {
        // TODO: fix for android
        //createEvent();
    } else if (Alloy.Globals.isiOS) {
        if (Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) {
            createEvent();
        } else {
            Ti.Calendar.requestEventsAuthorization(function(e){
                if (e.success) {
                    createEvent();
                } else {
                    alert('Access to calendar is not allowed');
                }
            });
        }
    }
}