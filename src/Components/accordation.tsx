import * as React from 'react';
import Accordion, {
  AccordionSlots,
  accordionClasses,
} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import {motion} from "framer-motion"
export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className='w-[84%] m-auto pt-20 xl:pt-32 pb-10 mt-5 mb-14 grid grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 items-start justify-center  '>
          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="space-y-8 w-[80%]  ">
         
          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}} className="">
            <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'              expanded={expanded}
              onChange={handleExpansion}
              slots={{ transition: Fade as AccordionSlots['transition'] }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded
                  ? {
                      [`& .${accordionClasses.region}`]: {
                        height: 'auto',
                      },
                      [`& .${accordionDetailsClasses.root}`]: {
                        display: 'block',
                      },
                    }
                  : {
                      [`& .${accordionClasses.region}`]: {
                        height: 0,
                      },
                      [`& .${accordionDetailsClasses.root}`]: {
                        display: 'none',
                      },
                    },
                {
                  
                  py: 2,
                  backgroundColor: 'black',
                  color:"white" ,
                  borderRadius:1,
                },
              ]}
              
            >
              <AccordionSummary
                expandIcon={<AddIcon color='primary' fontSize='large' />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{color:"white"}}
              >
                <Typography component="span" sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>
                  How do I sign up?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                    <p>Account creation happens when you purchase a course or a membership. You will be prompted to create a password in the process. Then you can log in with your email and that password.</p>
                    <p>If you bought a course and for some reason, you are not asked to enter a password, be sure to email support@traversymedia.com and include the email address that you used to register and you will get a password reset link. Sometimes this happens if the payment is pending.</p>
                    <p>There is no "sign up" link because there is no reason to have an account without a course. In the future, we may have free courses, but you will still need to go through the process of selecting a course first.</p>
                </Typography>
              </AccordionDetails>
            
            </Accordion>
          </motion.div>
          
          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}}>
          <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
           sx=
              {{
                
                py: 2,
                backgroundColor: 'black',
                color:"white" ,
                borderRadius:1,}}>
          <AccordionSummary
            expandIcon={<AddIcon color='primary' fontSize='large'  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{color:"white"}}
          >
            <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>How do I access the Discord server?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
              <p>If you purchase a course or a membership, you will get an email with the invite link.</p>
              <p>If you purchase a monthly or yearly membership, be sure to DM me and let me know so that I can add you to the VIP role.</p>
            </Typography>
          </AccordionDetails>
          </Accordion>
          </motion.div>

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}}>  
          <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
           sx=
              {{
                
                py: 2,
                backgroundColor: 'black',
                color:"white" ,
                borderRadius:1,}}>
          <AccordionSummary
            expandIcon={<AddIcon color='primary' fontSize='large'  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{color:"white"}}
          >
            <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Will courses stay up to date?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
              <p>Yes, I try and keep courses up to date, but please understand that it takes a lot of work and I don't just throw in a couple of videos and call it an update.</p>
              <p>Sometimes I will create a new course with new projects and retire the old one. If you purchased a retired course within six months of the new course being released, email support@traversymedia.com, and we would send you a free code for the new course.</p>
              <p>There are some older courses such as Node.js API Masterclass that has not been updated with new videos, however 98% of the course code would be the same if I did update it.</p>
              <p>The Discord server is here to help if you need it.</p>
            </Typography>
          </AccordionDetails>
          </Accordion>
          </motion.div>

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}}>
          <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
           sx=
              {{
                
                py: 2,
                backgroundColor: 'black',
                color:"white" ,
                borderRadius:1,}}>
          <AccordionSummary
            expandIcon={<AddIcon color='primary' fontSize='large'  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{color:"white"}}
          >
            <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Video Player Sidebar Addon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
              <p>The video player platform that we use has a sidebar with the curriculum. Unfortunately, by default, this sidebar does not move and show where you are in the course or which video that you are watching.</p>
              <p>However, my awesome partner Will (aka bushblade) created a Chrome extension and a Firefox addon that fixes this issue and works perfectly. Simply install it and it works:</p>
              <p>Chrome Extension:https://chrome.google.com/webstore/detail/traversy-media-scroll-act/nmddkphngjlkifpobgpcbfbmfmfpimam</p>
              <p>Firefox Addon: https://addons.mozilla.org/en-US/firefox/addon/traversy-scroll-active-lesson/</p>
              <p>Be sure to rate and review ;</p>
            </Typography>
          </AccordionDetails>
          </Accordion>
          </motion.div>

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}}>
          <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
           sx=
              {{
                
                py: 2,
                backgroundColor: 'black',
                color:"white" ,
                borderRadius:1,}}>
          <AccordionSummary
            expandIcon={<AddIcon color='primary' fontSize='large'  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{color:"white"}}
          >
            <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Do videos have closed captions?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
              <p>As of right now, Modern JS From The Beginning 2.0 has captions. We are working on the other courses.</p>
            </Typography>
          </AccordionDetails>
          </Accordion>
          </motion.div>

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}}>
          <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
           sx=
              {{
                
                py: 2,
                backgroundColor: 'black',
                color:"white" ,
                borderRadius:1,}}>
          <AccordionSummary
            expandIcon={<AddIcon color='primary' fontSize='large'  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{color:"white"}}
          >
            <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Are all courses hosted by Brad Traversy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
              <p>At this time, all courses are hosted by Brad. That may change in the future, as we are open to the possibility of having other instructors teach courses.</p>
            </Typography>
          </AccordionDetails>
          </Accordion>
          </motion.div>

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}}>          
          <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
           sx=
              {{
                
                py: 2,
                backgroundColor: 'black',
                color:"white" ,
                borderRadius:1,}}>
          <AccordionSummary
            expandIcon={<AddIcon color='primary' fontSize='large'  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{color:"white"}}
          >
            <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>How do I cancel my membership?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
              <p>If you sign up for a monthly or yearly membership, you can cancel at any time. Just go to "settings" and then under the "Purchase History", you should see an option to cancel. </p>
              <p>You can also just email support@traversymedia.com and ask to cancel.</p>
            </Typography>
          </AccordionDetails>
          </Accordion>
          </motion.div>

          </motion.div> 

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.3}} viewport={{once:false}} className="space-y-8 w-[80%]">

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.4}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
              sx={{
                    py: 2,
                    backgroundColor: 'black',
                    color:"white" ,borderRadius:1,}}>
              <AccordionSummary
                expandIcon={<AddIcon color='primary' fontSize='large'  />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{color:"white"}}
              >
                <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>How do I access the premium docs?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                  <p>The Modern JS course includes in-depth written documentation for each video. You can find them in the lesson labeled "Premium Docs", There is a download link below the video.</p>
                </Typography>
              </AccordionDetails>
              </Accordion>
          </motion.div>    
          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.5}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
            sx=
                {{
                  
                  py: 2,
                  backgroundColor: 'black',
                  color:"white" ,
                  borderRadius:1,}}>
            <AccordionSummary
              expandIcon={<AddIcon color='primary' fontSize='large'  />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{color:"white"}}
            >
              <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Do you offer support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                <p>Yes, we have q/a helpers like Will and Prateek who check Discord to help with any problems. We also check comments within the video lessons. We will try to get to your question in a timely manner, but please be patient.</p>
              </Typography>
            </AccordionDetails>
              </Accordion>
          </motion.div>    

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.6}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
            sx=
                {{
                  
                  py: 2,
                  backgroundColor: 'black',
                  color:"white" ,
                  borderRadius:1,}}>
            <AccordionSummary
              expandIcon={<AddIcon color='primary' fontSize='large'  />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{color:"white"}}
            >
              <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Where do I access my courses?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                <p>When you purchase a course, you will be asked to create a password. You should automatically be logged in, but if you are not, log in via the form.</p>
                <p>Once you are logged in, click on the icon on the top right and click on "My Library". Any course that you purchase will show up here. If you are a Pro or VIP member, you will see all courses here.</p>
              </Typography>
            </AccordionDetails>
              </Accordion>
          </motion.div>    

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.7}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
            sx=
                {{
                  
                  py: 2,
                  backgroundColor: 'black',
                  color:"white" ,
                  borderRadius:1,}}>
            <AccordionSummary
              expandIcon={<AddIcon color='primary' fontSize='large'  />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{color:"white"}}
            >
              <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>How do I access the Discord server?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                <p>If you purchase a course or a membership, you will get an email with the invite link.</p>
                <p>If you purchase a monthly or yearly membership, be sure to DM me and let me know so that I can add you to the VIP role.</p>
              </Typography>
            </AccordionDetails>
              </Accordion>
          </motion.div>    

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.8}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
              sx=
                  {{
                    
                    py: 2,
                    backgroundColor: 'black',
                    color:"white" ,
                    borderRadius:1,}}>
              <AccordionSummary
                expandIcon={<AddIcon color='primary' fontSize='large'  />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{color:"white"}}
              >
                <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Will courses stay up to date?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                  <p>Yes, I try and keep courses up to date, but please understand that it takes a lot of work and I don't just throw in a couple of videos and call it an update.</p>
                  <p>Sometimes I will create a new course with new projects and retire the old one. If you purchased a retired course within six months of the new course being released, email support@traversymedia.com, and we would send you a free code for the new course.</p>
                  <p>There are some older courses such as Node.js API Masterclass that has not been updated with new videos, however 98% of the course code would be the same if I did update it.</p>
                  <p>The Discord server is here to help if you need it.</p>
                </Typography>
              </AccordionDetails>
              </Accordion>
          </motion.div>

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:.9}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
              sx=
                  {{
                    
                    py: 2,
                    backgroundColor: 'black',
                    color:"white" ,
                    borderRadius:1,}}>
              <AccordionSummary
                expandIcon={<AddIcon color='primary' fontSize='large'  />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{color:"white"}}
              >
                <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>Video Player Sidebar Addon</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                  <p>The video player platform that we use has a sidebar with the curriculum. Unfortunately, by default, this sidebar does not move and show where you are in the course or which video that you are watching.</p>
                  <p>However, my awesome partner Will (aka bushblade) created a Chrome extension and a Firefox addon that fixes this issue and works perfectly. Simply install it and it works:</p>
                  <p>Chrome Extension:https://chrome.google.com/webstore/detail/traversy-media-scroll-act/nmddkphngjlkifpobgpcbfbmfmfpimam</p>
                  <p>Firefox Addon: https://addons.mozilla.org/en-US/firefox/addon/traversy-scroll-active-lesson/</p>
                  <p>Be sure to rate and review ;</p>
                </Typography>
              </AccordionDetails>
              </Accordion>
          </motion.div>    

          <motion.div initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.2,delay:1}} viewport={{once:false}}>
              <Accordion className='shadow-2xl sm:w-[530px] md:w-[630px] lg:w-[835px] xl:w-[600px]'
              sx={{
                    py: 2,
                    backgroundColor: 'black',
                    color:"white" ,borderRadius:1,}}>
              <AccordionSummary
                expandIcon={<AddIcon color='primary' fontSize='large'  />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{color:"white"}}
              >
                <Typography component="span"  sx={{ fontSize: '1.25rem', fontWeight: 'bold',paddingX:2  }}>How do I access the premium docs?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='space-y-4 ' sx={{ fontSize: '1.2rem', lineHeight: '1.5',paddingX:2 }}>
                  <p>The Modern JS course includes in-depth written documentation for each video. You can find them in the lesson labeled "Premium Docs", There is a download link below the video.</p>
                </Typography>
              </AccordionDetails>
              </Accordion>
          </motion.div> 
          </motion.div>
    </motion.div>
  );
}
