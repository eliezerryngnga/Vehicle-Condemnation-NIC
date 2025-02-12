import React from 'react'

import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

import MainSection from '@/components/MainSection'

import { Box, Button, Spacer, Text } from '@chakra-ui/react'
const Home = () => {
  return (
    <>
        <HomeNavbar />
        <Spacer />

        <MainSection />
        <Spacer />
        <Footer />
    </>

  )
}

export default Home
