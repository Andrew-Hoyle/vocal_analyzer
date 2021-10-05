import React, { Component } from 'react';

// Component and reference to canvas element
class AudioVisualiser extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
// Run draw function and update everytime there is new data
  componentDidUpdate() {
    this.draw();
  }

//**Draw Function */
//   - Interperate wave from audioData and display on canvas
  draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;
    const context = canvas.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / audioData.length;
    // const gradient = context.createRadialGradient(20,50,80,80,100,100,120,1450)

    context.lineWidth = 2;
    context.strokeStyle = '#547ceb';
    
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0, height / 2);
    for (const item of audioData) {
      const y = (item / 255.0) * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }
    context.lineTo(x, height / 2);
    context.stroke();
  }

  render() {
    return <canvas width="800" height="800" ref={this.canvas} />;
  }
}

export default AudioVisualiser;
