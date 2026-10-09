import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import InsightsPage from './pages/InsightsPage'
import MethodologyPage from './pages/MethodologyPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'

function AppContent() {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>(
      '[data-scroll-container]'
    )

    scrollContainer?.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return(
    <div
      data-scroll-container
      className="h-screen w-full bg-white font-sans overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return(
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
