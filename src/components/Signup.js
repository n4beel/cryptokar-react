import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';

class Signup extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        phone: '',
        cnic: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signUp(this.state)
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
                        <div className="col-lg-6">
                            <div className="login-box-img">
                                <div className="hover">
                                    <h4>Already a user?</h4>
                                    <Link className="primary-btn white" to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-form-inner">

                                <h3>Sign Up</h3>
                                <form method="POST" className="row login_form" onSubmit={this.handleSubmit}>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="email" className="form-control" id="email" name="email"
                                            placeholder="E-mail" onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" id="password" name="password"
                                            placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone No." onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="number" className="form-control" id="cnic" name="cnic" placeholder="CNIC No." onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Sign Up</button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup) 