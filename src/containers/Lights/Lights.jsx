import '../../styles/containers/Lights/Lights.css'
import React, { Component } from 'react';
import RoomSelector from '../../components/Lights/RoomSelector'
import { connect } from 'react-redux';
class Lights extends Component {
    render() {
        return (
            <React.Fragment>
                <RoomSelector/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lights);