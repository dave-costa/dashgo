"use strict";
exports.__esModule = true;
exports.SideBarNav = void 0;
var react_1 = require("@chakra-ui/react");
var ri_1 = require("react-icons/ri");
var link_1 = require("next/link");
function SideBarNav() {
    return (React.createElement(react_1.Stack, { spacing: "12", align: "flex-start" },
        React.createElement(react_1.Box, null,
            React.createElement(react_1.Text, { fontWeight: "bold", color: "gray.400", fontSize: "small" }, "Principal"),
            React.createElement(react_1.Stack, { spacing: "4", mt: "8", align: "stretch" },
                React.createElement(link_1["default"], { href: "/dashboard", passHref: true },
                    React.createElement(react_1.Link, { display: "flex", align: "center" },
                        React.createElement(react_1.Icon, { as: ri_1.RiDashboardLine, fontSize: "20" }),
                        React.createElement(react_1.Text, { ml: "4", fontWeight: "medium" }, "Dashboard"))),
                React.createElement(link_1["default"], { href: "/users", passHref: true },
                    React.createElement(react_1.Link, { display: "flex", align: "center" },
                        React.createElement(react_1.Icon, { as: ri_1.RiContactsLine, fontSize: "20" }),
                        React.createElement(react_1.Text, { ml: "4", fontWeight: "medium" }, "Users"))))),
        React.createElement(react_1.Box, null,
            React.createElement(react_1.Text, { fontWeight: "bold", color: "gray.400", fontSize: "small" }, "Automation"),
            React.createElement(react_1.Stack, { spacing: "4", mt: "8", align: "stretch" },
                React.createElement(link_1["default"], { href: "/forms", passHref: true },
                    React.createElement(react_1.Link, { display: "flex", align: "center" },
                        React.createElement(react_1.Icon, { as: ri_1.RiInputMethodLine, fontSize: "20" }),
                        React.createElement(react_1.Text, { ml: "4", fontWeight: "medium" }, "Forms"))),
                React.createElement(link_1["default"], { href: "/automation", passHref: true },
                    React.createElement(react_1.Link, { display: "flex", align: "center" },
                        React.createElement(react_1.Icon, { as: ri_1.RiGitMergeLine, fontSize: "20" }),
                        React.createElement(react_1.Text, { ml: "4", fontWeight: "medium" }, "Automation")))))));
}
exports.SideBarNav = SideBarNav;
