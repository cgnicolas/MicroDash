import React, { Component } from 'react';
import { HuePicker, AlphaPicker } from 'react-color';
import PowerButton from '../../common/PowerButton';
class LightArduino extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { arduino, powered, powerArduino } = this.props;
        return (
            <div className='light-arduino-container'>
                <h4 className='arduino-name arduino-child'>{arduino.name}</h4>
                <PowerButton className='arduino-child' powered={powered} powerLight={() => {powerArduino(arduino.name)}}/>
                {/* <HuePicker 
                    className='picker arduino-child'
                    height={20}
                    width={200} 
                    color={this.state.tempColor} 
                    onChange={this.onColorChange} 
                    onChangeComplete={this.onFinalColorChange}
                />
                <AlphaPicker 
                    className='picker arduino-child'
                    onChange={this.onAlphaChange} 
                    onChangeComplete={this.onFinalAlphaChange} 
                    width={200}
                    height={20} 
                    color={this.state.tempColor}
                /> */}
            </div>
        );
    }
}

export default LightArduino;