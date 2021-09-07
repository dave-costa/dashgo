"use strict";
exports.__esModule = true;
exports.Pagination = void 0;
var react_1 = require("@chakra-ui/react");
function Pagination() {
    return (React.createElement(react_1.Stack, { direction: "row", mt: "8", justifyContent: "center", alignItems: "center", spacing: "6" },
        React.createElement(react_1.Stack, { direction: "row", spacing: "2" },
            React.createElement(react_1.Button, { size: "sm", fontSize: "xs", width: "4", colorScheme: "pink", disabled: true, _disabled: {
                    bg: "pink.500",
                    cursor: 'default'
                } }, "1"),
            React.createElement(react_1.Button, { size: "sm", fontSize: "xs", width: "4", colorScheme: "pink", bg: "gray.700", _hover: {
                    bgColor: 'gray.500'
                } }, "2"),
            React.createElement(react_1.Button, { size: "sm", fontSize: "xs", width: "4", colorScheme: "pink", bg: "gray.700", _hover: {
                    bgColor: 'gray.500'
                } }, "3"))));
}
exports.Pagination = Pagination;
