import React, { Component } from 'react';
import Light from './Light'
import '../../styles/components/Lights/LightEditor/LightEditor.scss'
class LightEditor extends Component {
    render() {
        const { 
            currentLights, 
            powerLight,
            setLightColor,
            setLightBrightness
        } = this.props;
        return (
            <div className='light-editor-container'>
                {
                    currentLights.map((light, index) => {
                        return (
                            <Light 
                                key={index} 
                                light={light} 
                                powered={light.state.on} 
                                powerLight={powerLight}
                                setLightColor={setLightColor}
                                setLightBrightness={setLightBrightness}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default LightEditor;