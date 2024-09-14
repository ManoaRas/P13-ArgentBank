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
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          {token && user.firstName ? (
            <>
              <NavLink className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle" />
                {user.firstName}
              </NavLink>

              <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                <i className="fa fa-sign-out" />
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink className="main-nav-item" to="/login">
              <i className="fa fa-user-circle" />
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}
