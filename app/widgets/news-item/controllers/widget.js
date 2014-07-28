$.args = arguments[0] || {};
var date = $.args.date;
var id = $.args.id;
var image = $.args.image;
var lead = $.args.lead
var title = $.args.title
var commentscount = $.args.commentscount

$.comments.text = commentscount;
$.date.text = date;
$.image.image = image;
$.lead.text = lead || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
$.row.id = id;
$.title.text = title;