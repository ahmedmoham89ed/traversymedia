import js2 from "../assets/images/js2.jpg"
import feeling from "../assets/images/feeling.jpg"
import TheU from "../assets/images/TheUltimate.jpg"
import muths from "../assets/images/muths.jpg"
import reason from "../assets/images/reasons.webp"
import vue2 from "../assets/images/vue2.jpg"
import expense from "../assets/images/expense.jpg"
import admin from "../assets/images/admin.jpg"
import overlay from "../assets/images/overlay.webp"
import essential from "../assets/images/essential.jpg"
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';
import {motion} from "framer-motion"
import React from "react"
const Categories = () => {
    const data=[
        {
            id:1,
            image:js2,
            title:"Text to Speech & Translation App With Serverless Functions, Web Speech API & Google Translate",
            special:["Javascript"],
            date:"Jan 22, 2025",
            text:"If you'd like to use a framework like React, that's fine, but I want to get back to doing more vanilla JavaScript projects. There's a million ways that you can create and structure this project, this is just one of them. I want to keep it simple. Let's get started!",
            text2:"In this project, we're going to build an application that will do text-to-speech using the Web Speech API and also translate the text to a different language using the Google Translate API. We'll...",
        },
        {
            id:2,
            image:feeling,
            title:"Feeling Stagnant As A Developer",
            special:'',
            date:"Nov 28, 2024",
            text:"One of the benefits of what I do is that I get to hear from all kinds of people and their struggles—developers of every skill level. No matter where you are in your coding journey, chances are you’ve felt stuck at some point, as if you’re not progressing. This feeling of stagnation is common, but it’s also something you can work through.",
            text2:"In this post, I want to explore why developers often feel stuck and how you can break out of that rut to start seeing progress again.",
        },
        {
            id:3,
            image:TheU,
            title:"The Ultimate Guide To Web Scraping - Node.js & Python",
            special:["Node.Js","Python"],
            date:"Aug 13, 2024",
            text:"In this article, we will cover web scraping for beginners. Web scraping is a technique used to extract data from websites. It is a valuable tool for data scientists, researchers, and developers who need to collect data from the web for analysis or other purposes. In this guide, we will cover the basics of web scraping, including how it works, the tools and libraries you can use, and some best practices to keep in mind.",
            text2:"We will also demonstrate how to scrape a website using both Node.js and Python, which have some really useful libraries for web scraping. For Node.js, we'll use a library called Puppeteer, a powerful tool that allows you to automate tasks in a headless browser, such as clicking buttons, filling out forms, and extracting data from web pages. For Python, we'll use Beautiful Soup, a popular library for extracting data from HTML and XML files. Beautiful Soup provides simple methods for navigating, searching, and modifying a parse tree, making it incredibly easy to scrape information from web pages. You can find the code for both scrapers at GitHub. This guide is sponsored by Bright Data. They offer all kinds of tools for scraping, including powerful APIs, proxies, a scraping browser, and more.",
        },
        {
            id:4,
            image:muths,
            title:"15 Myths & Misconceptions in Web Development",
            special:["Career"],
            date:"Aug 01, 2024",
            text:"Web development is a very vast field with a lot of myths and misconceptions. In this article, we are going to talk about and debunk some of the most common myths and misconceptions when it comes to web development. This is geared toward the beginners who are just starting out learning to code that see a lot of this stuff and see things that conflict with one another and may have questions on what is true and what isn't.",
            text2:"Some of this stuff can be debatable. My goal isn't to claim absolute authority on what's true or not. Most of us usually go off of our own experiences, but I also did do a bunch of research, so it's not just my experience. My goal is to provoke thought, encourage a more nuanced understanding, and provide clarity based on both personal experience and thorough research.Here is the video version of this article",
        },
        {
            id:5,
            image:reason,
            title:"5 Reasons Why Your Side Projects Are Failing",
            special:["Career"],
            date:"Jul 18, 2024",
            text:"There are a few routes that you can take when it comes to web development. You can work for a company, you can freelance, or you can work on your own projects. The last option, to me, is the most exciting one because you get to work on something that you're passionate about and there's potential for massive payoff. However, side projects can be challenging, and they often fail. I would say more often than not.",
            text2:"One of my biggest inspirations is a developer named Pieter Levels, also known as levelsio. He's one of the most successful indie hackers and web dev entrepreneurs. He's a multi-millionaire and has created a number of successful side projects including Nomad List, Remote OK and PhotoAI. He made a Tweet a while ago with a list of all his side projects and said Only 4 of 70+ projects made me money and grew. So 95% of his projects failed.So in this video, I want to talk about why so many side projects fail and what you can avoid and do to increase your chances of success. Many of these points are pretty obvious, but I want to elaborate on them and give you some examples from my own experience.",
        },
        {
            id:6,
            image:vue2,
            title:"Vue.js Crash Course (Full 2024)",
            special:["Vue"],
            date:"Jul 01, 2024",
            text:"Welcome to my Vue.js crash course. This is a course that is designed to get you up and running with Vue.js as quickly as possible. It is geared toward beginners, so if you've never used Vue.js or you've just dabbled with it, then you're in the right place.There's going to be a few different parts to this course. First, we'll first go through a few slides and talk about what Vue is and how it works. That won't take very long.Then I'm going to show you how to get up and running very quickly using the CDN. This is the fastest way to use Vue although you should only use it for really small projects and testing. For larger projects, we use something called 'create-vue', which is ultimately what we'll be using.Next, we'll get setup with create-vue and go over the fundamentals like components, directives, data, methods, etc. We'll look at a very basic task project. I wouldn't even call it an app, it's just a project to experiment with and look at different directives and so on.",
            text2:"Finally, we'll move on to build our main job listing website. Since Vue is a frontend framework, we need a backend for data, so we'll be using JSON Server, which is a library that allows us to create a mock REST API. We'll start with some hardcoded jobs but then we'll add some dynamic data from the API. I'll have the template files with the Tailwind classes available for you in the repo as well. If you took my latest React crash course, it's the same application. That was intentional so that you can compare the two frameworks. I'll also be creating an Angular and a Svelte version.",
        },
        {
            id:7,
            image:expense,
            title:"Build an Expense Tracker With Next.js, TypeScript, Prisma, Neon & Clerk",
            special:["Next.Js","React"],
            date:"Jun 25, 2024",
            text:"In this project, we will build an app from the ground up to track expenses. We will be using Next.js & TypeScript along with Prisma ORM, Neon, which is a serverless Postgres platform and Clerk for authentication.  This is one of my favorite stacks as it is really powerful and it is incredibly easy to get up and going.",
            text2:"Here is what the project will look like:"
        },
        {
            id:8,
            image:admin,
            title:"Admin Dashboard With Next.js, TypeScript & Shadcn/ui",
            special:["Next.Js","React"],
            date:"Jun 02, 2024",
            text:"In this post, we will build an admin dashboard from scratch using Next.js, TypeScript, and Shadcn/ui, as well as some other packages. We are building the interface, so we won't be using any kind of database or ORM, however if you want to keep it going and add that yourself, you can. We'll just be using hardcoded data. In addition to TypeScript and Shadcn/ui, we will use tools like React-Hook Form and form validation with Zod. We'll integrate a library called Recharts to create a chart for analytics. We'll be using Lucide React for icons and the next-themes package to toggle light and dark modes.",
            text2:""
        },
        {
            id:9,
            image:overlay,
            title:"Image Overlays with CSS & the ::before Pseudo Selector",
            special:["Html & Css"],
            date:"Apr 26, 2024",
            text:"One common use of the ::before and ::after pseudo-elements are to create an overlay on top of an image. This is a typical pattern for hero sections or image galleries. The issue with simply making the background an image is that it can be hard to read text on top of it. By adding an overlay, you can make the text more readable. You can't simply use the opacity property on the image because it will also make the text less readable.",
            text2:""
        },
        {
            id:10,
            image:essential,
            title:"20 Essential Browser Extensions For Web Developers",
            special:[""],
            date:"Apr 10, 2024",
            text:"In this article, we will look at 20 different browser extensions that can be useful to web developers in 2024. All of these extensions are available for Google Chrome, but most are also available in Firefox and other browsers. ",
            text2:"This isn't in any particular order and there's no ranking involved. I'm also leaving off extensions like the React and Vue devtools, Clockwork for Laravel, and other framework-specific extensions because I want this list to be more general and not just for one specific framework or language. Since HTML, CSS and JS are the core of frontend web development, some of these extensions are geared towards those technologies."
        },


    ]
    const [value, setValue] = React.useState<number | null>(2);
    
  return (
   <div className="w-[100%] bg-black pb-32 pt-32 pl-32 pr-96 sm:px-16 md:px-16 ">
      <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="space-y-10">
        {
            data.map((item)=>{
                return(
                    <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} key={item.id} className="space-y-4 ">
                        <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="w-[100%] m-auto relative z-0 " >
                            <div className="absolute z-[1] inset-0 bg-black rounded-md hover:opacity-5 opacity-[.3] duration-300 transition-all"></div>
                            <img src={item.image} alt={item.title} className="rounded-md sm:w-[320px] md:w-[380px] lg:w-[570px] xl:w-[1000px] " />
                        </motion.div>
                        <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="space-y-4 py-3">
                            <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="text-white text-3xl font-[pbold] leading-snug sm:text-base sm:w-[60%] md:text-lg lg:text-2xl xl:text-3xl xl:w-[70%]">{item.title}</motion.h1>
                            <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="flex gap-3">
                            {
                                item.special[0] &&(
                                  <div className="">
                                    <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="text-white"><span className="bg-white p-1 text-black rounded-md cursor-pointer hover:text-blue-600 duration-300 sm:text-sm lg:text-lg">{item.special[0]}</span></motion.h1>
                                  </div>
                                )
                            }
                            {
                                item.special[1] &&(
                                  <div className="">
                                    <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="text-white"><span className="bg-white p-1 text-black rounded-md cursor-pointer hover:text-blue-600 duration-300 sm:text-sm lg:text-lg">{item.special[1]}</span></motion.h1>
                                  </div>
                                )
                            }
                            </motion.div>
                            <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="text-white sm:text-sm lg:text-lg">{item.date}</motion.h1>
                            <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="bg-white w-[150px] flex items-center justify-center rounded-3xl py-1 ">
                                <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            console.log(event);
                                        setValue(newValue);
                                        }}
                                />
                            </motion.div>   
                            <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="text-white sm:text-sm sm:w-[60%] lg:text-lg">{item.text}</motion.h1>
                            <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="text-white sm:text-sm sm:w-[60%] lg:text-lg">{item.text2}</motion.h1>
                            <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="text-blue-600 cursor-pointer lg:text-lg">Continue Reading...</motion.h1>
                        </motion.div>
                        <motion.p  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="border border-gray-900 my-5 sm:w-[65%]"></motion.p>
                    </motion.div>
                )
            })
        }
      </motion.div>
      <div className="w-96 m-auto mt-10">
        <Pagination count={10} variant="outlined" color="secondary" sx={{
            '& .MuiPaginationItem-root': {
            color: 'white', 
            borderColor: '#8e24aa', 
            },
            '& .Mui-selected': {
            backgroundColor: '#ba68c8', 
            color: 'black', 
            '&:hover': {
                backgroundColor: 'white',
                color:"white"
            },
            },
            '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            },
        }} />
      </div>
   </div>
  )
}

export default Categories