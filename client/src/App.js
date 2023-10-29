import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {useRef, useState, useEffect} from 'react';
import { uploadFile } from './services/api';


function App() {
  const [file, setFile] = useState(' ');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);

      }

    }
    getImage();

  },[file])
  const onUploadClick= () => {
    fileInputRef.current.click();
  }
  console.log(file);
  return (
    <div className="app-container">
      <Navbar />
      <img src="/cloud.png" alt="Cloud" className="cloud" />
      <div className='upload-container'>
        <button onClick={() => onUploadClick()} className="custom-file-upload">Upload</button>
        <input type = "file"
        ref = {fileInputRef}
        style = {{display : 'none'}}
        onChange={(e)=> setFile(e.target.files[0])}/>

        <a href={result} target= "_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
