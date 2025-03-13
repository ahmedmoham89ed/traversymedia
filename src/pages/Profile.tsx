import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareReddit,FaBluesky,FaDiscord } from "react-icons/fa6";
import back from "../assets/images/download.jpeg"
const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, // صورة خلفية عن البرمجة
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-gray-900 bg-opacity-75 rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative overflow-hidden"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"
        />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-20"
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative">
            <img
              src={back} 
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-lg"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-2 -right-2 bg-purple-600 p-2 rounded-full cursor-pointer"
            >
              <FaEdit className="text-white text-lg" />
            </motion.div>
          </div>
          <h1 className="text-3xl font-bold mt-4 text-white ">Ahmed Mohamed</h1>
          <p className="text-white">Full Stack Developer</p>
        
       
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-4 text-white "
        >
          <div className="flex items-center">
            <FaEnvelope className="text-purple-600 mr-4 text-xl" />
            <p>ahmed3moha.2med@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-purple-600 mr-4 text-xl" />
            <p>+20 100 248 0268</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-purple-600 mr-4 text-xl" />
            <p>Cairo, Egypt</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            <FaEnvelope />
            <span>Message</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-pink-600 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            <FaPhone />
            <span>Call</span>
          </motion.button>
        </motion.div>

        {/* وسائل التواصل الاجتماعي */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/ahmed-mohamed-707a7133a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-purple-600 hover:text-purple-500"
            target='_blank'
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/ahmedmoham89ed"
            className="text-purple-600 hover:text-purple-500"
            target='_blank'
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="ttps://www.reddit.com/u/Humble-Turnover3836/s/iEQiQZyhVo"
            className="text-purple-600 hover:text-purple-500"
            target='_blank'
          >
           <FaSquareReddit className='text-2xl' />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="ttps://bsky.app/profile/ahmed12r.bsky.social"
            className="text-purple-600 hover:text-purple-500"
            target='_blank'
          >
           <FaBluesky className='text-2xl' />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="ahmedmohamed07153"
            className="text-purple-600 hover:text-purple-500"
            target='_blank'
          >
           <FaDiscord className='text-2xl' />
          </motion.a>
        </motion.div>

        {/* قسم المهارات */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-white ">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              Html
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              Css
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              Typescript
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              NextJs
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              JavaScript
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              React
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full"
            >
              Tailwind CSS
            </motion.span>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Profile;