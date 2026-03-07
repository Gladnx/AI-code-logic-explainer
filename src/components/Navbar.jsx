import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-[#000000] border-b-4 border-indigo-500 h-20 px-8 flex items-center justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-white tracking-tight leading-none text-left">
          Code<span className="text-blue-500">Logic</span>
        </h1>
        <span className="text-xs text-gray-400 font-medium tracking-wide text-left">
          AI EXPLAINER
        </span>
      </div>
      <a
        href="#code-logic"
        className="text-sm font-bold text-white-300 hover:text-black bg-blue-800 hover:bg-blue-500 p-2.5 border-2 border-blue-500 rounded-md transition-colors"
      >
        Code Logic
      </a>
    </div>
  )
}

export default Navbar
