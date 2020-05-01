import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    fetchArduinos,
    updateCurrentType,
    powerArduino
} from '../../ducks/reducers/arduino/actions';

import {
    selectArduinoStates, 
    selectArduinoTypes,
    selectCurrentType
} from '../../ducks/reducers/arduino/selectors';
import ArduinoEditor from '../../components/Arduino/ArduinoEditor';
import SimpleSelect from '../../components/common/SimpleSelect/SimpleSelect'

import '../../styles/containers/Arduino/Arduino.scss';
class Arduino extends Component {

    componentDidMount(){
        const { fetchArduinos, currentType, arduinoTypes } = this.props;
        fetchArduinos();
    }

    render() {
        const { 
            arduinoStates, 
            arduinoTypes,
            updateCurrentType,
            currentType,
            powerArduino
        } = this.props;
        return (
            <React.Fragment>
                <div className='arduino-container'>
                    <SimpleSelect
                        buttons={arduinoTypes}
                        clickHandler={updateCurrentType}
                        current={currentType}
                    />
                    <ArduinoEditor
                        arduinoStates={arduinoStates}
                        powerArduino={powerArduino}
                    />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arduinoStates: selectArduinoStates(state),
        arduinoTypes: selectArduinoTypes(state),
        currentType: selectCurrentType(state),
    }
}

const mapDispatchToProps = {
    fetchArduinos,
    updateCurrentType,
    powerArduino,
}

export default connect(mapStateToProps, mapDispatchToProps)(Arduino);