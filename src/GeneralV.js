import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
// import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/celestebrightt_26882423_1461561547294305_9018585956072030208_n.mp4';
import img_0 from './assets/videos/celestebrightt_26882423_1461561547294305_9018585956072030208_n.mp4.png';
import video_1 from './assets/videos/celestebrightt_29709947_177941092853936_6287299150262304768_n.mp4';
import img_1 from './assets/videos/celestebrightt_29709947_177941092853936_6287299150262304768_n.mp4.png';

export default class GeneralV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: video_0,
      oldY: 0
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video) {
      this.setState({oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop});
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
      return (
        <Player ref="player" loop fluid={false} width={350}>
          <source src={this.state.video} />
        </Player>
      );
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <div style={{padding: '1vh'}}>
             {this.renderImageOrVideoContainer()}
          </div>
        {this.state.oldY === 0 ? '' : (
          <div padding={{padding: '2vh'}} onClick={() => this.scrollBackDown()} >
            <button className="pure-button pure-button-primary">Return to previous position</button>
        </div>
        )}
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
        <a href="https://instagram.com/celestebrightt" target="_blank">celestebrightt</a>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_0 })} >
          <img src={img_0} style={{height: '20vh'}} />
          {/* <img src={overlay} style={{height: '2vh'}}/> */}
        </div>
        <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_1 })} >
          <img src={img_1} style={{height: '20vh'}} />
        </div>
      </div>
    </div>
    );
  }
}
