import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/elsie_nip.mp4';
import img_0 from './assets/videos/elsie_nip.mp4.png';
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
import video_18 from './assets/elsie/videos/elsie_10.mp4';
import img_18 from './assets/elsie/videos/elsie_10.mp4.png';
import video_1 from './assets/elsie/videos/elsie_11.mp4';
import img_1 from './assets/elsie/videos/elsie_11.mp4.png';
import video_2 from './assets/elsie/videos/elsie_12.mp4';
import img_2 from './assets/elsie/videos/elsie_12.mp4.png';
import video_3 from './assets/elsie/videos/elsie_15.mp4';
import img_3 from './assets/elsie/videos/elsie_15.mp4.png';
import video_4 from './assets/elsie/videos/elsie_24.mp4';
import img_4 from './assets/elsie/videos/elsie_24.mp4.png';
import video_5 from './assets/elsie/videos/elsie_26.mp4';
import img_5 from './assets/elsie/videos/elsie_26.mp4.png';
import video_6 from './assets/elsie/videos/elsie_27.mp4';
import img_6 from './assets/elsie/videos/elsie_27.mp4.png';
import video_7 from './assets/elsie/videos/elsie_3.mp4';
import img_7 from './assets/elsie/videos/elsie_3.mp4.png';
import video_8 from './assets/elsie/videos/elsie_38.mp4';
import img_8 from './assets/elsie/videos/elsie_38.mp4.png';
import video_9 from './assets/elsie/videos/elsie_40.mp4';
import img_9 from './assets/elsie/videos/elsie_40.mp4.png';
import video_10 from './assets/elsie/videos/elsie_41.mp4';
import img_10 from './assets/elsie/videos/elsie_41.mp4.png';
import video_11 from './assets/elsie/videos/elsie_46.mp4';
import img_11 from './assets/elsie/videos/elsie_46.mp4.png';
import video_12 from './assets/elsie/videos/elsie_47.mp4';
import img_12 from './assets/elsie/videos/elsie_47.mp4.png';
import video_13 from './assets/elsie/videos/elsie_49.mp4';
import img_13 from './assets/elsie/videos/elsie_49.mp4.png';
import video_14 from './assets/elsie/videos/elsie_50.mp4';
import img_14 from './assets/elsie/videos/elsie_50.mp4.png';
import video_15 from './assets/elsie/videos/elsie_51.mp4';
import img_15 from './assets/elsie/videos/elsie_51.mp4.png';
import video_16 from './assets/elsie/videos/elsie_59.mp4';
import img_16 from './assets/elsie/videos/elsie_59.mp4.png';
import video_17 from './assets/elsie/videos/elsie_63.mp4';
import img_17 from './assets/elsie/videos/elsie_63.mp4.png';
import image_0 from './assets/elsie/pics/elsie_1.jpg';
import image_1 from './assets/elsie/pics/elsie_13.jpg';
import image_2 from './assets/elsie/pics/elsie_14.jpg';
import image_3 from './assets/elsie/pics/elsie_16.jpg';
import image_4 from './assets/elsie/pics/elsie_17.jpg';
import image_5 from './assets/elsie/pics/elsie_18.jpg';
import image_6 from './assets/elsie/pics/elsie_19.jpg';
import image_7 from './assets/elsie/pics/elsie_2.jpg';
import image_8 from './assets/elsie/pics/elsie_20.jpg';
import image_9 from './assets/elsie/pics/elsie_21.jpg';
import image_10 from './assets/elsie/pics/elsie_22.jpg';
import image_11 from './assets/elsie/pics/elsie_23.jpg';
import image_12 from './assets/elsie/pics/elsie_25.jpg';
import image_13 from './assets/elsie/pics/elsie_28.jpg';
import image_14 from './assets/elsie/pics/elsie_29.jpg';
import image_15 from './assets/elsie/pics/elsie_31.jpg';
import image_16 from './assets/elsie/pics/elsie_33.jpg';
import image_17 from './assets/elsie/pics/elsie_34.jpg';
import image_18 from './assets/elsie/pics/elsie_35.jpg';
import image_19 from './assets/elsie/pics/elsie_36.jpg';
import image_20 from './assets/elsie/pics/elsie_37.jpg';
import image_21 from './assets/elsie/pics/elsie_4.jpg';
import image_22 from './assets/elsie/pics/elsie_43.jpg';
import image_23 from './assets/elsie/pics/elsie_52.jpg';
import image_24 from './assets/elsie/pics/elsie_53.jpg';
import image_25 from './assets/elsie/pics/elsie_54.jpg';
import image_26 from './assets/elsie/pics/elsie_55.jpg';
import image_27 from './assets/elsie/pics/elsie_56.jpg';
import image_28 from './assets/elsie/pics/elsie_57.jpg';
import image_29 from './assets/elsie/pics/elsie_58.jpg';
import image_30 from './assets/elsie/pics/elsie_60.jpg';
import image_31 from './assets/elsie/pics/elsie_61.jpg';
import image_32 from './assets/elsie/pics/elsie_62.jpg';
import image_33 from './assets/elsie/pics/elsie_64.jpg';
import image_34 from './assets/elsie/pics/elsie_65.jpg';
import image_35 from './assets/elsie/pics/elsie_66.jpg';
import image_36 from './assets/elsie/pics/elsie_67.jpg';
import image_37 from './assets/elsie/pics/elsie_68.jpg';
import image_38 from './assets/elsie/pics/elsie_69.jpg';
import image_39 from './assets/elsie/pics/elsie_7.jpg';
import image_40 from './assets/elsie/pics/elsie_70.jpg';
import image_41 from './assets/elsie/pics/elsie_71.jpg';
import image_42 from './assets/elsie/pics/elsie_72.jpg';
import image_43 from './assets/elsie/pics/elsie_73.jpg';
import image_44 from './assets/elsie/pics/elsie_74.jpg';
import image_45 from './assets/elsie/pics/elsie_8.jpg';
import image_46 from './assets/elsie/pics/elsie_9.jpg';

