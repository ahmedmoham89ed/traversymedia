import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
const NOTIFY = () => {
  return (
    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="bg-blue-500 w-[100%] h-[20vh] sm:h-[25vh] lg:h-[20vh] sm:flex-col flex lg:flex-row items-center justify-around">
            <motion.div className="" initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}}>
                <h1 className='text-3xl font-[pbold] text-white lg:text-xl xl:text-3xl'>NOTIFY ME OF NEW COURSES</h1>
            </motion.div>
           <div className="flex items-center justify-between gap-10">
                <motion.div className="w-96 " initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}}>
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" color="warning" margin='dense'  />
                </motion.div>
                <motion.div className="" initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}}>
                     <Button size='large' variant="contained" color='inherit' ><p className='text-xl font-[pbold] p-2'>NOTIFY ME</p></Button>
                </motion.div>
           </div>
    </motion.div>
  )
}

export default NOTIFY