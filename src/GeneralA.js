import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import img__charlie_robertson_0 from './assets/_charlie_robertson_41772931_172132790355977_1077968129584512588_n.jpg';
import img_allieredmondd_0 from './assets/allieredmondd_39205898_1982566431795551_7299361159377846272_n.jpg';
import img_andrejapejic_0 from './assets/andrejapejic_30905339_1540753099383798_1248992574329323520_n.jpg';
import img_andrejapejic_1 from './assets/andrejapejic_34531034_2030768240517636_8741971731289210880_n.jpg';
import img_angievarona_0 from './assets/angievarona_43244797_328266744653894_7282723171531540915_n.jpg';
import img_angievarona_1 from './assets/angievarona_43914691_2121275551466047_1257705075893465094_n.jpg';
import img_anne_spp_0 from './assets/anne_spp_14240679_263960867336033_1622303730_n.jpg';
import img_anne_spp_1 from './assets/anne_spp_14272151_1187744074639033_282001609_n.jpg';
import img_anne_spp_2 from './assets/anne_spp_20635084_108252703216882_8674371213792903168_n.jpg';
import img_anne_spp_3 from './assets/anne_spp_37947834_563531777378112_3774330462730715136_n.jpg';
import img_anne_spp_4 from './assets/anne_spp_37954081_2202002876495804_5170365614715305984_n.jpg';
import img_annedepaula_0 from './assets/annedepaula_44403483_878822475841969_3377139350279056247_n.jpg';
import img_anyanicolodi_0 from './assets/anyanicolodi_43914904_289429765000752_6573373740125993197_n.jpg';
import img_autumnjacob_0 from './assets/autumnjacob_17265493_263750500743380_4218825415696842752_n.jpg';
import img_autumnjacob_1 from './assets/autumnjacob_39493967_2368781493138152_6722024946710609920_n.jpg';
import img_autumnjacob_2 from './assets/autumnjacob_43984328_304576673474096_1185169051116707101_n.jpg';
import img_avasmithofficial_0 from './assets/avasmithofficial_41520975_681465288922982_1979005209986075991_n.jpg';
import img_avasmithofficial_1 from './assets/avasmithofficial_41971842_278064626138540_9067265208310481563_n.jpg';
import img_avasmithofficial_2 from './assets/avasmithofficial_42068809_310998649702905_2265393296205662146_n.jpg';
import img_bethanyheyes_0 from './assets/bethanyheyes_35155880_655369794802554_6786289094956679168_n.jpg';
import img_biancaghezzi_0 from './assets/biancaghezzi_43482791_2127639047499104_1504468138478519243_n.jpg';
import img_chabrinadaniella_0 from './assets/chabrinadaniella_38080938_2148028052118983_3078540130076590080_n.jpg';
import img_charlottemckinney_0 from './assets/charlottemckinney_34605515_407506186398366_7775170486970875904_n.jpg';
import img_chloevialaret_0 from './assets/chloevialaret_26158206_528665407501870_7896892291091005440_n.jpg';
import img_chloevialaret_1 from './assets/chloevialaret_31122574_1938015323177168_5060915318138863616_n.jpg';
import img_chloevialaret_2 from './assets/chloevialaret_31745489_186978188593659_6839244212060291072_n.jpg';
import img_chloevialaret_3 from './assets/chloevialaret_38042611_2121095998171123_2657379188968783872_n.jpg';
import img_chloevialaret_4 from './assets/chloevialaret_43271666_855670947974850_6957755898363448415_n.jpg';
import img_christenharper_0 from './assets/christenharper_37848795_195032028027014_3581678562207334400_n.jpg';
import img_cindymello_0 from './assets/cindymello_19428871_832347676916983_7909605334157623296_n.jpg';
import img_cindymello_1 from './assets/cindymello_28751499_1567651016617798_7142058609227071488_n.jpg';
import img_cindymello_2 from './assets/cindymello_30604480_208495859748333_8116287312289071104_n.jpg';
import img_claramonefeldt_0 from './assets/claramonefeldt_19931892_446453902393455_8218480690388271104_n.jpg';
import img_clarawasehuus_0 from './assets/clarawasehuus_14714466_144597716010636_597572127175999488_n.jpg';
import img_clarawasehuus_1 from './assets/clarawasehuus_20184566_786078024887500_6517194859692949504_n.jpg';
import img_claudiagronvall_0 from './assets/claudiagronvall_35618153_221338995348970_429689900049104896_n.jpg';
import img_claudiagronvall_1 from './assets/claudiagronvall_36629569_1847117495373147_2157891341600686080_n.jpg';
import img_coochiebygucci_0 from './assets/coochiebygucci_35503857_274765793096288_1400830487265542144_n.jpg';
import img_dainonmcduffie_0 from './assets/dainonmcduffie_32725764_255824845159385_3952556869481922560_n.jpg';
import img_danilanio_0 from './assets/danilanio_42845044_252558242060223_2996243624977461436_n.jpg';
import img_daphnedebaat_0 from './assets/daphnedebaat_38233392_525118794593677_8589765653756379136_n.jpg';
import img_devinbrugman_0 from './assets/devinbrugman_43915194_1969926863043914_8530052650533540134_n.jpg';
import img_edendrori4_0 from './assets/edendrori4_30603843_168453760532319_2488942460089139200_n.jpg';
import img_edendrori4_1 from './assets/edendrori4_33164992_914162905418925_2140478852692967424_n.jpg';
import img_edendrori4_2 from './assets/edendrori4_34468814_241935913235205_3730397414058622976_n.jpg';
import img_effyharvard_0 from './assets/effyharvard_37754460_2148755178698930_6306199596229984256_n.jpg';
import img_effyharvard_1 from './assets/effyharvard_41281262_2294286727250168_5172546451923242734_n.jpg';
import img_eizagonzalez_0 from './assets/eizagonzalez_43985679_259126304952985_1341495197587164118_n.jpg';
import img_eizagonzalez_1 from './assets/eizagonzalez_44230421_104029577220504_4430103539053250912_n.jpg';
import img_eizagonzalez_2 from './assets/eizagonzalez_44492004_2269320010023585_6147520941131227850_n.jpg';
import img_eizagonzalez_3 from './assets/eizagonzalez_44552914_478869819268065_2761142001259297056_n.jpg';
import img_emilialagoni_0 from './assets/emilialagoni_33684879_463925527372510_3847678840469979136_n.jpg';
import img_emilialagoni_1 from './assets/emilialagoni_36782246_235505117067214_8999930275995582464_n.jpg';
import img_emiliejuel_0 from './assets/emiliejuel_36798834_2170266039896239_317858267445329920_n.jpg';
import img_emily_aurelia_0 from './assets/emily.aurelia_20687364_1880959112227845_4035156280359256064_n.jpg';
import img_emilybloomofficial_0 from './assets/emilybloomofficial_37010353_244891749455702_7144126846433492992_n.jpg';
import img_emilybloomofficial_1 from './assets/emilybloomofficial_45514396_132910444359393_1957672066806377904_n.jpg';
import img_emilysears_0 from './assets/emilysears_42003011_801068336891159_187540634827346275_n.jpg';
import img_georgiagibbs_0 from './assets/georgiagibbs_44503417_568566573574487_5968619525476843655_n.jpg';
import img_hannahrosemasi_0 from './assets/hannahrosemasi_34295419_254959018402435_7988765507023011840_n.jpg';
import img_hannahrosemasi_1 from './assets/hannahrosemasi_35000483_834487810073861_4357625697708015616_n.jpg';
import img_hannahrosemasi_2 from './assets/hannahrosemasi_42068866_189710971920782_2061582597726431216_n.jpg';
import img_hannahrosemasi_3 from './assets/hannahrosemasi_43098197_1902753969802068_4394740751129577259_n.jpg';
import img_idakiia_0 from './assets/idakiia_26070452_1942212376100367_8705984921870532608_n.jpg';
import img_idakiia_1 from './assets/idakiia_29417590_163466124365879_9099132050459328512_n.jpg';
import img_idakiia_2 from './assets/idakiia_29716547_516262332101437_2669948505249808384_n.jpg';
import img_idapie1999_0 from './assets/idapie1999_37041938_1202363043237265_7838968781589184512_n.jpg';
import img_idarej_0 from './assets/idarej_36864858_707593329592828_223734673333813248_n.jpg';
import img_ingakrohn_0 from './assets/ingakrohn_40947919_551456948600362_8742590014516649725_n.jpg';
import img_jastookes_0 from './assets/jastookes_43820587_1272148212928137_7574643585477832988_n.jpg';
import img_joselauge_0 from './assets/joselauge_12940742_221979064846500_684805770_n.jpg';
import img_joselauge_1 from './assets/joselauge_37243032_798162597059892_8304965427465814016_n.jpg';
import img_joselauge_2 from './assets/joselauge_39865253_256126665038220_7300295533808058368_n.jpg';
import img_julie_lind_berg_0 from './assets/julie.lind.berg_37025386_2005147016464305_3637577535794970624_n.jpg';
import img_julie_lind_berg_1 from './assets/julie.lind.berg_38847668_1405755222889258_6079884235961794560_n.jpg';
import img_julie_lind_berg_2 from './assets/julie.lind.berg_41853701_476355442878629_6248830410372440537_n.jpg';
import img_julie_lind_berg_3 from './assets/julie.lind.berg_43984696_296402101201564_1220800442248898039_n.jpg';

