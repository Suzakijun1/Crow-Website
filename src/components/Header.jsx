import React from 'react';
import { Flex, Box, Button, Link, Image } from '@chakra-ui/react';

export default function Header({}) {
    return (
        <Flex
          as="header"
          align="center"
          justify="space-between"
          py={4}
          px={8}
          boxShadow="md"
          bg="white"
        >
          <Box>
            <Image src="src\assets\crow-image.jpg" alt="Logo" h={8} />
          </Box>
          <Box>
            <Link variant="ghost" mr={4}>
              Download
            </Link>
            <Link href="/about" mr={4}>
              About
            </Link>
            <Link href="/support">Support</Link>
          </Box>
        </Flex>
      );
    }