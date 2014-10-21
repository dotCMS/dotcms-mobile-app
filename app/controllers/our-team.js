// Receive the arguments we send when the controller is created
$.args = arguments[0] || {};
var standardWinView = $.args.standardWinView;

// Adding listview search bar for android
if (!Alloy.Globals.isAndroid) {
    $.ourTeam.searchView = $.ourTeamSearchBar;
}

/**
Create the header for each secion of the list
@param a string with the letter.
@return a view object with the header section styled.
*/
var createHeaderView = function(content) {
    var sectionHeader = Alloy.createWidget('listview-header');
    sectionHeader.load(content);
    return sectionHeader.getView();
};

var allSections = [];

/**
Parse the data received from the request. Get all the contentlet
and create a listview row for each. Also create a listview section
for each letter of the names of the team members.
@param a json object with all the data from dotCMS
*/
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

    // Add all the sections to the listview
    $.ourTeam.setSections(allSections);

    // Opening the window when all the content is ready
    standardWinView.open();
};

// Load the HTTPClient component
var HTTPClient = require('HTTPClient');

/**
Make the request to dotCMS enviroment
@param dotCMS struture name
@param order by field
@param function to callback when the request it's done.
*/

HTTPClient.contentAPI('Employee', 'firstName', ourTeamParse);