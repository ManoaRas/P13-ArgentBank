import { Route, Routes } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { Login } from "./pages/Login"
// import { Home } from "./pages/Home"
// import { Profile } from "./pages/Profile"

export function App() {
  return (
    <>
      <Header />

        <Routes>
          {/* <Route element={<Home />} path='/' /> */}
          <Route element={<Login />} path='/login' />
          {/* <Route element={<Profile />} path='/profile' /> */}
        </Routes>

      <Footer />
    </>
  )
}
