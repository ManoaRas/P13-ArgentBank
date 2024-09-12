import { Link, NavLink } from "react-router-dom"

import logo from '../assets/logos/argent-bank.png'

export function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <h1>
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          </h1>
        </Link>

        <div>
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
