import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
// import overlay from './assets/videos/video_overlay.png';
import img_carmellarose_0 from './assets/carmellarose_22637348_159763314618622_705989402513375232_n.jpg';
import img_carmellarose_1 from './assets/carmellarose_24126915_145519286096136_186057893068406784_n.jpg';
import img_carmellarose_2 from './assets/carmellarose_26865438_149532885754115_7404636060547809280_n.jpg';
import img_carmellarose_3 from './assets/carmellarose_35541408_158839608308824_38836619003822080_n.jpg';
import img_carmellarose_4 from './assets/carmellarose_39824535_597451123986282_4809822648022335488_n.jpg';
import img_carmellarose_5 from './assets/carmellarose_42117291_240565119960920_1984329871453134274_n.jpg';
import img_carmellarose_6 from './assets/carmellarose_42768910_558660767899594_524823949518668488_n.jpg';

export default class Carm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   mode: 'video',
    //   video: video_0,
      mode: 'image', 
      image: img_carmellarose_0,
      oldY: 0,
      picSizeMode: 'narrow'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video || (prevState.mode !== 'video' && this.state.mode === 'video')) {
      this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
      
    } else if (this.state.image !== prevState.image) {
        this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
    if (this.state.mode === 'video') {
      return (
          <Player ref="player" loop fluid={ false } width={ 350 }>
              <source src={ this.state.video } />
          </Player>
      )
    } else if (this.state.mode === 'image') {
      return (<img className="gallery" src={ this.state.image } />)
    }
  }

  toggleImageSize = () => {
    if (this.state.picSizeMode === 'narrow') {
        this.setState({ picSizeMode: 'wider' })
    } else {
      this.setState({ picSizeMode: 'narrow' })
    }
}

  render() {
    return (
        <div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
                <div style={ { padding: '1vh' } }>
                    {this.renderImageOrVideoContainer()}
                </div>
                {this.state.oldY === 0 ? '' : (
                    <div padding={ { padding: '2vh' } } onClick={ () => this.scrollBackDown() } >
                        <button className="pure-button pure-button-primary">Return to previous position</button>
                    </div>
        )}
            </div>
            <div onClick={ () => this.toggleImageSize() } style={ { position: 'fixed', width: 50, height: 30, bottom: 40, right: 40  } }>
                <button className="pure-button pure-button-secondary">X</button>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/carmellarose' target='_blank'>carmellarose</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_0 }) }>
                    <img src={ img_carmellarose_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_1 }) }>
                    <img src={ img_carmellarose_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_2 }) }>
                    <img src={ img_carmellarose_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_3 }) }>
                    <img src={ img_carmellarose_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_4 }) }>
                    <img src={ img_carmellarose_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_5 }) }>
                    <img src={ img_carmellarose_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_carmellarose_6 }) }>
                    <img src={ img_carmellarose_6 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
