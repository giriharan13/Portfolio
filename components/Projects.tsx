"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

function Projects() {
    const {ref} = useSectionInView("Projects")

    return (
        <section className='flex flex-col bg-transparent scroll-mt-28 mb-28' ref={ref} id="projects">
            <SectionHeading>My Projects</SectionHeading>
            <div className='flex flex-col gap-2'>
            { projectsData.map((project,index)=>(
            <React.Fragment key={index}>
                <Project {...project}/>
            </React.Fragment> 
            ))
                }
            </div>
        </section>
    )
}


export default Projects