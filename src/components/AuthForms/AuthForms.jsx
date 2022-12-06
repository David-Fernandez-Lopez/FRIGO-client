import { useState, useContext } from "react"
import { Tab, Tabs } from "react-bootstrap"
import LogInForm from "../LogInForm/LogInForm"
import SignUpForm from "../SignUpForm/SignUpForm"

import './AuthForms.css'


const AuthForms = () => {

    return (
            <Tabs defaultActiveKey="Forms" id="fill" className="forms mb-3" justify>
                <Tab className="login" eventKey="login" title="Log In">
                    <LogInForm />
                </Tab>
                <Tab className="signup" eventKey="signup" title="Sign Up">
                    <SignUpForm />
                </Tab>
            </Tabs>
  )
}

export default AuthForms
        