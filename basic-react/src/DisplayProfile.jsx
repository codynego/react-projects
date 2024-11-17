import React from 'react'

export const DisplayProfile = ({profileInfo}) => {
  return (
    <div>
        <h1>hello {profileInfo.name}</h1>
        <p>you are {profileInfo.age} years old</p>
    </div>
  )
}
