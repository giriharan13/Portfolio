"use client";

import {motion} from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

function Header(){

  const {activeSection,setActiveSection,setTimeOfLastClick} = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
     <motion.div 
       className="fixed top-0 h-[4.5rem] left-1/2 w-full rounded-none border border-white dark:border-[#0e2642] dark:bg-[#0e2642] bg-white shadow-lg shadow-black/[0.03] sm:top-6  sm:h-[3.25rem] sm:rounded-full sm:w-[38rem]"

       initial={{y:-100,x:"-50%",opacity:0}}
       animate={{y:0,x:"-50%",opacity:1}}
       >
      </motion.div>


      <nav className="flex fixed top-[0.15rem] 
      left-1/2 h-12 -translate-x-1/2 py-2 
      sm:top-[1.7rem] sm:h-[initial] sm:py-0" >

        <ul className="flex w-[22rem] flex-wrap items-center
         justify-center gap-y-1 text-[1.2rem] 
         font-medium sm:w-[initial] sm:flex-nowrap 
         sm:gap-5" >
          {
            links.map(link=>(
              <motion.li className="relative h-3/4 flex items-center justify-center" key={link.hash}
              initial={{y:-100,opacity:0}}
              animate={{y:0,opacity:1}}>
                <Link className={clsx("flex w-full items-center justify-center px-3 py-2 hover:text-[#1E2F97] dark:hover:text-white  text-[#112D4E] dark:text-white dark:text-opacity-80 transition",{"text-[#1E2F97] dark:!text-opacity-100":activeSection===link.name}) } href={link.hash}
                 onClick={()=>{
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())}}>
                {
                  link.name
                }
                {
                  link.name===activeSection && <motion.span layoutId="activeSection"  className="absolute bg-[#e4ecf9] dark:bg-[#112D4E] rounded-full inset-0 -z-10"
                                                transition={
                                                  {
                                                    type:"spring",
                                                    stiffness:380,
                                                    damping:30
                                                  }
                                                }></motion.span>
                }
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;
