import React, { Component } from 'react';
import CommonButton from '../common/CommonButton';
import '../../styles/components/Arduino/UniqueFunctions.scss';
class UniqueFunctions extends Component {
    render() {
        const { uniqueFunctions, invokeUnique, arduinoName } = this.props;
        return (
            <div className='unique-container'>
                {uniqueFunctions.map((unique, index) => {
                    return (
                        <div key={index} className='unique'>
                            <h3 className='unique-child'>{unique.name}</h3>
                            <div className='unique-child'>
                                {(unique.type === 'bool') && (
                                    <CommonButton
                                        title={unique.name}
                                        enabled={unique.state}
                                        onClick={() => invokeUnique(arduinoName, unique.name)}
                                    />
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UniqueFunctions;