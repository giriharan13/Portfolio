"use client"

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion";
import { BsGithub, BsLinkedin} from 'react-icons/bs';
import ParticlesBackground from './ParticlesBackground';
import { useSectionInView } from '@/lib/hooks';

function Intro() {
  const {ref} = useSectionInView("About")

  return (
    <section className='relative flex flex-col w-full mb-28 text-center sm:mb-0 lg:h-[40rem] pb-10' ref = {ref}  id="About">
        <ParticlesBackground >
        </ParticlesBackground>
        <div className='flex items-center justify-center pt-28 sm:pt-36 px-4'>
          <div className='relative'>
            <motion.div 
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1}}
              transition={{
                type:"tween",
                duration:0.2
              }}>
              <Image src = "/giriharanpic.jpeg" alt="giriharan" width="192" height="192" quality="95" priority={true}
              className='h-70 w-70 object-cover rounded-full border-white border-[0.25rem]
              shadow-xl'/>
            </motion.div>
          </div>
        </div>
        <motion.div className='mb-5 mt-4 px-8 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white dark:text-opacity-90'
        initial={{y:100,opacity:0}}
        animate={{y:0,opacity:1}}>
          <span className='font-bold'>Hello </span> <motion.div className="inline-block" initial={{opacity:0,rotate:50}} animate={{opacity:1,rotate:0}}  transition={{delay:0.2}}>👋 </motion.div> <span className='font-bold'>, I'm Giriharan.</span> <br/> I'm a Computer Science Undergraduate with a passion <br/> for <span 
          className='font-semibold'>Machine learning</span> and <span className='font-semibold'> Software Development </span>
        </motion.div>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium'
        initial={{y:100,opacity:0}}
        animate={{y:0,opacity:1}}>
          <a href='https://github.com/giriharan13' className='bg-white dark:bg-opacity-90 text-black p-4 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition border border-black/10'>
            <BsGithub/> Github 
          </a>
          <a href='https://www.linkedin.com/in/giriharan-r-645533255/'  className='bg-black dark:text-opacity-90 text-white p-4 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition border border-white/20'>
            <BsLinkedin/> LinkedIn
          </a>
        </motion.div>
    </section>
  )
}

export default Intro
