import { LoginForm } from '../components/LoginForm'

export function Login() {
  return (
    <main className="main signin bg-dark">
      <section className="signin--content">
        <i className="fa fa-user-circle signin__icon"></i>

        <h1>Sign in</h1>

        <LoginForm />
      </section>
    </main>
  )
}
