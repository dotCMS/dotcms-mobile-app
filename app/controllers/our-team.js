$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

var ourTeamParse = function(data) {
    var contentlets = data.contentlets;

    var ourTeamData = [];
    _.each(contentlets, function(teamMember) {
        var row = Titanium.UI.createTableViewRow({
            title: teamMember.firstName + ' ' + teamMember.lastName,
            detail: teamMember
        });
        var rowClass = 'team-member-row';
        if (Alloy.Globals.isAndroid) {
            row.className = rowClass;
        } else {
            $.resetClass(row, rowClass);
        }
        row.addEventListener('click', ourTeamDetail);
        ourTeamData.push(row);
    });

    $.ourTeam.setData(ourTeamData);
    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);
}

var ourTeamDetail = function(e) {
    Alloy.Globals.openWindow({
        id: 'our-team-detail',
        title: e.row.detail.title,
        detail: e.row.detail
    });
}

var HTTPClient = require('HTTPClient');
HTTPClient('Employee', 'firstName', ourTeamParse);