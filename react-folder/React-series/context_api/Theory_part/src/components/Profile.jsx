import { useContext } from "react"
import React from 'react'
import { userContext } from "../context/UserContext"


const Profile = () => {

    const {user} = useContext(userContext);

  if(!user) return <div>Please login</div>

  return <div>Welcome {user.userName} </div>
}

export default Profile