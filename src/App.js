import React, {Component} from 'react';
import AudioAnalyser from './Analyser';
import { GoogleAuthProvider } from "firebase/auth";




// Global provider instance of googleauth
const provider = new GoogleAuthProvider();
// Set up component
//    add toggle control to component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this)
  }




// Get audio from users microphone
  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio }); 
  }


// Function to stop audio from microphone
  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }




  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }



//  Render HTML 
//    Add button with onClick to toggleMicrophone 
  render() {
    return (

      // Add Navbar
      <div className="App">
        <main>
          {/* Add google authentication button */}
          <div className="auth">

            {/* Add onclick to button for google auth */}
            <button className="auth-button">Google Sign In</button>
          </div>
          <div className="controls">
            {/* Add toggle function to button with onClick */}
            <button className="mic-button" onClick={this.toggleMicrophone}>
              {this.state.audio ? "Stop microphone" : "Let's talk" }
            </button>
          </div>
          {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
        </main>
      </div>
    )
  }
}

export default App;
       
