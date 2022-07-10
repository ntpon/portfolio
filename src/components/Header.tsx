import React, { useEffect, useState } from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  keyframes,
  Link,
  Text,
} from "@chakra-ui/react"
import Nav from "./Nav"
import Social from "./Social"
const animationKeyframes = keyframes`
  0% { background:transparent; }
  100% {background:rgba(0, 0, 0, 0.9);}
`
const animation = `${animationKeyframes} 0.5s`

interface IProps {
  title: string
  description: string
  menu: {
    name: string
    link: string
  }[]
}
function Header({ title, description, menu }: IProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar)
    return () => {
      window.removeEventListener("scroll", stickNavbar)
    }
  }, [])
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 50 ? setIsSticky(true) : setIsSticky(false)
    }
  }
  return (
    <Box
      height='100vh'
      bgImg='/bg.jpg'
      bgPosition='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      position='relative'
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
      }}
      id='home'
    >
      <Flex
        zIndex={10}
        justifyContent={{ base: "center", md: "end" }}
        paddingX='20px'
        // paddingY='10px'
        width='100%'
        position='fixed'
        bg={isSticky ? "rgba(0,0,0,0.9)" : "transparent"}
        boxShadow={isSticky ? "lg" : "none"}
        animation={isSticky ? animation : "none"}
      >
        {menu.map(({ name, link }) => (
          <Nav name={name} link={link} />
        ))}
      </Flex>

      <Flex
        alignItems='flex-start'
        flexDir='column'
        padding='20px'
        paddingTop='150px'
      >
        <Container maxWidth='container.lg' zIndex={1}>
          <Heading color='white' fontSize='xxx-large'>
            {title}
          </Heading>
          <Box marginBottom='2'>
            <Text color='white' fontSize='22px' marginY='10px'>
              {description}
            </Text>
          </Box>
          <Social />
        </Container>
      </Flex>
    </Box>
  )
}

export default Header
