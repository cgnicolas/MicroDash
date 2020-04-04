import React, { Component } from 'react';


class Room extends Component {
    render() {
        const { name, updateCurrentRoom, selected, room } = this.props;
        return (
            <div 
                className= {'room-container ' + (selected ? 'selected-room' : '')}
                onClick={() => updateCurrentRoom(room)}
            >
                <h2>{name}</h2>
            </div>
        );
    }
}

export default Room;