import React, { useContext } from "react"
import { VideoContext } from "./App"
import { Link } from "react-router-dom"
import "./App.css"

const VideoList = () => {

    const { data, getVideoData } = useContext(VideoContext);

    const handleVideo = (ele) => {

        getVideoData(ele)
    }

    return (
        <div>

            <div className="vidBg">
                {
                    data.map((ele) => {

                        return (
                            <div className="vidItem" onClick={() => handleVideo(ele)}>

                                <Link className="linkFx" to={'video/' + ele.title} >
                                    <img src={"https://storage.googleapis.com/gtv-videos-bucket/sample/" + ele.thumb} width={200} height={150} alt="#" />
                                    <h3>{ele.title || ""}</h3>
                                </Link>
                            </div>
                        )
                    }
                    )
                }

            </div>

        </div>
    )

}

export default VideoList;