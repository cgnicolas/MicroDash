import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/containers/Content/Content.css'

import { 
    selectCurrentPage
} from '../../ducks/reducers/application/reducer'

import Lights from '../Lights/Lights';
import Arduino from '../Arduino/Arduino';
import Home from '../Home/Home';

class Content extends Component {
    render() {
        const { currentPage } = this.props;
        return (
            <React.Fragment>
                <div className='content-container'>
                    {(currentPage === 'Home') && (
                        <Home/>
                    )}
                    {(currentPage === 'Lights') && (
                        <Lights/>
                    )}
                    {(currentPage === 'Arduino') && (
                        <Arduino/>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPage: selectCurrentPage(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);