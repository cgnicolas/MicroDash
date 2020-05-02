import React, { Component } from 'react';
import { HuePicker, AlphaPicker } from 'react-color';
import PowerButton from '../../common/PowerButton';
import SpecialModal from '../SpecialModal';
import CommonButton from '../../common/CommonButton';
class LightArduino extends Component {
    state = {
        tempColor: this.props.arduino.rgb,
        isModalVisible: false,
    }

    constructor(props){
        super(props);
        const { arduino } = this.props;
        const { rgb } = arduino;
        const {r, g, b} = rgb;
        this.onColorChange = this.onColorChange.bind(this);
        this.onFinalColorChange = this.onFinalColorChange.bind(this);
        this.onModalUpdate = this.onModalUpdate.bind(this);
    }

    onColorChange(color, event){
        const {r, g, b} = color.rgb;
        this.setState({
            tempColor: {
                r,
                g,
                b
            }
        })
    }

    onFinalColorChange(color, event){
        const { setArduinoColor, arduino } = this.props;
        const {r, g, b} = color.rgb;
        this.setState({
            tempColor: {
                r,
                g,
                b
            }
        })
        setArduinoColor(arduino.name, color.rgb)
    }

    onModalUpdate(e){
        const { modalVisible } = this.state;
        this.setState({
            modalVisible: !modalVisible
        })
    }

    render() {
        const { arduino, powered, powerArduino, invokeUnique } = this.props;
        const { modalVisible } = this.state;
        return (
            <div className='light-arduino-container'>
                <h4 className='arduino-name arduino-child'>{arduino.name}</h4>
                <div className='power-button-container'>
                    <PowerButton className='arduino-child' powered={powered} powerLight={() => {powerArduino(arduino.name)}}/>
                </div>
                {modalVisible && (
                    <SpecialModal
                        title="Special Functions"
                        onClose={this.onModalUpdate}
                        arduino={arduino}
                        invokeUnique={invokeUnique}
                    />
                )}
                <div className='common-button-container'>
                    <CommonButton
                        title="Special"
                        onClick={this.onModalUpdate}
                    />
                </div>
                <HuePicker 
                    className='picker arduino-child'
                    height={20}
                    width={200} 
                    color={this.state.tempColor} 
                    onChange={this.onColorChange} 
                    onChangeComplete={this.onFinalColorChange}
                />
            </div>
        );
    }
}

export default LightArduino;