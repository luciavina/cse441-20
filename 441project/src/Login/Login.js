import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../MakePrediction/Prediction.css";
import home from "../Home.PNG";
import star from "../components/WhiteStar.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {netId: ''};
  }
  
  componentDidMount() {
    alert("For purposes of this demo: those without a UW NetID, or those who wish not to use their UW NetID, use frankieo.");
  }

  handleChange = event => {
    this.setState({netId: event.target.value});
  };

  render() {
    return (
      <div>
      <div className="home">
        <Link to={{
          pathname: '/'
        }}>
          <Button><img src={home} alt="Home" /></Button>
        </Link>
      </div>
      <div className="controlbutton">
        <div className="top">
          <h1>MAKE YOUR PREDICTIONS</h1>
        </div>
        <div className="predInfo">
          <p>Make your predictions as to which athletic teams will win their weekly face off.</p>
          <p>Choose as many or as few teams as you want.</p>
          <p>Check back in next week to see how your predictions compare to the real results!</p>
          <h6><b>*Restricted to students and faculty of University of Washington</b></h6>
        </div>
        <h2>Enter Your UW NetID</h2>
        <br/>
        <form name="idForm">
          <input type="text" ref="id" name="netId" value={this.state.netId} onChange={this.handleChange}
            placeholder={"Ex. John123"}/>
        </form>
        <br/>
        {!this.state.netId ?
          <div>
            <Button>Login</Button>
            <p>*Must enter your netID</p>
          </div>
        :
          <Link to={{
            pathname: '/MakePrediction',
            state: {
              netId: this.state.netId
            }
          }}>
            <Button>Login</Button>
          </Link>
          }
      </div>
      </div>
    );
  }
}

export default Login;