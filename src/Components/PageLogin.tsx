import { styled } from "@mui/material";
import back from "../assets/images//ry03k2xpShihpR3ZlT98_file.jpg"
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const WhiteTextField = styled(TextField)(() => ({
    // تغيير لون النص (الخط)
    '& .MuiInputBase-input': {
      color: 'white', 
    },
    // تغيير لون الإطار (الحدود) والخلفية
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      backdropFilter: 'blur(100px)',
      borderRadius:"10px",
      '& fieldset': {
        borderColor: 'white', 
      },
      '&:hover fieldset': {
        borderColor: 'lightgray', 
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', 
      },
    },
    // تغيير لون النص الخاص بالـ Label
    '& .MuiInputLabel-root': {
      color: 'white', 
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white', 
    },
  }));
const PageLogin = () => {
  return (
     <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="relative z-0 sm:h-[150vh]" style={{backgroundImage:`url(${back})`,width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className=" absolute z-10 inset-0 bg-black opacity-60"></div>
            <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="text-white mt-24 text-xl absolute z-30 inset-0 font-[pregular] flex flex-col items-center justify-center space-y-8">
                <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}} className="text-4xl font-[pbold] lg:text-5xl">Log In</motion.h1>
                <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}} className="xl:w-[30vw] sm:w-[55vw]  space-y-8 ">
                    <motion.div  className="" initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}}>
                    <WhiteTextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    </motion.div>
                    <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}}>
                      <WhiteTextField
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          required
                          type="password"
                          placeholder="Enter Your Password"
                      />
                    </motion.div>
                    <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}}>
                      <FormControlLabel
                          control={
                              <Checkbox
                              defaultChecked
                              color="success"
                              sx={{
                                  color: pink[100],
                                  '&.Mui-checked': {
                                  color: pink[100],
                                  },
                              }}
                              />
                          }
                          label="Remember Me" 
                      />
                    </motion.div>
                    <motion.div  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}} className="flex items-center justify-center">
                         <Button variant="contained" size="large"><p className="text-xl font-[pbold] p-2">SubMit</p></Button>
                    </motion.div>
                    <motion.h1  initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1.1}} viewport={{once:false}} className="text-center pt-3 cursor-pointer text-md">Forgot Password <Link to={"/SignUp"} className="text-blue-500">SignUp</Link> </motion.h1>
                </motion.div>
            </motion.div>

      </motion.div>      
  )
}

export default PageLogin