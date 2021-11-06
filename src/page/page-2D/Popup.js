import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import "./Popup.css";

import img from '../../assets/img/popup_2564.png';
import paper from '../../assets/img/paper.png';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
  
    openModal() {
        this.setState({
            visible : true
        });
    }
  
    closeModal() {
        this.setState({
            visible : false
        });
    }
  
    render() {
        return (
            <section>
                
                <input className="popupicon" type="button" value="Depth Map" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="ImgMap-area">
                        <div className="row ImgMap">
                            <div className="col-8">
                                <img  src={img} width="500px"/>
                                
                                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                            </div>
                            <div className=" col-4">
                                <br/>
                                <p className="head-Data">Deep Data</p>
                            <img  src={paper} width="200px" margin-left="20"/>
                                
                            </div>
                            
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
  }
        