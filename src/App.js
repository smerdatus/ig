import React, { Component } from 'react';
import Coco from './Coco';
import Alena from './Alena';
import Cele from './Cele';
import Bry from './Bry';
import GeneralA from './GeneralA';
import GeneralB from './GeneralB';
import GeneralV from './GeneralV';
import DSharp from './DSharp';
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
        <div style={ { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20 } }>
            <div onClick={ () => this.setState({ person: 'hide' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Hide</button>
            </div>
            <div onClick={ () => this.setState({ person: 'coco' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Coco</button>
            </div>
            <div onClick={ () => this.setState({ person: 'alena' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Alena</button>
            </div>
            <div onClick={ () => this.setState({ person: 'cele' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Cele</button>
            </div>
            <div onClick={ () => this.setState({ person: 'bry' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Bry</button>
            </div>
            <div onClick={ () => this.setState({ person: 'dsharp' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">DSharp</button>
            </div>
            <div onClick={ () => this.setState({ person: 'gena' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">GenA</button>
            </div>
            <div onClick={ () => this.setState({ person: 'genb' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">GenB</button>
            </div>
            <div onClick={ () => this.setState({ person: 'genv' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">GenV</button>
            </div>
            <div onClick={ () => this.setState({ person: 'elsie' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Elsie</button>
            </div>
            <div onClick={ () => this.setState({ person: 'carm' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Carmella</button>
            </div>
            <div onClick={ () => this.setState({ person: 'bugs' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Bugs Bunny</button>
            </div>
            <div onClick={ () => this.setState({ person: 'eturner' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">ETurner</button>
            </div>
            <div onClick={ () => this.setState({ person: 'emrata' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Emrata</button>
            </div>
            <div onClick={ () => this.setState({ person: 'jessmc' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Jess Mc</button>
            </div>
            <div onClick={ () => this.setState({ person: 'liana' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Liana</button>
            </div>
            <div onClick={ () => this.setState({ person: 'teddy' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Teddy</button>
            </div>
            <div onClick={ () => this.setState({ person: 'ellie' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Ellie</button>
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
    } else if (this.state.person === 'gena') {
      return (
          <div>
              {this.renderButtons()}
              <GeneralA />
          </div>
      );
    } else if (this.state.person === 'genb') {
      return (
          <div>
              {this.renderButtons()}
              <GeneralB />
          </div>
      );
    } else if (this.state.person === 'genv') {
      return (
          <div>
              {this.renderButtons()}
              <GeneralV />
          </div>
      );
    } else if (this.state.person === 'dsharp') {
      return (
          <div>
              {this.renderButtons()}
              <DSharp />
          </div>
      );
    } else {
      return (
          <div>Error</div>
      )
    }
  }
}
