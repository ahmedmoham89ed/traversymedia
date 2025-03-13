import bgg from "../assets/images/bgg.webp"
import trav from "../assets/images/travmedia.webp"
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
const MediaonYouTube = () => {
  return (
    <div className="w-[100%] xl:h-[75vh] xl:pt-10 sm:h-[110vh] md:h-[115vh] lg:h-[45vh] lg:pt-5" style={{backgroundImage:`url(${bgg})`}} >
      <div className="w-[82%] m-auto grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 lg:w-[88%] lg:gap-2 justify-center items-center gap-10">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="lg:w-[100%]">
                <img src={trav} alt="" />
            </motion.div>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-white  space-y-7 text-center">
                <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-4xl font-[pbold] lg:text-3xl xl:text-4xl">Traversy Media on YouTube</motion.h1>
                <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="text-xl font-[psemibold]">Our YouTube channel has over 2 million subscribers with 1000+ free tutorials and crash courses</motion.p>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="">
                   <Button variant="contained" size="large"><p className="text-xl font-[pbold] p-1">View Channel</p></Button>
                </motion.div>
            </motion.div>
      </div>
    </div>
  )
}

export default MediaonYouTube