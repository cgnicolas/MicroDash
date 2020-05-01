import React, { Component } from 'react';
import LightArduino from './types/LightArduino';
import '../../styles/components/Arduino/Arduino.scss'
class ArduinoEditor extends Component {
    render() {
        const { 
            arduinoStates,
            powerArduino
        } = this.props;
        return (
            <div className='arduino-editor-container'>
                {
                    arduinoStates.map((arduino, index) => {
                        switch (arduino.type) {
                            case 'Light':
                                return <LightArduino
                                    powered={arduino.powered}
                                    arduino={arduino}
                                    powerArduino={powerArduino}
                                    />
                        }
                    })
                }
            </div>
        );
    }
}

export default ArduinoEditor;