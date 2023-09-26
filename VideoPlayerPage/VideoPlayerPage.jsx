import { useState } from "react"
import "./VideoPlayerPage.scss"
// import ReactPlayer from 'react-player/youtube'
import { Button } from "antd"

const VideoPlayerPage = ({handelClose}) => {
    const [ show, setShow ] = useState(handelClose)
  return (
    <>
    <div className={show ? "unshow" : "show"} >
        <div className="shadow"></div>
        <div className="mfp-wrap">
            <div className="mfp-container">
                <div className="mfp-content">
                    <div className="mfp-iframe-scaler">
                        <Button className="mfp-close"
                        // onClick={()=>{
                        //     setIsView(true)
                        // }}
                        onClick={handelClose}
                        >
                            x
                        </Button>
                        <iframe src="//www.youtube.com/embed/AU2Ivgg_28U?autoplay=1" frameborder="0"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoPlayerPage