import React, { Component } from 'react';
import '../styles/components/ServiceButton/ServiceButton.css'

class ServiceButton extends Component {

    render() {
        const { name } = this.props;
        return (
            <button className='button'>
                {name}
            </button>
        );
    }
}

export default ServiceButton;