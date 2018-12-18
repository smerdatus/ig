import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import img_karajewelll_0 from './assets/karajewelll_33781575_389603064860085_7781232760294735872_n.jpg';
import img_karajewelll_1 from './assets/karajewelll_33835978_228064731115800_4924600873004302336_n.jpg';
import img_karajewelll_2 from './assets/karajewelll_42443179_2132663983661003_4344193121741905059_n.jpg';
import img_karajewelll_3 from './assets/karajewelll_44431522_295211264665024_6830895368988294748_n.jpg';
import img_karajewelll_4 from './assets/karajewelll_47349367_358129561587344_8620217356173217932_n.jpg';
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
import img_nicolekopchakk_0 from './assets/nicolekopchakk_36148362_1688193664551931_3635960553622470656_n.jpg';
import img_nicolekopchakk_1 from './assets/nicolekopchakk_36602332_272585756624576_5122829462144024576_n.jpg';
import img_nicolekopchakk_2 from './assets/nicolekopchakk_38009221_2247681442121714_8403705845132558336_n.jpg';
import img_nicolekopchakk_3 from './assets/nicolekopchakk_39910206_235317507153226_6886382173918593024_n.jpg';
import img_nicolekopchakk_4 from './assets/nicolekopchakk_44677121_134456284231142_1444194189751305467_n.jpg';
import img_nicolekopchakk_5 from './assets/nicolekopchakk_44831394_273874879872092_36628205724789187_n.jpg';
import img_noraatks_0 from './assets/noraatks_42003587_1923270217727019_4565632180926875873_n.jpg';
import img_noraatks_1 from './assets/noraatks_42003691_621437174920536_954339642378079490_n.jpg';
import img_noraatks_2 from './assets/noraatks_42069067_326856068067328_8681421927149923795_n.jpg';
import img_ohwhatawomans_0 from './assets/ohwhatawomans_47279950_368924103680633_6176470083904322162_n.jpg';
import img_oliviabrower_0 from './assets/oliviabrower_38646005_1037456409746900_1678797562322092032_n.jpg';
import img_oliviabrower_1 from './assets/oliviabrower_42324142_2226111314274749_1591818990205043732_n.jpg';
import img_oliviabrower_2 from './assets/oliviabrower_44331883_731871960519706_7324097354429572076_n.jpg';
import img_oliviabrower_3 from './assets/oliviabrower_44485521_728320614196654_324940143032228552_n.jpg';
import img_rachelc00k_0 from './assets/rachelc00k_27878870_368146330317910_5030893183207211008_n.jpg';
import img_rachelc00k_1 from './assets/rachelc00k_27881117_1608960002557541_3869444416171147264_n.jpg';
import img_rachelc00k_2 from './assets/rachelc00k_29417508_580441428992391_5981289696859258880_n.jpg';
import img_rachelc00k_3 from './assets/rachelc00k_41502218_139518813660164_1486475483111541686_n.jpg';
import img_rachelc00k_4 from './assets/rachelc00k_41782787_180466722839575_4302735717066226707_n.jpg';
import img_rachelc00k_5 from './assets/rachelc00k_43694331_245574372982892_711070751531029615_n.jpg';
import img_rachellvallori_0 from './assets/rachellvallori_44308111_2016593468402547_4656194884067465234_n.jpg';
import img_rachelyampolsky_0 from './assets/rachelyampolsky_34545991_256072584955299_2815655034543407104_n.jpg';
import img_rebecca_tholstrup_0 from './assets/rebecca_tholstrup_27893826_414062972373682_5694336609621639168_n.jpg';
import img_rebecca_tholstrup_1 from './assets/rebecca_tholstrup_35000891_169150617281572_7781475309982842880_n.jpg';
import img_rebecca_tholstrup_2 from './assets/rebecca_tholstrup_41268779_308835283228497_208745028665330942_n.jpg';
import img_rebecca_tholstrup_3 from './assets/rebecca_tholstrup_41526487_104624147140673_5329962113513452359_n.jpg';
import img_rebecca_tholstrup_4 from './assets/rebecca_tholstrup_41579859_539259096514917_50283789002045644_n.jpg';
import img_rebecca_tholstrup_5 from './assets/rebecca_tholstrup_41945965_458678207955969_2456393619159791465_n.jpg';
import img_rebecca_tholstrup_6 from './assets/rebecca_tholstrup_42003069_1086741621492343_4026746589366318121_n.jpg';
import img_rebeccafitness_eats_0 from './assets/rebeccafitness_eats_21910001_149352768995831_3420157701336858624_n.jpg';
import img_rebeccafitness_eats_1 from './assets/rebeccafitness_eats_22069143_1954559494758144_6940459840854556672_n.jpg';
import img_rebeccafitness_eats_2 from './assets/rebeccafitness_eats_22430167_1478544092239763_4147625436433612800_n.jpg';
import img_rebeccafitness_eats_3 from './assets/rebeccafitness_eats_40556803_457988221361550_2395712914476924500_n.jpg';
import img_rebeccafitness_eats_4 from './assets/rebeccafitness_eats_41468641_691436194558992_9013912743392312417_n.jpg';
import img_rebeccafitness_eats_5 from './assets/rebeccafitness_eats_41613418_535155086905756_969383112292360798_n.jpg';
import img_reneesomerfield_0 from './assets/reneesomerfield_10401687_1556551924559174_1093848112_n.jpg';
import img_reneesomerfield_1 from './assets/reneesomerfield_12445783_1748285755401874_451706916_n.jpg';
import img_sabrinalynnci_0 from './assets/sabrinalynnci_45868946_131796551143542_73477694374203993_n.jpg';
import img_sabrinalynnci_1 from './assets/sabrinalynnci_46085786_1617780141656009_7413888481880701368_n.jpg';
import img_sahara_ray_0 from './assets/sahara_ray_39049037_397337324428157_387116114036916224_n.jpg';
import img_sahara_ray_1 from './assets/sahara_ray_41820004_1907421582698388_6832208495757661323_n.jpg';
import img_sahara_ray_2 from './assets/sahara_ray_43912973_121479508842118_3692336242288965275_n.jpg';
import img_sarahdowd_0 from './assets/sarahdowd_31295130_1657894490960048_2663398800382492672_n.jpg';
import img_sarahstephens7_0 from './assets/sarahstephens7_18444970_1537462306272160_5345906176552861696_n.jpg';
import img_sarahstephens7_1 from './assets/sarahstephens7_26341770_2155933474634336_8315217965372932096_n.jpg';
import img_sarahstephens7_2 from './assets/sarahstephens7_30592480_1153278521480920_9104666979108651008_n.jpg';
import img_sarahstephens7_3 from './assets/sarahstephens7_36149076_1675969475791453_907829062716620800_n.jpg';
import img_sarahstephens7_4 from './assets/sarahstephens7_37980691_2058939361022738_68399286924083200_n.jpg';
import img_sarahstephens7_5 from './assets/sarahstephens7_41488023_329025844343538_2285083553632699858_n.jpg';
import img_selinaalaymusic_0 from './assets/selinaalaymusic_36160554_1793572110725210_6612401876484751360_n.jpg';
import img_selinaalaymusic_1 from './assets/selinaalaymusic_37028550_476126372797917_6073258690561966080_n.jpg';
import img_selinaalaymusic_2 from './assets/selinaalaymusic_38876722_673445073011676_5338814266424164352_n.jpg';
import img_sevibomb_0 from './assets/sevibomb_38448290_1800205556753714_5638220546912026624_n.jpg';
import img_sevibomb_1 from './assets/sevibomb_38500616_1784663494957676_9021142999211442176_n.jpg';
import img_sevibomb_2 from './assets/sevibomb_38640362_205782066962526_7334905479790854144_n.jpg';
import img_sevibomb_3 from './assets/sevibomb_38863776_716567922020333_2070096360324988928_n.jpg';
import img_sevibomb_4 from './assets/sevibomb_38903952_2185815754986740_4031259739999436800_n.jpg';
import img_shantalmonique_0 from './assets/shantalmonique_37322098_2148992382013870_7283107130524041216_n.jpg';
import img_shelbyjablon_0 from './assets/shelbyjablon_11242611_391121247734253_1861043908_n.jpg';
import img_shelbyjablon_1 from './assets/shelbyjablon_11312182_1078858482128439_813145875_n.jpg';
import img_shelbyjablon_2 from './assets/shelbyjablon_12747662_1573975649592418_637182099_n.jpg';
import img_shelbyjablon_3 from './assets/shelbyjablon_12797825_1073417792679811_292701108_n.jpg';
import img_shelbyjablon_4 from './assets/shelbyjablon_13525301_1128221903888123_1793704572_n.jpg';
import img_shelbyjablon_5 from './assets/shelbyjablon_13549375_133000117130032_453730248_n.jpg';
import img_shelbyjablon_6 from './assets/shelbyjablon_13671155_282582908773631_1160133391_n.jpg';
import img_shelbyjablon_7 from './assets/shelbyjablon_14533752_322032188172102_5101844539698577408_n.jpg';
import img_shelbyjablon_8 from './assets/shelbyjablon_15057143_773832439424081_5034882241457553408_n.jpg';
import img_shelbyjablon_9 from './assets/shelbyjablon_15623826_442758082780516_4887867422175920128_n.jpg';
import img_shelbyjablon_10 from './assets/shelbyjablon_18298806_307201366383153_3359218106885996544_n.jpg';
import img_shelbyjablon_11 from './assets/shelbyjablon_18513169_104418136811265_2588198295306240000_n.jpg';
import img_shelbyjablon_12 from './assets/shelbyjablon_19764847_1306866666098445_3933930141780017152_n.jpg';
import img_shelbyjablon_13 from './assets/shelbyjablon_25024404_148913679216684_6986877880294703104_n.jpg';
import img_shelbyjablon_14 from './assets/shelbyjablon_28754614_2144490035781348_7469701559496998912_n.jpg';
import img_shelbyjablon_15 from './assets/shelbyjablon_29093644_1737612469639242_3938305781446737920_n.jpg';
import img_shelbyjablon_16 from './assets/shelbyjablon_29415043_159687404743049_1524278451626835968_n.jpg';
import img_signe_lentz_0 from './assets/signe.lentz_32025138_605116476535231_6924535446445752320_n.jpg';
import img_signe_lentz_1 from './assets/signe.lentz_32048562_2069068983368191_946815855251947520_n.jpg';
import img_signe_lentz_2 from './assets/signe.lentz_38181187_1106830672809628_1225818790520946688_n.jpg';
import img_sofiavlindberg_0 from './assets/sofiavlindberg_37050644_2116108942042951_7038566664945795072_n.jpg';
import img_sofiavlindberg_1 from './assets/sofiavlindberg_37051685_1316632758469490_2942917625648250880_n.jpg';
import img_sommerray_0 from './assets/sommerray_41905239_2199737543646410_6223749734880464683_n.jpg';
import img_sophiknight_0 from './assets/sophiknight_29402769_411538435983719_3082701820242427904_n.jpg';
import img_sophiknight_1 from './assets/sophiknight_36085107_2254882484527725_8143296583497154560_n.jpg';
import img_sophiknight_2 from './assets/sophiknight_36478288_204845253513673_1168722122353147904_n.jpg';
import img_sophiknight_3 from './assets/sophiknight_37400695_2057922314458112_769581534406508544_n.jpg';
import img_sophiknight_4 from './assets/sophiknight_37959267_217169819002050_7585468039273906176_n.jpg';
import img_sophiknight_5 from './assets/sophiknight_44729383_339485103272090_5354485631055848450_n.jpg';
import img_stefaniemichova_0 from './assets/stefaniemichova_35518909_490343261408936_7909106546720636928_n.jpg';
import img_szindy_0 from './assets/szindy_23507019_537505386586422_6410532989029056512_n.jpg';
import img_szindy_1 from './assets/szindy_34726019_1685441581554719_2556368945510612992_n.jpg';
import img_taylor_cochrane_0 from './assets/taylor_cochrane_23416700_1282108261893921_7609081979920711680_n.jpg';
import img_taylor_cochrane_1 from './assets/taylor_cochrane_40638214_1941934245826888_7963257780628651265_n.jpg';
import img_the_dariana_0 from './assets/the.dariana_37408758_683869508625218_6934597038696824832_n.jpg';
import img_therealkendrasunderland_0 from './assets/therealkendrasunderland_34035561_649484118729853_7173039943499907072_n.jpg';
import img_therealkendrasunderland_1 from './assets/therealkendrasunderland_35297473_250409999040166_300953181678993408_n.jpg';
import img_therealkendrasunderland_2 from './assets/therealkendrasunderland_40400024_2147776608768080_5014026696311963648_n.jpg';
import img_therealkendrasunderland_3 from './assets/therealkendrasunderland_40460654_276745546273054_8786636483474751488_n.jpg';
import img_therealkendrasunderland_4 from './assets/therealkendrasunderland_41100765_251032162221537_2884310718130159616_n.jpg';
import img_thesirenmika_0 from './assets/thesirenmika_15624578_1348879221836299_5085455661756579840_n.jpg';
import img_thesirenmika_1 from './assets/thesirenmika_15625162_1633397086688971_1424030478964359168_n.jpg';
import img_thesirenmika_2 from './assets/thesirenmika_22709220_842486979264512_8669854712083775488_n.jpg';
import img_vicatslive_0 from './assets/vicatslive_46231112_184832052464650_3335467868692825329_n.jpg';
import img_vicatslive_1 from './assets/vicatslive_46376441_193002691609883_4322300426038354767_n.jpg';
import img_victoriacarioni_0 from './assets/victoriacarioni_33559593_233799127384592_152110325531934720_n.jpg';
import img_victoriacarioni_1 from './assets/victoriacarioni_42619562_277609893084326_4930103334676705162_n.jpg';
import img_viki_odintcova_0 from './assets/viki_odintcova_43732018_252044082332521_3144639467869943024_n.jpg';
import img_xochanb_0 from './assets/xochanb_43735856_2163634210335371_8167078772575105476_n.jpg';
import img_youkendoitt_0 from './assets/youkendoitt_33546061_1036979313123731_8884365771350736896_n.jpg';
import img_youkendoitt_1 from './assets/youkendoitt_34160517_2125209251032052_6477625961650061312_n.jpg';
import img_youkendoitt_2 from './assets/youkendoitt_34411226_260704061333308_7860957906043142144_n.jpg';
import img_youkendoitt_3 from './assets/youkendoitt_34584712_384951158661313_2508423250627788800_n.jpg';
import img_youkendoitt_4 from './assets/youkendoitt_34983429_186832971978009_3950638200216616960_n.jpg';
import img_yuliyats31_0 from './assets/yuliyats31_35519724_395546594297054_6830223560967979008_n.jpg';

