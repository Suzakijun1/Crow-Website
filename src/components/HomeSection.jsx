import HomeImgSection from "./HomeImgSection"
import HomeTextSection from "./HomeTextSection"
import { Flex, Box } from '@chakra-ui/react';


export default function HomeSection({imgLeft}) {
    return(
        <Flex direction={{ base: 'column', md: 'row' }}
        bgColor="gray.200">
        <Box flex={1}>
            {!imgLeft ? (<HomeTextSection 
            sectionText="Home Text Section"
            /> ): (
            <HomeImgSection
            sectionImg={"https://images.squarespace-cdn.com/content/v1/5e59534753bf613bfd6fed36/d055a767-6dba-458c-923d-142269fdcbd6/a-mothers-love-the-story-of-two-crows_10.jpg"}
            />)}
            </Box>
            <Box flex={1}>
            {!imgLeft ? (
            <HomeImgSection
            sectionImg={"https://images.squarespace-cdn.com/content/v1/5e59534753bf613bfd6fed36/d055a767-6dba-458c-923d-142269fdcbd6/a-mothers-love-the-story-of-two-crows_10.jpg"}
            /> ): (
            <HomeTextSection 
            sectionText="Home Text Section"
            /> )}
            </Box>
            </Flex>
    );
}