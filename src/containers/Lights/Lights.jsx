import '../../styles/containers/Lights/Lights.css'
import React, { Component } from 'react';
import RoomSelector from '../../components/Lights/RoomSelector'
import { connect } from 'react-redux';
import { 
    fetchRooms, 
    updateCurrentRoom, 
    fetchLights 
} from '../../ducks/reducers/lights/actions'

import { 
    selectRooms, 
    selectCurrentRoom, 
    selectLightsForRoom,
    selectLightsPending,
    selectRoomsPending,
} from '../../ducks/reducers/lights/selectors';

import LightEditor from '../../components/Lights/LightEditor';
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
        } = this.props;
        return (
            <React.Fragment>
                <div className='lights-container'>
                    <RoomSelector 
                        rooms={rooms} 
                        updateCurrentRoom={updateCurrentRoom} 
                        currentRoom={currentRoom}
                        pending={roomsPending}
                    />
                    <LightEditor 
                        currentLights={lightsForCurrentRoom}
                        pending={lightsPending}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Lights);