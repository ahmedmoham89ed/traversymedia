import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import ResponsiveAppBar from "../Components/Navbar"
import Categories from "../Components/Categories"
const Blog = () => {
  return (
    <div className="">
      <ResponsiveAppBar/>
      <Sidebar/>
      <Categories/>
      <Footer/>
    </div>
  )
}

export default Blog