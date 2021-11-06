import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import "./map.css";

import img from '../../assets/img/Last_61.jpg';
import paper from '../../assets/img/paper2561.png';
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
                
                <input className="popupicon" type="button" value="POPUP" onClick={() => this.openModal()} />
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
                                <p className="head-Data">ข้อมูลระดับความลึก</p>
                            <img  src={paper} width="200px" margin-left="20"/>
                                
                            </div>
                            
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
  }
        