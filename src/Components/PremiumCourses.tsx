import { FaCheck } from "react-icons/fa6";
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
const PremiumCourses = () => {
  return (
    <div className="w-[100%]  bg-blue-500 text-white h-[155vh] sm:h-[390vh] lg:h-[215vh] xl:h-[150vh]">
        <div className="w-[85%] m-auto text-center pt-16">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="pb-10">
                <h1 className="text-3xl font-[pbold] leading-relaxed pb-2">Join Our Premium Courses</h1>
                <p className="w-[50%] m-auto text-center text-lg font-[pregular]">Buy standalone courses or get access to all our courses as long as you have an active membership.</p>
            </motion.div>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-4 justify-center items-center">
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="bg-[#2c3e50]  h-[640px] rounded-md pt-12">
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="leading-relaxed pb-5">
                        <h1 className="text-2xl font-[pbold] text-blue-500">Single-Course</h1>
                        <h1 className="text-3xl font-[pbold] leading-loose">$25/Course</h1>
                        <h1 className="text-lg font-[pregular] text-blue-500">Buy once, own it forever</h1>
                    </motion.div>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-left ml-12 my-2">
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Purchase a Specific Course</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Lifetime Course Access</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Full HD Video & HQ Audio</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Extra course attachments & exercises</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Certificate of Completion</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Access To Discord Community</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Risk-free: 15 Days Refund Period</motion.h1>
                    </motion.div>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.7}} viewport={{once:false}} className="mt-8">
                        <Button variant="contained" size="large" ><p className="text-xl font-[psemibold] p-1">Buy Now</p></Button>
                    </motion.div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="bg-[#ffffff]  h-[687px] rounded-md pt-12">
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="leading-relaxed pb-5">
                        <h1 className="text-2xl font-[pbold] text-blue-500">Monthly Membership</h1>
                        <h1 className="text-3xl font-[pbold] text-zinc-600 leading-loose">$25/Month</h1>
                        <h1 className="text-lg font-[pregular] text-black">Become a Pro Member</h1>
                    </motion.div>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-left text-zinc-500 ml-12 my-4">
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Access To All Courses</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Access To All Courses</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Full HD Video & HQ Audio</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Extra course attachments & exercises</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Certificate of Completion</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Access To Discord Community</motion.h1>
                        <motion.h1 initial={{opacity:0,y:50,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Risk-free: 15 Days Refund Period</motion.h1>
                    </motion.div>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.7}} viewport={{once:false}} className="mt-12">
                        <Button variant="contained" size="large" ><p className="text-xl font-[psemibold] p-1">Buy Now</p></Button>
                    </motion.div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="bg-[#1e1e1e]  h-[816px] rounded-md pt-12">
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="leading-relaxed pb-5">
                        <h1 className="text-2xl font-[pbold] text-blue-500">Yearly Membership</h1>
                        <h1 className="text-3xl font-[pbold] text-white leading-loose">$199/Year</h1>
                        <h1 className="text-lg font-[pregular] text-white py-2">Become a VIP Member</h1>
                        <h1 className="text-lg font-[pregular] text-white pt-2">Use Code <span className="text-green-500">VIP</span> and get the first year <br/> for <span className="text-red-500">$99</span>!</h1>
                    </motion.div>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="text-left text-white ml-12 my-4">
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Save 34% Compared to Monthly</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />350+ Hours of Content</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Exclusive Content</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Full HD Video & HQ Audio</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Extra course attachments & exercises</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Certificate of Completion</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.7}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Access To Discord Community</motion.h1 >
                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.8}} viewport={{once:false}} className="flex gap-2 pb-3 items-center text-lg"><FaCheck color="#3b82f6" size={25} />Risk-free: 15 Days Refund Period</motion.h1 >
                    </motion.div>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.8}} viewport={{once:false}} className="mt-12">
                        <Button variant="contained" size="large" ><p className="text-xl font-[psemibold] p-1">Buy Now</p></Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default PremiumCourses