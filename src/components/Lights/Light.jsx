import React, { Component } from 'react';
import { HuePicker, AlphaPicker } from 'react-color';
import PowerButton from './PowerButton';
import colorConvert from '../../utils/colorConvert';
class Light extends Component {

    state = {
        tempColor: colorConvert(this.props.light.state.xy, this.props.light.state.bri)
    }

    constructor(props){
        super(props);

        this.onColorChange = this.onColorChange.bind(this);
        this.onFinalColorChange = this.onFinalColorChange.bind(this);
    }

    onColorChange(color, event){
        this.setState({
            tempColor: color.hex
        })
    }

    onFinalColorChange(color, event){
        const { setLightColor } = this.props;
        setLightColor(color.hex, this.props.light.id);
    }

    render() {
        const { light, powered, powerLight } = this.props;
        return (
            <div className='light-container'>
                <h4>{light.name}</h4>
                <PowerButton powered={powered} powerLight={() => {powerLight(light.id)}}/>
                <HuePicker width={200} color={this.state.tempColor} onChange={this.onColorChange} onChangeComplete={this.onFinalColorChange}/>
                <AlphaPicker width={200}/>
            </div>
        );
    }
}

export default Light;