import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home';
import Login from '../Components/Auth/Login';
import EmployeeP from '../Components/Profile/EmployeeP';
import MailRoomP from '../Components/Profile/MailRoomP';
import Register from '../Components/Auth/Register'
import About from '../Components/About/About'
// import Logout from '../Components/Auth/Logout'

import { Provider } from 'react-redux';
import store from '../Store/store';
import { loadUser } from '../Actions/authActions';


class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}><Router>
      <div className="App">
      <Navbar />
      <br></br>
      <Switch>
        <Route path="/employeep" component={EmployeeP} />
        <Route path="/mailroomp" component={MailRoomP} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        {/* <Route path="/" component={Logout} /> */}
        <Route path="/" component={Home} />
      </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
