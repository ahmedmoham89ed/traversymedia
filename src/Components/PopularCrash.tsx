import { Link } from "react-router-dom"
import web from "../assets/images/web1.webp"
import react1 from "../assets/images/react1.jpg"
import vue from "../assets/images/vue1.webp"
import angular from "../assets/images/angular1.webp"
import next from "../assets/images/next1.webp"
import ts from "../assets/images/ts1.webp"
import sv from "../assets/images/sve1.webp"
import node from "../assets/images/node1.webp"
import {motion} from "framer-motion"
const PopularCrash = () => {
    const data=[
        {
            id:1,
            image:web
        },
        {
            id:2,
            image:react1
        },
        {
            id:3,
            image:vue
        },
        {
            id:4,
            image:angular
        },
        {
            id:5,
            image:next
        },
        {
            id:6,
            image:ts
        },
        {
            id:7,
            image:sv
        },
        {
            id:8,
            image:node
        },
    ]
  return (
    <div className="w-[100%] xl:h-[81vh] sm:h-[130vh] bg-black text-white text-center pt-14">
       <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="space-y-5 mb-5">
            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-4xl font-[pbold] sm:text-xl lg:text-3xl xl:text-4xl">Popular Crash Courses</motion.h1>
            <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-lg sm:text-base lg:text-xl">Visit The Traversy Media <Link to={"/Youtube"} className="text-blue-500">YouTube channel</Link> for many more</motion.p>
       </motion.div>
       <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="w-[80%] m-auto grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10 justify-center items-center">
          {
            data.map((items)=>{
                return(
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}}  key={items.id} className="relative z-0">
                      <div className="absolute z-10 bg-black opacity-35 inset-0 hover:opacity-0 duration-300 ease-in-out transition-all"></div>
                      <img src={items.image} alt="" className="w-[100%] h-[22vh]" />
                    </motion.div>
                )
            })
          }
       </motion.div>
    </div>
  )
}

export default PopularCrash