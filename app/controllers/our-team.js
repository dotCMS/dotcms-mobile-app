$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

if (!Alloy.Globals.isAndroid) {
    $.ourTeam.searchView = $.ourTeamSearchBar;
}

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

    if (Alloy.Globals.isAndroid) {
        label.top = -6;
        inner.left = 0;
    }
    var view = Ti.UI.createView();
    inner.add(label);
    view.add(inner);

    return view;
};

var allSections = [];
var ourTeamParse = function(data) {
    var indexLetters = [];
    var contentlets = data.contentlets;
    var ourTeamData = [];
    var oldIndexLetter = _.first(contentlets).firstName[0];
    var indexTitles = 0;
    indexLetters.push({
        index: indexTitles,
        title: oldIndexLetter
    });
    indexTitles++;
    var section = Ti.UI.createListSection({
        headerView: createHeaderView(oldIndexLetter)
    });

    _.each(contentlets, function(item) {
        if (oldIndexLetter != item.firstName[0]) {
            section.setItems(ourTeamData);
            ourTeamData = [];

            allSections.push(section);
            section = Ti.UI.createListSection({
                headerView: createHeaderView(item.firstName[0])
            });
            oldIndexLetter = item.firstName[0];
            indexLetters.push({
                index: indexTitles,
                title: oldIndexLetter
            });
            indexTitles++;
        }

        ourTeamData.push({
            teamMemberAvatar: {
                // TODO: find a solution for images not set in dotcms
                //image: item.photo
                image: "/images/avatar-unknown.png",
            },
            teamMemberName: {
                text: item.firstName + ' ' + item.lastName
            },
            teamMemberjobTitle: {
                   text: item.jobTitle
            },
            properties: {
                searchableText: item.firstName + ' ' + item.lastName,
            },
            detail: item
        });
    });

    // Set the index letter on the right, disabled for now
    //$.ourTeam.sectionIndexTitles = indexLetters;

    $.ourTeam.setSections(allSections);
    $.ourTeam.addEventListener('itemclick', ourTeamDetail);;

    // Opening the window when all the content is ready
    Alloy.Globals.navcontroller.open(standardWinView);
};

var ourTeamDetail = function(e) {
    var detail = allSections[e.sectionIndex].getItemAt(e.itemIndex).detail;
    Alloy.Globals.openWindow({
        id: 'our-team-detail',
        title: detail.firstName + ' ' + detail.lastName,
        content: detail
    });
};

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('Employee', 'firstName', ourTeamParse);