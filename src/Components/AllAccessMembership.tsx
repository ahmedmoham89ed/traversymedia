import { FaCheck } from "react-icons/fa";
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
const AllAccessMembership = () => {
  return (
    <div className="max-w-[100%] bg-blue-500 h-[150vh] sm:h-[290vh] lg:h-[125vh] xl:h-[144vh]">
        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="max-w-[88%] mx-auto text-center pt-20 sm:pt-10">
            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-3xl text-white font-[pbold] pb-3 lg:text-4xl">All Access Membership</motion.h1>
            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-lg text-white font-[pmedium] pb-10">Become a member and get access to all courses</motion.p>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className=" w-[85%] m-auto grid justify-center items-center lg:grid-cols-2 lg:w-[92%] lg:gap-20 xl:gap-10 gap-9 ">
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="bg-white h-[48rem] xl:w-[33.5rem] sm:w-[32rem] lg:w-[26rem]  rounded-md">
                   <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="mt-6">
                      <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-blue-600 text-3xl font-[pbold] pb-3 pt-5">Monthly Membership</motion.h1>
                      <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="text-zinc-600 text-3xl font-[pextrabold] pb-3">$25/Month</motion.h1>
                      <motion.p  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="font-[psemibold]">Become a Pro Member</motion.p>
                   </motion.div>
                   <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="text-left flex flex-col gap-4 ml-14 mt-7  ">
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb"/>Access To All Courses</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb"/>300+ Hours of Content</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Full HD Video & HQ Audio</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Extra course attachments & exercises</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.7}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />English Captions</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.8}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Certificate of Completion</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.9}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Access To Discord Community</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Priority Support</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.1}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Free Web Dev Guide Ebook</motion.p>
                       <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.2}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Risk-free: 15 Days Refund Period</motion.p>
                   </motion.div>
                   <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.3}} viewport={{once:false}} className="mt-10">
                      <Button variant="contained" size="large"><p className="text-2xl font-[psemibold] p-2">BUY NOW</p></Button>
                   </motion.div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="bg-black h-[53rem] xl:w-[33.5rem] sm:w-[32rem] lg:w-[26rem] lg:mr-44 rounded-md">
                        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="mt-6 ">
                            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-blue-600 text-3xl font-[pbold] pb-3 pt-5">Yearly Membership</motion.h1>
                            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="text-white text-3xl font-[pextrabold] pb-3">$199/Year</motion.h1>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="font-[psemibold] text-white pb-3">Become a Pro Member</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="text-lg font-[psemibold] text-white">Use Code <span className="text-blue-500">VIP</span> and get the first year for <span className="text-green-500">$99!</span></motion.p>
                        </motion.div>
                        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="text-left text-white flex flex-col gap-4 ml-14 mt-7  ">
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb"/>Save 34% Compared to Monthly</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb"/>Access To All Courses</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb"/>300+ Hours of Content</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.7}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Full HD Video & HQ Audio</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.8}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Extra course attachments & exercises</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.9}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />English Captions</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Certificate of Completion</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.1}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Access To Discord Community</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.2}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Priority Support</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.3}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Free Web Dev Guide Ebook</motion.p>
                            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.4}} viewport={{once:false}} className="flex gap-2 text-lg font-medium items-center"><FaCheck color="#2563eb" />Risk-free: 15 Days Refund Period</motion.p>
                        </motion.div>
                        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.5}} viewport={{once:false}} className="mt-10">
                            <Button variant="contained" size="large"><p className="text-2xl font-[psemibold] p-2">BUY NOW</p></Button>
                        </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default AllAccessMembership