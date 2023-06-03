import { useContext } from 'react';
import './App.css';
import { VideoContext } from './App';


const Video = ({data} ) => {

    const {vidData} = useContext(VideoContext);

    return (
        <div className="vid">
        <video width="100%" height="480" controls>
            <source src={vidData.sources[0]} type="video/mp4" />
          </video>
          <div className='vidInfo'>
          <h3>{vidData.title || "Loading ..."}</h3>
          <p className="description">{vidData.description || ""} </p>
          </div>
        </div>
    )

}


export default Video;