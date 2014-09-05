$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

if (!Alloy.Globals.isAndroid) {
    $.ourTeam.searchView = $.ourTeamSearchBar;
}

var createHeaderView = function(content) {
    var sectionHeader = Alloy.createWidget('listview-header');
    sectionHeader.load(content);
    return sectionHeader.getView();
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
                image: Alloy.Globals.dotcms.url + '/contentAsset/image/' + item.inode + '/photo/byInode/1/filter/Resize/resize_w/200',
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
    Alloy.Globals.openWindow(standardWinView);
};

var ourTeamDetail = function(e) {
    var detail = allSections[e.sectionIndex].getItemAt(e.itemIndex).detail;
    Alloy.Globals.winToOpen({
        id: 'our-team-detail',
        title: detail.firstName + ' ' + detail.lastName,
        content: detail
    });
};

var HTTPClient = require('HTTPClient');
HTTPClient.contentAPI('Employee', 'firstName', ourTeamParse);