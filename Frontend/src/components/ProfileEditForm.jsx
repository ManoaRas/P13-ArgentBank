import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// RTK SLICES
import { selectCurrentRememberMe } from "../features/authSlice";
import { selectCurrentUser, setName } from "../features/userSlice";
import { useSetUserNameMutation } from "../services/api";

export function ProfileEditForm({ pattern, title }) {
  // RTK methods
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const rememberMe = useSelector(selectCurrentRememberMe)
  const [setUserName] = useSetUserNameMutation()

  // Local data
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ firstName: '', lastName: '' })
  const { firstName, lastName } = formData

  // Update user infos when data are modified
  useEffect(() => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName
    })
  }, [user])

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (user.firstName !== firstName || user.lastName !== lastName) {
      try {
        const res = await setUserName(formData) // Call API
        if (res.data) {
          dispatch(setName({ ...formData, rememberMe }))
        } else {
          console.error(`${res.error.data.message}`)
        }
      } catch (err) {
        console.error('Change name failed', err)
      }
    } else {
      console.error('Names has not changed')
    }

    setIsOpen(false)
  }

  return (
    <>
      {isOpen
        ? (
          <form className="header-edit-form" onSubmit={handleSubmit}>
            <div className="">
              <input
                className=""
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleChangeInput}
                pattern={pattern}
                title={title}
              />

              <button className="" type="submit" onClick={handleSubmit}>
                Save
              </button>
            </div>

            <div className="">
              <input
                className=""
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleChangeInput}
                pattern={pattern}
                title={title}
              />

              <button className="" type="reset" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button className="header-edit-button" onClick={() => setIsOpen(true)}>
            Edit Name
          </button>
        )
      }
    </>
  )
}
