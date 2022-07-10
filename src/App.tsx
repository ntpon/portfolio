import { Box, Container } from "@chakra-ui/react"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"
import Resume from "./components/Resume"
import Tools from "./components/Tools"
import { resumeData } from "./data/resumeData"
function App() {
  return (
    <>
      <Header {...resumeData.header} />
      <About {...resumeData.about} />
      <Resume
        education={resumeData.resume.education}
        experience={resumeData.resume.experience}
      />
      <Tools tools={resumeData.tools} />
      <Project projects={resumeData.projects} />
      <Footer />
    </>
  )
}

export default App
