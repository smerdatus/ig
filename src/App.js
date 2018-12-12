import React, { Component } from 'react';
import Coco from './Coco';
import Alena from './Alena';
import Cele from './Cele';
import Bry from './Bry';
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
        <div onClick={() => this.setState({person: 'coco'})} style={{paddingBottom: 10}}>
          <button className="pure-button pure-button-primary">Coco</button>
        </div>
        <div onClick={() => this.setState({person: 'alena'})} style={{paddingBottom: 10}}>
          <button className="pure-button pure-button-primary">Alena</button>
        </div>
        <div onClick={() => this.setState({person: 'cele'})} style={{paddingBottom: 10}}>
          <button className="pure-button pure-button-primary">Cele</button>
        </div>
        <div onClick={() => this.setState({person: 'bry'})} style={{paddingBottom: 10}}>
          <button className="pure-button pure-button-primary">Bry</button>
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
    } else if (this.state.person === 'alena') {
      return (
        <div>
          {this.renderButtons()}
          <Alena />
        </div>
      );
    } else if (this.state.person === 'coco') {
      return (
        <div>
          {this.renderButtons()}
          <Coco />
        </div>
      );
    } else if (this.state.person === 'cele') {
      return (
        <div>
          {this.renderButtons()}
          <Cele />
        </div>
      );
    } 
    else if (this.state.person === 'bry') {
      return (
        <div>
          {this.renderButtons()}
          <Bry />
        </div>
      );
    } else {
      return (
        <div>Error</div>
      )
    }
  }
}
