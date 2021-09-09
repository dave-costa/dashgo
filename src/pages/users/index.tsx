import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Link as Links,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Spinner,
  Tr,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/pagination/Pagination";
import { SideBar } from "../../components/SideBar/SideBar";
import { queryClient } from "../../services/queryClient";
import Link from "next/link";
import { useQueryHook } from "../../services/hooks/useUsers";
import { client } from "../../services/axios";

export default function UserList() {
  const { data, error, isLoading, isFetching } = useQueryHook();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handlePrefetch(id: number) {
    queryClient.prefetchQuery(
      ["users", id],
      async () => {
        const response = await client.get(`/myapi/${id}`);
        return response.data;
      },
      {
        staleTime: 1000 * 35,
      }
    );
  }
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Users
              {!isLoading && isFetching && (
                <Spinner marginLeft="4" size="sm" color="gray.500" />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="21" />}
              >
                Create new user
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Failed loading data</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" w="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Users</Th>
                    {isWideVersion && <Th>Date</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Links
                            color="purple.400"
                            onMouseEnter={() => handlePrefetch(user.id)}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Links>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          {new Intl.DateTimeFormat("pt-BR", {
                            dateStyle: "long",
                          }).format(new Date(user.created_at))}
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
