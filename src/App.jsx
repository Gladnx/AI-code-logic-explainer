import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Hero from './components/Hero'
import CodeLogic from './components/CodeLogic'
import Footer from './components/Footer'

const App = () => {
  const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' }
  ]

  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#1e1e1e',
      borderColor: '#333',
      color: 'white',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? '#264f78' : isFocused ? '#333' : '#1e1e1e',
      color: 'white',
      cursor: 'pointer',
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#1e1e1e',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'white',
    }),
    input: (styles) => ({
      ...styles,
      color: 'white',
    }),
  };

  const explainCode = async () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setOutput("Error: API key is missing. Please create a .env file in the project root with VITE_GEMINI_API_KEY=your_api_key and restart the server.");
      return;
    }

    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      const result = await model.generateContent(
        `Explain the logic of this ${selectedLanguage.value} code clearly and concisely in Markdown format:\n\n${code}`
      );
      setOutput(result.response.text());
    } catch (error) {
      console.error("Error explaining code:", error);
      setOutput(`Error: ${error.message || "An error occurred while explaining the code."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <CodeLogic
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        code={code}
        setCode={setCode}
        output={output}
        setOutput={setOutput}
        loading={loading}
        setLoading={setLoading}
        explainCode={explainCode}
        options={options}
        customStyles={customStyles}
      />
      <Footer />
    </>
  )
}

export default App
