import CONTENTGUIDE from "../Components/CONTENTGUIDE"
import Footer from "../Components/Footer"
import ResponsiveAppBar from "../Components/Navbar"
import PaidCourses from "../Components/PaidCourses"

const Guide = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <CONTENTGUIDE/>
      <PaidCourses/>
      <Footer/>
    </>
  )
}

export default Guide