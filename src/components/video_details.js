import React from 'react';

const VideoDetails = ({video}) => {
    if (!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <hr/>
                <div>{video.snippet.title}</div>
                <hr/>
                <div>{video.snippet.description}</div>
                <hr/>
            </div>
        </div>
    );
};

export default VideoDetails;