import React, { Component } from 'react';
import NewPerson from './NewPerson';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: 'hide'
    };
  }

  renderButtons = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20}}>
        <div onClick={() => this.setState({person: 'hide'})} style={{paddingBottom: 10}}>
          <button className="pure-button pure-button-primary">Hide</button>
        </div>
        <div onClick={() => this.setState({person: 'new'})} style={{paddingBottom: 10}}>
          <button className="pure-button pure-button-primary">new</button>
        </div>
      </div>
      );
  }

  render() {
    if (this.state.person === 'hide') {
      return (
      <div>
        {this.renderButtons()}
      </div>
      )
    } else if (this.state.person === 'new') {
      return (
        <div>
          {this.renderButtons()}
          <NewPerson />
        </div>
      );
    } else {
      return (
        <div>Error</div>
      )
    }
  }
}
