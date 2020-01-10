import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Table from "./Nav/Admin/Record/Table";
import Auth from './Nav/Admin/Authentication/Authentication'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        authinticate : false,
        rejected: false,
        username: "",
        password: ""
    }
  }
  login = (val) => {
    console.log(this.state.username);
    console.log(this.state.password);
    const res = val;
    if (res) {
      this.setState({authinticate : true});
      this.setState({ rejected : false });
    }
    else{
      this.setState({authinticate : false});
      this.setState({ rejected : true });
    }
  }

  render () {
    return (
      <div>
        <Nav 
          onchangeUser={(event) => {
            this.setState({username : event.target.value}) }}
          onchangePassword={(event) => {
            this.setState({password : event.target.value}) }}  //send false or true as dummy value on login() function at onSubmit property to check login action 
          onSubmit= {() => this.login(true)}  /> 
        {this.state.authinticate
          ? <Table logout={ () => { 
            alert('You are logged out')
            this.setState({authinticate : false});
                                     } } />
          :this.state.rejected 
                ? <Auth login= {() => this.login()} rejected={this.state.rejected} /> : <Auth login= {() => this.login()} /> }
      </div>
      
    );
  }
}

export default App;
