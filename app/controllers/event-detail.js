// TODO:
// Actions:
// -- Add to calendar
// -- Share

$.args = arguments[0] || {};
var content = $.args.content;
var standardWinView = $.args.standardWinView;

var eventDate = moment(content.startDate).format('MMM Do YYYY');
var eventStartDate = moment(content.startDate).format('hh:mma');
var eventEndDate = moment(content.endDate).format('hh:mma');

$.eventDate.text = eventDate;
$.eventTime.text = 'From ' + eventStartDate + ' to ' + eventEndDate;
$.eventTitle.text = content.title;
$.textShortened.load(Alloy.Globals.stripHtml(content.description));

Alloy.Globals.navcontroller.open(standardWinView);