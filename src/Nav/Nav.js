import React from 'react'
import './Nav.css'
import AuthModal from './Admin/Authentication/Authentication'
import RegisterModal from './Student/RegisterModal'

const Nav = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <ul className = "nav-links navbar-nav mr-auto">
                <li data-toggle="modal" data-target="#registerModal" className="btn-lg btn-outline-success"> Student Registration </li>
                <RegisterModal />
                <li data-toggle="modal" data-target="#authModal"  className="btn-lg btn-outline-primary"> Adminastration </li>
                <AuthModal  onchangeUser={props.onchangeUser}
                            onchangePassword={props.onchangePassword}
                            onSubmit={props.onSubmit} />
            </ul>

        </nav>
    );
}

export default Nav;