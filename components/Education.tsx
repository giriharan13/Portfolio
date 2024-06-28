"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import 'react-vertical-timeline-component/style.min.css';
import { educationData } from '@/lib/data';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import { motion, useScroll } from 'framer-motion';

function Education() {

  const {ref} = useSectionInView("Education");


  return (
    <section className="bg-transparent scroll-mt-28 mb-28 sm:max-w-[53rem]" ref={ref} id="education">
        <SectionHeading>My Education</SectionHeading>
        <ul className='flex flex-col'>
        {
          educationData.map((education,index)=>(
            <motion.li className="flex flex-wrap p-2  dark:text-white dark:text-opacity-90 shadow-sm sm:p-8 last:mb-0 sm:last:mb-0 mb-2 sm:mb-8 mx-4 min-h-[15rem] dark:bg-[#0e2642] bg-[#DBE2EF] rounded-lg hover:shadow-md transition-all" 
                       key={index}
                       initial={
                        {
                          opacity:0
                        }
                       }
                       whileInView={{
                          opacity:1
                       }}
                       transition={{
                        duration:1
                       }}
                       >
              <div className='flex items-start max-w-[38rem]'>
                <Image src={education.logo} alt={education.name} width="192" height="192" quality={95} 
                className='bg-transparent w-20 sm:w-32 max-w-32 px-1' />
                <div className='flex flex-col px-2'>
                  <h2 className='font-semibold text-xl'>{education.education}</h2>
                  <h3>{education.name}</h3>
                  <h3>{education.time}</h3>
                  <h3 className='font-semibold'>{education.score.scoreType} : {education.score.score} / {education.score.totalScore}</h3>
                  <ul className='list-disc pl-8 mt-1'>
                    {
                      education.branches.map((branch,index)=>(
                        <li key={index}>{branch}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </motion.li>
          ))
        }
        </ul>
    </section>
  )
}

export default Education