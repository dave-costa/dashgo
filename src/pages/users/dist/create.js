"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
//native imports
var react_1 = require("react");
var link_1 = require("next/link");
var InputBlank_1 = require("../../components/form/InputBlank");
var Header_1 = require("../../components/Header");
var SideBar_1 = require("../../components/SideBar/SideBar");
var react_2 = require("@chakra-ui/react");
// extern imports
var yup = require("yup");
var yup_1 = require("@hookform/resolvers/yup");
var react_hook_form_1 = require("react-hook-form");
var react_query_1 = require("react-query");
var axios_1 = require("../../services/axios");
var queryClient_1 = require("../../services/queryClient");
var router_1 = require("next/router");
var createUserForSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Your name need 3 character"),
    email: yup.string().required("Email required").email("Invalid email"),
    password: yup
        .string()
        .min(6, "You need 6 character")
        .required("Password required"),
    password_confirmation: yup
        .string()
        .oneOf([null, yup.ref("password")], "Passwords need to be similar")
});
function CreateUser() {
    var _this = this;
    var router = router_1.useRouter();
    var createUser = react_query_1.useMutation(function (user) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.client.post("/myapi", __assign(__assign({}, user), { created_at: new Date() }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, {
        onSuccess: function () {
            queryClient_1.queryClient.invalidateQueries("users");
        }
    });
    var _a = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(createUserForSchema)
    }), register = _a.register, handleSubmit = _a.handleSubmit, formState = _a.formState;
    var errors = formState.errors;
    var handleCreateUser = function (values, event) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, createUser.mutateAsync(values)];
                case 1:
                    _a.sent();
                    router.push("/users");
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_2.Box, null,
        react_1["default"].createElement(Header_1.Header, null),
        react_1["default"].createElement(react_2.Flex, { w: "100%", my: "6", maxWidth: 1480, mx: "auto", px: "6" },
            react_1["default"].createElement(SideBar_1.SideBar, null),
            react_1["default"].createElement(react_2.Box, { as: "form", flex: "1", onSubmit: handleSubmit(handleCreateUser), borderRadius: 8, bg: "gray.800", p: ["6", "8"] },
                react_1["default"].createElement(react_2.Heading, { size: "lg", fontWeight: "normal" }, "Create new user"),
                react_1["default"].createElement(react_2.Divider, { my: "6", borderColor: "gray.700" }),
                react_1["default"].createElement(react_2.VStack, { spacing: "8" },
                    react_1["default"].createElement(react_2.SimpleGrid, { minChildWidth: 240, spacing: ["6", "8"], w: "100%" },
                        react_1["default"].createElement(InputBlank_1.InputBlank, __assign({}, register("name"), { name: "name", label: "Full name", error: errors.name })),
                        react_1["default"].createElement(InputBlank_1.InputBlank, __assign({}, register("email"), { name: "email", type: "Email", label: "E-mail", error: errors.email }))),
                    react_1["default"].createElement(react_2.SimpleGrid, { minChildWidth: 240, spacing: ["6", "8"], w: "100%" },
                        react_1["default"].createElement(InputBlank_1.InputBlank, __assign({}, register("password"), { name: "password", type: "password", label: "Password", error: errors.password })),
                        react_1["default"].createElement(InputBlank_1.InputBlank, __assign({ name: "password_confirmation" }, register("password_confirmation"), { type: "password", label: "Repeat password", error: errors.password_confirmation })))),
                react_1["default"].createElement(react_2.Flex, { mt: "8", justify: "flex-end" },
                    react_1["default"].createElement(react_2.HStack, { spacing: "4" },
                        react_1["default"].createElement(link_1["default"], { href: "/users" },
                            react_1["default"].createElement(react_2.Button, { as: "a", colorScheme: "whiteAlpha" }, "Cancel")),
                        react_1["default"].createElement(react_2.Button, { type: "submit", isLoading: formState.isSubmitting, colorScheme: "pink" }, "Save")))))));
}
exports["default"] = CreateUser;
