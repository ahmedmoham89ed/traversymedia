import Nextico from "../assets/images/next-ecomm-logo_spu9mg.png"
import laravel from "../assets/images/laravel_cu4i7r.png"
import html from "../assets/images/html-css-2-0_oikax0.png"
import jss from "../assets/images/jss.png"
import php from "../assets/images/phplogo_evzxke.png"
import react from "../assets/images/reacttsx.png"
import hcr from "../assets/images/hcr.png"
import dsa from "../assets/images/dsa_jhlwxc.png"
import mern from "../assets/images/mern_xnfncj.png"
import { FaClock } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
const LatestCourses = () => {
    const data=[
        {
          id:1,
          hours:22,
          standrad:"INTERMEDIATE",
          nameOfCourse:"Next.js Ecommerce",
          jobs:"Shopping Platform",
          image:Nextico
        },
        {
            id:2,
            hours:13,
            standrad:"BEGINNER",
            nameOfCourse:"Laravel From Scratch",
            jobs:"Job Listing Website",
            image:laravel
        },
        {
            id:3,
            hours:24,
            standrad:"ALL LEVELS",
            nameOfCourse:"Modern HTML & CSS From The Beginning 2.0",
            jobs:"",
            image:html
        },
        {
            id:4,
            hours:37,
            standrad:"ALL LEVELS",
            nameOfCourse:"Modern JavaScript From The",
            jobs:"Beginning 2.0",
            image:jss
        },
        {
            id:5,
            hours:18,
            standrad:"ALL LEVELS",
            nameOfCourse:"PHP From Scratch 2024",
            jobs:"Beginner To Advanced",
            image:php
        },
        {
            id:6,
            hours:16,
            standrad:"BEGINNER",
            nameOfCourse:"React Front To Back",
            jobs:"Beginner To Advanced",
            image:react
        },
        {
            id:7,
            hours:20,
            standrad:"ALL LEVELS",
            nameOfCourse:"50 Projects in 50 Days - HTML, CSS & JavaScript",
            jobs:"",
            image:hcr
        },
        {
            id:8,
            hours:12.5,
            standrad:"INTERMEDIATE",
            nameOfCourse:"70+ JS Challenges: Data Structures & Algorithms",
            jobs:"",
            image:dsa
        },
        {
            id:9,
            hours:11.5,
            standrad:"INTERMEDIATE",
            nameOfCourse:"MERN From Scratch",
            jobs:"eCommerce Platform",
            image:mern
        },
]
  return (
    <div className="bg-black text-white w-[100%] h-[155vh] sm:h-[260vh] lg:h-[200vh] xl:h-[158vh]">
       <div className="w-[78%] m-auto text-center">
          <div className=" pt-16">
               <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-3xl font-[pbold]"><span className="text-blue-500">Latest</span> Courses</motion.h1>
                  <motion.div className="grid grid-cols-3 sm:grid-cols-2  xl:grid-cols-3 items-center justify-center gap-5" initial={{opacity:0,y:50,scale:0.5}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}}>
                  {
                      data.map((item)=>{
                          return(
                            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className=" w-[100%] h-[240px] bg-[#222222] rounded-md border border-zinc-700 mt-5">
                                <div key={item.id} className=" relative flex items-start justify-between gap-5">
                                    <motion.div className="text-left pl-6 pt-4" initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}}>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="flex items-center justify-start gap-2 mb-4"><FaClock/>{item.hours} Hours </motion.h1> 
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="text-blue-500 text-base sm:text-sm">{item.standrad}</motion.h1>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="text-xl font-[pbold] py-2 sm:text-lg sm:py-3">{item.nameOfCourse}</motion.h1>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="text-base pb-2">{item.jobs}</motion.h1>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex items-center justify-start pt-3 gap-3"><GiShoppingCart size={30} color="#3b82f6" /><Link to={"/"} className="text-blue-500 text-xl hover:text-red-500 duration-300 ease-in-out transition-all" >Get It Now</Link></motion.h1>
                                    </motion.div>
                                    <motion.div className="" initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}}>
                                        <img src={item.image} alt={item.nameOfCourse} className="w-[4.5rem] absolute top-2 right-2  " />
                                    </motion.div>
                                </div>
                           </motion.div>
                        )
                    }).slice(0,3)
                  }
                  </motion.div>
          </div>
          <div className=" pt-14 mb-10">
               <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-3xl font-[pbold]"><span className="text-blue-500">Popular</span> Courses</motion.h1>
                  <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center flex-wrap gap-5">
                  {
                      data.map((item)=>{
                          return(
                            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className=" w-[100%] h-[240px] bg-[#222222] rounded-md border border-zinc-700 mt-5">
                                <div key={item.id} className=" relative flex items-start justify-between gap-5">
                                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="text-left pl-6 pt-4">
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="flex items-center justify-start gap-2 mb-4"><FaClock/>{item.hours} Hours </motion.h1> 
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-blue-500 text-base sm:text-sm">{item.standrad}</motion.h1>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="text-xl font-[pbold] py-2 sm:text-lg">{item.nameOfCourse}</motion.h1>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="text-base pb-2">{item.jobs}</motion.h1>
                                        <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="flex items-center justify-start pt-3 gap-3"><GiShoppingCart size={30} color="#3b82f6" /><Link to={"/"} className="text-blue-500 text-xl hover:text-red-500 duration-300 ease-in-out transition-all" >Get It Now</Link></motion.h1>
                                    </motion.div>
                                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="">
                                        <img src={item.image} alt={item.nameOfCourse} className="w-[4.5rem] absolute top-2 right-2  " />
                                    </motion.div>
                                </div>
                           </motion.div>
                        )
                    }).slice(3,10)
                  }
                  </motion.div>
          </div>
          <Link to={"/Courses"} className="W-[77%]">
              <Button variant="contained" size="large" fullWidth><p className="text-xl font-[psemibold] p-2">Show All Courses</p></Button>
          </Link>
       </div>
    </div>
  )
}

export default LatestCourses