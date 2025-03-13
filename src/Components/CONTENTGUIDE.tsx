import back from "../assets/images/background.webp"
import arrow from "../assets/images/arrow.webp"
import {motion} from "framer-motion"
const CONTENTGUIDE = () => {
  return (
    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="relative z-0 md:h-[130vh]" style={{backgroundImage:`url(${back})`,width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-white mt-24 text-xl absolute z-30 inset-0 font-[pregular] sm:top-16 flex flex-col items-center justify-center space-y-8">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="space-y-2 text-center">
                <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-blue-500 text-2xl font-[pbold] sm:text-xl md:text-2xl lg:text-4xl">Traversy Media</motion.p>
                <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="text-3xl font-[pbold] sm:text-2xl md:text-3xl lg:text-5xl">CONTENT GUIDE</motion.h1>
            </motion.div>
            <div className="w-[50%] m-auto text-center space-y-4 font-[plight] text-xl">
                <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="sm:text-base md:text-lg lg:text-xl">This is a categorized map of crash courses, projects and paid courses in the order that I would suggest watching. This guide goes along with my</motion.p>
                <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-blue-500 cursor-pointer sm:text-base md:text-lg lg:text-xl">2023 Practical Web Development Guide Video <span className="text-white">and my</span> Web Dev Guide eBook</motion.p> 
            </div>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="">
                <img src={arrow} alt="" />
            </motion.div>
            <div className="text-5xl font-[pbold] lg:text-5xl md:text-4xl md:pb-14 sm:text-2xl sm:pb-5">
                <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}}>Finding Your Path</motion.h1>
            </div>
        </motion.div>

    </motion.div>
  )
}

export default CONTENTGUIDE