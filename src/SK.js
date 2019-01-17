import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_148 from './assets/sk/0 - gg2ajpB.mp4';
import img_148 from './assets/sk/0 - gg2ajpB.mp4.png';
import video_149 from './assets/sk/0 GlitteringPastAmericanlobster.mp4';
import img_149 from './assets/sk/0 GlitteringPastAmericanlobster.mp4.png';
import img_0 from './assets/sk/1 - CITPyna.jpg';
import img_1 from './assets/sk/10 - by8wN4C.jpg';
import img_2 from './assets/sk/11 - iSJViWJ.jpg';
import img_3 from './assets/sk/12 - qdXGieE.jpg';
import img_4 from './assets/sk/12 - urrK9kJ.jpg';
import img_5 from './assets/sk/13 - 7fvOSve.jpg';
import img_6 from './assets/sk/14 - bz0nWAw.jpg';
import img_7 from './assets/sk/16 - 1BzwcDB.jpg';
import img_8 from './assets/sk/16 - APedq6m.jpg';
import img_9 from './assets/sk/18 - LH41Fdn.jpg';
import img_10 from './assets/sk/19 - H8CztN5.jpg';
import img_11 from './assets/sk/20 - fptvvvt.jpg';
import img_12 from './assets/sk/21 - XiJ2KLE.jpg';
import img_13 from './assets/sk/22 - bMF6L2z.jpg';
import img_14 from './assets/sk/22 - qIUD4ST.jpg';
import img_15 from './assets/sk/24 - TATIPF0.jpg';
import img_16 from './assets/sk/26 - 3uQXKUK.jpg';
import img_17 from './assets/sk/27 - qJ2FuMP.jpg';
import img_18 from './assets/sk/28 - zlmRJyv.jpg';
import img_19 from './assets/sk/29 - xruhSaM.jpg';
import img_20 from './assets/sk/3 - PSL9j3w.jpg';
import img_21 from './assets/sk/32 - VvF0UKg.jpg';
import img_22 from './assets/sk/35 - 1RZgLUX.jpg';
import img_23 from './assets/sk/36 - 1JGQQdo.jpg';
import img_24 from './assets/sk/36 - yvcivld.jpg';
import img_25 from './assets/sk/38 - yOTcF91.jpg';
import img_26 from './assets/sk/4 - s93SA83.jpg';
import img_27 from './assets/sk/40 - TXqocWf.jpg';
import img_28 from './assets/sk/41 - 3GhcHWB.jpg';
import img_29 from './assets/sk/45 - AGR3dNi.jpg';
import img_30 from './assets/sk/5 - u4Ux9Qy.jpg';
import img_31 from './assets/sk/51 - 1r0aw6P.jpg';
import img_32 from './assets/sk/6 - iblN2iO.jpg';
import img_33 from './assets/sk/8 - EtxTNdw.jpg';
import img_34 from './assets/sk/s1uD4vR.jpg';
import img_35 from './assets/sk/sophiknight_10853055_1626579897582994_122743015_n.jpg';
import img_36 from './assets/sk/sophiknight_11123672_421008591414338_467114421_n.jpg';
import img_37 from './assets/sk/sophiknight_11186890_1604691406414655_864013023_n.jpg';
import img_38 from './assets/sk/sophiknight_11242294_994240443922590_1937822140_n.jpg';
import img_39 from './assets/sk/sophiknight_11248006_1574213089525796_677437437_n.jpg';
import img_40 from './assets/sk/sophiknight_11260445_1609672939321045_1055238228_n.jpg';
import img_41 from './assets/sk/sophiknight_11325803_369080926632537_2063996375_n.jpg';
import img_42 from './assets/sk/sophiknight_11334531_798951480203849_1478199653_n.jpg';
import img_43 from './assets/sk/sophiknight_11335548_368782879980411_1287693555_n.jpg';
import img_44 from './assets/sk/sophiknight_11348357_109499209395282_1776451315_n.jpg';
import img_45 from './assets/sk/sophiknight_11356350_1096830856999742_2102559929_n.jpg';
import img_46 from './assets/sk/sophiknight_11363646_1615052265429913_1564965625_n.jpg';
import img_47 from './assets/sk/sophiknight_11809674_1475553172768833_2111366932_n.jpg';
import img_48 from './assets/sk/sophiknight_12105104_508066776037552_45798107_n.jpg';
import img_49 from './assets/sk/sophiknight_12142114_522633394560303_565810835_n.jpg';
import img_50 from './assets/sk/sophiknight_12231008_139934046369402_1913476130_n.jpg';
import img_51 from './assets/sk/sophiknight_12256772_1063721623638264_532145542_n.jpg';
import img_52 from './assets/sk/sophiknight_12299004_1798667647027229_1113589529_n.jpg';
import img_53 from './assets/sk/sophiknight_12317575_1498890403750768_1871869939_n.jpg';
import img_54 from './assets/sk/sophiknight_12393871_741455769319198_1741093670_n.jpg';
import img_55 from './assets/sk/sophiknight_12407344_1550534318605226_1323105321_n.jpg';
import img_56 from './assets/sk/sophiknight_12407457_951992234879906_1355088483_n.jpg';
import img_57 from './assets/sk/sophiknight_12446184_219666708370951_872202419_n.jpg';
import img_58 from './assets/sk/sophiknight_12523599_712112958926312_2124030169_n.jpg';
import img_59 from './assets/sk/sophiknight_12545267_1550035865315870_1036252040_n.jpg';
import img_60 from './assets/sk/sophiknight_12677724_1068659026533003_311064404_n.jpg';
import img_61 from './assets/sk/sophiknight_12826023_1575582366091761_1097345955_n.jpg';
import img_62 from './assets/sk/sophiknight_12917886_1260331417327500_1243945900_n.jpg';
import img_63 from './assets/sk/sophiknight_12940246_1661066194155359_1134056555_n.jpg';
import img_64 from './assets/sk/sophiknight_13116637_1705872703023385_213720730_n.jpg';
import img_65 from './assets/sk/sophiknight_13256590_1781933045376154_1156157916_n.jpg';
import img_66 from './assets/sk/sophiknight_13402392_1084935671552613_82371805_n.jpg';
import img_67 from './assets/sk/sophiknight_13573637_197726227296251_408357014_n.jpg';
import img_68 from './assets/sk/sophiknight_13649323_1073059722770346_1882601786_n.jpg';
import img_69 from './assets/sk/sophiknight_13696513_307528826261759_1391664252_n.jpg';
import img_70 from './assets/sk/sophiknight_13739645_100175520430387_624335073_n.jpg';
import img_71 from './assets/sk/sophiknight_13745203_196171974118909_1703136578_n.jpg';
import img_72 from './assets/sk/sophiknight_14063127_1779352878990160_1256362424_n.jpg';
import img_73 from './assets/sk/sophiknight_14676792_189452801460960_7902521636006395904_n.jpg';
import img_74 from './assets/sk/sophiknight_14717375_1755832481323470_8276189455820259328_n.jpg';
import img_75 from './assets/sk/sophiknight_15043761_1747130688942500_3616302651517435904_n.jpg';
import img_76 from './assets/sk/sophiknight_1516597_1545386262448524_243097799_n.jpg';
import img_77 from './assets/sk/sophiknight_15306083_218366808617023_4851560474484932608_n.jpg';
import img_78 from './assets/sk/sophiknight_16110765_1504083792936620_490079627016929280_n.jpg';
import img_79 from './assets/sk/sophiknight_17586641_277776735994604_2956503311580135424_n.jpg';
import img_80 from './assets/sk/sophiknight_20902562_1970530833216278_6818835102995316736_n.jpg';
import img_81 from './assets/sk/sophiknight_22158804_120498898641703_2740853050892615680_n.jpg';
import img_82 from './assets/sk/sophiknight_22802385_505906396440009_8004639036134129664_n.jpg';
import img_83 from './assets/sk/sophiknight_32813799_200879270537394_2109072204988678144_n.jpg';
import img_84 from './assets/sk/sophiknight_33791887_375603796281481_984471766271262720_n.jpg';
import img_85 from './assets/sk/sophiknight_36565935_234717707252294_5586620028133834752_n.jpg';
import img_86 from './assets/sk/sophiknight_37400695_2057922314458112_769581534406508544_n.jpg';
import img_87 from './assets/sk/sophiknight_37959267_217169819002050_7585468039273906176_n.jpg';
import img_88 from './assets/sk/sophiknight_42150957_2190098834394252_64163594693602068_n.jpg';
import img_89 from './assets/sk/vsco59df0647bfd17.jpg';
import img_90 from './assets/sk/vsco59faa30f7532b.jpg';
import img_91 from './assets/sk/vsco5a275d3b0694a.jpg';
import img_92 from './assets/sk/vsco5a2a455caaa96.jpg';
import img_93 from './assets/sk/vsco5a2f61eaebadb.jpg';
import img_94 from './assets/sk/vsco5a48b0c8e5c93.jpg';
import img_95 from './assets/sk/vsco5a6ba06ef2daf.jpg';
import img_96 from './assets/sk/vsco5a6e35b3ed86f.jpg';
import img_97 from './assets/sk/vsco5a9225b9c5405.jpg';
import img_98 from './assets/sk/vsco5a9e25e349ad7.jpg';
import img_99 from './assets/sk/vsco5aa60f5ebce15.jpg';
import img_100 from './assets/sk/vsco5ad042dc6d74e.jpg';
import img_101 from './assets/sk/vsco5ad970ce87b27.jpg';
import img_102 from './assets/sk/vsco5b0b985153b84.jpg';
import img_103 from './assets/sk/vsco5b3b0337f094e.jpg';
import img_104 from './assets/sk/vsco5b3c67c70c925.jpg';
import img_105 from './assets/sk/vsco5b4d5eeed7c0c.jpg';
import img_106 from './assets/sk/vsco5b502b23bfa93.jpg';
import img_107 from './assets/sk/vsco5b5036bf031d9.jpg';
import img_108 from './assets/sk/vsco5b593255b1878.jpg';
import img_109 from './assets/sk/vsco5b5bd6f123e2f.jpg';
import img_110 from './assets/sk/vsco5b63884b0d2a5.jpg';
import img_111 from './assets/sk/vsco5b7f603400834.jpg';
import img_112 from './assets/sk/vsco5b83224be116a.jpg';
import img_113 from './assets/sk/vsco5b841f508fb5a.jpg';
import img_114 from './assets/sk/vsco5b843a3667012.jpg';
import img_115 from './assets/sk/vsco5b86375d30edf.jpg';
import img_116 from './assets/sk/vsco5b97503db404c.jpg';
import img_117 from './assets/sk/vsco5ba08be2be4ff.jpg';
import img_118 from './assets/sk/vsco5ba30e68d71ae.jpg';
import img_119 from './assets/sk/vsco5bb0550db8186.jpg';
import img_120 from './assets/sk/vsco5bbd960dd3ce2.jpg';
import img_121 from './assets/sk/vsco5bbd97eed0fda.jpg';
import img_122 from './assets/sk/vsco5bc89820a878f.jpg';
import img_123 from './assets/sk/vsco5bcd43220bf55.jpg';
import img_124 from './assets/sk/vsco5bd668095f6d2.jpg';
import img_125 from './assets/sk/vsco5bea7200d63b4.jpg';
import img_126 from './assets/sk/vsco5bfcd099089ae.jpg';
import img_127 from './assets/sk/vsco5bff7ff4d0851.jpg';
import img_128 from './assets/sk/vsco5c06063781116.jpg';
import img_129 from './assets/sk/vsco5c1b205a76d94.jpg';
import img_130 from './assets/sk/vsco5c370fbcbc234.jpg';
import img_131 from './assets/sk/vsco_010817.jpg';
import img_132 from './assets/sk/vsco_020716.jpg';
import img_133 from './assets/sk/vsco_040717 (1).jpg';
import img_134 from './assets/sk/vsco_040717.jpg';
import img_135 from './assets/sk/vsco_041916.jpg';
import img_136 from './assets/sk/vsco_050217.jpg';
import img_137 from './assets/sk/vsco_051316.jpg';
import img_138 from './assets/sk/vsco_070817.jpg';
import img_139 from './assets/sk/vsco_072715 (1).jpg';
import img_140 from './assets/sk/vsco_072715 (2).jpg';
import img_141 from './assets/sk/vsco_072715.jpg';
import img_142 from './assets/sk/vsco_080117.jpg';
import img_143 from './assets/sk/vsco_080215.jpg';
import img_144 from './assets/sk/vsco_082017.jpg';
import img_145 from './assets/sk/vsco_082316.jpg';
import img_146 from './assets/sk/vsco_110115.jpg';
import img_147 from './assets/sk/vsco_122815.jpg';

