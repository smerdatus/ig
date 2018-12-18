import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/elizabethcturner_33270829_226774767911759_1378499353432505414_n.mp4';
import img_0 from './assets/videos/elizabethcturner_33270829_226774767911759_1378499353432505414_n.mp4.png';
import video_1 from './assets/videos/elizabethcturner_36347548_203589873815385_6094828901085741056_n.mp4';
import img_1 from './assets/videos/elizabethcturner_36347548_203589873815385_6094828901085741056_n.mp4.png';
import video_2 from './assets/eturner/videos/elizabethcturner_15994096_1838762306335543_216269311503761408_n.mp4';
import img_2 from './assets/eturner/videos/elizabethcturner_15994096_1838762306335543_216269311503761408_n.mp4.png';
import video_3 from './assets/eturner/videos/elizabethcturner_19122783_143584926191017_5368004058168688640_n.mp4';
import img_3 from './assets/eturner/videos/elizabethcturner_19122783_143584926191017_5368004058168688640_n.mp4.png';
import video_4 from './assets/eturner/videos/elizabethcturner_19124600_1893899804224333_810256669995958272_n.mp4';
import img_4 from './assets/eturner/videos/elizabethcturner_19124600_1893899804224333_810256669995958272_n.mp4.png';
import video_5 from './assets/eturner/videos/elizabethcturner_19171465_141851699707501_8134334107736866816_n.mp4';
import img_5 from './assets/eturner/videos/elizabethcturner_19171465_141851699707501_8134334107736866816_n.mp4.png';
import video_6 from './assets/eturner/videos/elizabethcturner_19180476_470358286633144_1457275943901986816_n.mp4';
import img_6 from './assets/eturner/videos/elizabethcturner_19180476_470358286633144_1457275943901986816_n.mp4.png';
import video_7 from './assets/eturner/videos/elizabethcturner_19180561_1465652830122961_1173200875594711040_n.mp4';
import img_7 from './assets/eturner/videos/elizabethcturner_19180561_1465652830122961_1173200875594711040_n.mp4.png';
import video_8 from './assets/eturner/videos/elizabethcturner_19180908_285369098600929_2518407275769495552_n.mp4';
import img_8 from './assets/eturner/videos/elizabethcturner_19180908_285369098600929_2518407275769495552_n.mp4.png';
import video_9 from './assets/eturner/videos/elizabethcturner_19181086_1711964872162173_6344220910181941248_n.mp4';
import img_9 from './assets/eturner/videos/elizabethcturner_19181086_1711964872162173_6344220910181941248_n.mp4.png';
import video_10 from './assets/eturner/videos/elizabethcturner_19181546_1861925197392960_7386110517980430336_n.mp4';
import img_10 from './assets/eturner/videos/elizabethcturner_19181546_1861925197392960_7386110517980430336_n.mp4.png';
import video_11 from './assets/eturner/videos/elizabethcturner_19217924_178558802676084_5260647145832185856_n.mp4';
import img_11 from './assets/eturner/videos/elizabethcturner_19217924_178558802676084_5260647145832185856_n.mp4.png';
import video_12 from './assets/eturner/videos/elizabethcturner_22830442_1566220503417290_977845404827648000_n.mp4';
import img_12 from './assets/eturner/videos/elizabethcturner_22830442_1566220503417290_977845404827648000_n.mp4.png';
import video_13 from './assets/eturner/videos/elizabethcturner_23166924_305473216603151_3655991125744812032_n.mp4';
import img_13 from './assets/eturner/videos/elizabethcturner_23166924_305473216603151_3655991125744812032_n.mp4.png';
import video_14 from './assets/eturner/videos/elizabethcturner_30899430_172642373554230_8750406315995080237_n.mp4';
import img_14 from './assets/eturner/videos/elizabethcturner_30899430_172642373554230_8750406315995080237_n.mp4.png';
import video_15 from './assets/eturner/videos/elizabethcturner_32714274_235128967243774_7933294346363045840_n.mp4';
import img_15 from './assets/eturner/videos/elizabethcturner_32714274_235128967243774_7933294346363045840_n.mp4.png';
import video_16 from './assets/eturner/videos/elizabethcturner_40442024_262987477876306_4707132853308096512_n.mp4';
import img_16 from './assets/eturner/videos/elizabethcturner_40442024_262987477876306_4707132853308096512_n.mp4.png';
import video_17 from './assets/eturner/videos/elizabethcturner_41839708_1938388429541006_6449657959252230144_n.mp4';
import img_17 from './assets/eturner/videos/elizabethcturner_41839708_1938388429541006_6449657959252230144_n.mp4.png';
import video_18 from './assets/eturner/videos/elizabethcturner_story.mp4';
import img_18 from './assets/eturner/videos/elizabethcturner_story.mp4.png';
import video_19 from './assets/eturner/videos/elizabethcturner_15341108_1829892387288298_4346344046982070272_n.mp4';
import img_19 from './assets/eturner/videos/elizabethcturner_15341108_1829892387288298_4346344046982070272_n.mp4.png';
import video_20 from './assets/eturner/videos/elizabethcturner_15968051_164722227344358_4605315027149258752_n.mp4';
import img_20 from './assets/eturner/videos/elizabethcturner_15968051_164722227344358_4605315027149258752_n.mp4.png';
import video_21 from './assets/eturner/videos/e.mp4';
import img_21 from './assets/eturner/videos/e.mp4.png';
import video_22 from './assets/eturner/videos/ee.mp4';
import img_22 from './assets/eturner/videos/ee.mp4.png';
import video_23 from './assets/eturner/videos/eee.mp4';
import img_23 from './assets/eturner/videos/eee.mp4.png';
import video_24 from './assets/eturner/videos/dance.mp4';
import img_24 from './assets/eturner/videos/dance.mp4.png';
import img_elizabethcturner_0 from './assets/elizabethcturner_29090557_1651851004906771_4074049708895502336_n.jpg';
import img_elizabethcturner_1 from './assets/elizabethcturner_32689792_387336191757569_30253238531915776_n.jpg';
import img_elizabethcturner_2 from './assets/elizabethcturner_35325410_624007821316738_8065568026310737920_n.jpg';
import img_elizabethcturner_3 from './assets/elizabethcturner_36160646_269632507122298_7966243325588013056_n.jpg';

export default class ETurner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_6,
      image: img_elizabethcturner_0,
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
                <a href='https://instagram.com/elizabethcturner' target='_blank'>elizabethcturner</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_6 }) }>
                    <img src={ img_6 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0, mode: 'video' }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_1, mode: 'video' }) } >
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_18 }) }>
                    <img src={ img_18 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_19 }) }>
                    <img src={ img_19 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_20 }) }>
                    <img src={ img_20 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_21 }) }>
                    <img src={ img_21 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_22 }) }>
                    <img src={ img_22 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_23 }) }>
                    <img src={ img_23 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_24 }) }>
                    <img src={ img_24 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elizabethcturner_0 }) }>
                    <img src={ img_elizabethcturner_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elizabethcturner_1 }) }>
                    <img src={ img_elizabethcturner_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elizabethcturner_2 }) }>
                    <img src={ img_elizabethcturner_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_elizabethcturner_3 }) }>
                    <img src={ img_elizabethcturner_3 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
