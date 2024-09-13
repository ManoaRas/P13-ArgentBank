import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { selectCurrentToken } from "../features/authSlice"

import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export function App() {
  const PrivateRoute = ({ element }) => {
    const token = useSelector(selectCurrentToken)
    return token ? element : <Navigate to='/login' />
  }

  return (
    <>
      <Header />

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<PrivateRoute element={<Profile />} />} path='/profile' />
        </Routes>

      <Footer />
    </>
  )
}