export default class SK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_148,
      image: img_148,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_148 }) }>
                    <img src={ img_148 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_149 }) }>
                    <img src={ img_149 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_0 }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_1 }) } >
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_2 }) } >
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_3 }) } >
                    <img src={ img_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_4 }) } >
                    <img src={ img_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_5 }) } >
                    <img src={ img_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_6 }) } >
                    <img src={ img_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_7 }) } >
                    <img src={ img_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_8 }) } >
                    <img src={ img_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_9 }) } >
                    <img src={ img_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_10 }) } >
                    <img src={ img_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_11 }) } >
                    <img src={ img_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_12 }) } >
                    <img src={ img_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_13 }) } >
                    <img src={ img_13 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_14 }) } >
                    <img src={ img_14 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_15 }) } >
                    <img src={ img_15 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_16 }) } >
                    <img src={ img_16 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_17 }) } >
                    <img src={ img_17 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_18 }) } >
                    <img src={ img_18 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_19 }) } >
                    <img src={ img_19 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_20 }) } >
                    <img src={ img_20 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_21 }) } >
                    <img src={ img_21 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_22 }) } >
                    <img src={ img_22 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_23 }) } >
                    <img src={ img_23 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_24 }) } >
                    <img src={ img_24 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_25 }) } >
                    <img src={ img_25 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_26 }) } >
                    <img src={ img_26 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_27 }) } >
                    <img src={ img_27 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_28 }) } >
                    <img src={ img_28 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_29 }) } >
                    <img src={ img_29 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_30 }) } >
                    <img src={ img_30 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_31 }) } >
                    <img src={ img_31 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_32 }) } >
                    <img src={ img_32 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_33 }) } >
                    <img src={ img_33 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_34 }) } >
                    <img src={ img_34 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_35 }) } >
                    <img src={ img_35 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_36 }) } >
                    <img src={ img_36 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_37 }) } >
                    <img src={ img_37 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_38 }) } >
                    <img src={ img_38 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_39 }) } >
                    <img src={ img_39 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_40 }) } >
                    <img src={ img_40 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_41 }) } >
                    <img src={ img_41 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_42 }) } >
                    <img src={ img_42 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_43 }) } >
                    <img src={ img_43 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_44 }) } >
                    <img src={ img_44 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_45 }) } >
                    <img src={ img_45 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_46 }) } >
                    <img src={ img_46 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_47 }) } >
                    <img src={ img_47 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_48 }) } >
                    <img src={ img_48 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_49 }) } >
                    <img src={ img_49 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_50 }) } >
                    <img src={ img_50 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_51 }) } >
                    <img src={ img_51 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_52 }) } >
                    <img src={ img_52 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_53 }) } >
                    <img src={ img_53 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_54 }) } >
                    <img src={ img_54 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_55 }) } >
                    <img src={ img_55 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_56 }) } >
                    <img src={ img_56 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_57 }) } >
                    <img src={ img_57 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_58 }) } >
                    <img src={ img_58 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_59 }) } >
                    <img src={ img_59 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_60 }) } >
                    <img src={ img_60 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_61 }) } >
                    <img src={ img_61 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_62 }) } >
                    <img src={ img_62 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_63 }) } >
                    <img src={ img_63 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_64 }) } >
                    <img src={ img_64 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_65 }) } >
                    <img src={ img_65 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_66 }) } >
                    <img src={ img_66 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_67 }) } >
                    <img src={ img_67 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_68 }) } >
                    <img src={ img_68 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_69 }) } >
                    <img src={ img_69 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_70 }) } >
                    <img src={ img_70 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_71 }) } >
                    <img src={ img_71 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_72 }) } >
                    <img src={ img_72 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_73 }) } >
                    <img src={ img_73 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_74 }) } >
                    <img src={ img_74 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_75 }) } >
                    <img src={ img_75 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_76 }) } >
                    <img src={ img_76 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_77 }) } >
                    <img src={ img_77 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_78 }) } >
                    <img src={ img_78 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_79 }) } >
                    <img src={ img_79 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_80 }) } >
                    <img src={ img_80 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_81 }) } >
                    <img src={ img_81 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_82 }) } >
                    <img src={ img_82 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_83 }) } >
                    <img src={ img_83 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_84 }) } >
                    <img src={ img_84 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_85 }) } >
                    <img src={ img_85 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_86 }) } >
                    <img src={ img_86 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_87 }) } >
                    <img src={ img_87 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_88 }) } >
                    <img src={ img_88 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_89 }) } >
                    <img src={ img_89 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_90 }) } >
                    <img src={ img_90 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_91 }) } >
                    <img src={ img_91 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_92 }) } >
                    <img src={ img_92 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_93 }) } >
                    <img src={ img_93 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_94 }) } >
                    <img src={ img_94 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_95 }) } >
                    <img src={ img_95 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_96 }) } >
                    <img src={ img_96 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_97 }) } >
                    <img src={ img_97 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_98 }) } >
                    <img src={ img_98 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_99 }) } >
                    <img src={ img_99 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_100 }) } >
                    <img src={ img_100 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_101 }) } >
                    <img src={ img_101 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_102 }) } >
                    <img src={ img_102 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_103 }) } >
                    <img src={ img_103 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_104 }) } >
                    <img src={ img_104 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_105 }) } >
                    <img src={ img_105 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_106 }) } >
                    <img src={ img_106 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_107 }) } >
                    <img src={ img_107 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_108 }) } >
                    <img src={ img_108 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_109 }) } >
                    <img src={ img_109 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_110 }) } >
                    <img src={ img_110 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_111 }) } >
                    <img src={ img_111 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_112 }) } >
                    <img src={ img_112 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_113 }) } >
                    <img src={ img_113 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_114 }) } >
                    <img src={ img_114 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_115 }) } >
                    <img src={ img_115 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_116 }) } >
                    <img src={ img_116 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_117 }) } >
                    <img src={ img_117 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_118 }) } >
                    <img src={ img_118 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_119 }) } >
                    <img src={ img_119 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_120 }) } >
                    <img src={ img_120 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_121 }) } >
                    <img src={ img_121 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_122 }) } >
                    <img src={ img_122 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_123 }) } >
                    <img src={ img_123 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_124 }) } >
                    <img src={ img_124 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_125 }) } >
                    <img src={ img_125 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_126 }) } >
                    <img src={ img_126 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_127 }) } >
                    <img src={ img_127 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_128 }) } >
                    <img src={ img_128 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_129 }) } >
                    <img src={ img_129 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_130 }) } >
                    <img src={ img_130 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_131 }) } >
                    <img src={ img_131 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_132 }) } >
                    <img src={ img_132 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_133 }) } >
                    <img src={ img_133 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_134 }) } >
                    <img src={ img_134 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_135 }) } >
                    <img src={ img_135 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_136 }) } >
                    <img src={ img_136 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_137 }) } >
                    <img src={ img_137 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_138 }) } >
                    <img src={ img_138 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_139 }) } >
                    <img src={ img_139 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_140 }) } >
                    <img src={ img_140 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_141 }) } >
                    <img src={ img_141 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_142 }) } >
                    <img src={ img_142 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_143 }) } >
                    <img src={ img_143 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_144 }) } >
                    <img src={ img_144 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_145 }) } >
                    <img src={ img_145 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_146 }) } >
                    <img src={ img_146 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'image', image: img_147 }) } >
                    <img src={ img_147 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>

    );
  }
}
