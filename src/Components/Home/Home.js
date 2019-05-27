import React from "react"
import { Button } from 'react-bootstrap';
import './Home.css'

const home = () => {
    return (
        <div className= "container">
            <div>
                <h1 >Where in the Bureau?</h1>
                <hr />
                <h2>  
                    Finding employees just got <strong>EASIER!</strong>
                </h2>
                <br />
                <p>
                Go ahead! Login, lets take it for a spin.
                <Button className='letsgo'><a href='../Login/Login.js'>Login</a></Button>
                </p>
            </div>
        </div>
    )
}
export default home;