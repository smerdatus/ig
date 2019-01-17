import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/ch/videos/2.mp4';
import img_0 from './assets/ch/videos/2.mp4.png';
import video_1 from './assets/ch/videos/3.mp4';
import img_1 from './assets/ch/videos/3.mp4.png';
import video_2 from './assets/ch/videos/4.mp4';
import img_2 from './assets/ch/videos/4.mp4.png';
import video_3 from './assets/ch/videos/AltruisticGeneralHorse.mp4';
import img_3 from './assets/ch/videos/AltruisticGeneralHorse.mp4.png';
import video_4 from './assets/ch/videos/AngelicDaringGlowworm.mp4';
import img_4 from './assets/ch/videos/AngelicDaringGlowworm.mp4.png';
import video_5 from './assets/ch/videos/AngelicWarmAlaskanhusky.mp4';
import img_5 from './assets/ch/videos/AngelicWarmAlaskanhusky.mp4.png';
import video_6 from './assets/ch/videos/AntiqueUnknownGalapagoshawk.mp4';
import img_6 from './assets/ch/videos/AntiqueUnknownGalapagoshawk.mp4.png';
import video_7 from './assets/ch/videos/BestGrotesqueDore.mp4';
import img_7 from './assets/ch/videos/BestGrotesqueDore.mp4.png';
import video_8 from './assets/ch/videos/BreakableDismalBorzoi.mp4';
import img_8 from './assets/ch/videos/BreakableDismalBorzoi.mp4.png';
import video_9 from './assets/ch/videos/BriskCriminalGrackle.mp4';
import img_9 from './assets/ch/videos/BriskCriminalGrackle.mp4.png';
import video_10 from './assets/ch/videos/CalmCanineCricket.mp4';
import img_10 from './assets/ch/videos/CalmCanineCricket.mp4.png';
import video_11 from './assets/ch/videos/Christen Harper.mp4';
import img_11 from './assets/ch/videos/Christen Harper.mp4.png';
import video_12 from './assets/ch/videos/ComfortableExcitableHarvestmouse.mp4';
import img_12 from './assets/ch/videos/ComfortableExcitableHarvestmouse.mp4.png';
import video_13 from './assets/ch/videos/DASH_9_6_M (1).mp4';
import img_13 from './assets/ch/videos/DASH_9_6_M (1).mp4.png';
import video_14 from './assets/ch/videos/DASH_9_6_M (2).mp4';
import img_14 from './assets/ch/videos/DASH_9_6_M (2).mp4.png';
import video_15 from './assets/ch/videos/DASH_9_6_M (3).mp4';
import img_15 from './assets/ch/videos/DASH_9_6_M (3).mp4.png';
import video_16 from './assets/ch/videos/DASH_9_6_M.mp4';
import img_16 from './assets/ch/videos/DASH_9_6_M.mp4.png';
import video_17 from './assets/ch/videos/FarFastHaddock.mp4';
import img_17 from './assets/ch/videos/FarFastHaddock.mp4.png';
import video_18 from './assets/ch/videos/FemaleEverlastingJackrabbit.mp4';
import img_18 from './assets/ch/videos/FemaleEverlastingJackrabbit.mp4.png';
import video_19 from './assets/ch/videos/GracefulSilkyKookaburra.mp4';
import img_19 from './assets/ch/videos/GracefulSilkyKookaburra.mp4.png';
import video_20 from './assets/ch/videos/GreedySpotlessHusky.mp4';
import img_20 from './assets/ch/videos/GreedySpotlessHusky.mp4.png';
import video_21 from './assets/ch/videos/JaggedGrandioseBlacklemur.mp4';
import img_21 from './assets/ch/videos/JaggedGrandioseBlacklemur.mp4.png';
import video_22 from './assets/ch/videos/PhonyLividAmberpenshell.mp4';
import img_22 from './assets/ch/videos/PhonyLividAmberpenshell.mp4.png';
import video_23 from './assets/ch/videos/PiercingYawningEkaltadeta.mp4';
import img_23 from './assets/ch/videos/PiercingYawningEkaltadeta.mp4.png';
import video_24 from './assets/ch/videos/PleasingWebbedEskimodog.mp4';
import img_24 from './assets/ch/videos/PleasingWebbedEskimodog.mp4.png';
import video_25 from './assets/ch/videos/ReflectingGreedyElephantbeetle.mp4';
import img_25 from './assets/ch/videos/ReflectingGreedyElephantbeetle.mp4.png';
import video_26 from './assets/ch/videos/RipeThisIndochinesetiger.mp4';
import img_26 from './assets/ch/videos/RipeThisIndochinesetiger.mp4.png';
import video_27 from './assets/ch/videos/ScientificAthleticGoa.mp4';
import img_27 from './assets/ch/videos/ScientificAthleticGoa.mp4.png';
import video_28 from './assets/ch/videos/SneakyBadBellfrog.mp4';
import img_28 from './assets/ch/videos/SneakyBadBellfrog.mp4.png';
import video_29 from './assets/ch/videos/SnivelingMeagerArabianhorse.mp4';
import img_29 from './assets/ch/videos/SnivelingMeagerArabianhorse.mp4.png';
import video_30 from './assets/ch/videos/SpitefulCraftyHermitcrab.mp4';
import img_30 from './assets/ch/videos/SpitefulCraftyHermitcrab.mp4.png';
import video_31 from './assets/ch/videos/SpotlessTimelyAgama.mp4';
import img_31 from './assets/ch/videos/SpotlessTimelyAgama.mp4.png';
import video_32 from './assets/ch/videos/SprySphericalDungbeetle.mp4';
import img_32 from './assets/ch/videos/SprySphericalDungbeetle.mp4.png';
import video_33 from './assets/ch/videos/UnluckySplendidHound.mp4';
import img_33 from './assets/ch/videos/UnluckySplendidHound.mp4.png';
import video_34 from './assets/ch/videos/WelllitUnkemptKangaroo.mp4';
import img_34 from './assets/ch/videos/WelllitUnkemptKangaroo.mp4.png';
import video_35 from './assets/ch/videos/WetBronzeAfricanclawedfrog.mp4';
import img_35 from './assets/ch/videos/WetBronzeAfricanclawedfrog.mp4.png';
import video_36 from './assets/ch/videos/elizabethcturner_49941634_1984206148331241_1964954531988442342_n.mp4.947bedd223f0212287fd0a062c71bf20.mp4';
import img_36 from './assets/ch/videos/elizabethcturner_49941634_1984206148331241_1964954531988442342_n.mp4.947bedd223f0212287fd0a062c71bf20.mp4.png';
import video_37 from './assets/ch/videos/elizabethcturner_50170297_219633525641708_107952681750573264_n.mp4.11df4006ac31a26faaa8f79a1a5d5048.mp4';
import img_37 from './assets/ch/videos/elizabethcturner_50170297_219633525641708_107952681750573264_n.mp4.11df4006ac31a26faaa8f79a1a5d5048.mp4.png';
import video_38 from './assets/ch/videos/gfv.mp4';
import img_38 from './assets/ch/videos/gfv.mp4.png';
import image_0 from './assets/ch/0d3ENUv.jpg';
import image_1 from './assets/ch/10125_8d7b499b-7e5b-4757-b2cf-29c4122c871f.jpg.0ce86ce4998e9a205ae038f6a265ad2b.jpg';
import image_2 from './assets/ch/1L_BUKFqoPAZcL5_6hngrhK7p33pARGkB6w_i2XMws8.jpg';
import image_3 from './assets/ch/1tql9Wu.jpg';
import image_4 from './assets/ch/2JmMojd.jpg';
import image_5 from './assets/ch/2LH5N1p.jpg';
import image_6 from './assets/ch/3d1c8f479931437.jpg';
import image_7 from './assets/ch/4izr7lafzz711.jpg';
import image_8 from './assets/ch/56bf4da1f283a_creativesmiles12.jpg.eeb1e8c0e477c7db244d7a53573cd6f2.jpg';
import image_9 from './assets/ch/56bf5149a8140_allenchiu13.jpg.e2a84488943d6cdb5cc482c2303bb029.jpg';
import image_10 from './assets/ch/6a9e845taga11.jpg';
import image_11 from './assets/ch/6m147iz38ap11.jpg';
import image_12 from './assets/ch/734ec8482921872.jpg';
import image_13 from './assets/ch/7dvNAiM.jpg';
import image_14 from './assets/ch/8JmkRCA.jpg';
import image_15 from './assets/ch/9eeccc482075533.jpg';
import image_16 from './assets/ch/LnVfTkv.jpg';
import image_17 from './assets/ch/ObDwdjA.jpg';
import image_18 from './assets/ch/PA00DY2.jpg';
import image_19 from './assets/ch/S4pb4jh.jpg';
import image_20 from './assets/ch/TlLgNoo.jpg';
import image_21 from './assets/ch/V6gCgw8.jpg';
import image_22 from './assets/ch/VH6bhse.jpg';
import image_23 from './assets/ch/YQv18LQ.jpg';
import image_24 from './assets/ch/ZMrum7Z.jpg';
import image_25 from './assets/ch/bxEXR01.jpg';
import image_26 from './assets/ch/christenharper_20347158_106573316690600_4115483610587332608_n.jpg';
import image_27 from './assets/ch/christenharper_23164850_372734196494631_6503451819044241408_n.jpg';
import image_28 from './assets/ch/christenharper_29739369_2117685501581393_4842284148284456960_n.jpg';
import image_29 from './assets/ch/christenharper_30593020_163021957852243_4585401913792528384_n.jpg';
import image_30 from './assets/ch/christenharper_37656155_479260149210444_5707538140793667584_n.jpg';
import image_31 from './assets/ch/christenharper_41479386_233781247489030_4430882867181932393_n.jpg';
import image_32 from './assets/ch/christenharper_47582675_329384311247772_1820680412348906791_n.jpg';
import image_33 from './assets/ch/cqSiJDl.jpg';
import image_34 from './assets/ch/e4R5F72NYjEIl3apFe-H8yOg3NhQyC6waOeMIgx1bNs.jpg';
import image_35 from './assets/ch/eab8rrloih921.jpg';
import image_36 from './assets/ch/ehuxM8E.jpg';
import image_37 from './assets/ch/erg.jpg.46466c0f4f4e60669ad589f4a82368b0.jpg';
import image_38 from './assets/ch/et.jpg.760a12028713fba4665d77db4057c9db.jpg';
import image_39 from './assets/ch/f4c3G3M.jpg';
import image_40 from './assets/ch/k6G0BK3.jpg';
import image_41 from './assets/ch/lU2WwLD1dwkYBb3uEn2oPub0J-K__tYo8X5p_kvKll8.jpg';
import image_42 from './assets/ch/nawGmxN.jpg';
import image_43 from './assets/ch/ovbj3ce.jpg';
import image_44 from './assets/ch/tj28g4xpjct11.jpg';
import image_45 from './assets/ch/uQ2UJXk.jpg';
import image_46 from './assets/ch/vr6sHvL.jpg';
import image_47 from './assets/ch/wq.jpg.5ed3a1d573eb521e97214ee64cd8c55c.jpg';
import image_48 from './assets/ch/z6X5sHw.jpg';
import image_49 from './assets/ch/ziFd1rr.jpg';

export default class CH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_24,
      image: img_24,
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
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_24 }) }>
                    <img src={ img_24 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_25 }) }>
                    <img src={ img_25 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_26 }) }>
                    <img src={ img_26 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_27 }) }>
                    <img src={ img_27 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_28 }) }>
                    <img src={ img_28 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_29 }) }>
                    <img src={ img_29 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_30 }) }>
                    <img src={ img_30 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_31 }) }>
                    <img src={ img_31 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_32 }) }>
                    <img src={ img_32 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_33 }) }>
                    <img src={ img_33 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_34 }) }>
                    <img src={ img_34 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_35 }) }>
                    <img src={ img_35 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_36 }) }>
                    <img src={ img_36 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_37 }) }>
                    <img src={ img_37 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_38 }) }>
                    <img src={ img_38 } className={ this.state.picSizeMode } />
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_47 }) } >
                    <img src={ image_47 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_48 }) } >
                    <img src={ image_48 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: image_49 }) } >
                    <img src={ image_49 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
