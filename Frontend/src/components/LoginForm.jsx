// REACT FORM
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

// RTK SLICES
import { setToken } from '../features/authSlice'
import { useSignInMutation } from '../services/api'

// COMPONENTS
import { InputForm } from './InputForm'
import { CheckboxForm } from './CheckboxForm'

export function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signIn] = useSignInMutation()

  // Validation scheme for Form
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'At least 8 characters')
      .required('Required'),
    rememberMe: Yup.boolean().default(false)
  })

  // Init value
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  }

  const handleSubmit = async (value) => {
    try {
      const res = await signIn(value) // Call API

      if (res.data && res.data.status === 200) {
        // Store Token
        dispatch(setToken({
          token: res.data.body.token,
          rememberMe: value.rememberMe
        }))

        navigate('/profile', { replace: true })
      } else {
        console.error(`${res.error.data.message}`)
      }
    } catch (err) {
      console.error('SignIn failed', err)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputForm label='Email' name='email' type='email' />

        <InputForm label='Password' name='password' type='password' />

        <CheckboxForm name='rememberMe'>Remember me</CheckboxForm>

        <button className="signin__button" type="submit">Sign in</button>
      </Form>
    </Formik>
  )
}
