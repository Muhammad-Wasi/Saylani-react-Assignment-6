import React, { Component } from 'react';
import Kid from './Screens/Kid/Kid';
import Teacher from './Screens/Teacher/Teacher';
import Judges from './Screens/Judges/Judges';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: null,
      apploud: null,
      furtherSteps: [],
      qualify: false,
      showLeave: false,
    }
    this.further = this.further.bind(this);
    this.sendApploud = this.sendApploud.bind(this);
    this.qualify = this.qualify.bind(this);
    this.showLeave = this.showLeave.bind(this);
  }
  further(arr) {
    const { furtherSteps } = this.state;
    this.setState({ furtherSteps: arr })
  }


  sendApploud() {
    const { apploud } = this.props;
    this.setState({
      apploud: true
    })
    apploud;
  }
  qualify() {
    const { qualified } = this.props;
    const { qualify } = this.state;
    let that = this;
    if (!qualify) {
      console.log('qualified****');
      this.setState({ qualify: true })
      qualified;
    }

  }

  showLeave() {
    this.setState({ showLeave: true })
  }

  componentWillMount() {
    this.setState({ volume: 5 })
  }
  render() {
    const { volume, furtherSteps, apploud, qualify, showLeave, leaveKid } = this.state;
    console.log(furtherSteps);
    return (
      <div className="App">
        <div className="KidDiv">
          <h2>Kid Component</h2>
          <h3>Volume: {volume}</h3>
          {!showLeave && <Kid furtherSteps={furtherSteps} dressColor={'darkcyan'} apploud={apploud} qualified={qualify} />}
          <button onClick={this.showLeave}>Leave the Show</button>
        </div>
        <hr />
        <div className="TeacherDiv">
          <h2>Teacher Component</h2>
          <Teacher further={(arr) => this.further(arr)} qualified={qualify} />
        </div>
        <hr />
        <div className="JudgesDiv">
          <h2>Judges Component</h2>
          {!showLeave && <Judges leaveCom={this.leaveCom} apploud={this.sendApploud} qualify={this.qualify} />}
        </div>
      </div>
    );
  }
}

export default App;
