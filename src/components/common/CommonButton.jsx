import React, { Component, useRef } from 'react';
import '../../styles/common/CommonButton.scss'
class CommonButton extends Component {

    constructor(props){
        super(props);

        this.container = React.createRef();
    }
    render() {
        const {enabled, title, className, onClick} = this.props;
        return (
            <div className='common-button-container'>
                <button 
                className={'common-button ' + (enabled ? 'button-enabled' : '') + (className ? `${className}` : '')}
                onClick={onClick}
                ref={this.container}
            >
                {title}
            </button>
            </div>
        );
    }
}

export default CommonButton;