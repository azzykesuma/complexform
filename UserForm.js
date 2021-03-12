import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails'
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        ocupation : '',
        city : '',
        bio : ''
    }

    // make the function to proceed to the next part of the form
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }
     // make the function to back to the previous part of the form
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    // the function to handle change
    handleChange = input => e => {
        this.setState({[input] : e.target.value})
        // basically it group all of the input field, so that you don't have to make the handle change for each field
    }

    render() {
        const { step } = this.state;
        const { firstName,lastName,email,ocupation,city,bio } = this.state;
        const values = { firstName,lastName,email,ocupation,city,bio }
        // destructure all fields 
        switch (step) {
            case 1 : 
            return (
                <FormUserDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
            case 2 : 
            return (
            <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
            ) 
            case 3 : 
            return (
            <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />
            )
            case 4 : 
            return <Success />
        }

    }
}

export default UserForm
