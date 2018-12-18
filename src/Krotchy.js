import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/krotchy/videos/DeliciousCarelessCottontail.mp4';
import img_0 from './assets/krotchy/videos/DeliciousCarelessCottontail.mp4.png';
import video_1 from './assets/krotchy/videos/ParallelHighIndigobunting.mp4';
import img_1 from './assets/krotchy/videos/ParallelHighIndigobunting.mp4.png';
import video_2 from './assets/krotchy/videos/ThinAthleticBlesbok.mp4';
import img_2 from './assets/krotchy/videos/ThinAthleticBlesbok.mp4.png';
import video_3 from './assets/krotchy/videos/WastefulAdventurousBooby.mp4';
import img_3 from './assets/krotchy/videos/WastefulAdventurousBooby.mp4.png';
import video_4 from './assets/krotchy/videos/krotchy_20732120_262424877606952_6192553490267504640_n.mp4';
import img_4 from './assets/krotchy/videos/krotchy_20732120_262424877606952_6192553490267504640_n.mp4.png';
import video_5 from './assets/krotchy/videos/krotchy_22768739_184740105421577_3885451643319222272_n.mp4';
import img_5 from './assets/krotchy/videos/krotchy_22768739_184740105421577_3885451643319222272_n.mp4.png';
import video_6 from './assets/krotchy/videos/krotchy_27530986_666939757029575_7983754095198275419_n.mp4';
import img_6 from './assets/krotchy/videos/krotchy_27530986_666939757029575_7983754095198275419_n.mp4.png';
import video_7 from './assets/krotchy/videos/krotchy_30536032_2013667198893285_5354882799935422464_n.mp4';
import img_7 from './assets/krotchy/videos/krotchy_30536032_2013667198893285_5354882799935422464_n.mp4.png';
import img_krotchy_0 from './assets/krotchy_42653041_347304645815637_8084241945715635985_n.jpg';
import image_0 from './assets/krotchy/pics/20z9bga1dvh01.jpg';
import image_1 from './assets/krotchy/pics/9o2kitzub8n11.png';
import image_2 from './assets/krotchy/pics/FNSEI87.jpg';
import image_3 from './assets/krotchy/pics/OHRCWyd.jpg';
import image_4 from './assets/krotchy/pics/REZ3ngY.jpg';
import image_5 from './assets/krotchy/pics/YuCagm7.png';
import image_6 from './assets/krotchy/pics/bjKcfkZ.jpg';
import image_7 from './assets/krotchy/pics/krotchy_19122022_1393135550765334_3177441334139027456_n.jpg';
import image_8 from './assets/krotchy/pics/krotchy_19985380_116020229022048_451742057443098624_n.jpg';
import image_9 from './assets/krotchy/pics/krotchy_20398248_103388163690257_2510201349908463616_n.jpg';
import image_10 from './assets/krotchy/pics/krotchy_20582869_999207866886798_3596641721460457472_n.jpg';
import image_11 from './assets/krotchy/pics/krotchy_20688567_157244161497216_9101171163492515840_n.jpg';
import image_12 from './assets/krotchy/pics/krotchy_22860620_291988217967527_1498591136992722944_n.jpg';
import image_13 from './assets/krotchy/pics/krotchy_25016157_545214992500123_1046414750981816320_n.jpg';
import image_14 from './assets/krotchy/pics/krotchy_25023515_2019570834947311_8556475508273971200_n.jpg';
import image_15 from './assets/krotchy/pics/krotchy_28754269_340021076506207_8242470281759686656_n.jpg';
import image_16 from './assets/krotchy/pics/krotchy_29415038_1758580084188616_9106358109596549120_n.jpg';
import image_17 from './assets/krotchy/pics/krotchy_35616700_191207361565980_2308849645234683904_n.jpg';
import image_18 from './assets/krotchy/pics/main.jpg';
import image_19 from './assets/krotchy/pics/oZJEmuf.jpg';
import image_20 from './assets/krotchy/pics/ro1487vq3qq01.jpg';
import image_21 from './assets/krotchy/pics/sarah_mcdaniel12.jpg';
import image_22 from './assets/krotchy/pics/sarah_mcdaniel13.jpg';
import image_23 from './assets/krotchy/pics/sarah_mcdaniel14.jpg';
import image_24 from './assets/krotchy/pics/sarah_mcdaniel15.jpg';
import image_25 from './assets/krotchy/pics/sarah_mcdaniel16.jpg';
import image_26 from './assets/krotchy/pics/sarah_mcdaniel17.jpg';
import image_27 from './assets/krotchy/pics/sarah_mcdaniel19.jpg';
import image_28 from './assets/krotchy/pics/sarah_mcdaniel2.jpg';
import image_29 from './assets/krotchy/pics/sarah_mcdaniel20.jpg';
import image_30 from './assets/krotchy/pics/sarah_mcdaniel3.jpg';
import image_31 from './assets/krotchy/pics/sarah_mcdaniel4.jpg';
import image_32 from './assets/krotchy/pics/sarah_mcdaniel7.jpg';
import image_33 from './assets/krotchy/pics/sarah_mcdaniel8.jpg';
import image_34 from './assets/krotchy/pics/sarah_mcdaniel9.jpg';
import image_35 from './assets/krotchy/pics/uAQOOlj.jpg';
import image_36 from './assets/krotchy/pics/x584kmzfoxs01.jpg';

export default class Krotchy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_1,
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
                <a href='https://instagram.com/krotchy' target='_blank'>krotchy</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_0 }) }>
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_1 }) }>
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_2 }) }>
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_3 }) }>
                    <img src={ img_3 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_4 }) }>
                    <img src={ img_4 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_5 }) }>
                    <img src={ img_5 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_6 }) }>
                    <img src={ img_6 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_7 }) }>
                    <img src={ img_7 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_0 }) } >
                    <img src={ image_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_1 }) } >
                    <img src={ image_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_2 }) } >
                    <img src={ image_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_3 }) } >
                    <img src={ image_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_4 }) } >
                    <img src={ image_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_5 }) } >
                    <img src={ image_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_6 }) } >
                    <img src={ image_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_7 }) } >
                    <img src={ image_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_8 }) } >
                    <img src={ image_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_9 }) } >
                    <img src={ image_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_10 }) } >
                    <img src={ image_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_11 }) } >
                    <img src={ image_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_12 }) } >
                    <img src={ image_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_13 }) } >
                    <img src={ image_13 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_14 }) } >
                    <img src={ image_14 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_15 }) } >
                    <img src={ image_15 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_16 }) } >
                    <img src={ image_16 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_17 }) } >
                    <img src={ image_17 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_18 }) } >
                    <img src={ image_18 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_19 }) } >
                    <img src={ image_19 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_20 }) } >
                    <img src={ image_20 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_21 }) } >
                    <img src={ image_21 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_22 }) } >
                    <img src={ image_22 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_23 }) } >
                    <img src={ image_23 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_24 }) } >
                    <img src={ image_24 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_25 }) } >
                    <img src={ image_25 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_26 }) } >
                    <img src={ image_26 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_27 }) } >
                    <img src={ image_27 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_28 }) } >
                    <img src={ image_28 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_29 }) } >
                    <img src={ image_29 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_30 }) } >
                    <img src={ image_30 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_31 }) } >
                    <img src={ image_31 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_32 }) } >
                    <img src={ image_32 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_33 }) } >
                    <img src={ image_33 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_34 }) } >
                    <img src={ image_34 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_35 }) } >
                    <img src={ image_35 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_36 }) } >
                    <img src={ image_36 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_krotchy_0 }) } >
                    <img src={ img_krotchy_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
