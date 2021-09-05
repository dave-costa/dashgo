import { Stack, Box, Text,Link as ChakraLink, Icon } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

import { ActiveLink } from '../ActiveLink'

export function SideBarNav () {
    return (

        <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">
                        Principal
                    </Text>
                    <Stack spacing="4" mt="8" align="stretch">

                        <ActiveLink href="/dashboard" passHref>
                            <ChakraLink display="flex" align="center">
                                <Icon as={RiDashboardLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Dashboard</Text>
                            </ChakraLink>
                        </ActiveLink>
                        <ActiveLink href="/users" passHref>
                            <ChakraLink display="flex" align="center">
                                <Icon as={RiContactsLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Users</Text>
                            </ChakraLink>
                        </ActiveLink>
                        
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">
                        Automation
                    </Text>
                    <Stack spacing="4" mt="8" align="stretch">

                        <ActiveLink href="/forms" passHref>
                            <ChakraLink display="flex" align="center">
                                <Icon as={RiInputMethodLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Forms</Text>
                            </ChakraLink>
                        </ActiveLink>
                        
                        <ActiveLink href="/automation" passHref>
                            <ChakraLink display="flex" align="center">
                                <Icon as={RiGitMergeLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Automation</Text>
                            </ChakraLink>
                        </ActiveLink>
                        
                    </Stack>
                </Box>
            </Stack>
    )
} 