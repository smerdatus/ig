import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import img_0 from './assets/elliecowelll_13355576_1741023216183064_1510948586_n.jpg';
import img_1 from './assets/elliecowelll_14073056_690486784450033_1614024149_n.jpg';
import img_2 from './assets/elliecowelll_14145322_205165099901432_151594836_n.jpg';
import img_3 from './assets/elliecowelll_14262859_1215243651861579_446279021_n.jpg';
import img_4 from './assets/elliecowelll_14533459_1227683630631295_2586086283793137664_n.jpg';
import img_5 from './assets/elliecowelll_15043796_608910592621758_1992071768222728192_n.jpg';
import img_6 from './assets/elliecowelll_15802352_1560738560607933_8361304136985083904_n.jpg';
import img_7 from './assets/elliecowelll_15877568_1692098834414626_3689576520164048896_n.jpg';
import img_8 from './assets/elliecowelll_16123465_1866264673610317_2378877897290022912_n.jpg';
import img_9 from './assets/elliecowelll_16583753_373632413022587_367237476382670848_n.jpg';
import img_10 from './assets/elliecowelll_17333165_411953212471811_7463522351393538048_n.jpg';
import img_11 from './assets/elliecowelll_17437525_1848521202026751_7538186887500922880_n.jpg';
import img_12 from './assets/elliecowelll_17818038_1054140731383815_5167819021231325184_n.jpg';
import img_13 from './assets/elliecowelll_18443182_303809013386687_4864237396876591104_n.jpg';
import img_14 from './assets/elliecowelll_19931971_1887966734784953_2639612846295482368_n.jpg';
import img_15 from './assets/elliecowelll_20214322_286803591794904_1594078469120065536_n.jpg';
import img_16 from './assets/elliecowelll_20481888_1998510843713415_2737222167144955904_n.jpg';
import img_17 from './assets/elliecowelll_21433382_213630459173935_5829489004109627392_n.jpg';
import img_18 from './assets/elliecowelll_21689149_357242271392441_7962997090521448448_n.jpg';
import img_19 from './assets/elliecowelll_21819592_1312280438880474_4813671514245169152_n.jpg';
import img_20 from './assets/elliecowelll_21879363_132977967328196_1334058602104619008_n.jpg';
import img_21 from './assets/elliecowelll_21980665_1901799383470286_2703137611626577920_n.jpg';
import img_22 from './assets/elliecowelll_22802346_292679591231817_1353031564300124160_n.jpg';
import img_23 from './assets/elliecowelll_23498107_1189140087853543_3546772611373465600_n.jpg';
import img_24 from './assets/elliecowelll_23824162_785761178293372_2962899200783679488_n.jpg';
import img_25 from './assets/elliecowelll_25025711_2040221849589671_443111900482371584_n.jpg';
import img_26 from './assets/elliecowelll_26310808_248094842392462_3925470447776301056_n.jpg';
import img_27 from './assets/elliecowelll_28158980_414224435668763_4625233131257987072_n.jpg';
import img_28 from './assets/elliecowelll_28428756_1836080639743509_418560226740928512_n.jpg';
import img_29 from './assets/elliecowelll_28432743_2065239530169875_8356366062761017344_n.jpg';
import img_30 from './assets/elliecowelll_30085004_599528307048444_6106360909750337536_n.jpg';
import img_31 from './assets/elliecowelll_30605244_591395054531235_2629642376070561792_n.jpg';
import img_32 from './assets/elliecowelll_32121822_571411273253997_6097381176811454464_n.jpg';
import img_33 from './assets/elliecowelll_35479932_2110867365838430_8925230310702972928_n.jpg';
import img_34 from './assets/elliecowelll_36503179_172557270276412_6119724399844130816_n.jpg';
import img_35 from './assets/elliecowelll_36896985_1880496881988256_7877244516518854656_n.jpg';
import img_36 from './assets/elliecowelll_39364483_2192060661029425_2537989114003718144_n.jpg';
import img_37 from './assets/elliecowelll_39364483_2192060661029425_2537989114003718145_n.jpg';

export default class Ellie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
      image: img_0,
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
                <a href='https://instagram.com/elliecowelll' target='_blank'>elliecowelll</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_0 }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_1 }) } >
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_2 }) } >
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_3 }) } >
                    <img src={ img_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_4 }) } >
                    <img src={ img_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_5 }) } >
                    <img src={ img_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_6 }) } >
                    <img src={ img_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_7 }) } >
                    <img src={ img_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_8 }) } >
                    <img src={ img_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_9 }) } >
                    <img src={ img_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_10 }) } >
                    <img src={ img_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_11 }) } >
                    <img src={ img_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_12 }) } >
                    <img src={ img_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_13 }) } >
                    <img src={ img_13 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_14 }) } >
                    <img src={ img_14 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_15 }) } >
                    <img src={ img_15 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_16 }) } >
                    <img src={ img_16 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_17 }) } >
                    <img src={ img_17 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_18 }) } >
                    <img src={ img_18 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_19 }) } >
                    <img src={ img_19 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_20 }) } >
                    <img src={ img_20 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_21 }) } >
                    <img src={ img_21 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_22 }) } >
                    <img src={ img_22 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_23 }) } >
                    <img src={ img_23 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_24 }) } >
                    <img src={ img_24 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_25 }) } >
                    <img src={ img_25 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_26 }) } >
                    <img src={ img_26 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_27 }) } >
                    <img src={ img_27 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_28 }) } >
                    <img src={ img_28 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_29 }) } >
                    <img src={ img_29 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_30 }) } >
                    <img src={ img_30 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_31 }) } >
                    <img src={ img_31 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_32 }) } >
                    <img src={ img_32 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_33 }) } >
                    <img src={ img_33 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_34 }) } >
                    <img src={ img_34 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_35 }) } >
                    <img src={ img_35 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_36 }) } >
                    <img src={ img_36 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_37 }) } >
                    <img src={ img_37 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
