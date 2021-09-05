import { Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBar } from './context/SideBarContext'
import { Logo } from './Header/Logo'
import { Notifications } from './Header/Notifications'
import { Profile } from './Header/Profile'
import { Search } from './Header/Search'

export function Header() {

    const showItemLargeScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    const { onOpen } = useSideBar()

    return (
        <Flex 
        as="header" 
        w="100%" 
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        >

            { !showItemLargeScreen && (
                <IconButton 
                aria-label="Open Navigation"
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
                >

                </IconButton>
            )}

            <Logo />

            { showItemLargeScreen && <Search /> }
            
            <Flex
            alignItems="center"
            ml="auto"

            >
                <Notifications />
                <Profile showProfileData={showItemLargeScreen} />
            </Flex>
        </Flex>
    )
}