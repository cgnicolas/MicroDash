import React, { Component } from 'react';
import '../styles/components/TopBar/TopBar.css'
class TopBar extends Component {
    render() {
        return (
            <div className='topbar-container'>
                <div className='topbar-content'>
                    <h1>ARES</h1>
                    <div className='topbar-subheading'>
                        <h4>(A Really Extraordinary System)</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;