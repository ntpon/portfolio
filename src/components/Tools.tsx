import React from "react"
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

interface IProps {
  tools: { name: string; src: string }[]
}
function Tools({ tools }: IProps) {
  return (
    <Box bg='gray.50' paddingY='4' id='tools'>
      <Container maxW='container.lg'>
        <Box paddingTop='4'>
          <Heading color='gray.700' fontSize='4xl' textAlign='center'>
            Skill & Tools
          </Heading>
          <Divider />
          <Flex padding='25px' justifyContent='center'>
            <Flex flexWrap='wrap'>
              {tools.map(({ name, src }) => (
                <Flex
                  width={{ base: "80px", md: "120px" }}
                  flexDir='column'
                  alignItems='center'
                  margin='1'
                  key={name}
                >
                  <Image
                    margin='1'
                    src={`${process.env.PUBLIC_URL}/${src}`}
                    objectFit='contain'
                    height='100%'
                    width='50px'
                  />
                  <Text marginTop='1'>{name}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Tools
