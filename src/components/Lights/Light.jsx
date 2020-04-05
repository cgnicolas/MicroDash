import React, { Component } from 'react';
import { HuePicker, AlphaPicker } from 'react-color';
import PowerButton from './PowerButton';

class Light extends Component {

    render() {
        const { light, powered } = this.props;
        console.log(light.name, powered)
        return (
            <div className='light-container'>
                <h4>{light.name}</h4>
                <PowerButton powered={powered}/>
                <HuePicker width={200}/>
                <AlphaPicker width={200}/>
            </div>
        );
    }
}

export default Light;