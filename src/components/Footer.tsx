import React from "react"
import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { FaGithub, FaTwitter, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa"
import Social from "./Social"

function Footer() {
  return (
    <Box bg='blackAlpha.900'>
      <Container maxW='container.lg'>
        <Flex
          minHeight=''
          padding='2'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Text fontSize='sm' color='white'>
              © {new Date().getFullYear()} - Nattapon Suetrong
            </Text>
          </Box>
          <Social />
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
