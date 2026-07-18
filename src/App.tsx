import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import InsightsPage from './pages/InsightsPage'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </Router>
  )
}

export default App
