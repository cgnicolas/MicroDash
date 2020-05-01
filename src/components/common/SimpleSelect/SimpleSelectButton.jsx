import React, { Component } from 'react';


class SimpleSelectButton extends Component {
    render() {
        const { title, selected, onClick } = this.props;
        return (
            <div 
                className= {'simple-select-btn-container ' + (selected ? 'selected' : '')}
                onClick={() => onClick()}
            >
                <h2>{title}</h2>
            </div>
        );
    }
}

export default SimpleSelectButton;