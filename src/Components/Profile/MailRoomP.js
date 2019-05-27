import React, { Component } from "react"
// import axios from "axios";
// import { BrowserRouter as Route, Link } from "react-router-dom";
// import {Redirect} from 'react-router-dom'
import Searcher from '../Forms/Searcher'
import './Profile.css'


class MailRoomP extends Component {
    constructor() {
        super();
        this.state = {
            users: {}
        }
        this.onClick = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        e.preventDefault();
        
    }
    
    

    
    // // axios calls
    // componentDidMount () {
    //     axios.get(/users/status )
    //     .then(response => {
    //         this.setState({username: response.data.username});
    //         console.log(response);
    //     });
    // };

    render() {

    // if (!this.state.username) {
    //         return <Redirect to='/Login'/>
    //     }
        return (
            <div id="profile">
                <h1 style={{marginTop: 0, marginBottom: 0}}>Welcome {this.state.users.userame}</h1>
                <div className = 'container'>
                    <Searcher />
                </div>
            </div>
        )

    }
}
export default MailRoomP;