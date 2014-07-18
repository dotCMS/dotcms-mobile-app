var ourTeamParse = function(data) {
    var contentlets = JSON.parse(data).contentlets;

    var ourTeamData = [];
    _.each(contentlets, function(teamMember) {
        var row = Titanium.UI.createTableViewRow({
            title: teamMember.firstName + ' ' + teamMember.lastName,
            detail: teamMember
        });
        $.resetClass(row, 'team-member-row');
        row.addEventListener('click', ourTeamDetail);
        ourTeamData.push(row);
    });

    $.ourTeam.setData(ourTeamData);
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