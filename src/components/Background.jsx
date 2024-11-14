import React from 'react'

export default function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
    <div className='absolute top-[5%]  w-full text-xl flex justify-center py-10 font-semibold text-zinc-500'>Documents</div>
    <h1 className='font-semibold text-zinc-300 absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] text-[13vw] tracking-tighter leading-none'>Docs.</h1>
    </div>
  )
}
