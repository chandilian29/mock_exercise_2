// @ts-ignore
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";

import React, {Component, useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import ReactDatePicker from "react-datepicker";

interface AddUserProps {
    addUser?: any;
}

export class AddUser extends Component<AddUserProps> {

    state = {
        id: '',
        firstName: '',
        lastName: '',
        role: '',
        enrollDate: new Date()
    }

    onChange = (event: any) => {
        this.setState({[event.target.name]: event.target.value})
    }


    onSubmit = (event: any) => {
        event.preventDefault();
        this.props.addUser(this.state)
    }

    handleDateChange = (date:any) =>{
        this.setState({
            enrollDate : date
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <div className="p-fluid">
                            <div className="p-field p-grid">
                                <label htmlFor="firstname4" className="p-col-12 p-md-2">Last Name</label>
                                <div className="p-col-5 p-md-5">
                                    <InputText type="text" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">First Name</label>
                                <div className="p-col-5 p-md-5">
                                    <InputText type="text" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">Role</label>
                                <div className="p-col-5 p-md-5">
                                    <InputText type="text" name="role" value={this.state.role} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">Enrolled Date</label>
                                <div className="p-col-5 p-md-5">
                                    <ReactDatePicker selected={this.state.enrollDate} onChange={this.handleDateChange} ></ReactDatePicker>
                                    {/*<InputText type="text" name="enrollDate" value={this.state.enrollDate} onChange={this.onChange}/>*/}
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">
                                </label>
                                <div className="p-col-5 p-md-5">
                                    <Button type="button" label="Add" onClick={this.onSubmit}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// @ts-ignore
export default AddUser;
