import React, { Component } from 'react';

export default class Judge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            available: false,
        }
        this.applaud = this.applaud.bind(this);
        this.provideStars = this.provideStars.bind(this);
    }
    applaud() {
        const { apploud } = this.props;
        apploud();
    }
    provideStars() {
        const { stars } = this.state;
        let that = this;
        if (stars < 5) {
            this.setState({ stars: stars + 1 })
            // () => {
            // this.state.stars === 5 && this.props.leaveCom();
            // }
        }
        else {

        }
    }
    shouldComponentUpdate(props, state) {
        if (state.stars > 5) {
            return false
        }
        return true
    }
    componentDidUpdate(props, state) {
        // console.log('props', props);
        // console.log('state', state);
        console.log(state.stars);
        if (state.stars == 4) {
            const { qualify } = this.props;
            console.log('Qualify');
            qualify();
        }
    }

    render() {
        const { stars, available } = this.state;
        return (
            <div>
                <h3>Kid is available: {available}</h3>
                <button type="button" onClick={this.applaud}>
                    Appreciate performance
                </button>
                <br />
                <h3>Stars gained: {stars}</h3>
                <button type="button" onClick={this.provideStars}>
                    Provide stars
                </button>
            </div>
        );
    }
}
