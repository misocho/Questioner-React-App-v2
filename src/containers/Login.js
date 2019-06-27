import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Alert } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import actionTypes from "../actions/actionTypes"

import { display_message, set_token } from "../actions/message";
import { login } from "../actions/auth";
import '../css/input.css';

export class UnconnectedLoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }


    onDismiss = () => {
        const { display_message } = this.props
        display_message({ visible: false });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }


    handleSubmit = loginfn => event => {
        const { set_token, history } = this.props;

        event.preventDefault();
        loginfn(this.state, this.props).then(token => {
            if (token) {
                set_token(token)
                history.push("/")
            }
        })
    }

    render() {
        const { messageBox } = this.props;
        const { username, password } = this.state;
        return (
            <div className="container">
                <div className="form-container" data-test="component-login">
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
                            <div className="welcome-text">Hi</div>
                            <div className="page-text">Login</div>
                        </div>
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit(login)} data-test='form-test'>
                                <div className="textbox">
                                    <input
                                        value={username}
                                        onChange={this.handleChange}
                                        type="text"
                                        placeholder="Username"
                                        autoComplete="username"
                                        name="username"
                                        id="username"
                                    />
                                </div>

                                <div className="textbox">
                                    <input
                                        value={password}
                                        onChange={this.handleChange}
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        name="password"
                                        id="password"
                                    />
                                </div>
                                <div className="account page-text">
                                    Don't have an account? <NavLink to="/signup">Signup</NavLink>
                                </div>
                                <div className="button">
                                    <input
                                        id="signin-btn"
                                        className="signup-btn"
                                        type="submit"
                                        name="submit"
                                        value="Signin"
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

// const mapDispatchToProps = (dispatch) => {

//     return {
//         display_message: (message) => dispatch(display_message(message)),
//         set_token: token => dispatch({
//             type: actionTypes.LOGIN,
//             payload: token
//         })
//     }
// }
export default withRouter(
    connect(
        mapStateToProps,
        {
            display_message,
            set_token
        }
    )(UnconnectedLoginComponent)
);