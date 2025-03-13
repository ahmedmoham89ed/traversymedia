import image from "../assets/images/ry03k2xpShihpR3ZlT98_file.jpg"
import {motion} from "framer-motion"
const CourseLibrary = () => {
  return (
    <>
     <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="" style={{marginTop:90,position:"relative",zIndex:0,backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div className="overlay" style={{position:"absolute",zIndex:1,inset:0,backgroundColor:"black",opacity:.5}}></div>
        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-5xl font-black pb-10 text-white sm:text-3xl md:text-5xl" style={{position:"relative",zIndex:2}}>Course Library</motion.h1>
        <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-xl text-white max-w-[40%]  text-center sm:text-base sm:w-[100%] md:w-[100%] md:text-xl " style={{position:"relative",zIndex:2}}>Practical project-based courses that are easy to understand and straight to the point with NO FLUFF</motion.p>
     </motion.div>
    </>
  )
}

export default CourseLibrary