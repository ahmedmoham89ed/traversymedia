import { motion } from 'framer-motion';
import {
  FaThList, FaBootstrap, FaBriefcase, FaBook, FaDatabase,
  FaHtml5, FaJs, FaTools, FaNodeJs, FaPython, FaReact, FaVuejs,
  FaSearch, FaFacebook, FaTwitter, FaInstagram, FaLinkedin
} from 'react-icons/fa';

const Sidebar = () => {
  const categories = [
    { name: "All Categories", icon: <FaThList /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Career", icon: <FaBriefcase /> },
    { name: "Courses & Announcements", icon: <FaBook /> },
    { name: "Database", icon: <FaDatabase /> },
    { name: "Html & Css", icon: <FaHtml5 /> },
    { name: "Javascript", icon: <FaJs /> },
    { name: "Javascript Build Tools", icon: <FaTools /> },
    { name: "Next.Js", icon: <FaReact /> },
    { name: "Node.Js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
  ];

  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="absolute right-0 top-24 w-80 bg-black shadow-2xl z-40 h-[650px] sm:h-[550px] sm:w-[230px]  md:w-[280px] lg:w-[350px] lg:h-[750px] xl:h-[650px] xl:w-[370px] " 
    >
      <div className="p-6 border-b border-gray-800">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="p-4 overflow-y-auto h-[calc(650px-12rem)] sm:h-[calc(550px-12rem)] lg:h-[calc(750px-12rem)] xl:h-[calc(650px-12rem)] scrollbar-hide">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-3 text-gray-300 sm:text-xs md:text-base lg:text-xl xl:text-lg hover:bg-gray-800 rounded-lg transition-all duration-200 hover:translate-x-2 hover:text-white"
              >
                <span className="text-xl">{category.icon}</span>
                <span className="ml-3">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* وسائل التواصل الاجتماعي */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <FaFacebook className="text-xl sm:text-base md:text-lg lg:text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <FaTwitter className="text-xl sm:text-base md:text-lg lg:text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <FaInstagram className="text-xl sm:text-base md:text-lg lg:text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <FaLinkedin className="text-xl sm:text-base md:text-lg lg:text-xl" />
          </a>
        </div>
        <p className="text-sm text-gray-400 text-center mt-2 sm:text-sm">© 2025 Ahmed Mohamed</p>
      </div>

      {/* إضافة CSS لإخفاء شريط التمرير */}
      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none; 
        }

        .scrollbar-hide {
          -ms-overflow-style: none; 
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Sidebar;