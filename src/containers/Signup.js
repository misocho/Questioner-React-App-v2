import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Alert } from "reactstrap";
import { connect } from "react-redux";

import { display_message } from "../actions/message";
import { signup } from "../actions/auth";
import '../css/input.css';

export class UnconnectedSigupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstname: "",
            lastname: "",
            othername: "",
            username: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss = () => {
        const { display_message } =this.props;
        display_message({ visible: false });
    }

    handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
    };

    handleSubmit = signupfn => event => {
        const {
            password,
            confirmPassword
        } = this.state;
        event.preventDefault();

        if (password !== confirmPassword) {
            let message = {
                message: "Passwords do not match",
                color: "danger",
                visible: true
            };
            display_message(message);
        } else {
            signupfn(this.state, this.props)
        }
    }

    render() {
        const { messageBox } = this.props;
        const {
            email,
            firstname,
            lastname,
            othername,
            username,
            phoneNumber,
            password,
            confirmPassword
        } = this.state;
        return (
            <div className='container'>
                <div className="form-container" data-test="component-signup">
                    {messageBox.visible && (
                        <Alert
                            color={messageBox.color}
                            isOpen={messageBox.visible}
                            toggle={this.onDismiss}
                        >
                            {messageBox.message}
                        </Alert>
                    )}

                    <div className="login-box">
                        <div className="welcome-box">
                            <div className="welcome-text">Welcome</div>
                            <div className="page-text">Create Account</div>
                        </div>
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit(signup)}>
                                <div className="textbox">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        autoFocus
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        type="text"
                                        placeholder="Firstname"
                                        id="firstname"
                                        name="firstname"
                                        value={firstname}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        type="text"
                                        placeholder="Lastname"
                                        name="lastname"
                                        id="lastname"
                                        value={lastname}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        type="text"
                                        placeholder="Othername"
                                        name="othername"
                                        id="othername"
                                        value={othername}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="textbox">
                                    <input
                                        data-test='username-input'
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        value={username}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        type="number"
                                        placeholder="Phonenumber"
                                        name="phoneNumber"
                                        id="phonenumber"
                                        value={phoneNumber}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        autoComplete="new-password"
                                        data-
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        id="confirm-password"
                                        autoComplete="new-password"
                                        value={confirmPassword}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="account page-text">
                                    Already have an account? <NavLink to="/login">Login</NavLink>
                                </div>
                                <div className="button">
                                    <input
                                        id="signup-btn"
                                        className="signup-btn"
                                        type="submit"
                                        name="submit"
                                        value="Create Account"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messageBox: state.messageBox
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {
            display_message
        }
    )(UnconnectedSigupComponent)
);