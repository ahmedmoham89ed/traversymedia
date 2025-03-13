import AllAccessMembership from "../Components/AllAccessMembership"
import AvailableCourses from "../Components/AvailableCourses"
import CourseLibrary from "../Components/CourseLibrary"
import FeaturedCourses from "../Components/FeaturedCourses"
import Footer from "../Components/Footer"
import ResponsiveAppBar from "../Components/Navbar"

const Courses = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <CourseLibrary/>
        <FeaturedCourses/>
        <AvailableCourses/>
        <AllAccessMembership/>
        <Footer/>
    </>
  )
}

export default Courses