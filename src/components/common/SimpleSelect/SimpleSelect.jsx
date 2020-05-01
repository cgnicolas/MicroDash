import React, { Component } from 'react';
import SimpleSelectButton from './SimpleSelectButton'
import './../../../styles/common/SimpleSelect/SimpleSelect.scss';

class SimpleSelect extends Component {

    populateButtons(buttons){
        return buttons.map((button, index) => {
            return (
                <SimpleSelectButton 
                    key={index} 
                    //If Philips, button will be an object with .name
                    //If Arduino button will be a string
                    title={button.name || button}
                    selected={this.props.current === button}
                    onClick={() => {this.props.clickHandler(button)}}
                />
            )
        })
    }
    render() {
        const { 
            buttons,
         } = this.props;
        return (
            <div className='simple-select-container'>
                {
                    buttons ? (this.populateButtons(buttons)) : (<p>Pending</p>)
                }
            </div>
        );
    }
}

export default SimpleSelect;