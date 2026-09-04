import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import GitHubBackground from './components/GitHubBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import AIInnovation from './components/AIInnovation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <GitHubBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Certifications />
          <AIInnovation />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
