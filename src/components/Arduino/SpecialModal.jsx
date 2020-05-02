import React, { Component } from 'react';
import '../../styles/components/Arduino/SpecialModal.scss'
import CommonButton from '../common/CommonButton';
import UniqueFunctions from './UniqueFunctions';
class SpecialModal extends Component {

    constructor(props){
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.props.onClose();
        }
    }

    render() {
        const { 
            onClose,
            title,
            arduino,
            invokeUnique
        } = this.props;
        return (
            <div 
                className='special-modal-container'
            >
                <div 
                    className='special-modal'
                    ref={this.setWrapperRef}
                >
                    <h2 className='special-modal-title'>{title}</h2>
                    <UniqueFunctions
                        arduinoName={arduino.name}
                        invokeUnique={invokeUnique}
                        uniqueFunctions={arduino.uniqueFunctions}
                    />
                    <CommonButton
                        title="Close"
                        onClick={onClose}
                    />
                </div>
            </div>
        );
    }
}

export default SpecialModal;