import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
// import overlay from './assets/videos/video_overlay.png';
import img_teddy_quinlivan_0 from './assets/teddy_quinlivan_35339805_181477465864784_202700659412172800_n.jpg';
import img_teddy_quinlivan_1 from './assets/teddy_quinlivan_36085060_2138485649722439_1078494716414132224_n.jpg';
import img_teddy_quinlivan_2 from './assets/teddy_quinlivan_36567207_223805998242304_3710513854371856384_n.jpg';
import img_teddy_quinlivan_3 from './assets/teddy_quinlivan_38782348_2168896266678988_4974855787118592000_n.jpg';
import img_teddy_quinlivan_4 from './assets/teddy_quinlivan_39011794_688103968215073_2468816374122702488_n.jpg';
import img_teddy_quinlivan_5 from './assets/teddy_quinlivan_40424296_328473014379931_7243617185402898693_n.jpg';
import img_teddy_quinlivan_6 from './assets/teddy_quinlivan_40583248_357854981622646_4920521199911524380_n.jpg';
import img_teddy_quinlivan_7 from './assets/teddy_quinlivan_40917194_132463007704630_6796952054976874206_n.jpg';
import img_teddy_quinlivan_8 from './assets/teddy_quinlivan_41325504_235553413792061_1978171733698821363_n.jpg';
import img_teddy_quinlivan_9 from './assets/teddy_quinlivan_41730710_1714480515344867_1632559019168488235_n.jpg';
import img_teddy_quinlivan_10 from './assets/teddy_quinlivan_43913565_498460917321550_5982792912339219449_n.jpg';
import img_teddy_quinlivan_11 from './assets/teddy_quinlivan_43985931_1885933441526806_3329982369341340688_n.jpg';
import img_teddy_quinlivan_12 from './assets/teddy_quinlivan_44808308_590218134744192_7868721274074247857_n.jpg';

export default class Teddy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
    //   video: video_0,
      image: img_teddy_quinlivan_11,
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
                <a href='https://instagram.com/teddy_quinlivan' target='_blank'>teddy_quinlivan</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_11 }) }>
                    <img src={ img_teddy_quinlivan_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_0 }) }>
                    <img src={ img_teddy_quinlivan_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_1 }) }>
                    <img src={ img_teddy_quinlivan_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_2 }) }>
                    <img src={ img_teddy_quinlivan_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_3 }) }>
                    <img src={ img_teddy_quinlivan_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_4 }) }>
                    <img src={ img_teddy_quinlivan_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_5 }) }>
                    <img src={ img_teddy_quinlivan_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_6 }) }>
                    <img src={ img_teddy_quinlivan_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_7 }) }>
                    <img src={ img_teddy_quinlivan_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_8 }) }>
                    <img src={ img_teddy_quinlivan_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_9 }) }>
                    <img src={ img_teddy_quinlivan_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_10 }) }>
                    <img src={ img_teddy_quinlivan_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_teddy_quinlivan_12 }) }>
                    <img src={ img_teddy_quinlivan_12 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
