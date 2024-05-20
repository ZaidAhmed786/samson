import { NafiabContext } from "@/context/NafiabContext";
import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

const VideoModal = () => {
    const {showVideoModal,handleVideoClose} = useContext(NafiabContext)
  return (
      <Modal show={showVideoModal} onHide={handleVideoClose} size="lg" centered className="video-modal">
        <Modal.Header className="video-modal-header">
          <button className="video-modal-close-btn" onClick={handleVideoClose}>
            x
          </button>
        </Modal.Header>
        <Modal.Body className="video-modal-body">
          
          <iframe
            className="mfp-iframe"
            src="//www.youtube.com/embed/93FKMoZZETw?autoplay=1"
            width='100%'
            height={500}
            frameBorder="0"
            allowFullScreen=""
            title="Video"
          ></iframe>
        </Modal.Body>
      </Modal>
  );
};

export default VideoModal;