export default class Elsie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0, mode: 'video' }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_18 }) }>
                    <img src={ img_18 } className={ this.state.picSizeMode } />
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_8 }) }>
                    <img src={ img_8 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_9 }) }>
                    <img src={ img_9 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_10 }) }>
                    <img src={ img_10 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_11 }) }>
                    <img src={ img_11 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_12 }) }>
                    <img src={ img_12 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_13 }) }>
                    <img src={ img_13 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_14 }) }>
                    <img src={ img_14 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_15 }) }>
                    <img src={ img_15 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_16 }) }>
                    <img src={ img_16 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_17 }) }>
                    <img src={ img_17 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_0 }) }>
                    <img src={ img_elsie_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_1 }) }>
                    <img src={ img_elsie_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_2 }) }>
                    <img src={ img_elsie_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_3 }) }>
                    <img src={ img_elsie_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_4 }) }>
                    <img src={ img_elsie_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_5 }) }>
                    <img src={ img_elsie_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_6 }) }>
                    <img src={ img_elsie_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_7 }) }>
                    <img src={ img_elsie_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_8 }) }>
                    <img src={ img_elsie_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_9 }) }>
                    <img src={ img_elsie_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_10 }) }>
                    <img src={ img_elsie_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_11 }) }>
                    <img src={ img_elsie_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_12 }) }>
                    <img src={ img_elsie_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_elsie_13 }) }>
                    <img src={ img_elsie_13 } className={ this.state.picSizeMode } />
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_37 }) } >
                    <img src={ image_37 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_38 }) } >
                    <img src={ image_38 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_39 }) } >
                    <img src={ image_39 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_40 }) } >
                    <img src={ image_40 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_41 }) } >
                    <img src={ image_41 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_42 }) } >
                    <img src={ image_42 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_43 }) } >
                    <img src={ image_43 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_44 }) } >
                    <img src={ image_44 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_45 }) } >
                    <img src={ image_45 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_46 }) } >
                    <img src={ image_46 } className={ this.state.picSizeMode } />
                </div>
            </div>
                
        </div>

    );
  }
}
