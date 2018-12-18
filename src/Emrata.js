import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import image_0 from './assets/emrata/pics/1.jpg';
import image_1 from './assets/emrata/pics/2.jpg';
import image_2 from './assets/emrata/pics/3.jpg';
import image_3 from './assets/emrata/pics/4.jpg';
import image_4 from './assets/emrata/pics/5.jpg';
import image_5 from './assets/emrata/pics/emrata_10362291_737569386263351_38606236_n.jpg';
import image_6 from './assets/emrata/pics/emrata_10475003_782417388489556_181086254_n.jpg';
import image_7 from './assets/emrata/pics/emrata_11138031_101165610214809_1733709573_n.jpg';
import image_8 from './assets/emrata/pics/emrata_16122658_214169725719945_3540895249276600320_n.jpg';
import image_9 from './assets/emrata/pics/emrata_22_6_2018_1_30_26_112.jpg';
import image_10 from './assets/emrata/pics/emrata_27574478_156371908486913_996040505496174592_n.jpg';
import image_11 from './assets/emrata/pics/emrata_27881351_169353703849780_4091359058458574848_n.jpg';
import image_12 from './assets/emrata/pics/emrata_28427936_1877338375632952_5053724220035432448_n.jpg';
import image_13 from './assets/emrata/pics/emrata_28765151_822245171304694_6941709599028281344_n.jpg';
import image_14 from './assets/emrata/pics/emrata_29404033_204685496794243_4964383724843040768_n.jpg';
import image_15 from './assets/emrata/pics/emrata_30076285_211443079440156_3594211534475100160_n.jpg';
import image_16 from './assets/emrata/pics/emrata_30903681_379206669230560_6842250328390238208_n.jpg';
import image_17 from './assets/emrata/pics/emrata_35173493_997647193733914_9206661027775643648_n.jpg';
import image_18 from './assets/emrata/pics/emrata_42104551_1392838730852212_1122933557474712213_n.jpg';
import image_19 from './assets/emrata/pics/emrata_43778727_260247791345304_4121783994854838877_n.jpg';
import image_20 from './assets/emrata/pics/emrata_43914371_271821910204713_350304299602682004_n.jpg';
import image_21 from './assets/emrata/pics/emrata_43915025_751597131846198_562821629087141308_n.jpg';
import image_22 from './assets/emrata/pics/emrata_43984579_195334238013382_9131595846362481638_n.jpg';
import image_23 from './assets/emrata/pics/emrata_44265464_1100312330150432_8026272777647228926_n.jpg';
import image_24 from './assets/emrata/pics/emrata_44500661_2035417119814241_1642243161734073520_n.jpg';
import image_25 from './assets/emrata/pics/emrata_44678158_148520979460606_4210098807971824239_n.jpg';
import video_0 from './assets/emrata/videos/0_35957737_188710255148519_277977730519940134_n.mp4';
import img_0 from './assets/emrata/videos/0_35957737_188710255148519_277977730519940134_n.mp4.png';
import video_1 from './assets/emrata/videos/10_25517958_660378344351513_4393447013446844416_n.mp4';
import img_1 from './assets/emrata/videos/10_25517958_660378344351513_4393447013446844416_n.mp4.png';
import video_2 from './assets/emrata/videos/11_24325603_510045966026951_477580868458643456_n.mp4';
import img_2 from './assets/emrata/videos/11_24325603_510045966026951_477580868458643456_n.mp4.png';
import video_3 from './assets/emrata/videos/12_24325437_133339627354479_7848192262512050176_n.mp4';
import img_3 from './assets/emrata/videos/12_24325437_133339627354479_7848192262512050176_n.mp4.png';
import video_4 from './assets/emrata/videos/13_24382352_1955334951389897_3288495113805758464_n.mp4';
import img_4 from './assets/emrata/videos/13_24382352_1955334951389897_3288495113805758464_n.mp4.png';
import video_5 from './assets/emrata/videos/14_24323494_171616576758668_8807614327814094848_n.mp4';
import img_5 from './assets/emrata/videos/14_24323494_171616576758668_8807614327814094848_n.mp4.png';
import video_6 from './assets/emrata/videos/15_23727867_1404728229625811_333471220890599424_n.mp4';
import img_6 from './assets/emrata/videos/15_23727867_1404728229625811_333471220890599424_n.mp4.png';
import video_7 from './assets/emrata/videos/16_23619639_1626368577443625_7936886438140837888_n.mp4';
import img_7 from './assets/emrata/videos/16_23619639_1626368577443625_7936886438140837888_n.mp4.png';
import video_8 from './assets/emrata/videos/18_21732319_1308364059290067_5450059116300992512_n.mp4';
import img_8 from './assets/emrata/videos/18_21732319_1308364059290067_5450059116300992512_n.mp4.png';
import video_9 from './assets/emrata/videos/19_20851670_1081360548661772_988010475725783040_n.mp4';
import img_9 from './assets/emrata/videos/19_20851670_1081360548661772_988010475725783040_n.mp4.png';
import video_10 from './assets/emrata/videos/1_33378093_179206286121787_1423626255214416519_n.mp4';
import img_10 from './assets/emrata/videos/1_33378093_179206286121787_1423626255214416519_n.mp4.png';
import video_11 from './assets/emrata/videos/21_19515253_809946022517109_5498796996426727424_n.mp4';
import img_11 from './assets/emrata/videos/21_19515253_809946022517109_5498796996426727424_n.mp4.png';
import video_12 from './assets/emrata/videos/23_18896677_838473529639132_6760557374655692800_n.mp4';
import img_12 from './assets/emrata/videos/23_18896677_838473529639132_6760557374655692800_n.mp4.png';
import video_13 from './assets/emrata/videos/25_18539884_825221964296587_3539375152976363520_n.mp4';
import img_13 from './assets/emrata/videos/25_18539884_825221964296587_3539375152976363520_n.mp4.png';
import video_14 from './assets/emrata/videos/28_17912053_1769505459742679_5571523540210941952_n.mp4';
import img_14 from './assets/emrata/videos/28_17912053_1769505459742679_5571523540210941952_n.mp4.png';
import video_15 from './assets/emrata/videos/2_31560656_212651609230544_3590244431118654331_n.mp4';
import img_15 from './assets/emrata/videos/2_31560656_212651609230544_3590244431118654331_n.mp4.png';
import video_16 from './assets/emrata/videos/33_16193985_167780477041300_4964406930551341056_n.mp4';
import img_16 from './assets/emrata/videos/33_16193985_167780477041300_4964406930551341056_n.mp4.png';
import video_17 from './assets/emrata/videos/34_15993564_1535414936486682_292688865737572352_n.mp4';
import img_17 from './assets/emrata/videos/34_15993564_1535414936486682_292688865737572352_n.mp4.png';
import video_18 from './assets/emrata/videos/38_14196708_1671779643134454_1635822944192036864_n.mp4';
import img_18 from './assets/emrata/videos/38_14196708_1671779643134454_1635822944192036864_n.mp4.png';
import video_19 from './assets/emrata/videos/39_15073973_622471871290778_2960399693026164736_n.mp4';
import img_19 from './assets/emrata/videos/39_15073973_622471871290778_2960399693026164736_n.mp4.png';
import video_20 from './assets/emrata/videos/3_31128780_190205941615240_2665905897347219456_n.mp4';
import img_20 from './assets/emrata/videos/3_31128780_190205941615240_2665905897347219456_n.mp4.png';
import video_21 from './assets/emrata/videos/41_13459102_1075026825906760_930502894_n.mp4';
import img_21 from './assets/emrata/videos/41_13459102_1075026825906760_930502894_n.mp4.png';
import video_22 from './assets/emrata/videos/45_13053376_1718662901755926_795428184_n.mp4';
import img_22 from './assets/emrata/videos/45_13053376_1718662901755926_795428184_n.mp4.png';
import video_23 from './assets/emrata/videos/7_27819221_2093189180916807_536244280566480896_n.mp4';
import img_23 from './assets/emrata/videos/7_27819221_2093189180916807_536244280566480896_n.mp4.png';
import video_24 from './assets/emrata/videos/emrata_45048618_248398225854880_5685344129845844283_n.mp4';
import img_24 from './assets/emrata/videos/emrata_45048618_248398225854880_5685344129845844283_n.mp4.png';
import video_25 from './assets/emrata/videos/emrata_45132874_190388048516216_6275568905446401642_n.mp4';
import img_25 from './assets/emrata/videos/emrata_45132874_190388048516216_6275568905446401642_n.mp4.png';

export default class Emrata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_25,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_25 }) }>
                    <img src={ img_25 } className={ this.state.picSizeMode } />
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
            </div>
        </div>

    );
  }
}
