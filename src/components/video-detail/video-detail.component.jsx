import VideoLoader from "../loader/video-loader.component";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <VideoLoader />;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} frameborder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
