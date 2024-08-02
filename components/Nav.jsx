
"use client"
import { NotebookPenIcon, } from 'lucide-react'
import React from 'react'
import Modal from "@/components/Modal";
import { useState } from 'react';
import { CloudUpload } from 'lucide-react'
function Nav() {
    const [open, setOpen] = useState(false)
    const fun = ()=>{
        setOpen(false)
    }
  return (
    <nav className="sticky top-0 z-10 w-full bg-[#000000] border-b border-[#ffffff8b]  shadow-md py-3">
         <Modal fun={fun} active={open}></Modal>
      <div className="container mx-auto  px-4 h-16 flex items-center justify-between ">

        <div className=" font-bold text-[#ffffff]  text-lg  md:text-4xl ">
        <NotebookPenIcon size={32} className="inline-block mr-2" />
        NextJs Task
        </div>
        <button  onClick={(pre)=>{setOpen(true)}}  className="  text-[#ffffff]  hover:bg-white hover:text-black flex gap-2 justify-center items-center  px-2 py-2 border-white border  rounded-lg  text-sm  md:text-lg ">
            <CloudUpload/><span className="v"> File Upload</span>
        </button>
      </div>
    </nav>
  )
}

export default Nav