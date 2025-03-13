import back from "../assets/images/background.webp"
import faq from "../assets/images/faq.webp"
import {motion} from "framer-motion"
const FrequentlyAsked = () => {
  return (
    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="relative z-0 sm:top-20 " style={{backgroundImage:`url(${back})`,width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-white text-xl absolute z-30 inset-0 font-[pregular] flex flex-col items-center justify-center space-y-8">
            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-xl font-[pbold] lg:text-4xl">FAQs</motion.h1>
            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-2xl font-[pbold] lg:text-2xl">Frequently Asked Questions</motion.h1>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="">
                 <img src={faq} alt="" className="w-80 sm:w-52 lg:w-96" /> 
            </motion.div>
            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="text-lg font-[psemibold] sm:w-[50%] sm:m-auto sm:text-base sm:text-center lg:text-xl">If you have a question, feel free to email support@traversymedia.com</motion.p>
        </motion.div>
    </motion.div>
  )
}

export default FrequentlyAsked