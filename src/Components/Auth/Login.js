import React, { Component } from "react"
import {FormGroup, FormControl, FormLabel, Button, Form} from "react-bootstrap"
import axios from "axios"
import { Redirect, Link } from "react-router-dom"
// import { connect } from "react-redux"



class Login extends Component {
    constructor (props) {
        super (props);

        this.state = {
            username: "",
            password: "",
            redirect: false
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
     
    handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
    }
     
    handleSubmit = event => {
    event.preventDefault();
    
    // do axios.post - if successful route to game and dispatch action saving user name to store (reducer.js)
    
    axios.post('/users/login', {
        username: this.state.username,
        password: this.state.password
        })
        .then( (response) => {
        console.log(response)
        this.setState({...this.state, redirect: true});
        this.props.login(this.state.username);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
     
    render() {
        if (this.state.redirect === true) {
        return <Redirect to='/Profile'/>
        }
    
        return (
            <div className="mx-auto" style={{maxWidth: 500, backgroundColor: '#CBC796'}}>
                <Form className="mx-3 mt-5">
                    <FormGroup controlId="formGroupEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl size='lg' type="email" placeholder="Enter email" />

                        <FormLabel>Password</FormLabel>
                        <FormControl size='lg' type="password" placeholder="Password" />
                    </FormGroup>
                    <Button variant="primary" type="submit" size='lg' block>
                            Submit
                    </Button>
                  <Link style={{marginTop: 5}} to='/register'><button>Are you new here?</button></Link>
                </Form>
            </div>
        )
    }

}

// //state
// const mapStateToProps = (state) => {
//     return {
//       username: state.username,
//     }
// }

// //props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (username) => dispatch({type: "LOG_IN", player: username}),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
