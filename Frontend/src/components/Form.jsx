import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setLogin, setUser, setToken } from "../features/actionTypes"
import { login, userInfos } from "../features/api"

export function Form() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState(localStorage.getItem('email') || '')
  const [password, setPassword] = useState(localStorage.getItem('password') || '')
  const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberMe') === 'true')
  const [errorSignInMessage, setErrorSignInMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await login({ email: email, password: password })

      if (resp.status === 200) {
        const profile = await userInfos(resp.body.token)
        const data = await profile.body

        dispatch(setLogin(true))
        dispatch(setToken(resp.body.token))
        dispatch(setUser(data))

        navigate('/profile')

        console.log(data)
        console.log(resp.body.token)

        if (rememberMe) {
          localStorage.setItem('email', email)
          localStorage.setItem('password', password)
          localStorage.setItem('rememberMe', true)
        } else {
          localStorage.removeItem('email')
          localStorage.removeItem('password')
          localStorage.removeItem('rememberMe', false)
        }
      } else if (resp.status === 400) {
        setErrorSignInMessage(true)
        navigate('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div class="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div class="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button" type="submit">Sign in</button>

      {errorSignInMessage && <p>Error in Email or Password ! Try again !</p>}
    </form>
  )
}
