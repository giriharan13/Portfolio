"use client";

import { projectsData } from "@/lib/data";
import { Icon } from "@iconify/react";
import { useScroll,motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number]

function Project({title,logo,description,stack,demoURL,githubURL,image}:ProjectProps){
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1])


        return <motion.div style={{
            opacity:opacityProgress,
            scale:scaleProgress
        }}
        className="mb-4 sm:mb-8 last:mb-0">
        <section 
        ref={ref} className='group dark:bg-[#0e2642] bg-[#DBE2EF] hover:bg-[#e7edf7] rounded-lg max-w-[55rem] border
        border-black/5 overflow-hidden sm:pr-8 relative min-h-[26rem] sm:min-h-[22rem] flex flex-col m-5 transition'>
            <div className='py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[50%]'> 
                <div className='flex items-center gap-3'>
                    <h3 className='text-2xl font-medium dark:text-white dark:text-opacity-90 text-[#112D4E] '>
                        {title}
                    </h3>
                    <Image src={logo} width="192" height="192" quality={95} alt={title} className='w-12'></Image>
                </div>
                <p className='mt-2 leading-relaxed dark:text-white text-gray-700'>{description}</p>
                <div className='flex flex-col flex-wrap justify-center p-2'>
                    <h3 className='text-md font-semibold dark:text-white text-[#112D4E]'>Made with: </h3>
                    <ul className='flex flex-wrap gap-1 mt-4 sm:mt-auto'>
                        {stack.map((st,index)=>(
                            <li className="px-1 py-1" key={index}>
                                <Icon icon={st.icon} className='bg-transparent h-8 w-8'></Icon>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-end">
                <a href={githubURL} className='bg-black text-white dark:bg-opacity-90 flex flex-wrap gap-2 w-30 p-3 items-center rounded-full hover:scale-110 active:scale-105 transition border border-black/10'>
                            <BsGithub color="white"/> Github 
                </a>
                </div>
            </div>
            <Image src={image} alt={title} quality={90} 
            className='hidden md:flex absolute lg:-right-16 top-8 w-[30.25rem] rounded-t-lg
            shadow-2xl group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
            group-hover:scale-[1.04] -right-24 transition'
            height="1080" width="1920">
            </Image>
            <Image src={logo} width="100" height="100" quality={95} alt={title} className='
            opacity-0 bottom-4 lg:group-hover:flex absolute -right-16 w-[5.25rem] bg-transparent
            group-hover:-translate-x-20 group-hover:opacity-100 transition'></Image>
        </section>
    </motion.div>
}

export default Project