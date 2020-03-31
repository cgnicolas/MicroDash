import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Application extends Component {

    render() {
        return (
            <React.Fragment>
                <p>{this.props.msg}</p>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    msg: state.msg,
});

Application.propTypes = {
    
}

export default connect(mapStateToProps)(Application);