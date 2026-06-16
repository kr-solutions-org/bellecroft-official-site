import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import CoreOfferings from "../components/CoreOfferings"
import GlobalWisdom from "../components/GlobalWisdom"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <CoreOfferings></CoreOfferings>
      <GlobalWisdom></GlobalWisdom>
      <section className="relative w-full h-screen overflow-hidden flex flex-col bg-white">
        <AboutUs></AboutUs>
        <Footer></Footer>
      </section>
    </>
  )
}

export default Home