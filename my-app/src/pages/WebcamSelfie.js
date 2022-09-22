import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "../styleSheets/WebcamSelfie.css";

const WebcamSelfie = () => {

  let videoRef = useRef(null)

  let photoRef = useRef(null)

  // get access to user webcam
  const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video: true
    })
    .then((stream) => {
      // attach the stream to the video tag
      let video = videoRef.current
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      console.error(error)
    })
  }

  // to take selfie photo of user
  const takePhoto = () => {
    // width and height
    let width = 500
    let height = width / (16/9)
    let photo = photoRef.current
    let video = videoRef.current
    
    // set photo width and height
    photo.width = width
    photo.height = height

    let ctx = photo.getContext('2d')

    ctx.drawImage(video,0,0,photo.width,photo.height)
  }

  // clear out the image

  const clearImage = () => {
    let photo = photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0,0,photo.width,photo.height)
  }

  useEffect(() => {
    getUserCamera() 
  }, [videoRef])

  return (
    <div className="app">
      <h1 className="text-center">Use your webcam to share an image of your item.</h1>
      <video className="container" ref={videoRef}></video>
      <button onClick={takePhoto} className="btn btn-danger container">Take Selfie</button>
      <canvas className="container" ref={photoRef}></canvas>
      <button onClick={clearImage} className="btn btn-primary container">Clear Image</button>
    </div>
  );
}

export default WebcamSelfie;
