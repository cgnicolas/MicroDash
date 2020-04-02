import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { selectReduxStatusMessage } from '../ducks/reducers/services/reducer';
import { fetchServices } from '../ducks/reducers/services/actions'

import TopBar from '../components/TopBar/TopBar'
import '../styles/application/application.css'
class Application extends Component {
    componentWillMount(){
        const { fetchServices } = this.props;
        fetchServices();
    }
    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <p>{this.props.successMSG}</p>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    successMSG: selectReduxStatusMessage(state),
});

const mapDispatchToProps = {
    fetchServices: fetchServices
}

Application.propTypes = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);