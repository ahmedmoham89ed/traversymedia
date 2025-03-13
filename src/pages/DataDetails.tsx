import { Link, useParams } from 'react-router-dom';
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
import ResponsiveAppBar from '../Components/Navbar';
import back from "../assets/images/ry03k2xpShihpR3ZlT98_file.jpg"
import FreelanceMaster from '../Components/FreelanceMaster';
import MediaonYouTube from '../Components/MediaonYouTube';
import PremiumCourses from '../Components/PremiumCourses';
import Footer from '../Components/Footer';
import Button from '@mui/material/Button';

const data=[
    {   
        id:1,
        image:next,
        title:"Next.js Ecommerce - Build  A Shopping Platform",
        price:"25",
        text1:"Build A Shopping Platform",
        text2:"Learn how to put together a real-world project with Next.js 15, TypeScript, PostgreSQL and Prisma",
        houre:"22 Brand New",
        link:"https://www.traversymedia.com/offers/fUbAQPDF/checkout"
    },
    {   
        id:2,
        image:laravel,
        title:"Laravel From Scratch Build A Job Listing Website",
        price:"19",
        text1:"Build a Real-World Application",
        text2:"Build a job listing website with authentication, authorization, bookmarking, online applications with resume uploading and more.",
        houre:"Brand New",
        link:"https://www.traversymedia.com/offers/ougbnCY4/checkout"

    },
    {   
        id:3,
        image:js,
        title:"Modern JS From The Beginning 2.0",
        price:"37",
        text1:"Learn Modern JavaScript From The Beginning",
        text2:"A 37-hour master course to take you from beginner to advanced",
        houre:"Best Selling Course & Just Revamped",
        link:"https://www.traversymedia.com/offers/yTHhB7TQ/checkout"
    },
    {   
        id:4,
        image:html,
        title:"Modern HTML & CSS From The Beginning",
        price:"39",
        text1:"The Fundamentals Of Web Development",
        text2:"Build modern responsive websites with HTML5 & CSS! Learn Flexbox & CSS Grid.",
        houre:"Complete 2024 Revamp",
        link:"https://www.traversymedia.com/offers/MbnXwWqH/checkout"
    },
    {   
        id:5,
        image:nextjs,
        title:"Next.js From Scratch",
        price:"30",
        text1:"Build Better React Websites",
        text2:"Learn Next.js by building a full-featured property rental server-side rendered website from the ground up.",
        houre:"Brand New & In-Demand",
        link:"https://www.traversymedia.com/offers/FNSwLHee/checkout"
    },
    {   
        id:6,
        image:jsx,
        title:"70+ JS Challenges: Data Structures & Algorithms",
        price:"30",
        text1:"Become a Better Programmer",
        text2:"Sharpen your problem solving skills and learn about important programming topics",
        houre:"Hot Course",
        link:"https://www.traversymedia.com/offers/xon8h2Ez/checkout"
    },
    {   
        id:7,
        image:php,
        title:"PHP From Scratch | Beginner To Advanced",
        price:"25",
        text1:"From Beginner To Advanced",
        text2:"Start with the fundamentals, then create a job listing app from scratch with Laravel-like routing, namespaces and more.",
        houre:"Brand New",
        link:"https://www.traversymedia.com/offers/z8YPBmFQ/checkout"
    },
    {   
        id:8,
        image:bootstrap,
        title:"Bootstrap 5 From Scratch Course",
        price:"16",
        text1:"Learn By Building Amazing Projects",
        text2:"Build modern-looking websites and UIs faster using the Bootstrap CSS framework",
        houre:"New Release",
        link:"https://www.traversymedia.com/offers/a2BmDoJ9/checkout"
    },
    {   
        id:9,
        image:tailwindcss,
        title:"Tailwind CSS From Scratch",
        price:"18",
        text1:"Learn By Building Amazing Projects",
        text2:"Build great looking layouts fast and efficiently using Tailwind CSS utility classes.",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/3SqMHHiC/checkout"
    },
    {   
        id:10,
        image:react,
        title:"React Front To Back",
        price:"23",
        text1:"Learn By Building Real Life Projects",
        text2:"Learn Modern React, Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects.",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/BTXXTJrJ/checkout"
    },
    {   
        id:11,
        image:mern,
        title:"MERN Stack From Scratch - eCommerce",
        price:"29",
        text1:"Build A Full-Featured eCommerce Platform",
        text2:"Shopping cart, product search, admin area, PayPal integration & more",
        houre:"Just Revamped",
        link:"https://www.traversymedia.com/offers/J2JTPxz7/checkout"
    },
    {   
        id:12,
        image:projec50t,
        title:"50 Projects In 50 Days - HTML, CSS & JavaScript",
        price:"32",
        text1:"Learn HTML, CSS & JS By Building Projects",
        text2:"Sharpen your skills by building 50 quick, unique & fun mini projects.",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/TDQtz2jY/checkout"
    },
    {   
        id:13,
        image:projec20t,
        title:"20 Web Projects With Vanilla JavaScript",
        price:"20",
        text1:"Learn By Building 20 Projects",
        text2:"Build 20 mini frontend projects from scratch with HTML5, CSS & JavaScript.(No frameworks or libraries)",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/8iGGrMeW/checkout"
    },
    {   
        id:14,
        image:nodejs,
        title:"Node.js API Masterclass With Express & MongoDB",
        price:"39",
        text1:"Node.js API Masterclass With Express & MongoDB",
        text2:"Create a real world backend for a bootcamp directory app.",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/hzDzQp6o/checkout"
    },
    {   
        id:15,
        image:python,
        title:"Python Django Dev To Deployment ",
        price:"32",
        text1:"Learn Python Django From Beginning",
        text2:"Learn Python and build & deploy a real estate application using the Django framework & PostgreSQL.",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/CnuG3Xgc/checkout"
    },
    {   
        id:16,
        image:oop,
        title:"Object Oriented PHP & MVC Course",
        price:"11",
        text1:"Learn Object Oriented PHP & MVC",
        text2:"Build a custom PHP MVC framework and then build an application with it",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/PaJFfKKR/checkout"
    },
    {   
        id:17,
        image:bootstrap4,
        title:"Bootstrap 4 From Scratch - 5 Projects ",
        price:"9",
        text1:"Learn Bootstrap 4 From Scratch With 5 Projects",
        text2:"Master Bootstrap 4 and build 5 real world themes while learning HTML5 semantics & CSS3.",
        houre:"Best Selling Course",
        link:"https://www.traversymedia.com/offers/LYLzCHFy/checkout"
    },
    {   
        id:18,
        image:astro,
        title:"Astro Quick Start (Members Only)",
        price:"40",
        text1:"Build An SSR Blog",
        text2:"This is a course to get you up and running with the new Astro web framework. It is only available for monthly/yearly members",
        houre:"Members Only",
        link:"https://www.traversymedia.com/offers/2NFSzqDt/checkout"
    },
]

