import React, { Component } from 'react';
import './App.css';
import img_bryanaholly_0 from './assets/bryanaholly_14709614_1516503785030215_7234629619905724416_n.jpg';
import img_bryanaholly_1 from './assets/bryanaholly_16908134_1363462873675284_257942709161951232_n.jpg';
import img_bryanaholly_2 from './assets/bryanaholly_22860232_170824096833129_5078285832331198464_n.jpg';
import img_bryanaholly_3 from './assets/bryanaholly_23098655_2014100622142466_4058291190418636800_n.jpg';
import img_bryanaholly_4 from './assets/bryanaholly_36148822_442303256249159_3882325272199954432_n.jpg';
import img_bryanaholly_5 from './assets/bryanaholly_36159900_966440550225338_229626049908965376_n.jpg';
import img_bryanaholly_6 from './assets/bryanaholly_38047044_2102454183354525_6274653894664519680_n.jpg';
import img_bryanaholly_7 from './assets/bryanaholly_41707360_298267700998533_4668265195003597894_n.jpg';
import img_bryanaholly_8 from './assets/bryanaholly_41744686_286425102082939_1420694507239570146_n.jpg';
import img_bryanaholly_9 from './assets/bryanaholly_41860940_2262136150739408_9193120515136221302_n.jpg';
import img_bryanaholly_10 from './assets/bryanaholly_42003831_264937707475872_4783592008827381846_n.jpg';
import img_bryanaholly_11 from './assets/bryanaholly_42362243_514644605675578_2231105879262374129_n.jpg';
import img_bryanaholly_12 from './assets/bryanaholly_42958540_569040460183408_1738779772697384622_n.jpg';

export default class Bry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: img_bryanaholly_0,
      oldY: 0,
      picSizeMode: 'narrow'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.image !== prevState.image) {
        this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
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
                    <img className="gallery" src={ this.state.image } />
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
                <a href='https://instagram.com/bryanaholly' target='_blank'>bryanaholly</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_0 }) }>
                    <img src={ img_bryanaholly_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_1 }) }>
                    <img src={ img_bryanaholly_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_2 }) }>
                    <img src={ img_bryanaholly_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_3 }) }>
                    <img src={ img_bryanaholly_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_4 }) }>
                    <img src={ img_bryanaholly_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_5 }) }>
                    <img src={ img_bryanaholly_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_6 }) }>
                    <img src={ img_bryanaholly_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_7 }) }>
                    <img src={ img_bryanaholly_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_8 }) }>
                    <img src={ img_bryanaholly_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_9 }) }>
                    <img src={ img_bryanaholly_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_10 }) }>
                    <img src={ img_bryanaholly_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_11 }) }>
                    <img src={ img_bryanaholly_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_bryanaholly_12 }) }>
                    <img src={ img_bryanaholly_12 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
