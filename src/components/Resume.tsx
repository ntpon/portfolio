import React from "react"
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react"

import { MdLanguage, MdWork } from "react-icons/md"
interface IProps {
  education: {
    date: string
    school: string
    degree?: string
  }[]
  experience: {
    date: string
    company: string
    position: string
    description: string
    technology: string
  }[]
}
function Resume({ education, experience }: IProps) {
  return (
    <Box bg='blackAlpha.900' id='resume'>
      <Container maxW='container.lg'>
        <Flex padding='25px' flexDirection={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "25%" }}>
            <Heading color='white' fontSize='4xl'>
              EDUCATION
            </Heading>
          </Box>
          <Box width={{ base: "100%", md: "75%" }}>
            {education.map(({ date, school, degree }, index) => (
              <Box mt={index === 0 ? "0" : "4"}>
                <Heading color='white' fontSize='3xl'>
                  {date}
                </Heading>
                <Box marginTop='2'>
                  <Heading color='white' fontSize='2xl' fontWeight='500'>
                    {school}
                  </Heading>
                  {degree && (
                    <Text color='whiteAlpha.800' marginTop='1'>
                      {degree}
                    </Text>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Flex>
        <Divider borderColor='gray.500' />
        <Flex padding='25px' flexDirection={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "25%" }}>
            <Heading color='white' fontSize='4xl'>
              EXPERIENCE
            </Heading>
          </Box>
          <Box width={{ base: "100%", md: "75%" }}>
            {experience.map(
              ({ date, company, position, description, technology }, index) => (
                <Box mt={index === 0 ? "0" : "4"}>
                  <Heading color='white' fontSize='3xl'>
                    {date}
                  </Heading>
                  <Box marginTop='2'>
                    <Heading color='white' fontSize='2xl' fontWeight='500'>
                      {company}
                    </Heading>
                    <List marginTop='2' spacing={1} textColor='white'>
                      <ListItem>
                        <ListIcon as={MdWork} color='gray.500' />
                        {position}
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdWork} color='gray.500' />
                        {description}
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdLanguage} color='gray.500' />
                        Technology used : {technology}
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Flex>
        <Divider borderColor='gray.500' />
      </Container>
    </Box>
  )
}

export default Resume
