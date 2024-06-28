"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'
import SendButton from './SendButton'

function Contact() {
    
    const {ref} = useSectionInView("Contact");

    return (
        <motion.section className=" bg-transparent scroll-mt-28 sm:max-w-[53rem] mb-20 sm:mb-28 mx-4 max-w-[38rem] text-center" ref={ref} id="contact"
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 dark:text-white -mt-3'>Please contact me directly at <a className='underline' href="mailto:giriharanraghu@gmail.com">giriharanraghu@gmail.com</a> or through this form.</p>
            <form className='flex flex-col flex-wrap mt-10' 
                    action={async (formData)=>{
                        const {data,error} = await sendEmail(formData)
                        if(error){
                            toast.error(error)
                            return;
                        }
                        toast.success('Email sent successfully!')
                    }}>
                <input className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-95' name="senderEmail" required maxLength={500} placeholder='Your email' type='email'></input>
                <textarea className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-95' name="message" required maxLength={5000} placeholder='Your Message'/>
                <div className='flex justify-center items-center'>
                    <SendButton/>
                </div>
            </form>
        </motion.section>
    )
}

export default Contact