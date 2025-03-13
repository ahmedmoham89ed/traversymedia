import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {motion} from "framer-motion"
const PaidCourses = () => {
  return (
    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="w-[100%] bg-black " >
        <div className="w-[84%] m-auto text-white text-center pb-10">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="bg-red-600 w-[100%] py-7 rounded-sm text-3xl font-[pbold] hover:-translate-y-3 duration-300 ease-in-out transition-all shadow-lg shadow-red-500/50  ">
                 <p>YouTube Videos</p>
            </motion.div>
            <div className="space-y-12 my-20 sm:text-left ">
                <div className="flex items-center justify-between mt-10">
                    <motion.p initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className='text-2xl font-[pbold] lg:text-2xl sm:text-lg'>Who Can or Can't Be A Programmer?</motion.p>
                    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] lg:text-xl sm:text-base '>Watch Now</p></Button> 
                    </motion.div>
                </div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="flex items-center justify-between mt-10 ">
                    <p className='text-2xl font-[pbold] lg:text-2xl sm:text-lg'>15 Web Developer Paths</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] lg:text-xl sm:text-base '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="flex items-center justify-between mt-10 ">
                    <p className='text-2xl font-[pbold] lg:text-2xl sm:text-lg'>Guide To Becoming A Self-Taught Developer</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] lg:text-xl sm:text-base '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="flex items-center justify-between mt-10 ">
                    <p className='text-2xl font-[pbold] lg:text-2xl sm:text-lg'>Frontend, Backend & Full Stack Web Development</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] lg:text-xl sm:text-base '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="flex items-center justify-between mt-10 ">
                    <p className='text-2xl font-[pbold] lg:text-2xl sm:text-lg'>5 High Level Skills & Traits For Programmers</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] lg:text-xl sm:text-base '>Watch Now</p></Button> 
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="w-[84%] m-auto text-white text-center pb-10">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="bg-blue-600 w-[100%] py-7 rounded-sm text-3xl font-[pbold]  hover:-translate-y-3 duration-300 ease-in-out transition-all shadow-lg shadow-blue-500/50  ">
                 <p>Paid Courses</p>
            </motion.div>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="space-y-12 my-20">
                <div className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg  lg:text-2xl'><AcUnitIcon color='error' fontSize="small" className='pb-2' />Freelance Mastery Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-lg lg:text-lg'>Get it Now</p></Button> 
                    </div>
                </div>
            </motion.div>
        </div>
        <div className="w-[84%] m-auto text-white text-center pb-10">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="bg-yellow-600 w-[100%] py-7  rounded-sm text-3xl font-[pbold]  hover:-translate-y-3 duration-300 ease-in-out transition-all shadow-lg shadow-yellow-500/50  ">
                 <p>HTML & CSS</p>
            </motion.div>
            <div className="space-y-12 my-20">
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>HTML Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg'>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>CSS Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.5}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Flexbox Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.6}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>CSS Grid Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.7}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Build a Responsive Website</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.8}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Create a Professional Website From Scratch</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.9}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Build a Portfolio Website w/Dennis Ivy</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>SpaceX Website Clone</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg'>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.1}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Starbucks Landing Page</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg'>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:2.2}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>HTML & CSS Playlist (50+ Projects)</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="w-[84%] m-auto text-white text-center pb-10">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="bg-blue-600 w-[100%] py-7 rounded-sm text-3xl font-[pbold] hover:-translate-y-3 duration-300 ease-in-out transition-all shadow-lg shadow-blue-500/50  ">
                 <p>Paid Courses</p>
            </motion.div>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="space-y-12 my-20">
                <div className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-xl'><AcUnitIcon color='error' fontSize="small" className='pb-2' />Modern HTML & CSS From The Beginning <span className='text-green-500'>24 Hours</span></p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg'>Get it Now</p></Button> 
                    </div>
                </div>
            </motion.div>
        </div>
        <div className="w-[84%] m-auto text-white text-center pb-10">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="bg-purple-600 w-[100%] py-7 rounded-sm text-3xl font-[pbold] hover:-translate-y-3 duration-300 ease-in-out transition-all shadow-lg shadow-purple-500/50  ">
                 <p>CSS Frameworks & Tools</p>
            </motion.div>
            <div className="space-y-12 my-20">
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Bootstrap 5 Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Tailwind Project From Scratch</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Your First Tailwind Site w/Chris Sev</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Bulma Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Materialize Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Sass Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.2}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Sass Crash Course</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.3}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>SpaceX Website Clone</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.4}} viewport={{once:false}} className="flex items-center justify-between mt-10">
                    <p className='text-2xl font-[pbold] sm:text-lg lg:text-2xl'>Starbucks Landing Page</p>
                    <div className="w-[30vw]">
                         <Button variant="contained" fullWidth ><p className='py-2 text-xl font-[pbold] sm:text-base lg:text-lg '>Watch Now</p></Button> 
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default PaidCourses