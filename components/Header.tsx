"use client";

import React from "react";
import {motion} from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

function Header(){
  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 h-[9.5rem] w-full rounded-none border border-white border-opacity-40 bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-0 sm:h-[9rem] md:h-[8rem]"
      initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}>
      </motion.div>
      <nav className="flex flex-wrap items-center justify-between fixed w-full top-[0.15rem] h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 mx-auto max-w-screen-xl">
        <motion.div className="flex flex-wrap"
        initial={{x:-60,opacity:0}}
        animate={{x:0,opacity:1}}>
          <span className="px-10 text-[2.5rem] font-semibold whitespace-nowrap text-[#26004f] hover:cursor-pointer">Giriharan</span>
        </motion.div>
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[1.5rem] sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {
            links.map(link=>{
              return (
                <motion.li key={link.hash} className="h-3/4 flex items-center justify-center"
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1}}>
                  <Link href={link.hash} className="flex w-full items-center justify-center px-3 hover:text-[#7e6798] transition text-[#26004f] hover:underline underline-offset-[0.5rem] sm:underline-offset-[1rem]">
                  {link.name}
                  </Link>
                </motion.li>
              );
            })
          }
        </ul>
      </nav> 
    </header>
  )
}

export default Header;
