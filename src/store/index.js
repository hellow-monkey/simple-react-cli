import { useState } from 'react'
import { createModel } from 'hox'

function useToken () {
  const [token, setToken] = useState(null)
  return {
    token,
    setToken
  }
}

function useUser () {
  const [user, setUser] = useState(null)
  return {
    user,
    setUser
  }
}

export const useTokenModel = createModel(useToken)
export const useUserModel = createModel(useUser)
