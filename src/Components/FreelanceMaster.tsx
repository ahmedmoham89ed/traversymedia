import Button from '@mui/material/Button';
import freelance from "../assets/images/free.webp"
import {motion} from "framer-motion"
const FreelanceMaster = () => {
  return (
    <div className="xl:w-[100%] xl:m-auto  xl:h-[70vh] sm:bg-white sm:h-[120vh]  lg:h-[95vh] grid xl:grid-cols-2 sm:grid-cols-1 sm:gap-1 m-auto justify-center items-center gap-10">
      <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="xl:w-[80%] xl:ml-44 xl:m-auto xl:h-[48vh] sm:m-auto sm:h-[55vh] sm:w-[80%] lg:h-[40vh] lg:space-y-6 lg:pt-12 p-10 space-y-4 bg-slate-50 shadow-2xl rounded-md hover:scale-105 duration-300 ease-in-out transition-all">
         <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className='text-[#143b71] text-2xl font-[psemibold]'>New Course</motion.h1>
         <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className='text-[#143b71] text-4xl font-[pbold]'>Freelance Mastery</motion.h1>
         <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className=' text-zinc-700 text-lg font-[pregular]'>Brad Traversy and Kyle Prinsloo have teamed up to bring you a business-based course to show you how to create a successful freelancing business from the ground up.</motion.p>
         <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="">
            <Button variant="contained"><p className='text-xl font-[pbold] p-1'>Find out more</p></Button>
         </motion.div>
      </motion.div>
      <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="w-[100%] h-[40vh] grid justify-center items-center">
          <img src={freelance} alt="" className='w-[100%] h-[50vh]' />
      </motion.div>
    </div>
  )
}

export default FreelanceMaster