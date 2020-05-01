import React, { Component } from 'react';
import RoomSelector from '../../components/Lights/RoomSelector'
import { connect } from 'react-redux';
import { 
    fetchRooms, 
    updateCurrentRoom, 
    fetchLights,
    powerLight,
    setLightColor,
    setLightBrightness
} from '../../ducks/reducers/lights/actions'

import { 
    selectRooms, 
    selectCurrentRoom, 
    selectLightsForRoom,
    selectLightsPending,
    selectRoomsPending,
} from '../../ducks/reducers/lights/selectors';

import LightEditor from '../../components/Lights/LightEditor';
import '../../styles/containers/Lights/Lights.css'
import SimpleSelect from '../../components/common/SimpleSelect/SimpleSelect';
class Lights extends Component {

    componentDidMount(){
        const {fetchRooms, rooms, fetchLights} = this.props;
        if(rooms.length === 0){
            fetchRooms();
            fetchLights();
        }
    }

    render() {
        const {
            rooms, 
            updateCurrentRoom, 
            currentRoom, 
            lightsForCurrentRoom,
            roomsPending,
            lightsPending,
            powerLight,
            setLightColor,
            setLightBrightness
        } = this.props;
        return (
            <React.Fragment>
                <div className='lights-container'>
                    {/* <RoomSelector 
                        rooms={rooms} 
                        updateCurrentRoom={updateCurrentRoom} 
                        currentRoom={currentRoom}
                        pending={roomsPending}
                    /> */}
                    <SimpleSelect
                        buttons={rooms}
                        current={currentRoom}
                        clickHandler={updateCurrentRoom}
                    />
                    <LightEditor 
                        currentLights={lightsForCurrentRoom}
                        pending={lightsPending}
                        powerLight={powerLight}
                        setLightColor={setLightColor}
                        setLightBrightness={setLightBrightness}
                    />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        rooms: selectRooms(state),
        currentRoom: selectCurrentRoom(state),
        lightsForCurrentRoom: selectLightsForRoom(state),
        lightsPending: selectLightsPending(state),
        roomsPending: selectRoomsPending(state),
    }
}

const mapDispatchToProps = {
    fetchRooms,
    fetchLights,
    updateCurrentRoom,
    powerLight,
    setLightColor,
    setLightBrightness
}

export default connect(mapStateToProps, mapDispatchToProps)(Lights);