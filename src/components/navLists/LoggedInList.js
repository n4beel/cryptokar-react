import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const LoggedInList = props => {
    let { profile } = props;
    return (
        <li className="nav-item submenu dropdown">
            <button className="nav-link dropdown-toggle name-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="displayName">{profile.name} <i className="fa fa-caret-down"></i></button>
            <ul className="dropdown-menu dropdown-custom">
                <li className="nav-item"><Link className="nav-link" to="/createAd">Add a Vehicle</Link></li>
                <li className="nav-item"><button className="nav-link name-dropdown" onClick={props.signOut}>Log Out</button></li>
            </ul>
        </li>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInList);
