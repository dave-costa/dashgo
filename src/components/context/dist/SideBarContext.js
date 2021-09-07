"use strict";
exports.__esModule = true;
exports.useSideBar = exports.SideBarProvider = void 0;
var react_1 = require("@chakra-ui/react");
var router_1 = require("next/router");
var react_2 = require("react");
var SideBarContext = react_2.createContext({});
function SideBarProvider(_a) {
    var children = _a.children;
    var closure = react_1.useDisclosure();
    var router = router_1.useRouter();
    react_2.useEffect(function () {
        closure.onClose();
    }, [router.asPath]);
    return (React.createElement(SideBarContext.Provider, { value: closure }, children));
}
exports.SideBarProvider = SideBarProvider;
exports.useSideBar = function () { return react_2.useContext(SideBarContext); };
