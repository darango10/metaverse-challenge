import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis()
  return (
    <Image
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.getUsername()
      }.svg`}
      layout="fill"
      onClick={logoutOnPress && logout}
    />
  )
}

export default Avatar
