$.args = arguments[0] || {};
var date = $.args.date;
var id = $.args.id;
var image = $.args.image;
var lead = $.args.lead
var title = $.args.title

console.log(image);
$.date.text = date;
$.image.image = image;
$.row.id = id;
$.lead.text = lead || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
$.title.text = title;