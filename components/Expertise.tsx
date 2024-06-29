"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { expertiseData } from '@/lib/data'
import { Icon } from '@iconify/react'
import { useSectionInView } from '@/lib/hooks'
import { animate, delay, motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial : {
        opacity:0,
        y:100
    },
    animate : (index:number) => ({
        opacity:1,
        y:0,
        transition:{
            delay:0.06*index,
        }
    })
}

function Expertise() {

    const {ref} = useSectionInView("Expertise");

  return (
    <section className="bg-transparent scroll-mt-28 mb-28 sm:max-w-[53rem]" ref={ref} id="expertise">
        <SectionHeading>My Expertise</SectionHeading>
        <ul className='flex flex-col gap-20'>
            {
                expertiseData.map((expertise,index)=>(
                  <li className="flex flex-col items-center" key={index}>
                    <h3 className='font-light text-xl text-center mb-10 dark:text-white text-[#112D4E]'>{expertise.title}</h3>
                    <ul className='flex flex-wrap items-center justify-center px-4'>
                        {
                            expertise.items.map((item,index2)=>(
                                <motion.li key={index2}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once:true
                                    }}
                                    custom={index2}>
                                        <div className='flex flex-col p-5 items-center hover:scale-125 transition gap-2'>
                                            <Icon icon={item.icon} className='h-16 w-16 sm:h-20 sm:w-20 bg-transparent'></Icon>
                                            <p className='dark:text-white dark:text-opacity-90'>{item.name}</p>
                                        </div>
                                </motion.li>
                            ))
                        }
                    </ul>
                  </li>  
                ))
            }
        </ul>
    </section>
  )
}

export default Expertise