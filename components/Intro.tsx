"use client"

import Image from 'next/image'
import React from 'react'
import picture from '../public/giriharanpic.jpeg'
import {motion} from "framer-motion";

function Intro() {
  return (
    <section className='flex items-center justify-around'>
        <div>
            <p className="section__text__p1">Hey there, I'm </p>
            <h1 className="title">Giriharan</h1>
            <p className="section__text__p2">Computer Science Undergraduate & Developer</p>
        </div>
        <div className="relative flex items-center justify-center pt-44">
            <motion.div
             
             
             initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:"tween",
                duration:0.25
            }}>
                <Image src={picture} alt="Giriharan"  height="300" width="300" quality="90" priority={true} className='rounded-full h-42 w-42 border-[0.55rem] border-white object-fill shadow-2xl shadow-[#f3e8ff] hover:cursor-pointer pointer-events-none'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Intro
