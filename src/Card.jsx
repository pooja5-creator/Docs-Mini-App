import React from 'react'
import { motion } from "framer-motion"

export default function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative w-60 h-72 bg-zinc-800 rounded-[50px] px-10 py-8 text-white overflow-hidden'>
    <p className='text-3xl'> <i className="fa-regular fa-file"></i></p>
    <p className='text-md font-semibold mt-4 leading-tight'>{data.desc}</p>
  <div className='footer  absolute bottom-0 left-0  w-full'>
    <div className='text-2xl  flex justify-between items-center mb-5 px-5'>
        <h5 className='text-xl'>{data.fileSize}</h5>
        <span className='text-[20px] text-cyan-950 w-7 h-7 rounded-full bg-white flex justify-center items-center'>{data.close?<i class="fa-solid fa-xmark"></i>:<i className="fa-solid fa-download"></i>}</span></div>
         {data.tag.isOpen&& <div className={`tag py-5 w-full flex justify-center items-center
             ${data.tag.tagColor === "blue" ? 'bg-blue-600' : 'bg-green-600'}`}>
                <h1>{data.tag.tagTitle}
             </h1></div>}
  </div>
 
    </motion.div>
    
  )
}
