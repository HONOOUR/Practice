import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import ImgLogo from '../../assets/Logo.svg'
import ImgLogin from '../../assets/icon-login.svg'
import ImgLoutout from '../../assets/icon-logout.svg'
import ImgRegister from '../../assets/icon-register.svg'
import './header.css'


export default function Header() {
  const { isLogin, userId } = useContext(UserContext)
  const [profileImage, setProfileImage] = useState(undefined)

  const getProfileImage = (id) => {
    axios.get(`http://localhost:3001/user/${id}`)
      .then(res => setProfileImage(res.data.profileImg))
      .catch(error => setProfileImage(null))
  }

  useEffect(() => {
    getProfileImage(userId)
  }, [])

  return (
    <header>
      <div className='max-width'>

        <h1>
          <Link to="/">
            <img src={ImgLogo} alt='My Blog' />
          </Link>
        </h1>
        {isLogin ?
          <ul>
            <li className='profile-img'>
              <Link to="./">
                <img src={profileImage} />
              </Link>
            </li>
            <li>
              <Link>
                <img src={ImgLoutout} alt='Logout'/>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
          :
          <ul>
            <li>
              <Link>
                <img src={ImgLogin} alt='Login'/>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link>
                <img src={ImgRegister} alt='Register'/>
                <span>Register</span>
              </Link>
            </li>
          </ul>
        }
      </div>
    </header>
  )
}
