import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import img_0 from './assets/coconutflower_13473297_268703563483485_1776237319_n.jpg';
import img_1 from './assets/coconutflower_13525313_245923019112624_581129935_n.jpg';
import img_2 from './assets/coconutflower_13767636_304621696559477_1051880155_n.jpg';
import img_3 from './assets/coconutflower_14052481_1783898958554000_1653460391_n.jpg';
import img_4 from './assets/coconutflower_14269158_1649156362062229_584558246_n.jpg';
import img_5 from './assets/coconutflower_14597320_1684771068506097_4555141799017971712_n.jpg';
import img_6 from './assets/coconutflower_14659295_337127096640946_42126778700922880_n.jpg';
import img_7 from './assets/coconutflower_15043574_1304684819625442_1550649215816826880_n.jpg';
import img_8 from './assets/coconutflower_15275642_1555731194443475_2402824199686062080_n.jpg';
import img_9 from './assets/coconutflower_15306080_1805947826319805_1559231994993311744_n.jpg';
import img_10 from './assets/coconutflower_15535315_348069992239882_7438374042270171136_n.jpg';
import img_11 from './assets/coconutflower_15876968_141818426316163_7899888391557218304_n.jpg';
import img_12 from './assets/coconutflower_16908610_205900273220119_6093415221190197248_n.jpg';
import img_13 from './assets/coconutflower_18512673_1347173308702647_5128701296617979904_n.jpg';
import img_14 from './assets/coconutflower_18513897_1277844812264765_7634968636871933952_n.jpg';
import img_15 from './assets/coconutflower_19228267_1410748169014071_5509105235764707328_n.jpg';
import img_16 from './assets/coconutflower_19228598_836634669822138_7670354850948841472_n.jpg';
import img_17 from './assets/coconutflower_19933129_124645588138569_3605057447883964416_n.jpg';
import img_18 from './assets/coconutflower_20065613_149353038950664_7125450580578795520_n.jpg';
import img_19 from './assets/coconutflower_21227166_1387510634703757_5459445754441498624_n.jpg';
import img_20 from './assets/coconutflower_21227791_927317834072565_4122287629058179072_n.jpg';
import img_21 from './assets/coconutflower_21294815_122900531697864_5631786569938501632_n.jpg';
import img_22 from './assets/coconutflower_21688947_115751685759750_9067703257903661056_n.jpg';
import img_23 from './assets/coconutflower_26262799_261368447730105_7002723371859312640_n.jpg';
import img_24 from './assets/coconutflower_28433975_158004904861514_8652876775082164224_n.jpg';
import img_25 from './assets/coconutflower_36660449_421743734990988_1984290537317859328_n.jpg';
import img_26 from './assets/coconutflower_39387927_488200584987535_7467840563052544000_n.jpg';
import img_27 from './assets/coconutflower_39982608_301987720353393_9194222321450090496_n.jpg';
import video_28 from './assets/videos/coconutflower_13655039_520530961465441_558210132_n.mp4';
import img_28 from './assets/videos/coconutflower_13655039_520530961465441_558210132_n.mp4.png';
import video_29 from './assets/videos/coconutflower_19926792_147854892451833_6878279675165016064_n.mp4';
import img_29 from './assets/videos/coconutflower_19926792_147854892451833_6878279675165016064_n.mp4.png';
import video_30 from './assets/videos/coconutflower_33989872_593061837737964_1463390637301694464_n.mp4';
import img_30 from './assets/videos/coconutflower_33989872_593061837737964_1463390637301694464_n.mp4.png';

export default class Coco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_28,
      image: img_0,
      oldY: 0
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
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href="https://instagram.com/coconutflower_" target="_blank">coconutflower_</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_28, mode: 'video' }) } >
                    <img src={ img_28 } style={ { height: '20vh' } } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_29, mode: 'video' }) } >
                    <img src={ img_29 } style={ { height: '20vh' } } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_30, mode: 'video' }) } >
                    <img src={ img_30 } style={ { height: '20vh' } } />
                    <img src={ overlay } style={ { height: '2vh' } }/>
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_0 }) } >
                    <img src={ img_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_1 }) } >
                    <img src={ img_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_2 }) } >
                    <img src={ img_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_3 }) } >
                    <img src={ img_3 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_4 }) } >
                    <img src={ img_4 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_5 }) } >
                    <img src={ img_5 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_6 }) } >
                    <img src={ img_6 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_7 }) } >
                    <img src={ img_7 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_8 }) } >
                    <img src={ img_8 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_9 }) } >
                    <img src={ img_9 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_10 }) } >
                    <img src={ img_10 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_11 }) } >
                    <img src={ img_11 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_12 }) } >
                    <img src={ img_12 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_13 }) } >
                    <img src={ img_13 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_14 }) } >
                    <img src={ img_14 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_15 }) } >
                    <img src={ img_15 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_16 }) } >
                    <img src={ img_16 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_17 }) } >
                    <img src={ img_17 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_18 }) } >
                    <img src={ img_18 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_19 }) } >
                    <img src={ img_19 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_20 }) } >
                    <img src={ img_20 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_21 }) } >
                    <img src={ img_21 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_22 }) } >
                    <img src={ img_22 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_23 }) } >
                    <img src={ img_23 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_24 }) } >
                    <img src={ img_24 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_25 }) } >
                    <img src={ img_25 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_26 }) } >
                    <img src={ img_26 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_27 }) } >
                    <img src={ img_27 } style={ { height: '20vh' } } />
                </div>
            </div>
        </div>
    );
  }
}
