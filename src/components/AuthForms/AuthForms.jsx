import { useState, useContext } from "react"
import { Tab, Tabs } from "react-bootstrap"
import LogInForm from "../LogInForm/LogInForm"
import SignUpForm from "../SignUpForm/SignUpForm"


const AuthForms = () => {

    return (
            <Tabs defaultActiveKey="Forms" id="fill" className="mb-3" justify>
                <Tab eventKey="login" title="Log In">
                    <LogInForm />
                </Tab>
                <Tab eventKey="signup" title="Sign Up">
                    <SignUpForm />
                </Tab>
            </Tabs>
  )
}

export default AuthForms
        