import Button from '@mui/material/Button';
import next from "../assets/images/nextjs.jpg";
import js from "../assets/images/js.webp";
import laravel from "../assets/images/laravel.webp";
import html from "../assets/images/html.webp";
import nextjs from "../assets/images/next.webp";
import jsx from "../assets/images/jsx.jpg";
import php from "../assets/images/php.jpg";
import bootstrap from "../assets/images/bootstrap.webp";
import tailwindcss from "../assets/images/tailwindcss.webp";
import react from "../assets/images/react.jpg";
import mern from "../assets/images/mern.webp";
import projec50t from "../assets/images/50project.webp";
import projec20t from "../assets/images/20webproject.webp";
import nodejs from "../assets/images/nodejs.webp";
import python from "../assets/images/python.webp";
import oop from "../assets/images/oop.webp";
import bootstrap4 from "../assets/images/bootstrap4.webp";
import astro from "../assets/images/astro.jpeg";
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
const AvailableCourses = () => {
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
            id:3,
            image:js,
            title:"Modern JS From The Beginning 2.0",
            price:"37"
        },
        {   
            id:4,
            image:html,
            title:"Modern HTML & CSS From The Beginning",
            price:"39"
        },
        {   
            id:5,
            image:nextjs,
            title:"Next.js From Scratch",
            price:"30"
        },
        {   
            id:6,
            image:jsx,
            title:"70+ JS Challenges: Data Structures & Algorithms",
            price:"30"
        },
        {   
            id:7,
            image:php,
            title:"PHP From Scratch | Beginner To Advanced",
            price:"25"
        },
        {   
            id:8,
            image:bootstrap,
            title:"Bootstrap 5 From Scratch Course",
            price:"16"
        },
        {   
            id:9,
            image:tailwindcss,
            title:"Tailwind CSS From Scratch",
            price:"18"
        },
        {   
            id:10,
            image:react,
            title:"React Front To Back",
            price:"23"
        },
        {   
            id:11,
            image:mern,
            title:"MERN Stack From Scratch - eCommerce",
            price:"29"
        },
        {   
            id:12,
            image:projec50t,
            title:"50 Projects In 50 Days - HTML, CSS & JavaScript",
            price:"32"
        },
        {   
            id:13,
            image:projec20t,
            title:"20 Web Projects With Vanilla JavaScript",
            price:"20"
        },
        {   
            id:14,
            image:nodejs,
            title:"Node.js API Masterclass With Express & MongoDB",
            price:"39"
        },
        {   
            id:15,
            image:python,
            title:"Python Django Dev To Deployment ",
            price:"32"
        },
        {   
            id:16,
            image:oop,
            title:"Object Oriented PHP & MVC Course",
            price:"11"
        },
        {   
            id:17,
            image:bootstrap4,
            title:"Bootstrap 4 From Scratch - 5 Projects ",
            price:"9"
        },
        {   
            id:18,
            image:astro,
            title:"Astro Quick Start (Members Only)",
            price:"40"
        },
    ]
    const navigate = useNavigate();
    const goToUserProfile = (id:number) => {
        navigate(`/data/${id}`); 
      };
  return (
    <>
     <div className="">
        <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="w-[85%] sm:h-[485vh] md:h-[540vh] lg:h-[310vh] xl:h-[400vh] m-auto sm:pt-8 pt-20 mb-32">
            <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-white text-4xl font-[pbold] pb-5 sm:text-xl lg:text-3xl lg:pt-2">Available Courses</motion.h1>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="grid items-center justify-center sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4  xl:grid-cols-3 sm:mt-0 mt-2">
             {
                data.map((item)=>{
                    return(
                        <>
                          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="text-white bg-slate-900 w-[405px] rounded-md h-[60vh] sm:h-[51vh] sm:w-[250px] md:w-[310px] md:h-[57vh] lg:w-[275px] lg:h-[48vh] lg:m-2 xl:w-[400px] xl:h-[61vh] xl:p-4 sm:p-2" key={item.id}>
                                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="w-[95%] mt-2 mb-5 m-auto relative z-0 " >
                                    <div className="absolute z-[1] inset-0 bg-black rounded-md hover:opacity-5 opacity-[.3] duration-300 transition-all"></div>
                                    <img src={item.image} alt={item.title} className="rounded-md" />
                                </motion.div>
                                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="w-[95%] mt-6 mb-3 m-auto">
                                    <motion.h1 initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="line text-2xl font-[pbold] sm:text-base lg:text-2xl">{item.title}</motion.h1>
                                    <motion.p  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="mt-3 mb-3 text-blue-600 text-xl font-[pbold] sm:text-base lg:text-2xl">${item.price}</motion.p>
                                </motion.div>
                                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="ml-3">
                                    <Button variant="contained" size="large" onClick={() => goToUserProfile(item.id)} ><p className="text-lg font-[psemibold] capitalize">Read More</p></Button>
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

export default AvailableCourses