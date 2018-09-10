import React, { Component } from "react";
import VideoListItem from "./VideoListItem";

/*class VideoList extends Component {
    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.map((video) => {
                    return <VideoListItem
                        key={video.etag}
                        video={video}
                        onVideoSelect={this.props.onVideoSelect}/>
                })}
            </ul>
        );
    }
}*/

const VideoList = ({videos, onVideoSelect}) => {
    const videosList = videos.map((video) => {
        return <VideoListItem
            key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videosList}
        </ul>
    );
};

export default VideoList;