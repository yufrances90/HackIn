import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

class CNavbar extends Component {
    render() {
        return (
            <AppBar position="static" className="h-appbar">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        HackMMunity
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default CNavbar;