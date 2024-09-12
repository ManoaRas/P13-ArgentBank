import { Route, Routes } from "react-router-dom"

import { Header } from "./components/Header"

import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"

export function App() {
  return (
    <>
      <main>
        <Header />

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Profile />} path='/profile' />
        </Routes>
      </main>
    </>
  )
}
