import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer.js'
import Controls from '../components/video-player-controls.js'
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner.js'
import Volume from '../components/volume.js'
import Fullscreen from '../components/full-screen.js'

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        }) 
    }
    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    handleProgressChange = event => {
        // event.target.value
        this.video.currentTime = event.target.value
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
    }
    handleFullScreenClick = event => {
        if(!document.webkitIsFullScreen) {
            this.player.webkitRequestFullscreen()
        } else {
            document.webkitExitFullscreen()
        }

        
    }
    setRef = element => {
        this.player = element
    }
    render() {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title 
                    title="Esto es un video"
                />
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                    
                    />
                    <Fullscreen 
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    muted
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_30mb.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;