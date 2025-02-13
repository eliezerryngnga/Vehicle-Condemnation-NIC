import { 
    Box, 
    Flex, 
    Image, 
} from '@chakra-ui/react';
import React from 'react';

import mainPageImage from '../assets/mainPage.jpg'; 

// import TestForm from './Testform';
import SignInForm from './SignInForm';

const MainSection = () => {
  return (
    <Box as="main" py={16} px={{ base: 4, md: 16 }} bg="#C8E8F5">
      <Flex 
        justify="space-between" 
        align="center" 
        direction={{ base: 'column', md: 'row' }} 
      >
        {/* Left Section - Image */}

          <Box 
            flex="1" 
            // mb={{ base: 6, md: 0 }} 
            textAlign="center"
            // display={{base: 'none', md: 'block'}}
            hideBelow="md"
          >
            <Image
              src={mainPageImage} 
              alt="Homepage Illustration"
              maxH="500px"
              // boxSize="100%" 
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
          <SignInForm />
        </Box>
      </Flex>

    </Box>
  );
};

export default MainSection;
