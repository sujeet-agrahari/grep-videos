import VideoItem from "../video-item/video-item.component";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      video={video}
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
