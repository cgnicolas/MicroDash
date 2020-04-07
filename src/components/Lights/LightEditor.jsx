import React, { Component } from 'react';
import Light from './Light'
import '../../styles/components/Lights/LightEditor/LightEditor.css'
class LightEditor extends Component {
    render() {
        const { 
            currentLights, 
            powerLight,
            setLightColor } = this.props;
        console.log("currentLights", currentLights)
        return (
            <div className='lighteditor-container'>
                {
                    currentLights.map((light, index) => {
                        return (
                            <Light 
                                key={index} 
                                light={light} 
                                powered={light.state.on} 
                                powerLight={powerLight}
                                setLightColor={setLightColor}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default LightEditor;