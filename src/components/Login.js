import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { signIn } from '../store/actions/authActions';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div>
                <section className="login_box_area">
                    <div className="row">
                        <div className="col-lg-6 img-box">
                            <div className="login-box-img">
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <Link className="primary-btn white" to="/signup">Create an Account</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-form-inner">
                                <h3>Log in to enter</h3>
                                <form className="row login_form" id="loginForm" method="POST" onSubmit={this.handleSubmit}>
                                    <div className="col-md-12 form-group">
                                        <input type="email" className="form-control" id="email" name="email"
                                            placeholder="E-mail" onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" id="password" name="password"
                                            placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Log In</button>
                                        {/* <!-- <a href="#">Forgot Password?</a> --> */}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>

                <Link to="/" className="home-btn">Home</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);