import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
    return (
        <Stack direction="row" mt="8" justifyContent="center" alignItems="center" spacing="6">
            
            <Stack direction="row" spacing="2">
                <Button 
                size="sm" 
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg:"pink.500",
                    cursor: 'default'
                }}
                >
                    1
                </Button>
                <Button 
                size="sm" 
                fontSize="xs"
                width="4"
                colorScheme="pink"
                bg="gray.700"
                _hover={{
                    bgColor: 'gray.500'
                }}
                >
                    2
                </Button>
                <Button 
                size="sm" 
                fontSize="xs"
                width="4"
                colorScheme="pink"
                bg="gray.700"
                _hover={{
                    bgColor: 'gray.500'
                }}
                >
                    3
                </Button>
            </Stack>
        </Stack>
    )
}