"use client"

import React from 'react'
import {motion} from 'framer-motion'

function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:opacity-90'
    initial={{y:100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{
      delay:0.125
    }}>
      
    </motion.div>
  )
}

export default SectionDivider
