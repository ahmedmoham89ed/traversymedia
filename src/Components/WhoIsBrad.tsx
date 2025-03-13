import person from "../assets/images/person.webp"
import {motion} from "framer-motion"
const WhoIsBrad = () => {
  return (
    <div className="w-[100%] h-[80vh] sm:h-[130vh] lg:h-[110vh] xl:h-[80vh] xl:pt-5 bg-black">
       <div className="w-[80%] m-auto">
          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-center text-white pt-12">
              <h1 className="text-4xl font-[pbold] sm:text-2xl lg:text-4xl">Who Is <span className="text-blue-500">Brad Traversy?</span></h1>
          </motion.div>
          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-5 m-auto items-center justify-center sm:mt-5 mt-12">
             <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="w-[95%]">
                <img src={person} alt="" className="w-[100%] h-[52vh]" />
             </motion.div>
             <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="w-[100%] xl:h-[42vh] xl:text-xl sm:h-[50vh] lg:h-[38vh] lg:text-2xl border border-zinc-500 rounded-lg text-white px-10 py-12 space-y-7 text-lg font-[pregular] ">
                   <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}}>I started coding in 2007 at the age of 26. I became a full-time educator & content creator in 2016.</motion.p>
                   <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}}>I show people that they don't have to be a straight A student or a genius to learn to code. I break down complex concepts by showing you how to implement them in project-based courses and tutorials.</motion.p>
             </motion.div>
          </motion.div>
       </div>
    </div>
  )
}

export default WhoIsBrad