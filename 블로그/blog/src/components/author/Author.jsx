import React from 'react'
import './author.css'
export default function Author({username, created, profileImg }) {
  return (
    <dl className='author-wrap'>
      <dt className='a11y-hidden'>{username}</dt>
      <dt className='author'>
        <img src={profileImg}/>
      </dt>
      <dt className='created'>{created}</dt>
    </dl>
  )
}
