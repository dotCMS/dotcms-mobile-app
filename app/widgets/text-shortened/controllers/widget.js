$.load = function(content) {
    $.contentText.text = content;
    $.btnMore.addEventListener('click', toggleMoreInfo);
};

function toggleMoreInfo() {
    $.contentText.height = $.contentText.getHeight() == 135 ? Ti.UI.SIZE : 135;
    $.contentText.ellipsize = $.contentText.getEllipsize() ? false : true;
    $.btnMore.title = $.btnMore.getTitle() == 'MORE' ? 'LESS' : 'MORE';
}