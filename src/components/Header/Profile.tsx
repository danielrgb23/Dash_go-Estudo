import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
 return (
  <Flex align="center">
     <Box mr='4' textAlign='right'>
      <Text>Daniel Augusto</Text>
      <Text color='gray.300' fontSize='small'>danielrgb2@gmail.com</Text>
     </Box>

     <Avatar size='md' name='Daniel Augusto' src='https://github.com/danielrgb23.png'/>
    </Flex>
 );
}