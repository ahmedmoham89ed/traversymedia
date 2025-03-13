import laravel from "../assets/images/laravel.webp";
import next from "../assets/images/nextjs.jpg";
import js from "../assets/images/js.webp";
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';

const FeaturedCourses = () => {
    const data=[
        {   
            id:1,
            image:next,
            title:"Next.js Ecommerce - Build  A Shopping Platform",
            price:"25"
        },
        {   
            id:2,
            image:laravel,
            title:"Laravel From Scratch Build A Job Listing Website",
            price:"19"
        },
        {   
            id:1,
            image:js,
            title:"Modern JS From The Beginning 2.0",
            price:"37"
        },
    ]
    const navigate = useNavigate();
    const goToUserProfile = (id:number) => {
        navigate(`/data/${id}`); 
      };
  return (
    <>
     <div className="bg-black max-w-[100%] h-[87vh] sm:h-[128vh] md:h-[140vh] lg:h-[70vh] xl:h-[93vh] ">
        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="w-[85%] m-auto sm:pt-8">
             <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-white text-4xl font-[pbold] pb-10 sm:text-xl lg:text-3xl xl:text-4xl xl:py-8">Featured Courses</motion.h1>
             <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="grid items-center justify-center sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-2 sm:mt-0 mt-2">
             {
                data.map((item)=>{
                    return(
                        <>
                          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-white bg-slate-900 w-[405px] rounded-md h-[60vh] sm:h-[51vh] sm:w-[250px] md:w-[310px] md:h-[57vh] lg:w-[280px] lg:h-[50vh] xl:w-[400px] xl:h-[63vh] xl:p-4 sm:p-2" key={item.id}>
                                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="w-[95%] mt-2 mb-5 m-auto relative z-0 " >
                                    <div className="absolute z-[1] inset-0 bg-black rounded-md hover:opacity-5 opacity-[.5] duration-300 transition-all"></div>
                                    <img src={item.image} alt={item.title} className="rounded-md" />
                                </motion.div>
                                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="w-[95%] mt-6 mb-3 m-auto lg:space-y-5">
                                    <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="line text-2xl font-[pbold] sm:text-base lg:text-2xl">{item.title}</motion.h1>
                                    <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="mt-3 mb-3 text-blue-600 text-xl font-[pbold] sm:text-base lg:text-2xl">${item.price}</motion.p>
                                </motion.div>
                                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="ml-3">
                                    <Button variant="contained" size="large" onClick={() => goToUserProfile(item.id)}><p className="text-lg font-[psemibold] capitalize">Read More</p></Button>
                                </motion.div>
                          </motion.div>
                        </>
                    )
                })
             }
            
             </motion.div>
        </motion.div>
     </div>
    </>
  )
}

export default FeaturedCourses