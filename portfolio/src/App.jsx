import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Stack from './components/Stack'
import Certifications from './components/Certifications'
import Design from './components/Design'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Stack />
        <Certifications />
        <Design />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </LanguageProvider>
  )
}

export default App
