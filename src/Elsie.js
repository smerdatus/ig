import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/elizabethcturner_33270829_226774767911759_1378499353432505414_n.mp4';
import img_0 from './assets/videos/elizabethcturner_33270829_226774767911759_1378499353432505414_n.mp4.png';
import img_elsie_0 from './assets/elsie_35576019_2030611243869845_2324304397854572544_n.jpg';
import img_elsie_1 from './assets/elsie_36160377_1774840949262564_7926359121111023616_n.jpg';
import img_elsie_2 from './assets/elsie_36839039_253080655286976_3053616653901234176_n.jpg';
import img_elsie_3 from './assets/elsie_37416129_511250412646125_7662002140285501440_n.jpg';
import img_elsie_4 from './assets/elsie_37799490_365154144016749_2855829780673069056_n.jpg';
import img_elsie_5 from './assets/elsie_38872671_269860143623693_3051272327607091200_n.jpg';
import img_elsie_6 from './assets/elsie_38926381_488808331594167_4210345994908336128_n.jpg';
import img_elsie_7 from './assets/elsie_39991020_1357599584374991_9135423655548488207_n.jpg';
import img_elsie_8 from './assets/elsie_40279128_1031695030344394_5873329384628250740_n.jpg';
import img_elsie_9 from './assets/elsie_41819989_191163565018234_5127883732649656159_n.jpg';
import img_elsie_10 from './assets/elsie_42003254_322661898509441_1767804624345612511_n.jpg';
import img_elsie_11 from './assets/elsie_44735868_1812869075429149_1630738077428725902_n.jpg';
import img_elsie_12 from './assets/elsie_44898239_192528558235254_3941510702746177578_n.jpg';
import img_elsie_13 from './assets/elsie_44899809_330191391101321_1359775661862778652_n.jpg';

export default class Elsie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_elsie_0,
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
                <a href='https://instagram.com/elsie' target='_blank'>elsie</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_0 }) }>
                    <img src={ img_elsie_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_1 }) }>
                    <img src={ img_elsie_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_2 }) }>
                    <img src={ img_elsie_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_3 }) }>
                    <img src={ img_elsie_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_4 }) }>
                    <img src={ img_elsie_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_5 }) }>
                    <img src={ img_elsie_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_6 }) }>
                    <img src={ img_elsie_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_7 }) }>
                    <img src={ img_elsie_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_8 }) }>
                    <img src={ img_elsie_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_9 }) }>
                    <img src={ img_elsie_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_10 }) }>
                    <img src={ img_elsie_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_11 }) }>
                    <img src={ img_elsie_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_12 }) }>
                    <img src={ img_elsie_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elsie_13 }) }>
                    <img src={ img_elsie_13 } className={ this.state.picSizeMode } />
                </div>
            </div>
                
        </div>

    );
  }
}

{/* <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0, mode: 'video' }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div> */}