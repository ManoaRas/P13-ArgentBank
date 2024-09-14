import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { selectCurrentToken } from "../features/authSlice"

import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export function App() {
  const token = useSelector(selectCurrentToken)

  const PrivateRoute = ({ element }) => {
    return token
      ? element
      : <Navigate to='/login' replace={true} />
  }

  const PublicRoute = ({ element }) => {
    return token
      ? <Navigate to='/profile' replace={true} />
      : element
  }

  return (
    <>
      <Header />

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<PublicRoute element={<Login />} />} path='/login' />
          <Route element={<PrivateRoute element={<Profile />} />} path='/profile' />
        </Routes>

      <Footer />
    </>
  )
}
