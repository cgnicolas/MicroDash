import React, { Component } from 'react';
import { HuePicker, AlphaPicker } from 'react-color';
import PowerButton from './PowerButton';
import colorConvert from '../../utils/colorConvert';
class Light extends Component {

    state = {
        tempColor: colorConvert(this.props.light.state.xy, this.props.light.state.bri),
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
                <h4>{light.name}</h4>
                <PowerButton powered={powered} powerLight={() => {powerLight(light.id)}}/>
                <HuePicker width={200} color={this.state.tempColor} onChange={this.onColorChange} onChangeComplete={this.onFinalColorChange}/>
                <AlphaPicker onChange={this.onAlphaChange} onChangeComplete={this.onFinalAlphaChange} width={200} color={this.state.tempColor}/>
            </div>
        );
    }
}

export default Light;