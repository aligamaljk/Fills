import React, { useState } from 'react'
import "./VideoPlay.scss"
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
// import {PlayCircleOutlined} from "@ant-design/icons"
import {BsFillPlayCircleFill} from "react-icons/bs"
// import {VscPlay} from "react-icons/vsc"
import VideoPlayerPage from '../../pages/VideoPlayerPage/VideoPlayerPage'
const VideoPlay = ({t}) => {
  const [ show, setShow ] = useState(false)
  const handelClose = ()=> setShow(false)
  const handelShow = ()=> setShow(true)
  return (
    <div className="home_video">
      <div className={show ? "show" : "unshow"}
      >
        <VideoPlayerPage handelClose={handelClose} />
      </div>
      <div className="video_image"></div>
      <div className="container">
        <Row className="video_content">
          <Col >
            <div className="video_inf">
              <h2 className="video_title">
                {t.videotitle}
              </h2>
              <p>
              {t.videotitle2}
              </p>
            </div>
            <div className="video_promo_content">
              <Link 
              onClick={handelShow}
              hrefLang="https://www.youtube.com/watch?v=AU2Ivgg_28U">
                <span>
                  <BsFillPlayCircleFill/>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default VideoPlay