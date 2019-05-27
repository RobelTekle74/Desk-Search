import React, { Component } from 'react';
import { Button, Form, Col} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import { connect } from 'react-redux';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: "",
            redirect: "false"
        };
    }
 
    validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 6 && this.state.email.length > 0;
    }

    //updates the state with the input text as it changes
    onChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
    }

    //sends username and password to database
    onSubmit(event) {
        event.preventDefault();

        
        
        axios.post('/Api/users/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        })
        .then((response) => {
            console.log(response);
            this.setState({
                ...this.state,
                name: response.config.data.name,
                isLoggedIn: true, 
                redirect: true
            });
            this.state.login(this.state.name, this.state.isLoggedIn);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {

        if (this.state.redirect === true) {
                return <Redirect to='/Login'/>
        }

        return (
            <div className="mx-auto" style={{maxWidth: 500, backgroundColor: '#CBC796'}}>
               <Form className="mx-3 mt-5" onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="John Smith" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

//state
// const mapStateToProps = (state) => {
//     return {
//       users: state.users.username,
//     }
// }
   
// //props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         register: (username) => dispatch({type: "REGISTER", username: username}),
//     }
// }
   
// export default connect(mapStateToProps, mapDispatchToProps)(Register)
export default Register;