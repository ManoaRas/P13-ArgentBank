import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// COMPONENTS
import { ProfileAccounts } from "../components/ProfileAccounts"
import { ProfileEditForm } from "../components/ProfileEditForm"

// RTK SLICES
import { selectCurrentRememberMe } from "../features/authSlice"
import { selectCurrentUser, setUser } from "../features/userSlice"
import { useGetUserMutation } from "../services/api"

export function Profile() {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const rememberMe = useSelector(selectCurrentRememberMe)
  const [getUser] = useGetUserMutation()

  useEffect(() => {
    async function fetchData() {
      const resp = await getUser() // Call API

      if (resp.data && resp.data.status === 200) {
        dispatch(setUser({
          email: resp.data.body.email,
          firstName: resp.data.body.firstName,
          lastName: resp.data.body.lastName,
          rememberMe
        }))
      }
    }

    fetchData()
  }, [dispatch, getUser, rememberMe])

  return (
    <main className="main profile bg-dark">
      <div className="profile--header">
        <h1>
          Welcome back
          <br />
          {user?.firstName && `${user.firstName} ${user.lastName}`}
        </h1>

        <ProfileEditForm
          pattern="^[A-ÿ]{2,}[A-ÿ\-\s]*$"
          title="Two or more characters"
        />
      </div>

      <ProfileAccounts />
    </main>
  )
}
