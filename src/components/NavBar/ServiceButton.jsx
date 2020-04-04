import React, { Component } from 'react';
import '../../styles/components/ServiceButton/ServiceButton.css'

class ServiceButton extends Component {

    render() {
        const { name, updateCurrentPage, selected} = this.props;
        return (
            <button 
                className={'button ' + (selected ? "selected-service" : null)}
                onClick={() => updateCurrentPage(name)}
            >
                {name}
            </button>
        );
    }
}

export default ServiceButton;