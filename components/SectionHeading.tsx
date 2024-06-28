import React from "react";

export default function SectionHeading({children}:{
    children:React.ReactNode
}
){

    return <h2 className="text-3xl font-medium capitalize mb-8 dark:text-white dark:text-opacity-90 text-[#112D4E] text-center">{children}</h2>
}