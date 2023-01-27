import React from 'react'
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Category from '../category/Category';
import './about.css'
import UserContext from '../../context/UserContext';
import ImgFacebook from '../../assets/Facebook.svg'
import ImgTwitter from '../../assets/Twitter.svg'
import ImgInstagram from '../../assets/Instagram.svg'
import ImgGitHub from '../../assets/Github.svg'

export default function About() {
  const { userId } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState(undefined)
  const snsImgs = { ImgFacebook, ImgTwitter, ImgInstagram, ImgGitHub }
  useEffect(() => {
    axios.get(`http://localhost:3001/user/${userId}`)
      .then(res => setUserInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(userInfo)
  return (
    <>
      {userInfo === undefined ? <div>about</div> :
        <aside className="about">
          <h2>About Me</h2>
          <img src={userInfo.profileImg} alt="" className="user-profile" />
          <p className="user-name">{userInfo.name}</p>
          <p className="user-description">{userInfo.userInfo}</p>
          <h3>Categories</h3>
          <ul className="categories">
            <Category categories={userInfo.category}/>
          </ul>
          <h3>Follow</h3>
          <ul className="sns">
            {Object.keys(userInfo.sns).map((s, i) =>
              <li key={i}>
                <Link to={userInfo.sns.s}>
                  <img src={snsImgs['Img'+ s]} />
                </Link>
              </li>
            )}
          </ul>
        </aside>
      }</>)
}
