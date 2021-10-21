import React, { useEffect, useRef, useState } from 'react'

const Modal = ({isModalOpen,setIsModalOpen,setModalChildren,children}) => {
  const modal = useRef()

  const handleModal=(e)=>{
    if(e.target.classList.contains("wrapper")){
      handleToggle()
    }
  }

  useEffect(()=>{
    if(isModalOpen){
      if (modal.current.classList.contains("hidden")){
        modal.current.classList.add("flex")
        modal.current.classList.remove("hidden")
      }
    }
    if(!isModalOpen){
      if(modal.current.classList.contains("flex")){

        modal.current.classList.remove("flex")
        modal.current.classList.add("hidden")
      }
      
    }
    
  },[isModalOpen])

  const handleToggle=()=>{
    if (modal.current.classList.contains("hidden")){
      modal.current.classList.add("flex")
      modal.current.classList.remove("hidden")
    }else{
      modal.current.classList.remove("flex")
      modal.current.classList.add("hidden")
      setModalChildren()
      setIsModalOpen(false)
    }
  }

  return (
    <div onClick={handleModal} ref={modal} className="wrapper transform transition duration-1000 flex justify-center items-center fixed top-0 left-0 w-full z-50 min-h-screen bg-black bg-opacity-30">
      <div className="w-11/12 md:w-6/12 lg:w-4/12 bg-gray-50 rounded-md p-3">
        {children}
      </div>
    </div>
  )
}

export default Modal
