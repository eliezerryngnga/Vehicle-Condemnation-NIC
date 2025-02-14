import React from 'react'

import { 
    useFetchUsersProfile 
} from '@/hooks/userQueries';
import { 
    Center, 
    Spinner, 
    Stack, 
    useDisclosure 
} from '@chakra-ui/react'

import { Navigate, Outlet } from 'react-router-dom';
import Footer from './Footer';

const GuestRoutes = () => {

    const drawer = useDisclosure();

    const profileQuery = useFetchUsersProfile();

    if(profileQuery.isPending)
    {
        return (
            <Center minH="100dvh">
                <Spinner thickness="4px" size="xl" color="brand.600"></Spinner>
            </Center>
        );
    }

    if(profileQuery.isSuccess && profileQuery?.data?.data?.role === "ADMIN")
    {
        return <Navigate to="/admind/dashboard" />
    }

    if (profileQuery.isSuccess && profileQuery?.data?.data?.role === "DA")
        return <Navigate to="/da/dashboard" />;
    
      if (profileQuery.isSuccess && profileQuery?.data?.data?.role === "TD")
        return <Navigate to="/td/dashboard" />;

    return (
        <>
            {/* <GuestNavDraw isOpen={drawer.isOpen} onClose={drawer.onClose} /> */}
            <Stack 
                minH="100vh"
                direction="column"
                justify="flex-start"
                gap={4}
            >

                <Outlet />

                <Footer />

            </Stack>
        </>
    


  )
}

export default GuestRoutes
