import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    selectReduxStatusMessage, 
    selectServices,
    selectPending
} from '../ducks/reducers/services/reducer';
import NavBar from './NavBar/NavBar';
import TopBar from '../components/TopBar'
import '../styles/application/application.css'
class Application extends Component {

    render() {
        const { services, isPending } = this.props;
        return (
            <React.Fragment>
                <div className='appcontainer'>
                    <TopBar/>
                    <NavBar/>
                </div>
            </React.Fragment>
        );
    }
}

export default Application;