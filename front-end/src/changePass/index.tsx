import React from 'react'
import { useStyle } from './styled'
import { PasswordField } from '../textFields'
import { useChangePass } from './hooks/useChangePass'
import { ButtonForm } from '../buttons'
import { Redirect } from 'react-router-dom'

export const ChangePass = ({
  match: {
    params: { token },
  },
}) => {
  const { savePass, passError, sendChangePass, error, updateUser } = useChangePass(token)
  const { root, text, textDistinction } = useStyle()

  if (updateUser.userId) {
    return <Redirect to="/user-info" />
  }
  if (error === 'Unauthorized') {
    return <Redirect to="/unauthorized" />
  }
  return (
    <div className={root}>
      <p className={text}>
        Change <span className={textDistinction}>Password</span>
      </p>
      <PasswordField label="password" savePassword={savePass} validation={passError} />
      <ButtonForm label="update" sendFormData={sendChangePass} />
    </div>
  )
}
