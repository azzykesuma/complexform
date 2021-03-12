import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Data Succesfully Compiled" />
                    <h1>Cogito Ergo Sum</h1>
                    <p> Payment of your soul is awaiting confirmation</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;
