import './About.css';
import React, { Component } from 'react';
import button from 'react-bootstrap/Button';



export default class About extends Component {

  render() {
    return (
      <div className="bg">
        <div className="container-login" >
          <div className="row" style={{ width: '100%' }}>
            <div className="card card-login-content col-12">
              {/* <p className="font-h1" style={{ marginTop: 50 }}>About</p> */}
              <div>
                <p className="font-h2-about">development team</p>
              </div>

              <div className="font-content-about" style={{ padding: 75 }}>
                <div className="row">
                  <div className="bg-cardcontent">
                  <div className="TeamA cal"/>
                  <p className="Name-TeamA" > Mr. Supakorn Puangpipat</p>
                  <p className="Name-TeamA-text" >developer</p>

                  </div>
                  <div className="bg-cardcontent">
                  <div className="TeamC cal" />
                  <p className="Name-TeamB" > Dr. Sukchatri Prasomsuk</p>
                  <p className="Name-TeamB-text" > Advisor</p>

                  </div>
                  <div className="bg-cardcontent">
                  <div className="TeamB cal" />
                  <p className="Name-TeamC" > Mr. Aumarin koranee</p>
                  <p className="Name-TeamC-text" >developer</p>

                  </div>
                </div>


                {/* <div className="row img-block">
                  
                  <div className="TeamA cal"/>
                  
                  <div className="TeamC cal" />
                  <div className="TeamB cal" />

                  
                </div> */}


                {/* <diV className="row">
                  <p className="Name-TeamA" > Mr. Supakorn Puangpipat</p>
                  <p className="Name-TeamB" > Dr. Sukchatri Prasomsuk</p>
                  
                  <p className="Name-TeamC" > Mr. Aumarin koranee</p>
                </diV>
                <diV className="row">
                  <p className="Name-TeamA-text" >developer</p>
                  <p className="Name-TeamB-text" > Advisor</p>
                  
                  <p className="Name-TeamC-text" >developer</p>
                </diV> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

