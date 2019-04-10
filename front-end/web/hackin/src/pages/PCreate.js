import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

class PCreate extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        1
                    </Grid>
                    <Grid item xs={6}>
                        Hello from PCreate
                    </Grid>
                    <Grid item xs={3}>
                        1
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PCreate;