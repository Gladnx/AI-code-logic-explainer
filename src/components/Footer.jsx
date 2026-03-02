import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#000000] border-t-4 border-indigo-500 py-8 px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h2 className="text-xl font-bold text-white tracking-tight">
          Code<span className="text-blue-500">Logic</span>
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Simplifying code understanding for everyone.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6">

        <div className="text-xs text-gray-600 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} CodeLogic AI
        </div>
      </div>
    </div>
  )
}

export default Footer