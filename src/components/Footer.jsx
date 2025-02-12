import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

import digitalIndia from '../assets/digital.png'; // Replace with your actual image paths
import NIC_Logo from '../assets/Nic_logo2-01.png'; // Replace with your actual image paths

const Footer = () => {
    return (
        <Box as="footer" bg="#f1f1f1" py={4}>
            <Flex 
                justify="space-between" 
                align="center" 
                px={{ base: 4, md: 16 }} // Responsive padding
                direction={{ base: 'column', md: 'row' }} // Stack items vertically on mobile, horizontally on desktop
            >
                {/* Left Side - Text */}
                <Box>
                  <Text fontSize="17px" color="gray.600" textAlign={{ base: 'center', md: 'left', lg: 'center' }}>
                    Content owned by Secretariat Administration Department,Government of Meghalaya
                  </Text>
                  <Text fontSize="17px" color="gray.600" textAlign={{ base: 'center', md: 'left', lg: 'center' }}>
                    Developed and hosted by National Informatics Center, Meghalaya
                  </Text>
                </Box>
              
                {/* Right Side - Images */}
                <Box 
                    display="flex" 
                    flexDirection="row" // Stack images vertically
                    alignItems="center" // Center images horizontally
                    mt={{ base: 2, md: 0 }} // Reduced margin-top for smaller spacing
                    
                >  
                    <Image 
                    src={digitalIndia}
                    maxW="200px" 
                    maxH="200px"
                    alt="Digital India"
                     />
                    
                    <Image 
                    src={NIC_Logo} 
                    alt="NIC Logo"
                    maxW="200px"
                    maxH="200px"  />
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
