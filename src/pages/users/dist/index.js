"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var ri_1 = require("react-icons/ri");
var Header_1 = require("../../components/Header");
var Pagination_1 = require("../../components/pagination/Pagination");
var SideBar_1 = require("../../components/SideBar/SideBar");
var queryClient_1 = require("../../services/queryClient");
var link_1 = require("next/link");
var useUsers_1 = require("../../services/hooks/useUsers");
var axios_1 = require("../../services/axios");
function UserList() {
    var _a = useUsers_1.useQueryHook(), data = _a.data, error = _a.error, isLoading = _a.isLoading, isFetching = _a.isFetching;
    var isWideVersion = react_1.useBreakpointValue({
        base: false,
        lg: true
    });
    function handlePrefetch(id) {
        var _this = this;
        queryClient_1.queryClient.prefetchQuery(["users", id], function () { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.client.get("/myapi/" + id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); }, {
            staleTime: 1000 * 35
        });
    }
    return (react_2["default"].createElement(react_1.Box, null,
        react_2["default"].createElement(Header_1.Header, null),
        react_2["default"].createElement(react_1.Flex, { w: "100%", my: "6", maxWidth: 1480, mx: "auto", px: "6" },
            react_2["default"].createElement(SideBar_1.SideBar, null),
            react_2["default"].createElement(react_1.Box, { flex: "1", borderRadius: 8, bg: "gray.800", p: "8" },
                react_2["default"].createElement(react_1.Flex, { mb: "8", justifyContent: "space-between", alignItems: "center" },
                    react_2["default"].createElement(react_1.Heading, { size: "lg", fontWeight: "normal" },
                        "Users",
                        !isLoading && isFetching && (react_2["default"].createElement(react_1.Spinner, { marginLeft: "4", size: "sm", color: "gray.500" }))),
                    react_2["default"].createElement(link_1["default"], { href: "/users/create", passHref: true },
                        react_2["default"].createElement(react_1.Button, { as: "a", size: "sm", fontSize: "small", colorScheme: "pink", leftIcon: react_2["default"].createElement(react_1.Icon, { as: ri_1.RiAddLine, fontSize: "21" }) }, "Create new user"))),
                isLoading ? (react_2["default"].createElement(react_1.Flex, { justify: "center" },
                    react_2["default"].createElement(react_1.Spinner, null))) : error ? (react_2["default"].createElement(react_1.Flex, { justify: "center" },
                    react_2["default"].createElement(react_1.Text, null, "Failed loading data"))) : (react_2["default"].createElement(react_2["default"].Fragment, null,
                    react_2["default"].createElement(react_1.Table, { colorScheme: "whiteAlpha" },
                        react_2["default"].createElement(react_1.Thead, null,
                            react_2["default"].createElement(react_1.Tr, null,
                                react_2["default"].createElement(react_1.Th, { px: ["4", "4", "6"], color: "gray.300", w: "8" },
                                    react_2["default"].createElement(react_1.Checkbox, { colorScheme: "pink" })),
                                react_2["default"].createElement(react_1.Th, null, "Users"),
                                isWideVersion && react_2["default"].createElement(react_1.Th, null, "Date"))),
                        react_2["default"].createElement(react_1.Tbody, null, data.map(function (user) { return (react_2["default"].createElement(react_1.Tr, { key: user.id },
                            react_2["default"].createElement(react_1.Td, { px: ["4", "4", "6"] },
                                react_2["default"].createElement(react_1.Checkbox, { colorScheme: "pink" })),
                            react_2["default"].createElement(react_1.Td, null,
                                react_2["default"].createElement(react_1.Box, null,
                                    react_2["default"].createElement(react_1.Link, { color: "purple.400", onMouseEnter: function () { return handlePrefetch(user.id); } },
                                        react_2["default"].createElement(react_1.Text, { fontWeight: "bold" }, user.name)),
                                    react_2["default"].createElement(react_1.Text, { fontSize: "sm", color: "gray.300" }, user.email))),
                            isWideVersion && (react_2["default"].createElement(react_1.Td, null, new Intl.DateTimeFormat("pt-BR", {
                                dateStyle: "long"
                            }).format(new Date(user.created_at)))))); }))),
                    react_2["default"].createElement(Pagination_1.Pagination, null)))))));
}
exports["default"] = UserList;
