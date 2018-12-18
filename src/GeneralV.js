import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
// import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/allieredmondd_14606568_1124237407652675_1398199347350339584_n.mp4';
import img_0 from './assets/videos/allieredmondd_14606568_1124237407652675_1398199347350339584_n.mp4.png';
import video_1 from './assets/videos/boutinela_46197470_193862251439674_3916183461466996736_n.mp4';
import img_1 from './assets/videos/boutinela_46197470_193862251439674_3916183461466996736_n.mp4.png';
import video_2 from './assets/videos/corasface_46213722_515019089013104_8571420164807983104_n.mp4';
import img_2 from './assets/videos/corasface_46213722_515019089013104_8571420164807983104_n.mp4.png';
import video_3 from './assets/videos/katieeeebell_45765998_2084366735196887_6514709686339833211_n.mp4';
import img_3 from './assets/videos/katieeeebell_45765998_2084366735196887_6514709686339833211_n.mp4.png';
import video_4 from './assets/videos/katieeeebell_46234439_747108302320056_5875963576326432082_n.mp4';
import img_4 from './assets/videos/katieeeebell_46234439_747108302320056_5875963576326432082_n.mp4.png';
import video_5 from './assets/videos/krotchy_36111715_241910093059545_1358031120315277827_n.mp4';
import img_5 from './assets/videos/krotchy_36111715_241910093059545_1358031120315277827_n.mp4.png';
import video_6 from './assets/videos/leaelui_34282878_397142860800779_8214211093464088576_n.mp4';
import img_6 from './assets/videos/leaelui_34282878_397142860800779_8214211093464088576_n.mp4.png';
import video_7 from './assets/videos/miav.me_42156773_454172018438196_6584757508462608384_n.mp4';
import img_7 from './assets/videos/miav.me_42156773_454172018438196_6584757508462608384_n.mp4.png';
import video_8 from './assets/videos/oliviabrower_46598590_466081587251472_8350322678703325184_n.mp4';
import img_8 from './assets/videos/oliviabrower_46598590_466081587251472_8350322678703325184_n.mp4.png';
import video_9 from './assets/videos/sommerray_35585646_999134763586204_2031569618916605952_n.mp4';
import img_9 from './assets/videos/sommerray_35585646_999134763586204_2031569618916605952_n.mp4.png';
import video_10 from './assets/videos/taylor_cochrane_35816944_235455147278615_1026973817739673600_n.mp4';
import img_10 from './assets/videos/taylor_cochrane_35816944_235455147278615_1026973817739673600_n.mp4.png';
import video_11 from './assets/videos/taylor_hill_42549714_254843272047735_7854158500367171584_n.mp4';
import img_11 from './assets/videos/taylor_hill_42549714_254843272047735_7854158500367171584_n.mp4.png';
import video_12 from './assets/videos/the.dariana_35296050_156394861889758_1071427515232288768_n.mp4';
import img_12 from './assets/videos/the.dariana_35296050_156394861889758_1071427515232288768_n.mp4.png';
import video_13 from './assets/videos/therealkendrasunderland_18783789_272631033208484_4205582476745113600_n.mp4';
import img_13 from './assets/videos/therealkendrasunderland_18783789_272631033208484_4205582476745113600_n.mp4.png';
import video_14 from './assets/videos/vicatslive_47567202_592219637862758_4891051431802028801_n.mp4';
import img_14 from './assets/videos/vicatslive_47567202_592219637862758_4891051431802028801_n.mp4.png';

export default class GeneralV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: video_13,
      oldY: 0
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video) {
      this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
      return (
          <Player ref="player" loop fluid={ false } width={ 350 }>
              <source src={ this.state.video } />
          </Player>
      );
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
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_13 }) } >
                    <img src={ img_13 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_1 }) } >
                    <img src={ img_1 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_2 }) } >
                    <img src={ img_2 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_3 }) } >
                    <img src={ img_3 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_4 }) } >
                    <img src={ img_4 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_5 }) } >
                    <img src={ img_5 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_6 }) } >
                    <img src={ img_6 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_7 }) } >
                    <img src={ img_7 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_8 }) } >
                    <img src={ img_8 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_9 }) } >
                    <img src={ img_9 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_10 }) } >
                    <img src={ img_10 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_11 }) } >
                    <img src={ img_11 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_12 }) } >
                    <img src={ img_12 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0 }) } >
                    <img src={ img_0 } style={ { height: '20vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_14 }) } >
                    <img src={ img_14 } style={ { height: '20vh' } } />
                </div>
            </div>
        </div>
    );
  }
}
