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
      <div className="snap-start snap-always w-full shrink-0"><Hero></Hero></div>
      <div className="snap-start snap-always w-full shrink-0"><CoreOfferings></CoreOfferings></div>
      <div className="snap-start snap-always w-full shrink-0"><GlobalWisdom></GlobalWisdom></div>
      <div className="snap-start snap-always w-full shrink-0">
        <section className="relative w-full h-screen overflow-hidden flex flex-col bg-white">
          <AboutUs></AboutUs>
          <Footer></Footer>
        </section>
      </div>
    </>
  )
}

export default Home