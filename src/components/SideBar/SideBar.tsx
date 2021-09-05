import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useSideBar } from "../context/SideBarContext";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
    const openSideBarForSmallScreen = useBreakpointValue({
        base:true, 
        lg:false
    })

    const { isOpen, onClose } = useSideBar()

    if (openSideBarForSmallScreen) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navigation</DrawerHeader>

                        <DrawerBody>
                            <SideBarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box 
        as="aside" 
        w="64"
        mr="8"
        >
            <SideBarNav />
        </Box>
    )
}