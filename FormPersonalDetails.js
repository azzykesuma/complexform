import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    // make the back step
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values,handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                    hintText='Enter Your Occupation '
                    floatingLabelText = 'Occupation'
                    onChange = {handleChange('ocupation')}
                    // the onchange has a firstName param, so that the method knows what field they should handle
                    defaultValue = {values.ocupation}
                    />
                    <br />
                    <TextField 
                    hintText='Enter Your City'
                    floatingLabelText = 'City'
                    onChange = {handleChange('city')}
                    defaultValue = {values.city}
                    />
                    <br />
                    <TextField 
                    hintText='Enter Your Bio'
                    floatingLabelText = 'Bio'
                    onChange = {handleChange('bio')}
                    defaultValue = {values.bio}
                    />
                    <br />
                    <RaisedButton
                    label='Continue'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label='Previous'
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button : {
        margin : 15
    }
}

export default FormPersonalDetails;
