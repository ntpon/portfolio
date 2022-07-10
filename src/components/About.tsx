import React from "react"
import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react"

interface IProps {
  description: string
  hobby: string
  contact: string
}

function About({ description, hobby, contact }: IProps) {
  return (
    <Box bg='blackAlpha.900' id='about'>
      <Container maxW='container.lg'>
        <Flex padding='25px' flexDirection={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "25%" }}>
            <Flex justifyContent={{ base: "center", md: "flex-start" }}>
              <Avatar
                src='/profile.jpg'
                height='180px'
                width='180px'
                padding='3px'
                _hover={{
                  padding: "1px",
                }}
              />
            </Flex>
          </Box>
          <Box width={{ base: "100%", md: "75%" }}>
            <Box>
              <Heading color='white'>About</Heading>
              <Text color='whiteAlpha.800' marginTop='2'>
                {description}
              </Text>
            </Box>
            <Box marginTop='4'>
              <Heading color='white'>Hobby</Heading>
              <Text color='whiteAlpha.800' marginTop='2'>
                {hobby}
              </Text>
            </Box>
            <Box marginTop='4'>
              <Heading color='white'>Contact</Heading>
              <Text color='whiteAlpha.800' marginTop='2'>
                {contact}
              </Text>
            </Box>
          </Box>
        </Flex>
        <Divider borderColor='gray.500' />
      </Container>
    </Box>
  )
}

export default About