const DataDetails = () => {
  const { id } = useParams<{ id: string }>(); 
  const item = data.find((item) => item.id === parseInt(id || '')); 
  if (!item) {
    return <div>Page Not Found</div>; 
  }

  return (
    <>
    <ResponsiveAppBar/>
    <div className="relative z-0 " style={{backgroundImage:`url(${back})`,width:"100%",minHeight:"120vh",backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
           <div className="absolute z-30 inset-0 pt-44 space-y-8 text-center text-white">
                <div className="flex items-center justify-center">
                   <p className='text-lg bg-yellow-600 px-3 py-2 rounded-md'>{item.houre}</p>
                </div>
                <h1 className="text-4xl font-bold mb-5">{item.title}</h1>
                <div className="w-[28%] mt-2 mb-5 m-auto relative z-0 " >
                    <div className=" w-[100%] absolute z-[1] inset-0 bg-black rounded-md hover:opacity-5 opacity-[.3] duration-300 transition-all"></div>
                    <img src={item.image} alt={item.title} className="w-full max-w-[500px] m-auto rounded-md mb-5" />
                 </div>
                <p className="text-2xl  font-bold mb-1">{item.text1}</p>
                <p className="text-base mb-1 w-[60%] m-auto">{item.text2}</p>
                <div className="w-96 m-auto">
                   <Button fullWidth variant="contained" size='large'><a href={item.link} target='_blank' className='text-xl font-[pbold] p-1'>Start Learning</a></Button>
                </div>
           </div>
      </div>
      <FreelanceMaster/>
      <MediaonYouTube/>
      <PremiumCourses/>
      <Footer/>
    </>
  );
};

export default DataDetails;