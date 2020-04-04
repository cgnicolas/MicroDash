import React, { Component } from 'react';
import Room from './Room'
import '../../styles/components/Lights/RoomSelector/RoomSelector.css'

class RoomSelector extends Component {

    populateRooms(rooms){
        return rooms.map((room, index) => {
            return (
                <Room 
                    key={index} 
                    name={room.name}
                    room={room} 
                    updateCurrentRoom={this.props.updateCurrentRoom}
                    selected={this.props.currentRoom.id === room.id}
                />
            )
        })
    }
    render() {
        const { 
            rooms,
         } = this.props;
        return (
            <div className='room-selector-container'>
                {
                    rooms ? (this.populateRooms(rooms)) : (<p>Pending</p>)
                }
            </div>
        );
    }
}

export default RoomSelector;