import React from 'react'
import { DisplayProfile } from './DisplayProfile'
import { useState } from 'react'

export const Profile = ({profileInfo, setProfileInfo}) => {
    const [name, setName] = useState(profileInfo.name)
    const [age, setAge] = useState(profileInfo.age)

    const updateProfile = (e) => {
       setProfileInfo({"name": name, "age": age})
    }
  return (
    <div>
        <div>
            <input placeholder='enter your name' value={name} type='text' onChange={(e) => {setName(e.target.value)}}/>
            <input placeholder='enter your age' value={age} type='text' onChange={(e) => {setAge(e.target.value)}}/>
            <button onClick={updateProfile}>Update Profile</button>
        </div>
        <DisplayProfile profileInfo={profileInfo}/>
    </div>
  )
}
