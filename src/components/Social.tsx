import { Box, Flex, Icon, Link } from "@chakra-ui/react"
import React from "react"
import { FaFreeCodeCamp, FaGithub, FaTwitter } from "react-icons/fa"

function Social() {
  return (
    <Flex alignItems='center' height='100%' zIndex={1}>
      <Box marginX='2'>
        <a href='https://twitter.com/art00254' target='_blank'>
          <Icon
            as={FaTwitter}
            fontSize='3xl'
            color='gray'
            marginTop='5px'
            _hover={{
              color: "white",
            }}
          />
        </a>
      </Box>
      <Box marginX='2'>
        <a href='http://github.com/ntpon' target='_blank'>
          <Icon
            as={FaGithub}
            fontSize='3xl'
            color='gray'
            marginTop='5px'
            _hover={{
              color: "white",
            }}
          />
        </a>
      </Box>
      <Box marginX='2'>
        <a href='https://www.freecodecamp.org/art0254' target='_blank'>
          <Icon
            as={FaFreeCodeCamp}
            fontSize='3xl'
            color='gray'
            marginTop='5px'
            _hover={{
              color: "white",
            }}
          />
        </a>
      </Box>
    </Flex>
  )
}

export default Social
