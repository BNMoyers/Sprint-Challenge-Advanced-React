import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import TitleBar from './components/TitleBar';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.getPlayers()
  }

    getPlayers = () => {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => this.setState({players: res.data}))
    .catch(err => {console.log('error: ', err);});
  };

  render(){
    return(
      <div>
        <TitleBar />
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}

export default App;
