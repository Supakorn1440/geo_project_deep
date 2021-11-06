import React, { Component } from 'react';
import './login.css';
import button from 'react-bootstrap/Button';



export default class Login extends Component {
        
   render() { 
       
      // constructor(props){
      //   super(props)
      //   this.state = {
      //     username: '',
      //     password: ''
      //   }
      // }

      // onchangeUsername = (e) =>{
      //   this.setState({username: e.target.value })
      // }
      // onchangePassword = (e) =>{
      //   this.setState({password: e.target.value })
      // }

      // onSubmit = (e) => {
      //   e.preventDefault();

      //   console.log("test ra bob")
      //   console.log(`Name: ${this.state.username}`)
      //   console.log(`Name: ${this.state.password}`)

      //   this.setState({
      //     username: '',
      //     password: ''
      //   })
      // }

    return (
      <div className="bg">
        <div className="container-login" >
          
          <div className="row" style={{ width: '100%' }}>
            
            <div className="card card-login-content col-12">
            <div className="row">
                  <div className="img-center">
                    <div className="logoUP " ></div>
                  </div>
                </div>
              <p className="font-h1" style={{ marginTop: 50 }}>HYDROGRAPHIC MAP SYSTEM <br /> (ARNG LUANG IN UNIVERSITY OF PHAYAO)</p>
              
              <div className="font-content" >
                <p className="font-data">VERSION 1.0</p>
                <p className="font-data">OCT.2021</p>
                <p className="font-data">INFORMATION TECHNOLOGY</p>
                <p className="font-data">SCHOOL OF INFORMATION AND COMMUNICATION TECHNOLOGY</p>
                <p className="font-data">UNIVERSITY OF PHAYAO</p>
                <a className="btn btn-login-login" href="/map2D" >GET START</a>
              </div>
                
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

