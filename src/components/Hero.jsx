import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#161721] pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center border-b border-[#333]">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
          ✨ AI-Powered Code Analysis
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Understand Code Logic <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500">
            In Seconds
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Don't waste time deciphering complex algorithms. Paste your code snippet below and let our advanced AI explain the logic clearly and concisely.
        </p>
      </div>
    </div>
  )
}

export default Hero