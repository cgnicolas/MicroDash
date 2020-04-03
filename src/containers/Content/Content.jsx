import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/containers/Content/Content.css'

import { 
    selectCurrentPage
} from '../../ducks/reducers/application/reducer'

import Lights from '../Lights/Lights'

class Content extends Component {
    render() {
        const { currentPage } = this.props;
        return (
            <React.Fragment>
                <div className='container'>
                    <Lights/>
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