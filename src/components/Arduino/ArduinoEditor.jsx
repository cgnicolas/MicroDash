import React, { Component } from 'react';
import LightArduino from './types/LightArduino';
import '../../styles/components/Arduino/ArduinoEditor.scss'
class ArduinoEditor extends Component {
    render() {
        const { 
            arduinoStates,
            powerArduino,
            setArduinoColor,
            invokeUnique
        } = this.props;
        return (
            <div className='arduino-editor-container'>
                {
                    arduinoStates.map((arduino, index) => {
                        switch (arduino.type) {
                            case 'Light':
                                return <LightArduino
                                        key={index}
                                        powered={arduino.powered}
                                        arduino={arduino}
                                        powerArduino={powerArduino}
                                        setArduinoColor={setArduinoColor}
                                        invokeUnique={invokeUnique}
                                    />
                        }
                    })
                }
            </div>
        );
    }
}

export default ArduinoEditor;