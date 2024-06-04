import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
  const [playStatus, setPlayStatus] = useState([false, false, false, false]);

  const videoUrls = [
    'https://youtu.be/Saip4YcQLOQ?si=dIgxjWxevNuRTDKv',
    'https://youtu.be/htmtRqPZUVg?si=pG0XZVmOvsXyBnqk',
    'https://youtu.be/BmdwjAerVoM?si=0DuzvHVRwuEOCCHy',
    'https://youtu.be/iduAb09jXEM?si=9ziIMPLEbSmzFBih',
  ];

  const handlePlay = (index) => {
    const newPlayStatus = [...playStatus];
    newPlayStatus[index] = true;
    setPlayStatus(newPlayStatus);

    setTimeout(() => {
      newPlayStatus[index] = false;
      setPlayStatus(newPlayStatus);
      window.open(videoUrls[index], '_blank');
    }, 15000); // 15 seconds
  };

  return (
    <div className="container mt-5">
      <h4 className='text-success fw-bold'>Farmer Reviews</h4>
      <div className="row mt-3">
        {videoUrls.map((url, index) => (
          <div className="col-3" key={index}>
            <div className="video-wrapper" onClick={() => handlePlay(index)}>
              <ReactPlayer
                url={url}
                playing={playStatus[index]}
                controls={false}
                width="100%"
                height="300px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
