import React, { Component } from 'react';
import '../../styles/containers/NavBar/NavBar.css';
import { fetchServices } from '../../ducks/reducers/services/actions'
import ServiceButton from '../../components/NavBar/ServiceButton'
import HomeButton from './HomeButton'
import { 
    selectReduxStatusMessage,
    selectServices,
    selectPending
} from '../../ducks/reducers/services/reducer'

import {
    updatePage
} from '../../ducks/reducers/application/actions'

import {
    selectCurrentPage
} from '../../ducks/reducers/application/reducer'

import { connect } from 'react-redux';

class NavBarContainer extends Component {

    componentDidMount(){
        const { fetchServices } = this.props;
        fetchServices();
    }

    render() {
        const {isPending, services, updateCurrentPage, currentPage} = this.props;
        return (
            <React.Fragment>
                <div className='navbar-container'>
                    <HomeButton/>
                    <div className="service-container">
                        {isPending ? (
                            <p>Pending</p>
                        ) : (
                            services.map((service, index) => {
                                return (
                                    <ServiceButton 
                                        name={service.name} 
                                        key={index} 
                                        updateCurrentPage={updateCurrentPage}
                                        selected={currentPage === service.name}
                                    />
                                )
                            })
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    successMSG: selectReduxStatusMessage(state),
    services: selectServices(state),
    isPending: selectPending(state),
    currentPage: selectCurrentPage(state)
});

const mapDispatchToProps = {
    fetchServices: fetchServices,
    updateCurrentPage: updatePage
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);