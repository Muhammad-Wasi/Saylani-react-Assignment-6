import React, { Component } from 'react';
import Teacher from '../Teacher/Teacher';

export default class Kid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: 'Nervous',
            danceSteps: [],
            currentStepIndex: 0,
            startedPerforming: true,
            teacherCond: false,
            stepsCond: true,
        };
        this.steps = this.steps.bind(this);
        this.qualified = this.qualified.bind(this);
    }

    qualified() {
        console.log('Run************')
        this.setState({ startedPerforming: false })
    }

    componentDidMount() {
        this.setState({ danceSteps: ['step1', 'step2'] })
    }

    static getDerivedStateFromProps(Nextprops, state) {
        // console.log('run********');
        // console.log('state', state);
        console.log('Nextprops', Nextprops)
        var arr = Nextprops.furtherSteps;
        if (state.danceSteps.length < 5) {
            arr.map(item => {
                return state.danceSteps.push(item)
            })
        }
        if (Nextprops.apploud) {
            return { emotion: 'Happy' }
        }
        if (Nextprops.qualified) {
            return { startedPerforming: false }
        }
        return true
    }

    steps() {
        const { danceSteps, currentStepIndex } = this.state;
        let that = this;
        if (currentStepIndex < danceSteps.length - 1) {
            that.setState({ currentStepIndex: currentStepIndex + 1 })
        }
        else if (currentStepIndex == 4) {
            alert('Steps enough');
            that.setState({ stepsCond: false })
        }
        else {
            alert("You've No More Steps, Please Take Help From Teacher..")
            that.setState({ teacherCond: true })
        }
    }

    componentWillUnmount() {
        console.log('Leaving The Show..')
    }


    render() {
        const { dressColor, furtherSteps } = this.props;
        // const dressClr = dressColor.splice(0,1).toUpperCase() + dressColor.splice(1).toUpperCase();
        const { danceSteps, emotion, startedPerforming, currentStepIndex, stepsCond, teacherCond } = this.state;
        return (
            <div>

                <h3>DressColor: {dressColor}</h3>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <h3>Emotion: {emotion}</h3>
                {startedPerforming &&
                    <div>
                        <h3>Current Step: {danceSteps[currentStepIndex]}</h3>
                        {stepsCond && <button onClick={this.steps}>Perform Next Step</button>}
                    </div>}
            </div>
        )
    }
}

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
