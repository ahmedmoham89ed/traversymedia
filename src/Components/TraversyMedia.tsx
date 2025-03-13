import back from "../assets/images/background.webp"
import Button from '@mui/material/Button';
import { GiGraduateCap } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const TraversyMedia = () => {
  return (
    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}}  className="relative z-0 w-[100%] h-[140vh] sm:h-[120vh] md:h-[140vh] lg:h-[110vh] xl:h-[130vh]  bg-cover bg-center" style={{backgroundImage:`url(${back})`}}>
        <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
        <div className="text-white absolute z-30 top-1/2 left-1/2 mt-16 transform -translate-x-1/2 xl:-translate-y-1/2 sm:-translate-y-1/2 text-center">
          <p className="text-3xl text-blue-500 font-[pbold] pb-5 sm:text-xl lg:text-3xl xl:text-4xl ">Traversy Media</p>
          <h1 className="text-6xl font-[pextrabold]  leading-tight sm:text-4xl lg:text-5xl xl:text-5xl">Web Development <br/> Courses For <p className="text-blue-500">Everyone</p></h1>
          <p className="text-lg w-[80%] m-auto my-7 lg:text-xl">Practical project-based courses that are easy to understand and straight to the point with NO FLUFF</p>
          <Button variant="contained" size="large" ><Link to={"/Courses"} className="text-xl font-[psemibold] capitalize py-1 sm:text-base lg:text-xl">Start Learning Now</Link></Button>
           <div className="flex items-center justify-center gap-24 mt-20 lg:gap-48">
                <div className="flex flex-col items-center justify-center gap-3">
                    <GiGraduateCap size={85} />
                    <div className="">
                            <h1 className="text-5xl font-[pbold] pb-4 sm:text-3xl lg:text-4xl">15+</h1>
                            <p className="text-blue-500 text-xl font-[pbold] sm:text-lg lg:text-xl">Courses</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <FaClock size={65} />
                    <div className="pt-2">
                            <h1 className="text-5xl font-[pbold] pb-4 sm:text-3xl lg:text-4xl">250+</h1>
                            <p className="text-blue-500 text-xl font-[pbold] sm:text-base lg:text-xl">Hours of Content</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <IoIosPeople size={85} />
                    <div className="">
                            <h1 className="text-5xl font-[pbold] pb-4 sm:text-3xl lg:text-4xl">500K+</h1>
                            <p className="text-blue-500 text-xl font-[pbold] sm:text-lg lg:text-xl">Course Students</p>
                    </div>
                </div>
           </div>
        </div>
    </motion.div>
  )
}

export default TraversyMedia