import { NafiabContext } from '@/context/NafiabContext'
import React, { useContext } from 'react'

const VideoSection = () => {
    const {handleVideoShow} = useContext(NafiabContext)
  return (
    <div className="video-area bg-default pt-140 pt-140 pb-215 about-video-section" data-overlay="7">
        <div className="container">
            <div className="ba-video-content">
                <div className="text-center pb-55">
                    <div className="ba-video-icon wow fadeInUp" data-wow-delay=".1s">
                    <a className="video-popup ba-video-icon-link">
                        <i className="fas fa-play" role='button' onClick={handleVideoShow}></i>
                    </a>
                    </div>
                </div>
                <div className="ba-video-content text-center">
                    <h6 className="ba-video-content-subtitle white-text wow fadeInUp" data-wow-delay=".2s">Working Video</h6>
                    <h2 className="ba-mb-0 ba-video-content-title white-text wow fadeInUp" data-wow-delay=".3s">We Provide Outsourced Services For <br/>Small & Mid-Sized Video</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoSection