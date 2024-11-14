import React from 'react'
import Card from './Card'
import { useRef } from 'react'

export default function Forground() {
  const ref=useRef(null)
  const data=[
    {
    desc:'this is data about informations for people .',
    fileSize:'.9mb',
    close:true,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:'green'},
    },
    {
    desc:'this is data about informations for people .',
    fileSize:'.9mb',
    close:true,
    tag:{isOpen:false,tagTitle:"Upload",tagColor:'blue'},
    },
    {
    desc:'this is data about informations for people .',
    fileSize:'.9mb',
    close:true,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:'green'},
    }
  ]
  return (
    <div ref={ref} className='w-full h-screen fixed top-0 left-0 z-[3] flex flex-wrap gap-5 p-5'>
      {
        data.map((item,index)=>(<Card data={item} reference={ref}/>))
      }
    </div>
 
  )
}
