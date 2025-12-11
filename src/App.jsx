import './App.css'
import FileInput from './components/FileInput'
import PDFRender from './components/PDFRender'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pdfFile, setpdfFile] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FileInput />} />
        <Route path="pdf/:id" element={<PDFRender />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
