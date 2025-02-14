import SignInForm from '@/forms/auth/SignInForm';

import {
     Box, 
     Flex, 
     Image 
} from '@chakra-ui/react';

import React from 'react';

import mainPageImage from "../../assets/mainPage.jpg";

const HomePage = () => {
  return (
    <Box as="main" py={16} px={{base: 4, md: 16}} bg="#C8E8F5">
        <Flex
            justify="space-between"
            align="center"
            direction={{base: 'column', md: 'row'}}
        >
            {/* Left Section - Image */}

            
                <Box hideBelow="lg" flex="1" mb={{base: 6, md : 0}} textAlign="center">
                    <Image
                        src={mainPageImage}
                        alt="Car Illustration"
                        w={{ base: "80%", md: "70%"}}
                        maxH="500px"
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
  )
}

export default HomePage
