import blog from "../assets/images/M18chhoRNSya0PenWCQA_logo_long.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <>
        <footer className=" flex items-center justify-around bg-gray-800 h-[12vh] text-white text-center p-4">
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="">
              <img src={blog} className="lg:w-[300px]" />
            </motion.div>
            <motion.p className="sm:text-base lg:text-lg lg:pr-28" initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}}>&copy; 2025 Traversy Media. All Rights Reserved . Ahmed Mohamed Mostafa</motion.p>
            <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="flex gap-4 cursor-pointer text-xl sm:text-base lg:text-2xl">
                 <FaXTwitter />
                 <FaInstagram />
                 <IoLogoYoutube />
                 <FaGithub />
                 <FaLinkedinIn />
            </motion.div>
        </footer>
    </>
  )
}

export default Footer