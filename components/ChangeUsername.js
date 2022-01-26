import React from 'react'
import { useMoralis } from 'react-moralis'

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    )

    if (!username) return

    setUserData({ username })
  }

  return (
    <div className="absolute top-5 right-5 text-sm">
      <button
        onClick={setUsername}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change Username
      </button>
    </div>
  )
}

export default ChangeUsername
