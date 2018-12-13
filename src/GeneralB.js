import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import img_karajewelll_0 from './assets/karajewelll_33781575_389603064860085_7781232760294735872_n.jpg';
import img_karajewelll_1 from './assets/karajewelll_33835978_228064731115800_4924600873004302336_n.jpg';
import img_karajewelll_2 from './assets/karajewelll_42443179_2132663983661003_4344193121741905059_n.jpg';
import img_karajewelll_3 from './assets/karajewelll_44431522_295211264665024_6830895368988294748_n.jpg';
import img_katarinalilius_0 from './assets/katarinalilius_33980691_486428995123416_8182623816615198720_n.jpg';
import img_katarinalilius_1 from './assets/katarinalilius_35173427_1465854490187593_3692197287733231616_n.jpg';
import img_katieeeebell_0 from './assets/katieeeebell_42537367_348782302539638_498392104202333213_n.jpg';
import img_katyaelisehenry_0 from './assets/katyaelisehenry_23161822_257706468087085_731314114533523456_n.jpg';
import img_kid_kahlo_0 from './assets/kid_kahlo_39389818_2183773801843158_5966980759909564416_n.jpg';
import img_krotchy_0 from './assets/krotchy_42653041_347304645815637_8084241945715635985_n.jpg';
import img_laisribeiro_0 from './assets/laisribeiro_44538768_323581941554314_2831256791436759818_n.jpg';
import img_lauren_isabeau_0 from './assets/lauren_isabeau_24175518_754095748130185_6446078331644280832_n.jpg';
import img_lindseykevitch_0 from './assets/lindseykevitch_42452948_2058073877565573_2006142386287272855_n.jpg';
import img_livmae_0 from './assets/livmae_14718445_1190451887660615_3477535341970194432_n.jpg';
import img_livmae_1 from './assets/livmae_22221328_140723453330397_4286748240423944192_n.jpg';
import img_livmae_2 from './assets/livmae_37259975_249665862316750_9042127363311140864_n.jpg';
import img_livmae_3 from './assets/livmae_39327681_874674316254381_2455603639742365696_n.jpg';
import img_livmae_4 from './assets/livmae_43020812_2452068828141058_8063932946915085443_n.jpg';
import img_livmae_5 from './assets/livmae_45423227_2581344845224077_5693009576541357310_n.jpg';
import img_livmae_6 from './assets/livmae_46708598_289877511656997_7104106681445286285_n.jpg';
import img_lorena_0 from './assets/lorena_44371534_767937706878287_4315148957708523609_n.jpg';
import img_lotte_l8_0 from './assets/lotte.l8_34707688_220721141987939_8440800730343800832_n.jpg';
import img_maddie_whitley_0 from './assets/maddie.whitley_33328132_649376982071640_5817560595733413888_n.jpg';
import img_maddie_whitley_1 from './assets/maddie.whitley_34982876_2187200801295248_4913049098900209664_n.jpg';
import img_maddie_whitley_2 from './assets/maddie.whitley_35576218_231413954131756_1856035856012279808_n.jpg';
import img_madlen_m_0 from './assets/madlen_m_26362186_409204546168052_767339587247800320_n.jpg';
import img_madlen_m_1 from './assets/madlen_m_36894406_224140408228462_3215037072666525696_n.jpg';
import img_madlen_m_2 from './assets/madlen_m_39887380_2300463419994091_5343113636061642752_n.jpg';
import img_madlen_m_3 from './assets/madlen_m_40947924_320725425151860_7816570010080673148_n.jpg';
import img_mathilde_mengel_0 from './assets/mathilde.mengel_24327418_186066951972261_4784008464349265920_n.jpg';
import img_mathilde_mengel_1 from './assets/mathilde.mengel_33694537_242940169791440_2449782034910937088_n.jpg';
import img_mavrin_0 from './assets/mavrin_44515944_210264226538436_4761194107432543206_n.jpg';
import img_mavrin_1 from './assets/mavrin_44718713_344708796446580_6161690811671768475_n.jpg';
import img_mavrin_2 from './assets/mavrin_45347867_182734552676434_1077163661319139450_n.jpg';
import img_melissajakobsen_0 from './assets/melissajakobsen_11420921_1595665034054656_57128149_n.jpg';
import img_michellelarsen1901_0 from './assets/michellelarsen1901_35575299_1841750892552904_8338078362597588992_n.jpg';
import img_michellelarsen1901_1 from './assets/michellelarsen1901_36148676_197140827657840_9160251788723486720_n.jpg';
import img_mollyx_0 from './assets/mollyx_44219458_346759866098126_4766016196914897016_n.jpg';
import img_moran_titanchi_0 from './assets/moran.titanchi_29716130_1661662430594164_7661020147552878592_n.jpg';
import img_moran_titanchi_1 from './assets/moran.titanchi_32063987_2026494734335002_4897934249992126464_n.jpg';
import img_moran_titanchi_2 from './assets/moran.titanchi_44858292_2583600481657806_6860070452756955568_n.jpg';
import img_morena_fercor_0 from './assets/morena.fercor_26067293_155185278538218_7408976021921202176_n.jpg';
import img_morena_fercor_1 from './assets/morena.fercor_30829819_187420795238416_816327567614148608_n.jpg';
import img_natalia_roth_0 from './assets/natalia.roth_42447118_2149095022029878_4631589230952698701_n.jpg';
import img_natalia_roth_1 from './assets/natalia.roth_42908103_128728761441900_2542348314141169569_n.jpg';



