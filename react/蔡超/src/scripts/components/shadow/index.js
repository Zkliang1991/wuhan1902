import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
    state => {
        return {
            songlist: state.songlist,
            sidebar: state.sidebar,
        }
    }
)
class Shadow extends Component {

    render() {
        const {
            songlist: {
                songListOpen
            },
            sidebar: {
                sidebarOpen
            }
        } = this.props;
        return (
            <div style={{
                display: (songListOpen || sidebarOpen) ? 'block' : 'none',
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                zIndex: 98,
                background: 'rgba(0,0,0,0.2)',
            }}>

            </div>
        )
    }
}



export default Shadow