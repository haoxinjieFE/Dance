import React, { Component } from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import './Index.css'

class Dance extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  getEnter = (e) => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: 'set',
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 },
          ],
          leave: {
            opacity: 0, scale: 0,
          },
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  }
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render(){
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        <p style={{ marginTop: 16 }}><button className="btn" size="small" onClick={this.onClick}>start</button></p>
        <Texty enter={this.getEnter} leave={this.getEnter}>{this.state.show && this.props.children}</Texty>
      </div>
    );
  }
}

export default Dance