export default class GeneralB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
      video: '',
      image: img_karajewelll_0,
      oldY: 0
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video || (prevState.mode !== 'video' && this.state.mode === 'video')) {
      this.setState({oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop});
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
      
    } else if (this.state.image !== prevState.image) {
        this.setState({oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop});
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
    if (this.state.mode === 'video') {
      return (
        <Player ref="player" loop fluid={false} width={350}>
          <source src={this.state.video} />
        </Player>
      )
    } else if (this.state.mode === 'image') {
      return (<img className="gallery" src={this.state.image} />)
    }
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <div style={{padding: '1vh'}}>
             {this.renderImageOrVideoContainer()}
          </div>
        {this.state.oldY === 0 ? '' : (
          <div padding={{padding: '2vh'}} onClick={() => this.scrollBackDown()} >
            <button className="pure-button pure-button-primary">Return to previous position</button>
        </div>
        )}
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/karajewelll' target='_blank'>karajewelll</a>
</div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_karajewelll_0})}>
                <img src={img_karajewelll_0} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_karajewelll_1})}>
                <img src={img_karajewelll_1} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_karajewelll_2})}>
                <img src={img_karajewelll_2} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_karajewelll_3})}>
                <img src={img_karajewelll_3} style={{height: '20vh'}} />
            </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/katarinalilius' target='_blank'>katarinalilius</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_katarinalilius_0})}>
        <img src={img_katarinalilius_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_katarinalilius_1})}>
        <img src={img_katarinalilius_1} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/katieeeebell' target='_blank'>katieeeebell</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_katieeeebell_0})}>
        <img src={img_katieeeebell_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/katyaelisehenry' target='_blank'>katyaelisehenry</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_katyaelisehenry_0})}>
        <img src={img_katyaelisehenry_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/kid_kahlo' target='_blank'>kid_kahlo</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_kid_kahlo_0})}>
        <img src={img_kid_kahlo_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/krotchy' target='_blank'>krotchy</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_krotchy_0})}>
        <img src={img_krotchy_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/laisribeiro' target='_blank'>laisribeiro</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_laisribeiro_0})}>
        <img src={img_laisribeiro_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/lauren_isabeau' target='_blank'>lauren_isabeau</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_lauren_isabeau_0})}>
        <img src={img_lauren_isabeau_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/lindseykevitch' target='_blank'>lindseykevitch</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_lindseykevitch_0})}>
        <img src={img_lindseykevitch_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/livmae' target='_blank'>livmae</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_0})}>
        <img src={img_livmae_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_1})}>
        <img src={img_livmae_1} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_2})}>
        <img src={img_livmae_2} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_3})}>
        <img src={img_livmae_3} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_4})}>
        <img src={img_livmae_4} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_5})}>
        <img src={img_livmae_5} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_livmae_6})}>
        <img src={img_livmae_6} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/lorena' target='_blank'>lorena</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_lorena_0})}>
        <img src={img_lorena_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/lotte.l8' target='_blank'>lotte.l8</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_lotte_l8_0})}>
        <img src={img_lotte_l8_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/maddie.whitley' target='_blank'>maddie.whitley</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_maddie_whitley_0})}>
        <img src={img_maddie_whitley_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_maddie_whitley_1})}>
        <img src={img_maddie_whitley_1} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_maddie_whitley_2})}>
        <img src={img_maddie_whitley_2} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/madlen_m' target='_blank'>madlen_m</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_madlen_m_0})}>
        <img src={img_madlen_m_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_madlen_m_1})}>
        <img src={img_madlen_m_1} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_madlen_m_2})}>
        <img src={img_madlen_m_2} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_madlen_m_3})}>
        <img src={img_madlen_m_3} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/mathilde.mengel' target='_blank'>mathilde.mengel</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_mathilde_mengel_0})}>
        <img src={img_mathilde_mengel_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_mathilde_mengel_1})}>
        <img src={img_mathilde_mengel_1} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/mavrin' target='_blank'>mavrin</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_mavrin_0})}>
        <img src={img_mavrin_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_mavrin_1})}>
        <img src={img_mavrin_1} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_mavrin_2})}>
        <img src={img_mavrin_2} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/melissajakobsen' target='_blank'>melissajakobsen</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_melissajakobsen_0})}>
        <img src={img_melissajakobsen_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/michellelarsen1901' target='_blank'>michellelarsen1901</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_michellelarsen1901_0})}>
        <img src={img_michellelarsen1901_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_michellelarsen1901_1})}>
        <img src={img_michellelarsen1901_1} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/mollyx' target='_blank'>mollyx</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_mollyx_0})}>
        <img src={img_mollyx_0} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/moran.titanchi' target='_blank'>moran.titanchi</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_moran_titanchi_0})}>
        <img src={img_moran_titanchi_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_moran_titanchi_1})}>
        <img src={img_moran_titanchi_1} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_moran_titanchi_2})}>
        <img src={img_moran_titanchi_2} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/morena.fercor' target='_blank'>morena.fercor</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_morena_fercor_0})}>
        <img src={img_morena_fercor_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_morena_fercor_1})}>
        <img src={img_morena_fercor_1} style={{height: '20vh'}} />
    </div>
</div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
    <a href='https://instagram.com/natalia.roth' target='_blank'>natalia.roth</a>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_natalia_roth_0})}>
        <img src={img_natalia_roth_0} style={{height: '20vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_natalia_roth_1})}>
        <img src={img_natalia_roth_1} style={{height: '20vh'}} />
    </div>
</div>


    </div>
    );
  }
}
