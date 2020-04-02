import React, { Component } from 'react';
import '../styles/components/ServiceButton/ServiceButton.css'

class ServiceButton extends Component {

    render() {
        const { name, updateCurrentPage } = this.props;
        return (
            <button 
                className='button'
                onClick={() => updateCurrentPage(name)}
            >
                {name}
            </button>
        );
    }
}

export default ServiceButton;