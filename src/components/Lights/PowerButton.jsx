import React, { Component } from 'react';

class PowerButton extends Component {
    render() {
        const {powered} = this.props;
        return (
            <button className={'power-button ' + (powered ? 'powered' : '')}>
                Power
            </button>
        );
    }
}

export default PowerButton;