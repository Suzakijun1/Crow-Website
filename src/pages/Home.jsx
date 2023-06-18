import React from 'react';
import { Flex, Center, Text, Image } from '@chakra-ui/react';
import HomeSection from '../components/HomeSection';

export default function Home({}) {
    return(
        <Flex className="home" justify="center" align="center" direction="column">
        <Center mt={4}>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
          The Dashboard for every occasion
        </Text>
        </Center>
        <Center>
        <Text fontSize="xl" fontWeight="bold">
            A Macro Tool for all of your needs
        </Text>
        </Center>
        <Center mt={4}>
        <Image src="src\assets\OKR-dashboard-example.png" alt="Dashboard" maxW="900px" />
      </Center>
      <Center mt={4}>
            <HomeSection 
            imgLeft={true} 
            />
        </Center>
            </Flex>
    );
}