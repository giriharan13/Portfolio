import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

function SendButton() {
    
    const {pending} =  useFormStatus();

    return (
        <button className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#112D4E] text-white dark:bg-white dark:bg-opacity-90 dark:text-[#112D4E] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all disabled:scale-100 disabled:bg-opacity-65' disabled={pending} type='submit'>
            {
                pending? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>:
                (<>
                    Send <FaPaperPlane className='text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all '/>
                    
                </>)
            }
        </button>     
    )
}

export default SendButton