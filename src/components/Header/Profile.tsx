import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

type showItem = {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: showItem) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Dave Costa</Text>
                <Text color="gray.300" fontSize="small" >dave.costa@gmail.com</Text>
                </Box>
            ) }
            <Avatar 
            size="md" 
            name="Dave Costa" 
            src="https://avatars.githubusercontent.com/u/77032296?s=60&v=4"  />
        </Flex>
    )
}