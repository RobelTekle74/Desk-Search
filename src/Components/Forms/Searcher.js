import React from 'react';
import { Button, Form } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';
// import { connect } from 'react-redux';



const Searcher = () => {

    return (
        <div className="mx-auto" style={{maxWidth: 500, backgroundColor: '#CBC796'}}>
            <Form className="mx-5 mt-5">
                <Form.Group controlId="exampleForm.ControlInput1" /* onChange = */ >
                    <Form.Label>Employee name</Form.Label>
                    <Form.Control type="text" placeholder="First and Last name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1" /* onChange = */ >
                    <Form.Label>Building</Form.Label>
                    <Form.Control as="select">
                        <option>Which Building</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2" /* onChange = */ >
                    <Form.Label>Floor</Form.Label>
                    <Form.Control as="select">
                        <option>Which Floor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
                {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Number</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group> */}
            </Form>
        </div>
    )
}
export default Searcher;