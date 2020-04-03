import React, { Component } from 'react';

class HomeButton extends Component {
    render() {
        const { selected } = this.props;
        return (
            <button 
            className={'home ' + (selected ? "selected" : null)}
            onClick={() => this.props.updateCurrentPage('Home')
            }>
                Home
            </button>
        );
    }
}

export default HomeButton;