import './App.css';
import React, { Component } from 'react';
import SearchBar from './search-bar/search-bar.component';
import YouTube from '../apis/youtube.api';
import VideoList from '../components/video-list/video-list.component';
import VideoDetail from './video-detail/video-detail.component';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await YouTube.get('/search', {
      params: {
        q: term,
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  componentDidMount() {
    this.onTermSubmit('Reacts Tutorial');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div>

        </div>
        <div className="ui grid">
          <div class="ui row">
            <div class="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div class="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
