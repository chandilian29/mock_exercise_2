// @ts-ignore
import React, {Component} from "react";
import Moment from 'moment'
import {getUsers, createUser, updateUserValue, deleteUserValue} from "../mock";
import AddUser from "./AddUser";
import ReactDatePicker from "react-datepicker";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";


interface ViewUserProps {
    updateUser?: any;
}

export class ViewUser extends Component<ViewUserProps> {

    state = {
        users: {
            getUsers
        },
        updateUser: {
            id: '',
            firstName: '',
            lastName: '',
            role: '',
            enrollDate: new Date()
        },
        enableUserDialog: true,

    }

    addUser = (event: any) => {
        createUser(event);
        this.setState({user: getUsers()})
        this.setState({enableUserDialog: false})
    }

    updateUser = (event: any) => {
        this.setState({
            updateUser: {
                id: event.id,
                firstName: event.firstName,
                lastName: event.lastName,
                role: event.role,
                enrollDate: new Date(event.enrollDate)
            }
        })
    }

    updateUserDb = () => {
        updateUserValue(this.state.updateUser)
        this.setState({user: getUsers()})
    }

    deleteUserDb = (event: any) => {
        deleteUserValue(event)
        this.setState({user: getUsers()})
    }

    handleFirstNameChange = (firstName: any) => {
        this.setState({
            updateUser: {
                id: this.state.updateUser.id,
                firstName: firstName.target.value,
                lastName: this.state.updateUser.lastName,
                role: this.state.updateUser.role,
                enrollDate: this.state.updateUser.enrollDate
            }
        })
    }
    handleLastNameChange = (lastName: any) => {
        this.setState({
            updateUser: {
                id: this.state.updateUser.id,
                firstName: this.state.updateUser.firstName,
                lastName: lastName.target.value,
                role: this.state.updateUser.role,
                enrollDate: this.state.updateUser.enrollDate
            }
        })
    }
    handleRoleChange = (role: any) => {
        this.setState({
            updateUser: {
                id: this.state.updateUser.id,
                firstName: this.state.updateUser.firstName,
                lastName: this.state.updateUser.lastName,
                role: role.target.value,
                enrollDate: this.state.updateUser.enrollDate
            }
        })
    }
    handleDateChange = (date: any) => {
        this.setState({
            updateUser: {
                id: this.state.updateUser.id,
                firstName: this.state.updateUser.firstName,
                lastName: this.state.updateUser.lastName,
                role: this.state.updateUser.role,
                enrollDate: new Date(date)
            }
        })
    }

    render() {
        return (
            <div>
                <div className="p-grid">
                    <div className="p-col">
                        <AddUser addUser={this.addUser}/>
                    </div>
                    <div className="p-col">
                        <div className="p-fluid">
                            <div className="p-field p-grid">
                                <label htmlFor="firstname4" className="p-col-12 p-md-2">Last Name</label>
                                <div className="p-col-5 p-md-5">
                                    <InputText type="text" name="lastName" value={this.state.updateUser.lastName}
                                               onChange={this.handleLastNameChange}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">First Name</label>
                                <div className="p-col-5 p-md-5">
                                    <InputText type="text" name="firstName" value={this.state.updateUser.firstName}
                                               onChange={this.handleFirstNameChange}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">Role</label>
                                <div className="p-col-5 p-md-5">
                                    <InputText type="text" name="role" value={this.state.updateUser.role}
                                               onChange={this.handleRoleChange}/>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">Enrolled Date</label>
                                <div className="p-col-5 p-md-5">
                                    <ReactDatePicker selected={this.state.updateUser.enrollDate}
                                                     onChange={this.handleDateChange}></ReactDatePicker>
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label htmlFor="lastname4" className="p-col-12 p-md-2">
                                </label>
                                <div className="p-col-5 p-md-5">
                                    <Button type="button" label="Update" onClick={this.updateUserDb}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <table className="user-tbl">
                    <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Role</th>
                        <th>Enrolled Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getUsers().map((item, index) => {
                        return <tr key={index} data-item={item}>
                            <td>{item.lastName}</td>
                            <td>{item.firstName}</td>
                            <td>{item.role}</td>
                            <td>{Moment(item.enrollDate).format('YYYY-MM-DD HH:mm')}</td>
                            <td><Button type="button" label="Update" onClick={this.updateUser.bind(this, item)}/> { }
                                <Button type="button" label="Delete" onClick={this.deleteUserDb.bind(this, item)}/></td>
                        </tr>
                    })}
                    </tbody>
                </table>

                <div>
                    <div>

                    </div>
                </div>

            </div>
        )
    }
}

// @ts-ignore
export default ViewUser;
