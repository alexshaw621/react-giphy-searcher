import React from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import GiphyResult from './Components/GiphyResult';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      gifs: []
    }
  }

  onSearchTermChange = (event) => {
    this.setState( {
      searchTerm: event.target.value
    } )
  }

  getGifs = () => {
    // const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=kLNd2SNB0zR3VLyFQelaLHeivLmaXh83`;
    // request.get(url, function(err, res) {
    //   console.log(res.body.data[0]);
    // });
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=kLNd2SNB0zR3VLyFQelaLHeivLmaXh83`, {
      method: "GET"
    })
      .then( resp => resp.json() )
      .then( resp => this.setState( { gifs: resp.data } ) )
  }

  render() {
    return (
      <div className="App">
        <SearchBox 
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.onSearchTermChange}
          getGifs={this.getGifs}
        />

        {
          this.state.gifs.map( gifObj => 
            <GiphyResult key={gifObj.id} gifObj={gifObj} /> 
          )
        }
      </div>
    );
  }
}

export default App;
