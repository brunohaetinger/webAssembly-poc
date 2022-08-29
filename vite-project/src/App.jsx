import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

function App() {
  const fileRef = useRef(null);
  const [progress, setProgress] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  const ffmpeg = createFFmpeg({ progress: (e) => setProgress(e.ratio) });

  const transcode = async (file) => {
    const { name } = file;
    // load ffmpeg.wasm code 
    await ffmpeg.load();
    // write file to  memory filesystem 
    ffmpeg.FS("writeFile", name, await fetchFile(file));
    // convert video into mp4 
    await ffmpeg.run("-i", name, "output.mp4");
    // read file from Memory filesystem 
    const data = ffmpeg.FS("readFile", "output.mp4");
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    
    console.log(`worked`)
    setVideoURL(url);
    setProgress(null);
  };

  const handleFileChange = (e) => {
    // start video conversion on file change 
    transcode(e.target.files[0]);
  };

  useEffect(() => {
    // revoke created blob url object 
    return () => URL.revokeObjectURL(videoURL)
  },[])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WebAssembly + ffmpeg + Vite + React</h1>
      <p>Progress: {progress*100}%</p>
      <div className="card">
        <input
          type="file"
          name="file"
          id="file"
          hidden
          onChange={handleFileChange}
          ref={fileRef}
        />
        <button onClick={() => fileRef.current.click()}>Select Video File</button>
      </div>
      <video
        src={videoURL}
        width={"400px"}
        height={"400px"}
        autoPlay
        controls
      />
    </div>
  )
}

export default App
