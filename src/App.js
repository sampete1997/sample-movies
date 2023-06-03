import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import { Routes, Route, Link } from 'react-router-dom';
import VideoList from './VideoList';



export const VideoContext = React.createContext();

function App() {

  const [vid, setVid] = useState([])
  const [vidData, setVideoData] = useState({})


  useEffect(() => {
    fetch("https://mocki.io/v1/c6b30faa-7e8a-426c-94fd-b14464d5454e")
      .then((data) => (data.json()))
      .then((data) => setVid(data.categories[0].videos))
      .catch((e) => console.log("err", e))
  }, [])
  return (
    <div className="App">
      <h1 className="fx">
        <Link className="linkTitle" to={"/"} >
        Movies-Flix
        </Link> </h1>
      <VideoContext.Provider value={
        {
          data: vid,
          getVideoData: (data) => {
            setVideoData(data)
          },
          vidData: vidData,

        }
      }>

        <Routes>
          <Route path='/' element={<VideoList />} />
          <Route path='/video/:title' element={<Video />} />

        </Routes>
      </VideoContext.Provider>
    </div>
  );
}

export default App;
