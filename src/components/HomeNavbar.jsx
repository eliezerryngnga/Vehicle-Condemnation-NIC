import { 
    Box, 
    Flex, 
    Button, 
    Image, 
    Spacer, 
    Text, 
    
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

import megEmblem from '../assets/meg_emblem.png';

const HomeNavbar = () => {
    const links = [
        { label: "Home", path: "/" },
        { label: "Contact Us", path: "/contact-us" },
        { label: "Privacy Policy", path: "/privacy-policy" },
    ];

    return (
        <Box as="nav" bg="#ffffff" w="100%" pt={3} pr={16} pb={3} pl={16} color="black" fontFamily="David Libre, sans serif">
            <Flex align="center" spacing={4} fontFamily="David Libre, sans serif">
                {/* Meghalaya Logo */}
                <Image 
                    src={megEmblem} 
                    w={20} 
                    h={20} 
                    alt="Logo" 
                />
                
                {/* Vertical line */}
                <Box
                    width="1px"
                    h="55px"
                    bg="black"
                    ml={2}
                >
                </Box>

                <Box ml={2}>
                    <Text fontSize="13px"> Vehicle Condemnation System 2.0 </Text>
                    <Text fontSize="13px"> Transport Department </Text>
                    <Text fontSize="13px"> Government of Meghalaya </Text>
                </Box>

                <Spacer />

                {/* Desktop Navigation Links */}
                <Box display={{ base: 'none', md: 'flex' }}>
                    {links.map((link) => (
                        <RouterLink key={link.path} to={link.path}>
                            <Button variant="link" fontSize="15px" color="black" mr={4}>
                                {link.label}
                            </Button>
                        </RouterLink>
                    ))}
                </Box>
            </Flex>
        </Box>
    );
};

export default HomeNavbar;
