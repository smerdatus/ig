import React, { Component } from 'react';
// import { Player } from 'video-react';
import './App.css';
// import video_0 from './assets/shannon_lawson_13292549_1635943943294813_212947795_n.mp4';
import img_0 from './assets/coconutflower_13473297_268703563483485_1776237319_n.jpg';

export default class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: video_0,
      image: img_0,
      oldY: 0
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video) {
      this.setState({oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop});
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
    } else if (this.state.image !== prevState.image) {
        this.setState({oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop});
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

//   <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
//   <div style={{padding: '1vh'}}>
//     <Player ref="player" loop fluid={false} width={350}>
//       <source src={this.state.video} />
//     </Player>
// </div>

  render() {
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <div style={{padding: '1vh'}}>
            <img className="gallery" src={this.state.image} />
          </div>
        {this.state.oldY === 0 ? '' : (
          <div padding={{padding: '2vh'}} onClick={() => this.scrollBackDown()} >
            <button className="pure-button pure-button-primary">Return to previous position</button>
        </div>
        )}
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
        <a href="https://instagram.com/TODO" target="_blank">TODO</a>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_0})} >
          <img src={img_0} style={{height: '20vh'}} />
        </div>
      </div>
    </div>
    );
  }
}
