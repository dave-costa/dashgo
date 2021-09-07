"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("@chakra-ui/react");
var ri_1 = require("react-icons/ri");
var SideBarContext_1 = require("./context/SideBarContext");
var Logo_1 = require("./Header/Logo");
var Notifications_1 = require("./Header/Notifications");
var Profile_1 = require("./Header/Profile");
var Search_1 = require("./Header/Search");
function Header() {
    var showItemLargeScreen = react_1.useBreakpointValue({
        base: false,
        lg: true
    });
    var onOpen = SideBarContext_1.useSideBar().onOpen;
    return (React.createElement(react_1.Flex, { as: "header", w: "100%", maxWidth: 1480, h: "20", mx: "auto", mt: "4", px: "6", align: "center" },
        !showItemLargeScreen && (React.createElement(react_1.IconButton, { "aria-label": "Open Navigation", icon: React.createElement(react_1.Icon, { as: ri_1.RiMenuLine }), fontSize: "24", variant: "unstyled", onClick: onOpen, mr: "2" })),
        React.createElement(Logo_1.Logo, null),
        showItemLargeScreen && React.createElement(Search_1.Search, null),
        React.createElement(react_1.Flex, { alignItems: "center", ml: "auto" },
            React.createElement(Notifications_1.Notifications, null),
            React.createElement(Profile_1.Profile, { showProfileData: showItemLargeScreen }))));
}
exports.Header = Header;
