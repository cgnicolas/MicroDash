import React, { Component } from 'react';
import { HuePicker, AlphaPicker } from 'react-color';
import PowerButton from '../common/PowerButton';
import colorConvert from '../../utils/colorConvert';
class Light extends Component {

    state = {
        tempColor: colorConvert(this.props.light.state.hue, this.props.light.state.sat, this.props.light.state.bri),
        tempBri: this.props.light.state.bri
    }

    constructor(props){
        super(props);

        this.onColorChange = this.onColorChange.bind(this);
        this.onFinalColorChange = this.onFinalColorChange.bind(this);
        this.onAlphaChange = this.onAlphaChange.bind(this);
        this.onFinalAlphaChange = this.onFinalAlphaChange.bind(this);
    }

    onColorChange(color, event){
        this.setState({
            tempColor: color.hex
        })
    }

    onFinalColorChange(color, event){
        const { setLightColor, light } = this.props;
        setLightColor(color.hex, light.id);
    }

    onFinalAlphaChange(alpha, event){
        const newAlpha = alpha.rgb.a;
        const { setLightBrightness, light } = this.props;
        // setLightBrightness(newAlpha, light.id)
        setLightBrightness(alpha.rgb.a * 100, light.id)
    }
    
    onAlphaChange(alpha, event){
        this.setState({
            tempColor: alpha.rgb
        })
    }

    render() {
        const { light, powered, powerLight } = this.props;
        return (
            <div className='light-container'>
                <h4 className='light-name light-child'>{light.name}</h4>
                <div className='power-button-container'>
                    <PowerButton className='light-child' powered={powered} powerLight={() => {powerLight(light.id)}}/>
                </div>
                <HuePicker 
                    className='picker light-child'
                    height={20}
                    width={200} 
                    color={this.state.tempColor} 
                    onChange={this.onColorChange} 
                    onChangeComplete={this.onFinalColorChange}
                />
                <AlphaPicker 
                    className='picker light-child'
                    onChange={this.onAlphaChange} 
                    onChangeComplete={this.onFinalAlphaChange} 
                    width={200}
                    height={20} 
                    color={this.state.tempColor}
                />
            </div>
        );
    }
}

export default Light;