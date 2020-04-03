import React, { Component } from 'react';

class RoomSelector extends Component {

    populateRooms(rooms){
        return rooms.map((room, index) => {
            return (
                <p key={index}>{room.name}</p>
            )
        })
    }
    render() {
        const { 
            rooms,
            updateCurrentRoom
         } = this.props;
        return (
            <div>
                {
                    rooms ? (this.populateRooms(rooms)) : (<p>Pending</p>)
                }
            </div>
        );
    }
}

export default RoomSelector;