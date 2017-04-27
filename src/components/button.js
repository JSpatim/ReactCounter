import React, {Component} from 'react';

class Button extends Component {

  state = {
    compteurEnfant: this.props.text,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({compteurEnfant: nextProps.text});
  }

  leClick = (event) => {
      console.log("Je suis dans le bouton! Ce que contient le bouton: " + event.target.innerText);
      const num = this.state.compteurEnfant + 1;
      this.props.onClick(num);
  }

  render() {
    return (
      <div>
        <p> Le compteur dans le component Button :</p>
        <button onClick={(e) => this.leClick(e)}>
          { this.state.compteurEnfant }
        </button>
      </div>
    );
  }
}

export default Button;
