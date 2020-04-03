import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/containers/Content/Content.css'

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    Controller Space
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Content);