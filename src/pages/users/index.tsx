import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar/SideBar";

import Link from 'next/link'

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex 
            w="100%" 
            my="6" 
            maxWidth={1480} 
            mx="auto" 
            px="6"
            >
                <SideBar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justifyContent="space-between" alignItems="center">
                        <Heading size="lg" fontWeight="normal" >
                            Users
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button 
                            as="a" 
                            size="sm" 
                            fontSize="small" 
                            colorScheme="pink" 
                        
                            leftIcon={ <Icon as={RiAddLine} fontSize="21"/> }>
                                Create new user
                            </Button>
                        
                        </Link>
                        
                    </Flex>
                
                
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" w="8" >
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Users
                                </Th>
                                {isWideVersion && <Th>
                                    Date
                                </Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Dave Costa</Text>
                                        <Text fontSize="sm" color="gray.300">dave.programador@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion &&  <Td>
                                    06 Agosto, 2021
                                </Td>}
                            </Tr>

                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}