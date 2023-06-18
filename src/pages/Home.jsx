import React from 'react';
import { Flex, Center, Text, Image } from '@chakra-ui/react';
import HomeSection from '../components/HomeSection';

export default function Home({ }) {
    return (
        <Flex className="home" justify="center" align="center" direction="column">
            <Center mt={4}>
                <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
                    The Dashboard for every occasion
                </Text>
            </Center>
            <Center>
                <Text fontSize="xl" fontWeight="bold" color="white">
                    A Macro Tool for all of your needs
                </Text>
            </Center>
            <Center mt={4}>
                <Image src="src\assets\OKR-dashboard-example.png" alt="Dashboard" maxW="900px" />
            </Center>
            <Center mt={4}>
                <HomeSection
                    imgLeft={true}
                    sectionImg="https://images.squarespace-cdn.com/content/v1/5e59534753bf613bfd6fed36/d055a767-6dba-458c-923d-142269fdcbd6/a-mothers-love-the-story-of-two-crows_10.jpg"
                    sectionText="Crow is a Macro Tool that allows you to create and run macros for any occasion. Whether you're a gamer, a programmer, or just a regular person, Crow is for you."
                />
            </Center>
            <Center >
                <HomeSection
                    imgLeft={false}
                    sectionImg="https://images.squarespace-cdn.com/content/v1/5e59534753bf613bfd6fed36/d055a767-6dba-458c-923d-142269fdcbd6/a-mothers-love-the-story-of-two-crows_10.jpg"
                    sectionText="Crow is a Macro Tool that allows you to create and run macros for any occasion. Whether you're a gamer, a programmer, or just a regular person, Crow is for you."
                />
            </Center>
        </Flex>
    );
}