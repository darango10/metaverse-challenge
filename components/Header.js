import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

const Header = () => {
  const { user } = useMoralis()

  return (
    <div className="sticky top-0 z-50 border-b-2 border-pink-700 bg-black p-5 text-pink-500 shadow-sm">
      <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            className="rounded-full"
            objectFit="cover"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto">
            <Avatar logoutOnPress={true} />
          </div>
          <h1 className="text-3xl">Welcome to the PAPAFAM Metaverse</h1>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
