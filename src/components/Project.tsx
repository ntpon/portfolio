import {
  Container,
  Heading,
  Divider,
  Flex,
  Box,
  Image,
  Text,
  Link,
} from "@chakra-ui/react"
import React from "react"
interface IProps {
  projects: {
    name: string
    description: string
    link: string
    src: string
  }[]
}
function Project({ projects }: IProps) {
  return (
    <Box bg='gray.50' paddingY='4' id='project'>
      <Container maxW='container.lg'>
        <Box paddingTop='4'>
          <Heading color='gray.700' fontSize='4xl' textAlign='center'>
            Project
          </Heading>
          <Divider />
          <Flex padding='25px' justifyContent='center'>
            <Flex flexWrap='wrap'>
              {projects.map(({ name, description, link, src }) => (
                <Box>
                  <Link href={link} target='_blank'>
                    <Flex
                      width={{ base: "350px", md: "300px" }}
                      flexDir='column'
                      alignItems='center'
                      margin='1'
                      boxShadow='lg'
                      position='relative'
                      cursor='pointer'
                    >
                      <Image
                        src={src}
                        objectFit='contain'
                        height='100%'
                        width='100%'
                        minHeight='170px'
                        background='black'
                      />

                      <Box
                        position='absolute'
                        height='100%'
                        width='100%'
                        _hover={{ opacity: 0 }}
                        _before={{
                          content: "''",
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          background: "rgba(0, 0, 0, 0.5)",
                        }}
                        transition='all 0.3s ease-in-out'
                      >
                        <Flex
                          flexDir='column'
                          justifyContent='center'
                          height='100%'
                        >
                          <Heading
                            as='h6'
                            textAlign='center'
                            color='gray.50'
                            zIndex={1}
                            fontSize='2xl'
                          >
                            {name}
                          </Heading>
                          <Text textAlign='center' color='gray.50' zIndex={1}>
                            {description}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Project
