import React from "react";

import { 
    Container, 
    Heading, 
    Stack, 
    Text, 
    Box 
} from "@chakra-ui/react";

const ContactUsPage = () => {
  return (
  
    <Box bg="#C8E8F5" minH="85vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.xl">
        <Stack spacing={4} align="center">
            
          <Box
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            maxW="md"
            w="100%"
          >
            
            <Heading size="md" mb={6} textAlign="center">
              Contact Us
            </Heading>

            <Stack spacing={4} align="center">
              <Stack spacing={2} textAlign="center">
                <Text fontWeight="bold">General Administration Department (B)</Text>
                <Stack spacing={0}>
                  <Text color="body">Room No.228 (1st floor)</Text>
                  <Text color="body">Rilang Building Meghalaya Secretariat,</Text>
                  <Text color="body">Shillong - 793001</Text>
                </Stack>
              </Stack>

              <Stack spacing={2} textAlign="center">
                <Text fontWeight="bold">Technical Contact</Text>
                <Stack spacing={0}>
                  <Text color="body">National Informatics Centre,</Text>
                  <Text color="body">Meghalaya Secretariat Hill,</Text>
                  <Text color="body">Shillong - 793001</Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  
  );
};

export default ContactUsPage;
