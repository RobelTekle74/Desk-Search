import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
import { addLocation } from '../../Actions/locationActions'


class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phoneNumber: "",
            building: "",
            floor: "",
            otype: "",
            number: ""
        };
    }
 
    // validateForm() {
    // return this.state.username.length > 0 && this.state.password.length > 0;
    // }

    //updates the state with the input text as it changes

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
    
        const newLocation = {
                  email: this.state.email,
            phoneNumber: this.state.phoneNumber,
               building: this.state.building,
                  floor: this.state.floor,
                  otype: this.state.otype,
                 number: this.state.number
        };
    
        // Add item via addItem action
        this.props.addLocation(newLocation);
    }
    // handleSubmit = event => {
    //         console.log('running')
    //     event.preventDefault();
    //     axios.post('/Api/locations', {
    //               email: this.state.email,
    //         phoneNumber: this.state.phoneNumber,
    //            building: this.state.building,
    //               floor: this.state.floor,
    //               otype: this.state.otype,
    //              number: this.state.number
    //     })
    //     // .then( (response) => {
    //     //     console.log(response)
    //     //     this.setState({...this.state,redirect: true});
    //     //     // this.props.login(this.state.username);
    //     // })
    //     .catch(function (error) {
    //         console.log(error);
    //         });
    // }

    render() {
        return (
            <div className="mx-auto" style={{maxWidth: 500, backgroundColor: '#CBC796'}}>
               
                <p>Where Are You?</p><br />

                <Form className="mx-3 mt-5" onSubmit={this.onSubmit}>
                    
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="XXXXXXXXXX" onChange={this.onChange}/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridBldg">
                            <Form.Label>Building</Form.Label>
                            <Form.Control as="select" onChange={this.onChange}>
                                <option>Which Building</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridType">
                            <Form.Label>Floor</Form.Label>
                            <Form.Control as="select" onChange={this.onChange}>
                                <option>Which Floor</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridType">
                            <Form.Label>oType</Form.Label>
                            <Form.Control as="select" onChange={this.onChange}>
                                <option>Office</option>
                                <option>Cubicle</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" onChange={this.onChange}/>
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
const mapStateToProps = state => ({
    location: state.location
})
   
// //props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         register: (username) => dispatch({type: "REGISTER", username: username}),
//     }
// }
   
// export default connect(mapStateToProps, mapDispatchToProps)(Register)
export default connect(mapStateToProps, { addLocation } ) (Info);