export default class GeneralA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
      video: '',
      image: img__charlie_robertson_0,
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
                <a href='https://instagram.com/_charlie_robertson' target='_blank'>_charlie_robertson</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                    <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img__charlie_robertson_0 }) }>
                        <img src={ img__charlie_robertson_0 } style={ { height: '20vh' } } />
                    </div>
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/allieredmondd' target='_blank'>allieredmondd</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_allieredmondd_0 }) }>
                    <img src={ img_allieredmondd_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/andrejapejic' target='_blank'>andrejapejic</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_andrejapejic_0 }) }>
                    <img src={ img_andrejapejic_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_andrejapejic_1 }) }>
                    <img src={ img_andrejapejic_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/angievarona' target='_blank'>angievarona</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_angievarona_0 }) }>
                    <img src={ img_angievarona_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_angievarona_1 }) }>
                    <img src={ img_angievarona_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/anne_spp' target='_blank'>anne_spp</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_anne_spp_0 }) }>
                    <img src={ img_anne_spp_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_anne_spp_1 }) }>
                    <img src={ img_anne_spp_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_anne_spp_2 }) }>
                    <img src={ img_anne_spp_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_anne_spp_3 }) }>
                    <img src={ img_anne_spp_3 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_anne_spp_4 }) }>
                    <img src={ img_anne_spp_4 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/annedepaula' target='_blank'>annedepaula</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_annedepaula_0 }) }>
                    <img src={ img_annedepaula_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/anyanicolodi' target='_blank'>anyanicolodi</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_anyanicolodi_0 }) }>
                    <img src={ img_anyanicolodi_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/autumnjacob' target='_blank'>autumnjacob</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_autumnjacob_0 }) }>
                    <img src={ img_autumnjacob_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_autumnjacob_1 }) }>
                    <img src={ img_autumnjacob_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_autumnjacob_2 }) }>
                    <img src={ img_autumnjacob_2 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/avasmithofficial' target='_blank'>avasmithofficial</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_avasmithofficial_0 }) }>
                    <img src={ img_avasmithofficial_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_avasmithofficial_1 }) }>
                    <img src={ img_avasmithofficial_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_avasmithofficial_2 }) }>
                    <img src={ img_avasmithofficial_2 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/bethanyheyes' target='_blank'>bethanyheyes</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bethanyheyes_0 }) }>
                    <img src={ img_bethanyheyes_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/biancaghezzi' target='_blank'>biancaghezzi</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_biancaghezzi_0 }) }>
                    <img src={ img_biancaghezzi_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/chabrinadaniella' target='_blank'>chabrinadaniella</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_chabrinadaniella_0 }) }>
                    <img src={ img_chabrinadaniella_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/charlottemckinney' target='_blank'>charlottemckinney</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_charlottemckinney_0 }) }>
                    <img src={ img_charlottemckinney_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/chloevialaret' target='_blank'>chloevialaret</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_chloevialaret_0 }) }>
                    <img src={ img_chloevialaret_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_chloevialaret_1 }) }>
                    <img src={ img_chloevialaret_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_chloevialaret_2 }) }>
                    <img src={ img_chloevialaret_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_chloevialaret_3 }) }>
                    <img src={ img_chloevialaret_3 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_chloevialaret_4 }) }>
                    <img src={ img_chloevialaret_4 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/christenharper' target='_blank'>christenharper</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_christenharper_0 }) }>
                    <img src={ img_christenharper_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/cindymello' target='_blank'>cindymello</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_cindymello_0 }) }>
                    <img src={ img_cindymello_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_cindymello_1 }) }>
                    <img src={ img_cindymello_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_cindymello_2 }) }>
                    <img src={ img_cindymello_2 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/claramonefeldt' target='_blank'>claramonefeldt</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_claramonefeldt_0 }) }>
                    <img src={ img_claramonefeldt_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/clarawasehuus' target='_blank'>clarawasehuus</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_clarawasehuus_0 }) }>
                    <img src={ img_clarawasehuus_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_clarawasehuus_1 }) }>
                    <img src={ img_clarawasehuus_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/claudiagronvall' target='_blank'>claudiagronvall</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_claudiagronvall_0 }) }>
                    <img src={ img_claudiagronvall_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_claudiagronvall_1 }) }>
                    <img src={ img_claudiagronvall_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/coochiebygucci' target='_blank'>coochiebygucci</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_coochiebygucci_0 }) }>
                    <img src={ img_coochiebygucci_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/dainonmcduffie' target='_blank'>dainonmcduffie</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_dainonmcduffie_0 }) }>
                    <img src={ img_dainonmcduffie_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/danilanio' target='_blank'>danilanio</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_danilanio_0 }) }>
                    <img src={ img_danilanio_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/daphnedebaat' target='_blank'>daphnedebaat</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_daphnedebaat_0 }) }>
                    <img src={ img_daphnedebaat_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/devinbrugman' target='_blank'>devinbrugman</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_devinbrugman_0 }) }>
                    <img src={ img_devinbrugman_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/edendrori4' target='_blank'>edendrori4</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_edendrori4_0 }) }>
                    <img src={ img_edendrori4_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_edendrori4_1 }) }>
                    <img src={ img_edendrori4_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_edendrori4_2 }) }>
                    <img src={ img_edendrori4_2 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/effyharvard' target='_blank'>effyharvard</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_effyharvard_0 }) }>
                    <img src={ img_effyharvard_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_effyharvard_1 }) }>
                    <img src={ img_effyharvard_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/eizagonzalez' target='_blank'>eizagonzalez</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_eizagonzalez_0 }) }>
                    <img src={ img_eizagonzalez_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_eizagonzalez_1 }) }>
                    <img src={ img_eizagonzalez_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_eizagonzalez_2 }) }>
                    <img src={ img_eizagonzalez_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_eizagonzalez_3 }) }>
                    <img src={ img_eizagonzalez_3 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/emilialagoni' target='_blank'>emilialagoni</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emilialagoni_0 }) }>
                    <img src={ img_emilialagoni_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emilialagoni_1 }) }>
                    <img src={ img_emilialagoni_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/emiliejuel' target='_blank'>emiliejuel</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emiliejuel_0 }) }>
                    <img src={ img_emiliejuel_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/emily.aurelia' target='_blank'>emily.aurelia</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emily_aurelia_0 }) }>
                    <img src={ img_emily_aurelia_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/emilybloomofficial' target='_blank'>emilybloomofficial</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emilybloomofficial_0 }) }>
                    <img src={ img_emilybloomofficial_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emilybloomofficial_1 }) }>
                    <img src={ img_emilybloomofficial_1 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/emilysears' target='_blank'>emilysears</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_emilysears_0 }) }>
                    <img src={ img_emilysears_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/georgiagibbs' target='_blank'>georgiagibbs</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_georgiagibbs_0 }) }>
                    <img src={ img_georgiagibbs_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/hannahrosemasi' target='_blank'>hannahrosemasi</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_hannahrosemasi_0 }) }>
                    <img src={ img_hannahrosemasi_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_hannahrosemasi_1 }) }>
                    <img src={ img_hannahrosemasi_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_hannahrosemasi_2 }) }>
                    <img src={ img_hannahrosemasi_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_hannahrosemasi_3 }) }>
                    <img src={ img_hannahrosemasi_3 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/idakiia' target='_blank'>idakiia</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_idakiia_0 }) }>
                    <img src={ img_idakiia_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_idakiia_1 }) }>
                    <img src={ img_idakiia_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_idakiia_2 }) }>
                    <img src={ img_idakiia_2 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/idapie1999' target='_blank'>idapie1999</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_idapie1999_0 }) }>
                    <img src={ img_idapie1999_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/idarej' target='_blank'>idarej</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_idarej_0 }) }>
                    <img src={ img_idarej_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/ingakrohn' target='_blank'>ingakrohn</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_ingakrohn_0 }) }>
                    <img src={ img_ingakrohn_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/jastookes' target='_blank'>jastookes</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_jastookes_0 }) }>
                    <img src={ img_jastookes_0 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/joselauge' target='_blank'>joselauge</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_joselauge_0 }) }>
                    <img src={ img_joselauge_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_joselauge_1 }) }>
                    <img src={ img_joselauge_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_joselauge_2 }) }>
                    <img src={ img_joselauge_2 } style={ { height: '20vh' } } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/julie.lind.berg' target='_blank'>julie.lind.berg</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_julie_lind_berg_0 }) }>
                    <img src={ img_julie_lind_berg_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_julie_lind_berg_1 }) }>
                    <img src={ img_julie_lind_berg_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_julie_lind_berg_2 }) }>
                    <img src={ img_julie_lind_berg_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_julie_lind_berg_3 }) }>
                    <img src={ img_julie_lind_berg_3 } style={ { height: '20vh' } } />
                </div>
            </div>
        </div>
    );
  }
}
