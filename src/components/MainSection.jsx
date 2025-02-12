import { 
    Box, 
    Flex, 
    Image, 
    // Heading, 
    // Input, 
    // Button, 
    // Stack, 
    // Text,
    // Separator,

    // VStack
} from '@chakra-ui/react';
import React from 'react';

import mainPageImage from '../assets/mainPage.jpg'; 

const MainSection = () => {
  return (
    <Box as="main" py={16} px={{ base: 4, md: 16 }} bg="#C8E8F5">
      <Flex 
        justify="space-between" 
        align="center" 
        direction={{ base: 'column', md: 'row' }} 
      >
        {/* Left Section - Image */}
        <Box flex="1" mb={{ base: 6, md: 0 }} textAlign="center">
          <Image
            src={mainPageImage} 
            alt="Homepage Illustration"
            boxSize="100%" 
            objectFit="cover" 
          />
        </Box>

        {/* Right Section - Login Form */}
        <Box 
          bg="whitesmoke"
          border="1px"
          
          rounded="2xl"
          flex="1" 
           
          p={8} 
          w="sm"
          maxW="sm"
         
          boxShadow="lg" 
          textAlign="center"
        >
              
        </Box>
      </Flex>
    </Box>
  );
};

export default MainSection;
