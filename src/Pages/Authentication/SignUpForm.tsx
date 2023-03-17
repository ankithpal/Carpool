import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from  'axios';
import "./signupform.scss";

type SignUpFromType = {
  signup: boolean;
};
export const SignUpForm = ({ signup }: SignUpFromType) => {
  
   const loginUser= async (e : any)=>{
       e.preventDefault();
       console.log('ksfjslafl');
       await axios.post('https://localhost:7256/signup',{
        "id": 0,
        "name": "ankith",
        "phoneNo": "9738529",
        "email": "a@gmail.com",
        "password": "12"
      }).then((res:any)=>{console.log(res.status)});
   }
  return (
    <div
      className={`signupform d-flex align-items-center justify-content-center w-100 ${signup ? 'orange-shade-bg' : 'violet-shade-bg'}`}>
      <div className="inner-signupform  h-100 mt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="signup-header d-flex align-items-center justify-content-center">
          {signup == true ? <h1>Sign Up</h1> : <h1>Log In</h1>}
        </div>
        <div className="mt-5 signup-form">
          <Form>
            <Form.Group
              className="mb-3 input-feild form-floating"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter Email Id"
                className="pt-3 pb-3 form-input"
              />
              <label htmlFor="email" className="text-muted">
                Enter the Email Id
              </label>
            </Form.Group>
            <Form.Group
              className="mb-3 input-feild form-floating"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                className="pt-3 pb-3"
              />
              <label htmlFor="password" className="text-muted">
                Password
              </label>
            </Form.Group>
            {signup == true && (
              <Form.Group
                className="mb-3 input-feild form-floating"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  id="conformpassword"
                  placeholder="Conform Password"
                  className="pt-3 pb-3"
                />
                <label htmlFor="confrompassword" className="text-muted">
                  Conform Password
                </label>
              </Form.Group>
            )}
            <div className="signup-button d-flex align-items-center justify-content-center w-100">
              <Button
                variant="primary"
                type="submit"
                className={`${signup ? 'violet-shade-bg' : 'orange-shade-bg'}`}
                onClick={loginUser}
                >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        {signup && (
          <div className="signup-text d-flex align-items-center justify-content-center">
            <p>Already a member?</p>
            <p className="login-text">
              <Link to="/login">
                {" "}
                Log In
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
