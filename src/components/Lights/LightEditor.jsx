import React, { Component } from 'react';

class LightEditor extends Component {
    render() {
        const { currentLights } = this.props;
        console.log("currentLights", currentLights)
        return (
            <div className='lighteditor-container'>
                {
                    currentLights.map((light, index) => {
                        return (
                            <div key={index}>
                                {light.name}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default LightEditor;