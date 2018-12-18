import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/danielleksharp_14091056_512673885604809_401940241_n.mp4';
import img_0 from './assets/videos/danielleksharp_14091056_512673885604809_401940241_n.mp4.png';
import img_danielleksharp_0 from './assets/danielleksharp_13473306_1740558379495696_1183541200_n.jpg';
import img_danielleksharp_1 from './assets/danielleksharp_13551850_260244287665677_811378721_n.jpg';
import img_danielleksharp_2 from './assets/danielleksharp_13584297_1117570914975085_1544620265_n.jpg';
import img_danielleksharp_3 from './assets/danielleksharp_14482788_340771276268343_6395882301531619328_n.jpg';
import img_danielleksharp_4 from './assets/danielleksharp_36148281_214710262492742_5965541885735862272_n.jpg';
import img_danielleksharp_5 from './assets/danielleksharp_36570327_1687611964688464_1111196618880712704_n.jpg';
import img_danielleksharp_6 from './assets/danielleksharp_37576541_1135552296602538_7487810657740390400_n.jpg';
import img_danielleksharp_7 from './assets/danielleksharp_38435459_1815331668502566_9017317987236970496_n.jpg';
import img_danielleksharp_8 from './assets/danielleksharp_40783223_2172047503063227_8951856718770367516_n.jpg';
import img_danielleksharp_9 from './assets/danielleksharp_40859403_312030336274504_1685649485881893796_n.jpg';
import img_danielleksharp_10 from './assets/danielleksharp_44212176_243553873006009_5835129863264320583_n.jpg';
import img_danielleksharp_11 from './assets/danielleksharp_44500422_2029804237311719_3682766325378223027_n.jpg';
import img_danielleksharp_12 from './assets/danielleksharp_45306387_120472995626765_9162626785266723761_n.jpg';

export default class DSharp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
      video: video_0,
      image: img_danielleksharp_0,
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
                <a href='https://instagram.com/danielleksharp' target='_blank'>danielleksharp</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0, mode: 'video' }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_0 }) }>
                    <img src={ img_danielleksharp_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_1 }) }>
                    <img src={ img_danielleksharp_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_2 }) }>
                    <img src={ img_danielleksharp_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_3 }) }>
                    <img src={ img_danielleksharp_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_4 }) }>
                    <img src={ img_danielleksharp_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_5 }) }>
                    <img src={ img_danielleksharp_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_6 }) }>
                    <img src={ img_danielleksharp_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_7 }) }>
                    <img src={ img_danielleksharp_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_8 }) }>
                    <img src={ img_danielleksharp_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_9 }) }>
                    <img src={ img_danielleksharp_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_10 }) }>
                    <img src={ img_danielleksharp_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_11 }) }>
                    <img src={ img_danielleksharp_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_danielleksharp_12 }) }>
                    <img src={ img_danielleksharp_12 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
