var args = arguments[0]||{};

var the_image = args.image || '';
var item_width = args.width || '95%';
var item_height = args.height || '95%';


$.thumb.image = the_image;
$.imgContainer.width = item_width;
$.imgContainer.height = item_height;