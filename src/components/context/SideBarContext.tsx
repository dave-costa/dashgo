import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {createContext, useContext, ReactNode, useEffect } from "react";

interface SideBarProviderProps {
    children: ReactNode
}

type ContextData = UseDisclosureReturn

const SideBarContext = createContext({} as ContextData)

export function SideBarProvider({ children }: SideBarProviderProps) {

    const closure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        closure.onClose()

    }, [router.asPath])
    

    return (
        <SideBarContext.Provider value={closure}>
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBar = () => useContext(SideBarContext)