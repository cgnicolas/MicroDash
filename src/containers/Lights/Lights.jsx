import '../../styles/containers/Lights/Lights.css'
import React, { Component } from 'react';
import RoomSelector from '../../components/Lights/RoomSelector'
import { connect } from 'react-redux';
import { fetchRooms, updateCurrentRoom } from '../../ducks/reducers/lights/actions'
import { selectRooms, selectCurrentRoom } from '../../ducks/reducers/lights/reducer';
import LightSelector from '../../components/Lights/LightSelector';
class Lights extends Component {

    componentDidMount(){
        const {fetchRooms} = this.props;
        console.log("Fetching rooms");
        fetchRooms();
    }

    render() {
        const {rooms, updateCurrentRoom, currentRoom} = this.props;
        return (
            <React.Fragment>
                <div className='lights-container'>
                    <RoomSelector 
                        rooms={rooms} 
                        updateCurrentRoom={updateCurrentRoom} 
                        currentRoom={currentRoom}
                    />
                    <LightSelector/>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        rooms: selectRooms(state),
        currentRoom: selectCurrentRoom(state)
    }
}

const mapDispatchToProps = {
    fetchRooms,
    updateCurrentRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(Lights);