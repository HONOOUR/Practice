import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import About from '../about/About'
import Category from '../category/Category'
import Author from './../author/Author';
import Post from '../post/Post';
import './main.css'

export default function Main(props) {
  const { isLogin } = useContext(UserContext)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/post")
      .then(res => setPosts(res.data))
      .catch(error => console.log('error', error))

  }, [])
  if (posts === []) {
    return <main>main</main>
  } else {
    return (
      <main>
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            {posts !== [] ? posts.map(post =>
              <Post post={post} />
            ) : null
            }
          </ul>
          {isLogin ? <About  /> : null}
        </div>
      </main>
    )
  }
}
