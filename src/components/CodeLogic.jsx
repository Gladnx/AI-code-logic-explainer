import React from 'react'
import Editor from '@monaco-editor/react'
import Select from 'react-select'
import ReactMarkdown from 'react-markdown'

const CodeLogic = ({ selectedLanguage, setSelectedLanguage, options, customStyles, code, setCode, explainCode, loading, output }) => {
  return (
    <div id="code-logic" className="w-full bg-[#080915] flex flex-col">
      <h1 className="text-4xl font-bold text-center py-6 "> <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500'>AI Powered</span> Code Logic Explainer</h1>
      <div className='main flex items-start justify-between' style={{height: 'calc(100vh - 90px)'}}>

        <div className='left flex flex-col h-full w-[50%]'>
          <div className="tabs py-3 px-5 w-full flex items-center gap-2.5">
          <Select 
            value = {selectedLanguage}
            onChange={(e) => setSelectedLanguage(e)} 
            options={options}
            styles={customStyles}
          />
            <button onClick={() => {
              if (!code?.trim()) {
                alert("Please enter code first")
              }
              else {
                explainCode()
              }
            }} className="btnNormal bg-blue-900 min-w-30 transition-all hover:bg-blue-500">
              {loading ? "Explaining..." : "Explain Logic"}
            </button>
          </div>

          <Editor 
            className='editor ml-4' 
            height='80%' 
            width='95%' 
            theme='vs-dark' 
            language={selectedLanguage.value} 
            value={code}
            onChange={(value) => setCode(value || "")}
          />
        </div>
        <div className='right h-[90%] w-[50%] mt-8 mr-4 bg-[#1e1e1e] overflow-auto p-4'>
          {loading ? (
            <p className="text-gray-400">Analyzing logic...</p>
          ) : (
            <div className="prose prose-invert max-w-none text-sm text-gray-300 font-sans">
              <ReactMarkdown>{output || "Logic explanation will appear here..."}</ReactMarkdown>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default CodeLogic
