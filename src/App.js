import React, {Component} from 'react';

import pic from './logo.svg';
import './App.css';

import Button from './components/button';

class App extends Component {

  state = {
    Compteur: 0
  }

  majState = (num) => {
    console.log ("Je met à jour le state de l'app !!!!");
    this.setState({Compteur: num});
  }

  modifToto = (text) => {
    return text;
  }

  render() {
    const appHeader = "App-header";
    return (
      <div className="App">
        <div className={appHeader}>
          <img src={pic} className="App-logo" alt="logo" />
          <h2>Le compteur dans l'app : {this.state.Compteur}</h2> { /* ceci est un commentaire  */}
        </div>
        <Button onClick={(num) => this.majState(num)} text={this.state.Compteur} />
      </div>
    );
  }
}

export default App;
