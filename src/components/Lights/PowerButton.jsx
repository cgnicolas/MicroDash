import React, { Component } from 'react';

class PowerButton extends Component {
    render() {
        const {powered, powerLight} = this.props;
        return (
            <button 
                className={'power-button ' + (powered ? 'powered' : '')}
                onClick={() => {powerLight()}}
            >
                Power
            </button>
        );
    }
}

export default PowerButton;