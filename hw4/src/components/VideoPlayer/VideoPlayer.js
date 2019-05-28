import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'Video Player';
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  playVideo = () => {
    this.videoRef.current.play();
  };
  pauseVideo = () => {
    this.videoRef.current.pause();
  };
  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.videoRef}>
          <source type="video/mp4" src={videoFile} />
        </video>
        <div className="buttons">
          <button type="button" onClick={this.playVideo}>
            Play
          </button>
          <button type="button" onClick={this.pauseVideo}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
