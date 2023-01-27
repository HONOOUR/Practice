import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './postDetails.css'

export default function PostDetail() {
  const [post, setPost] = useState(undefined)
  const location = useLocation()
  const number = location.pathname.split('/')[2]

  useEffect(() => {
    axios.get(`http://localhost:3001/post/${number}`)
    .then(res => setPost(res.data))
    .catch(error => setPost(undefined))
  }, [])
  console.log(post)

  return (
    <div>
      {post === undefined ? 
        <div>loading</div> : post === null?
        <div>error..</div> : <div>{post.title}</div>}
    </div>
  )
}
