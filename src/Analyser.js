import React, { Component } from 'react';
import AudioVisualiser from './Visualizer';

class AudioAnalyser extends Component {
    constructor(props) {
        super(props);
        this.state = { audioData: new Uint8Array(0) };
        this.tick = this.tick.bind(this);
    }



// Turn media stream into source for API on AudioContext
    componentDidMount() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.source = this.audioContext.createMediaStreamSource(this.props.audio);
        this.source.connect(this.analyser);
        this.rafId = requestAnimationFrame(this.tick);
    }



// Need function to copy waveform data from analyser
//      Use tick function to create array based off range of data from analyser
    tick() {
        this.analyser.getByteTimeDomainData(this.dataArray);
        this.setState({ audioData: this.dataArray });
        this.rafId= requestAnimationFrame(this.tick);
    }


    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
        this.analyser.disconnect();
        this.source.disconnect();
    }


    // render visualizer on page
    render() {
        return <AudioVisualiser audioData={this.state.audioData}/>;
    }


}

export default AudioAnalyser;

