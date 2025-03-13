import AccordionTransition from "../Components/accordation"
import Footer from "../Components/Footer"
import FrequentlyAsked from "../Components/FrequentlyAsked"
import ResponsiveAppBar from "../Components/Navbar"

const FAQ = () => {
  return (
    <>
     <ResponsiveAppBar/>
     <FrequentlyAsked/>
     <AccordionTransition/>
     <Footer/>
    </>
  )
}

export default FAQ