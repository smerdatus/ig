import React, { Component } from 'react';
import './App.css';
import img_alena_night_0 from './assets/alena_night_43425875_1904560779612257_4438184508229859011_n.jpg';
import img_alena_night_1 from './assets/alena_night_43628361_2109962585932718_5031603630927511552_n.jpg';
import img_alena_night_2 from './assets/alena_night_44718709_706973356347639_7801299378970805288_n.jpg';
import img_alena_night_3 from './assets/alena_night_44827296_511345129378053_366979946481605834_n.jpg';
import img_alena_night_4 from './assets/alena_night_45646104_2003431226418479_8370748254943414255_n.jpg';

export default class Alena extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: img_alena_night_0,
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
                <a href='https://instagram.com/alena_night_' target='_blank'>alena_night_</a>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_alena_night_0 }) }>
                    <img src={ img_alena_night_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_alena_night_1 }) }>
                    <img src={ img_alena_night_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_alena_night_2 }) }>
                    <img src={ img_alena_night_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_alena_night_3 }) }>
                    <img src={ img_alena_night_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_alena_night_4 }) }>
                    <img src={ img_alena_night_4 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
