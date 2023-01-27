import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './banner.css'

export default function Banner() {

  const [blogInfo, setBlogInfo] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3001/blog")
      .then(res => setBlogInfo(res.data))
      .catch(error => setBlogInfo(undefined))
  }, [])

  if (blogInfo === null) {
    return <div>Loading</div>
  } else if (blogInfo === undefined) {
    return <div>Error</div>
  } else {
    console.log(blogInfo)
    return (
      <div className='banner'>
        <div className='max-width'>
          <div className='banner-contents'>
            <p className='sub-text'>{blogInfo.subTitle}</p>
            <p className='main-text'>{blogInfo.mainTitle}</p>
            <p className='dexcription'>{blogInfo.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