export default class GeneralB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'image',
      video: '',
      image: img_karajewelll_0,
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
                <a href='https://instagram.com/karajewelll' target='_blank'>karajewelll</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_karajewelll_0 }) }>
                    <img src={ img_karajewelll_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_karajewelll_1 }) }>
                    <img src={ img_karajewelll_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_karajewelll_2 }) }>
                    <img src={ img_karajewelll_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_karajewelll_3 }) }>
                    <img src={ img_karajewelll_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_karajewelll_4 }) }>
                    <img src={ img_karajewelll_4 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/katarinalilius' target='_blank'>katarinalilius</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_katarinalilius_0 }) }>
                    <img src={ img_katarinalilius_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_katarinalilius_1 }) }>
                    <img src={ img_katarinalilius_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/katieeeebell' target='_blank'>katieeeebell</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_katieeeebell_0 }) }>
                    <img src={ img_katieeeebell_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/katyaelisehenry' target='_blank'>katyaelisehenry</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_katyaelisehenry_0 }) }>
                    <img src={ img_katyaelisehenry_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/kid_kahlo' target='_blank'>kid_kahlo</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_kid_kahlo_0 }) }>
                    <img src={ img_kid_kahlo_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/krotchy' target='_blank'>krotchy</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_krotchy_0 }) }>
                    <img src={ img_krotchy_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/laisribeiro' target='_blank'>laisribeiro</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_laisribeiro_0 }) }>
                    <img src={ img_laisribeiro_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/lauren_isabeau' target='_blank'>lauren_isabeau</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_lauren_isabeau_0 }) }>
                    <img src={ img_lauren_isabeau_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/lindseykevitch' target='_blank'>lindseykevitch</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_lindseykevitch_0 }) }>
                    <img src={ img_lindseykevitch_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/livmae' target='_blank'>livmae</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_0 }) }>
                    <img src={ img_livmae_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_1 }) }>
                    <img src={ img_livmae_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_2 }) }>
                    <img src={ img_livmae_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_3 }) }>
                    <img src={ img_livmae_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_4 }) }>
                    <img src={ img_livmae_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_5 }) }>
                    <img src={ img_livmae_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_livmae_6 }) }>
                    <img src={ img_livmae_6 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/lorena' target='_blank'>lorena</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_lorena_0 }) }>
                    <img src={ img_lorena_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/lotte.l8' target='_blank'>lotte.l8</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_lotte_l8_0 }) }>
                    <img src={ img_lotte_l8_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/maddie.whitley' target='_blank'>maddie.whitley</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_maddie_whitley_0 }) }>
                    <img src={ img_maddie_whitley_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_maddie_whitley_1 }) }>
                    <img src={ img_maddie_whitley_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_maddie_whitley_2 }) }>
                    <img src={ img_maddie_whitley_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/madlen_m' target='_blank'>madlen_m</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_madlen_m_0 }) }>
                    <img src={ img_madlen_m_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_madlen_m_1 }) }>
                    <img src={ img_madlen_m_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_madlen_m_2 }) }>
                    <img src={ img_madlen_m_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_madlen_m_3 }) }>
                    <img src={ img_madlen_m_3 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/mathilde.mengel' target='_blank'>mathilde.mengel</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_mathilde_mengel_0 }) }>
                    <img src={ img_mathilde_mengel_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_mathilde_mengel_1 }) }>
                    <img src={ img_mathilde_mengel_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/mavrin' target='_blank'>mavrin</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_mavrin_0 }) }>
                    <img src={ img_mavrin_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_mavrin_1 }) }>
                    <img src={ img_mavrin_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_mavrin_2 }) }>
                    <img src={ img_mavrin_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/melissajakobsen' target='_blank'>melissajakobsen</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_melissajakobsen_0 }) }>
                    <img src={ img_melissajakobsen_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/michellelarsen1901' target='_blank'>michellelarsen1901</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_michellelarsen1901_0 }) }>
                    <img src={ img_michellelarsen1901_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_michellelarsen1901_1 }) }>
                    <img src={ img_michellelarsen1901_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/mollyx' target='_blank'>mollyx</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_mollyx_0 }) }>
                    <img src={ img_mollyx_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/moran.titanchi' target='_blank'>moran.titanchi</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_moran_titanchi_0 }) }>
                    <img src={ img_moran_titanchi_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_moran_titanchi_1 }) }>
                    <img src={ img_moran_titanchi_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_moran_titanchi_2 }) }>
                    <img src={ img_moran_titanchi_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/morena.fercor' target='_blank'>morena.fercor</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_morena_fercor_0 }) }>
                    <img src={ img_morena_fercor_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_morena_fercor_1 }) }>
                    <img src={ img_morena_fercor_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/natalia.roth' target='_blank'>natalia.roth</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_natalia_roth_0 }) }>
                    <img src={ img_natalia_roth_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_natalia_roth_1 }) }>
                    <img src={ img_natalia_roth_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/nicolekopchakk' target='_blank'>nicolekopchakk</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_nicolekopchakk_0 }) }>
                    <img src={ img_nicolekopchakk_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_nicolekopchakk_1 }) }>
                    <img src={ img_nicolekopchakk_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_nicolekopchakk_2 }) }>
                    <img src={ img_nicolekopchakk_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_nicolekopchakk_3 }) }>
                    <img src={ img_nicolekopchakk_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_nicolekopchakk_4 }) }>
                    <img src={ img_nicolekopchakk_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_nicolekopchakk_5 }) }>
                    <img src={ img_nicolekopchakk_5 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/noraatks' target='_blank'>noraatks</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_noraatks_0 }) }>
                    <img src={ img_noraatks_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_noraatks_1 }) }>
                    <img src={ img_noraatks_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_noraatks_2 }) }>
                    <img src={ img_noraatks_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/ohwhatawomans' target='_blank'>ohwhatawomans</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_ohwhatawomans_0 }) }>
                    <img src={ img_ohwhatawomans_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/oliviabrower' target='_blank'>oliviabrower</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_oliviabrower_0 }) }>
                    <img src={ img_oliviabrower_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_oliviabrower_1 }) }>
                    <img src={ img_oliviabrower_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_oliviabrower_2 }) }>
                    <img src={ img_oliviabrower_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_oliviabrower_3 }) }>
                    <img src={ img_oliviabrower_3 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/rachelc00k' target='_blank'>rachelc00k</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelc00k_0 }) }>
                    <img src={ img_rachelc00k_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelc00k_1 }) }>
                    <img src={ img_rachelc00k_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelc00k_2 }) }>
                    <img src={ img_rachelc00k_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelc00k_3 }) }>
                    <img src={ img_rachelc00k_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelc00k_4 }) }>
                    <img src={ img_rachelc00k_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelc00k_5 }) }>
                    <img src={ img_rachelc00k_5 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/rachellvallori' target='_blank'>rachellvallori</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachellvallori_0 }) }>
                    <img src={ img_rachellvallori_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/rachelyampolsky' target='_blank'>rachelyampolsky</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rachelyampolsky_0 }) }>
                    <img src={ img_rachelyampolsky_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/rebecca_tholstrup' target='_blank'>rebecca_tholstrup</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_0 }) }>
                    <img src={ img_rebecca_tholstrup_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_1 }) }>
                    <img src={ img_rebecca_tholstrup_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_2 }) }>
                    <img src={ img_rebecca_tholstrup_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_3 }) }>
                    <img src={ img_rebecca_tholstrup_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_4 }) }>
                    <img src={ img_rebecca_tholstrup_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_5 }) }>
                    <img src={ img_rebecca_tholstrup_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebecca_tholstrup_6 }) }>
                    <img src={ img_rebecca_tholstrup_6 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/rebeccafitness_eats' target='_blank'>rebeccafitness_eats</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebeccafitness_eats_0 }) }>
                    <img src={ img_rebeccafitness_eats_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebeccafitness_eats_1 }) }>
                    <img src={ img_rebeccafitness_eats_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebeccafitness_eats_2 }) }>
                    <img src={ img_rebeccafitness_eats_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebeccafitness_eats_3 }) }>
                    <img src={ img_rebeccafitness_eats_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebeccafitness_eats_4 }) }>
                    <img src={ img_rebeccafitness_eats_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_rebeccafitness_eats_5 }) }>
                    <img src={ img_rebeccafitness_eats_5 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/reneesomerfield' target='_blank'>reneesomerfield</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_reneesomerfield_0 }) }>
                    <img src={ img_reneesomerfield_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_reneesomerfield_1 }) }>
                    <img src={ img_reneesomerfield_1 } className={ this.state.picSizeMode } />
                </div>
            </div><div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sabrinalynnci' target='_blank'>sabrinalynnci</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sabrinalynnci_0 }) }>
                    <img src={ img_sabrinalynnci_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sabrinalynnci_1 }) }>
                    <img src={ img_sabrinalynnci_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sahara_ray' target='_blank'>sahara_ray</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sahara_ray_0 }) }>
                    <img src={ img_sahara_ray_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sahara_ray_1 }) }>
                    <img src={ img_sahara_ray_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sahara_ray_2 }) }>
                    <img src={ img_sahara_ray_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sarahdowd' target='_blank'>sarahdowd</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahdowd_0 }) }>
                    <img src={ img_sarahdowd_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sarahstephens7' target='_blank'>sarahstephens7</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahstephens7_0 }) }>
                    <img src={ img_sarahstephens7_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahstephens7_1 }) }>
                    <img src={ img_sarahstephens7_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahstephens7_2 }) }>
                    <img src={ img_sarahstephens7_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahstephens7_3 }) }>
                    <img src={ img_sarahstephens7_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahstephens7_4 }) }>
                    <img src={ img_sarahstephens7_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sarahstephens7_5 }) }>
                    <img src={ img_sarahstephens7_5 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/selinaalaymusic' target='_blank'>selinaalaymusic</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_selinaalaymusic_0 }) }>
                    <img src={ img_selinaalaymusic_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_selinaalaymusic_1 }) }>
                    <img src={ img_selinaalaymusic_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_selinaalaymusic_2 }) }>
                    <img src={ img_selinaalaymusic_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sevibomb' target='_blank'>sevibomb</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sevibomb_0 }) }>
                    <img src={ img_sevibomb_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sevibomb_1 }) }>
                    <img src={ img_sevibomb_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sevibomb_2 }) }>
                    <img src={ img_sevibomb_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sevibomb_3 }) }>
                    <img src={ img_sevibomb_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sevibomb_4 }) }>
                    <img src={ img_sevibomb_4 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/shantalmonique' target='_blank'>shantalmonique</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shantalmonique_0 }) }>
                    <img src={ img_shantalmonique_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/shelbyjablon' target='_blank'>shelbyjablon</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_0 }) }>
                    <img src={ img_shelbyjablon_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_1 }) }>
                    <img src={ img_shelbyjablon_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_2 }) }>
                    <img src={ img_shelbyjablon_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_3 }) }>
                    <img src={ img_shelbyjablon_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_4 }) }>
                    <img src={ img_shelbyjablon_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_5 }) }>
                    <img src={ img_shelbyjablon_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_6 }) }>
                    <img src={ img_shelbyjablon_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_7 }) }>
                    <img src={ img_shelbyjablon_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_8 }) }>
                    <img src={ img_shelbyjablon_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_9 }) }>
                    <img src={ img_shelbyjablon_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_10 }) }>
                    <img src={ img_shelbyjablon_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_11 }) }>
                    <img src={ img_shelbyjablon_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_12 }) }>
                    <img src={ img_shelbyjablon_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_13 }) }>
                    <img src={ img_shelbyjablon_13 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_14 }) }>
                    <img src={ img_shelbyjablon_14 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_15 }) }>
                    <img src={ img_shelbyjablon_15 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_shelbyjablon_16 }) }>
                    <img src={ img_shelbyjablon_16 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/signe.lentz' target='_blank'>signe.lentz</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_signe_lentz_0 }) }>
                    <img src={ img_signe_lentz_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_signe_lentz_1 }) }>
                    <img src={ img_signe_lentz_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_signe_lentz_2 }) }>
                    <img src={ img_signe_lentz_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sofiavlindberg' target='_blank'>sofiavlindberg</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sofiavlindberg_0 }) }>
                    <img src={ img_sofiavlindberg_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sofiavlindberg_1 }) }>
                    <img src={ img_sofiavlindberg_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sommerray' target='_blank'>sommerray</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sommerray_0 }) }>
                    <img src={ img_sommerray_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/sophiknight' target='_blank'>sophiknight</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sophiknight_0 }) }>
                    <img src={ img_sophiknight_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sophiknight_1 }) }>
                    <img src={ img_sophiknight_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sophiknight_2 }) }>
                    <img src={ img_sophiknight_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sophiknight_3 }) }>
                    <img src={ img_sophiknight_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sophiknight_4 }) }>
                    <img src={ img_sophiknight_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_sophiknight_5 }) }>
                    <img src={ img_sophiknight_5 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/stefaniemichova' target='_blank'>stefaniemichova</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_stefaniemichova_0 }) }>
                    <img src={ img_stefaniemichova_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/szindy' target='_blank'>szindy</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_szindy_0 }) }>
                    <img src={ img_szindy_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_szindy_1 }) }>
                    <img src={ img_szindy_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/taylor_cochrane' target='_blank'>taylor_cochrane</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_taylor_cochrane_0 }) }>
                    <img src={ img_taylor_cochrane_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_taylor_cochrane_1 }) }>
                    <img src={ img_taylor_cochrane_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/the.dariana' target='_blank'>the.dariana</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_the_dariana_0 }) }>
                    <img src={ img_the_dariana_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/therealkendrasunderland' target='_blank'>therealkendrasunderland</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_therealkendrasunderland_0 }) }>
                    <img src={ img_therealkendrasunderland_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_therealkendrasunderland_1 }) }>
                    <img src={ img_therealkendrasunderland_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_therealkendrasunderland_2 }) }>
                    <img src={ img_therealkendrasunderland_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_therealkendrasunderland_3 }) }>
                    <img src={ img_therealkendrasunderland_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_therealkendrasunderland_4 }) }>
                    <img src={ img_therealkendrasunderland_4 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/thesirenmika' target='_blank'>thesirenmika</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_thesirenmika_0 }) }>
                    <img src={ img_thesirenmika_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_thesirenmika_1 }) }>
                    <img src={ img_thesirenmika_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_thesirenmika_2 }) }>
                    <img src={ img_thesirenmika_2 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/vicatslive' target='_blank'>vicatslive</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_vicatslive_0 }) }>
                    <img src={ img_vicatslive_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_vicatslive_1 }) }>
                    <img src={ img_vicatslive_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/victoriacarioni' target='_blank'>victoriacarioni</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_victoriacarioni_0 }) }>
                    <img src={ img_victoriacarioni_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_victoriacarioni_1 }) }>
                    <img src={ img_victoriacarioni_1 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/viki_odintcova' target='_blank'>viki_odintcova</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_viki_odintcova_0 }) }>
                    <img src={ img_viki_odintcova_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/xochanb' target='_blank'>xochanb</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_xochanb_0 }) }>
                    <img src={ img_xochanb_0 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/youkendoitt' target='_blank'>youkendoitt</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_youkendoitt_0 }) }>
                    <img src={ img_youkendoitt_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_youkendoitt_1 }) }>
                    <img src={ img_youkendoitt_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_youkendoitt_2 }) }>
                    <img src={ img_youkendoitt_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_youkendoitt_3 }) }>
                    <img src={ img_youkendoitt_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_youkendoitt_4 }) }>
                    <img src={ img_youkendoitt_4 } className={ this.state.picSizeMode } />
                </div>
            </div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href='https://instagram.com/yuliyats31' target='_blank'>yuliyats31</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_yuliyats31_0 }) }>
                    <img src={ img_yuliyats31_0 } className={ this.state.picSizeMode } />
                </div>
            </div>

        </div>
    );
  }
}
