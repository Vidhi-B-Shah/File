import './App.css';
import Navbar from './Navbar';
import {useRef, useState} from 'react';


function App() {
  const [file, setFile] = useState(' ');
  const fileInputRef = useRef();
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
      </div>
    </div>
  );
}

export default App;
