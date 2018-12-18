import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import img_bugs_bunny_gf_0 from './assets/bugs_bunny_gf_22159049_156750464915675_4569911560188723200_n.jpg';
import img_bugs_bunny_gf_1 from './assets/bugs_bunny_gf_32361680_184688809029723_9177199922947031040_n.jpg';
import img_bugs_bunny_gf_2 from './assets/bugs_bunny_gf_34131396_219617575501604_8002296732769583104_n.jpg';
import img_bugs_bunny_gf_3 from './assets/bugs_bunny_gf_35618006_410113322807963_388651478945890304_n.jpg';
import img_bugs_bunny_gf_4 from './assets/bugs_bunny_gf_36556930_662925694044301_2346576921430589440_n.jpg';
import img_bugs_bunny_gf_5 from './assets/bugs_bunny_gf_36627088_249418085650133_3845381161815638016_n.jpg';
import img_bugs_bunny_gf_6 from './assets/bugs_bunny_gf_36642903_1645095832255501_2440168579547529216_n.jpg';
import img_bugs_bunny_gf_7 from './assets/bugs_bunny_gf_36821878_657454764617998_4460695098811744256_n.jpg';
import img_bugs_bunny_gf_8 from './assets/bugs_bunny_gf_36822340_251989965401255_4044133552281878528_n.jpg';
import img_bugs_bunny_gf_9 from './assets/bugs_bunny_gf_36902478_242366233277655_3861516086931357696_n.jpg';
import img_bugs_bunny_gf_10 from './assets/bugs_bunny_gf_41470911_337511616816149_3885176177999944185_n.jpg';
import img_bugs_bunny_gf_11 from './assets/bugs_bunny_gf_44264334_1064905010351047_6866457597499960755_n.jpg';
import img_bugs_bunny_gf_12 from './assets/bugs_bunny_gf_44360580_420684765135254_6656922073719370413_n.jpg';

export default class Bugs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
      image: img_bugs_bunny_gf_0,
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
                <a href='https://instagram.com/bugs_bunny_gf' target='_blank'>bugs_bunny_gf</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_0 }) }>
                    <img src={ img_bugs_bunny_gf_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_1 }) }>
                    <img src={ img_bugs_bunny_gf_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_2 }) }>
                    <img src={ img_bugs_bunny_gf_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_3 }) }>
                    <img src={ img_bugs_bunny_gf_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_4 }) }>
                    <img src={ img_bugs_bunny_gf_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_5 }) }>
                    <img src={ img_bugs_bunny_gf_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_6 }) }>
                    <img src={ img_bugs_bunny_gf_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_7 }) }>
                    <img src={ img_bugs_bunny_gf_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_8 }) }>
                    <img src={ img_bugs_bunny_gf_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_9 }) }>
                    <img src={ img_bugs_bunny_gf_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_10 }) }>
                    <img src={ img_bugs_bunny_gf_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_11 }) }>
                    <img src={ img_bugs_bunny_gf_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bugs_bunny_gf_12 }) }>
                    <img src={ img_bugs_bunny_gf_12 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
