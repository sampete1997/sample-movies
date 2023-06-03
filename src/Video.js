import { useContext } from 'react';
import './App.css';
import { VideoContext } from './App';


const Video = () => {

    const { vidData } = useContext(VideoContext);

    return (
        <div className="vid">
            <div className='vidWrapper'>
                <video controls autoPlay>
                    <source src={vidData.sources[0]} type="video/mp4" />
                </video>
            </div>
            <div className='vidInfo'>
                <h3>{vidData.title || "Loading ..."}</h3>
                <p className="description">{vidData.description || ""} </p>
            </div>
        </div>
    )

}


export default Video;