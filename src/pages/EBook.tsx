import BradTraversy from "../Components/BradTraversy"
import LatestCourses from "../Components/LatestCourses"
import ResponsiveAppBar from "../Components/Navbar"
import NOTIFY from "../Components/NOTIFY"
import PremiumCourses from "../Components/PremiumCourses"
import TraversyMedia from "../Components/TraversyMedia"
import FreelanceMaster from "../Components/FreelanceMaster"
import WhoIsBrad from "../Components/WhoIsBrad"
import MediaonYouTube from "../Components/MediaonYouTube"
import PopularCrash from "../Components/PopularCrash"
import Footer from "../Components/Footer"
const EBook = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <TraversyMedia/>
        <NOTIFY/>
        <LatestCourses/>
        <PremiumCourses/>
        <div id="bradtraversy"> 
             <BradTraversy />
        </div>
        <FreelanceMaster/>
        <WhoIsBrad/>
        <MediaonYouTube/>
        <PopularCrash/>
        <Footer/>
    
    </>
  )
}

export default EBook