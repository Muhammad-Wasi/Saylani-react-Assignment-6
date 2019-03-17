import React, { Component } from 'react';

export default class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startedPerforming: true
        }
        this.sendDataToKid = this.sendDataToKid.bind(this)
    }
    sendDataToKid() {
        const { further } = this.props
        const furtherSteps = ["step3", "step4", "step5"];
        further(furtherSteps)
    }

    static getDerivedStateFromProps(Nextprops, state) {
        if (Nextprops.qualified) {
            return { startedPerforming: false }
        }
        return true
    }
    render() {
        const { startedPerforming } = this.state;
        return (
            <div>
                {startedPerforming && <button onClick={this.sendDataToKid}>Get Help From Teacher</button>}
            </div>
        );
    }
}