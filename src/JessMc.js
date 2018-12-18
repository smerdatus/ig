import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import img_jessicaclements_0 from './assets/jessicaclements_38968433_493376234476783_6389014249393356800_n.jpg';
import img_jessicaclements_1 from './assets/jessicaclements_39915888_2241573379420506_853010329238503424_n.jpg';
import img_jessicaclements_2 from './assets/jessicaclements_40649356_2184985031781640_7401626160692592515_n.jpg';
import img_jessicaclements_3 from './assets/jessicaclements_40872875_422679398136901_3690387752768657078_n.jpg';
import img_jessicaclements_4 from './assets/jessicaclements_41950358_895235677342201_5029607740309286781_n.jpg';
import img_jessicaclements_5 from './assets/jessicaclements_41950360_1763643833730721_2605055490787026038_n.jpg';
import img_jessicaclements_6 from './assets/jessicaclements_42804428_478009056029414_5038362387407589827_n.jpg';
import img_jessicaclements_7 from './assets/jessicaclements_42835472_569845276782093_5969696657237189524_n.jpg';
import img_jessicaclements_8 from './assets/jessicaclements_42916884_2274811452588794_6742898510430854716_n.jpg';
import img_jessicaclements_9 from './assets/jessicaclements_43913259_341588809934885_588949060916602575_n.jpg';
import img_jessicaclements_10 from './assets/jessicaclements_44688865_188533582058009_1965272243319981326_n.jpg';

export default class JessMc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
    //   video: video_0,
      image: img_jessicaclements_0,
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
                <a href='https://instagram.com/jessicaclements' target='_blank'>jessicaclements</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_0 }) }>
                    <img src={ img_jessicaclements_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_1 }) }>
                    <img src={ img_jessicaclements_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_2 }) }>
                    <img src={ img_jessicaclements_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_3 }) }>
                    <img src={ img_jessicaclements_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_4 }) }>
                    <img src={ img_jessicaclements_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_5 }) }>
                    <img src={ img_jessicaclements_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_6 }) }>
                    <img src={ img_jessicaclements_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_7 }) }>
                    <img src={ img_jessicaclements_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_8 }) }>
                    <img src={ img_jessicaclements_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_9 }) }>
                    <img src={ img_jessicaclements_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jessicaclements_10 }) }>
                    <img src={ img_jessicaclements_10 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
