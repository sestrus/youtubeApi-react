import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
