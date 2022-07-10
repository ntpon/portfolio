import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-scroll"
interface IProps {
  name: string
  link: string
}
function Nav({ name, link }: IProps) {
  return (
    <Box
      zIndex={1}
      paddingX='15px'
      paddingY='10px'
      cursor='pointer'
      fontSize='1.2rem'
      borderBottom='2px solid transparent'
      _hover={{
        borderBottom: "2px solid #28a745",
      }}
    >
      <Link to={link} smooth={true}>
        <Text color='white'>{name}</Text>
      </Link>
    </Box>
  )
}

export default Nav
