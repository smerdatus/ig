import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/shannon_lawson_13292549_1635943943294813_212947795_n.mp4';
import img_0 from './assets/videos/shannon_lawson_13292549_1635943943294813_212947795_n.mp4.png';
import video_1 from './assets/videos/shannon_lawson_35809165_639034596446011_1948932259087609080_n.mp4';
import img_1 from './assets/videos/shannon_lawson_35809165_639034596446011_1948932259087609080_n.mp4.png';
import video_2 from './assets/videos/shannon_lawson_36340782_464591770655503_5548380830855191585_n.mp4';
import img_2 from './assets/videos/shannon_lawson_36340782_464591770655503_5548380830855191585_n.mp4.png';
import img_shannon_lawson_0 from './assets/shannon_lawson_26863313_274176659780284_7121120068133453824_n.jpg';
import img_shannon_lawson_1 from './assets/shannon_lawson_26865764_1237490956384873_9206619886283915264_n.jpg';
import img_shannon_lawson_2 from './assets/shannon_lawson_27580848_2010584389155044_3758607906015019008_n.jpg';
import img_shannon_lawson_3 from './assets/shannon_lawson_31273730_227652127822871_582244664501862400_n.jpg';
import img_shannon_lawson_4 from './assets/shannon_lawson_37157253_239089610065841_707253991209172992_n.jpg';
import img_shannon_lawson_5 from './assets/shannon_lawson_37332432_190551925139339_7453915523164667904_n.jpg';
import img_shannon_lawson_6 from './assets/shannon_lawson_41936356_239340633410799_5247465426032724371_n.jpg';
import img_shannon_lawson_7 from './assets/shannon_lawson_42371649_168377097405652_3991056703232327839_n.jpg';

export default class Shannon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_shannon_lawson_0,
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
                <a href='https://instagram.com/shannon_lawson' target='_blank'>shannon_lawson</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0, mode: 'video' }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_1, mode: 'video' }) } >
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_2, mode: 'video' }) } >
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_0 }) }>
                    <img src={ img_shannon_lawson_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_1 }) }>
                    <img src={ img_shannon_lawson_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_2 }) }>
                    <img src={ img_shannon_lawson_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_3 }) }>
                    <img src={ img_shannon_lawson_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_4 }) }>
                    <img src={ img_shannon_lawson_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_5 }) }>
                    <img src={ img_shannon_lawson_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_6 }) }>
                    <img src={ img_shannon_lawson_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shannon_lawson_7 }) }>
                    <img src={ img_shannon_lawson_7 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
