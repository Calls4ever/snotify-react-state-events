import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: []
  }
  getData=()=>{
    fetch(API_ENDPOINT)
    .then(res=>res.json())
    .then(data=>{
      this.setState({songs: data})
    })
  }
  favoriteSong=(f,id)=>{
    console.log(id)
    fetch(`http://localhost:6001/songs/${id}`,{
      method: "PATCH",
      headers: {
        "content-type": 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({favorite: !f})
    })
    this.getData()
    

  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getData}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }
  
  
  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} favoriteSong={this.favoriteSong}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
