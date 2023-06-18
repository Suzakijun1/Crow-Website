
import { Flex, Image, Text, Box } from '@chakra-ui/react';


export default function HomeSection({ imgLeft, sectionText, sectionImg }) {
    return (
        <Flex direction={{ base: 'column', md: 'row' }}
            bgColor="gray.200"
            width={"100vw"}>
            <Box flex={1} >
                {!imgLeft ? (
                    <Text>{sectionText}</Text>
                ) : (
                    <Image boxSize={"200px"}objectFit={"cover"} src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
                )}
            </Box>
            <Box flex={1}>
                {!imgLeft ? (
                        <Image boxSize={"200px"} ml="auto" objectFit={"cover"} src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
                    ) : (
                    <Text>{sectionText}</Text>
                )}
            </Box>
        </Flex>
    );
}