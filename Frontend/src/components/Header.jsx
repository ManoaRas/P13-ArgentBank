import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

import logo from '../assets/logos/argent-bank.png'

import { clearToken, selectCurrentToken } from "../features/authSlice"
import { clearUser, selectCurrentUser } from "../features/userSlice"

export function Header() {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)

  // Disconnect and clear all data
  const handleSignOut = () => {
    dispatch(clearToken())
    dispatch(clearUser())
    localStorage.clear()
  }

  return (
    <header>
      <nav className="nav">
        <Link className="nav--logo" to="/">
          <img src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {token && user.firstName ? (
          <div className="nav--profile">
            <NavLink className="nav--item" to="/profile">
              <i className="fa fa-user-circle"></i>
              <span>{user.firstName}</span>
            </NavLink>

            <NavLink className="nav--item" to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              <span>Sign Out</span>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink className="nav--item" to="/login">
              <i className="fa fa-user-circle"></i>
              <span>Sign In</span>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}
