import book from "../assets/images/book.webp"
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
const BradTraversy = () => {
  return (
    <div className="bg-[#143f7d] h-[75vh] sm:h-[105vh] lg:h-[60vh] w-[100%] xl:h-[69vh]">
        <div className="w-[80%] m-auto pt-9 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5">
             <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="w-[70%] sm:w-[50%] lg:w-[90%] xl:w-[70%] xl:mt-5 sm:mt-5 lg:pr-5 lg:mt-10 ml-24 mt-10">
                  <img src={book} alt="" />
             </motion.div>
             <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="w-[85%] ml-24 mt-20 sm:mt-5 text-white flex flex-col gap-5 xl:mt-10 ">
                  <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-2xl font-[pbold] sm:text-xl">Brad Traversy's</motion.h1>
                  <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-4xl font-[pbold] sm:text-2xl lg:text-3xl">Web Dev Guide</motion.h1>
                  <motion.h3 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-lg sm:text-sm lg:text-lg">The most complete guide to web development technologies on the planet.</motion.h3>
                  <motion.h3 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="text-lg sm:text-sm lg:text-lg">This guide also goes into different programming concepts, careers and even mental health.</motion.h3>
                  <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="w-[50%] mt-3 lg:w-[80%]">
                      <Button variant="contained" fullWidth size="large"><p className="p-1 text-lg font-[psemibold] sm:text-sm lg:text-lg">GeT IT FOR $9.99</p></Button>
                  </motion.div>
             </motion.div>
        </div>
    </div>
  )
}

export default BradTraversy