import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

class Pm_num4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            fname: "",
            lname: "",
            add: "",
            email: "",
            number: ""

        }
    }

    inputHandler = (e) => {
        e.preventDefault();
        const { fname, lname, add, email, number } = this.state;
        if (fname === "" || lname === "" || add === "" || email === "" || number === "") {
            this.setState({ register: false });
            alert(" Some field  is empty.. Fill up again")
        }
        else {
            this.setState({ register: true });
            alert("Succesfull registration")
           

        }
    }


    render() {
        const { register } = this.state;
        if (!register) {
            return (
                <center>
                    <div>
                        <div>
                            <center>
                                <h1>Sign Up Form</h1>
                                Firstname:
                        <input type="text" placeholder="firstname" onChange={(e) => this.setState({ fname: e.target.value })}></input><br></br><br></br>
                                Last Name:
                        <input type="text" placeholder="lastname" onChange={(e) => this.setState({ lname: e.target.value })}></input><br></br><br></br>
                                Address:
                        <input type="text" placeholder="address" onChange={(e) => this.setState({ add: e.target.value })}></input><br></br><br></br>
                                Email:
                        <input type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input><br></br><br></br>
                                Phone number:
                        <input type="number" placeholder="number" onChange={(e) => this.setState({ number: e.target.value })}></input><br></br><br></br>

                            </center>
                        </div>
                        <div>
                            <button type="submit" onClick={(e) => this.inputHandler(e)}>Register </button>
                        </div>
                    </div>
                    <br></br>

                </center>

            )
        }
        else{
            return(
                <div>
                    <BusinessCard fname={this.state.fname}  lname={this.state.lname} add={this.state.add}  
                    email={this.state.email}  number={this.state.number}/>
                </div>
            )
        }

    }
}
export default Pm_num4;