import React, { Component } from 'react';
import '../../styles/common/PowerButton/PowerButton.scss'
class PowerButton extends Component {
    render() {
        const {powered, powerLight} = this.props;
        return (
            <div className='power-button-container'>
                <button 
                className={'power-button ' + (powered ? 'powered' : '')}
                onClick={() => {powerLight()}}
            >
                Power
            </button>
            </div>
        );
    }
}

export default PowerButton;