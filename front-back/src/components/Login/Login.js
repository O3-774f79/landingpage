import React, { useState } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./Login.css";
import { login } from '../../utils';
const FormItem = Form.Item;


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    login();
    props.history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">Submit</button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
    // <div className="Login">
    //   <form onSubmit={handleSubmit}>
    //     <FormGroup controlId="email" bsSize="large">
    //       <ControlLabel>Email</ControlLabel>
    //       <FormControl
    //         autoFocus
    //         type="email"
    //         value={email}
    //         onChange={e => setEmail(e.target.value)}
    //       />
    //     </FormGroup>
    //     <FormGroup controlId="password" bsSize="large">
    //       <ControlLabel>Password</ControlLabel>
    //       <FormControl
    //         value={password}
    //         onChange={e => setPassword(e.target.value)}
    //         type="password"
    //       />
    //     </FormGroup>
    //     <Button block bsSize="large" disabled={!validateForm()} type="submit">
    //       Login
    //     </Button>
    //   </form>
    // </div>
  );
}
