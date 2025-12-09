import './App.css'
import FileInput from './components/FileInput'
import PDFRender from './components/PDFRender'
import { useState } from 'react';
function App() {
  const [pdfFile,setpdfFile] = useState(null);
  return (
  <>
    <FileInput onPDFSelect={setpdfFile}></FileInput>
    <PDFRender pdf={pdfFile}></PDFRender>
  </>)
}

export default App
