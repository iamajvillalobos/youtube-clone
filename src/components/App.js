import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { Provider } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      onVideoSelect: this.onVideoSelect
    };
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: { q: term, type: "video" }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <div className="section">
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="columns">
            <div className="column is-two-thirds">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <Provider value={this.state}>
              <div className="column">
                <VideoList videos={this.state.videos} />
              </div>
            </Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
