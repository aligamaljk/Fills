import React, { useEffect, useState } from 'react'
import "./HomeSlider.scss"
import { Col, Row } from 'antd'
import slider from './SliderData'
import Slider from "react-slick";
import parse from "html-react-parser";
import { useSelector } from 'react-redux'
import {FaQuoteRight} from "react-icons/fa"
// console.log(slider);
const ChauffeurSlider = ({t}) => {
  const { currentLang } = useSelector((state) => state?.entities?.user);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }
  return (
    <section className='Home_page_slider'>
        <div className="container">
          <Row className='home_slider_content'>
            <Col>
            <div className="home_slider_info">
              <h2 className="home_slider_title">
              {t.slidertitle1}
              </h2>
              <p>
                {t.slidertitle2}
                </p>
            </div>
            </Col>
            <Col>
              <div className="home_slider">
                <div className="home_slider_details">
                  <div className="slider_card">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <Slider  {...settings}>
                      {slider.map((item)=>{
                        const {id,title,titleLT,title2,title2LT,textLT,text} = item;
                        return (
                          <div className="owl-item"  key={id}>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                  <div className="media">
                                    <div className="media_info">
                                    <div className="media-body">
                                      <h5 className="media_body_title">
                                      {currentLang === "en" ? parse(title || "") : parse(titleLT || "")}
                                      </h5>
                                        <span>
                                        {currentLang === "en" ? parse(title2 || "") : parse(title2LT || "")}
                                        </span>
                                        <FaQuoteRight/>
                                    </div>
                                    </div>
                                    <div className="client-say">
                                      <p>
                                      {currentLang === "en" ? parse(text || "") : parse(textLT || "")}
                                      </p>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="home_slider">
                <div className="home_slider_details">
                  <div className="slider_card">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                      {isSlider.map((item, indexSlider)=>{
                        const {id,title,titleLT,title2,title2LT,textLT,text} = item;
                        let position = "nextSlider";
                        if(indexSlider === index ){
                          position = "activeSlider"
                        }
                        if(indexSlider === index - 1 || (index === 0 && indexSlider === isSlider.length - 1) ){
                          position = "lastSlider"
                        }
                        return (
                          <div className="owl-item"  key={id}>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="media_body_title">
                                        <p>{title}</p>
                                        <span></span>
                                      </h5>
                                    </div>
                                    <div className="client-say">
                                      <p></p>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Col>
          </Row>
        </div>
    </section>
  )
}

export default ChauffeurSlider