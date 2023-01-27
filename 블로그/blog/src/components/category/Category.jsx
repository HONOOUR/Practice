import React from 'react'
import { Link } from 'react-router-dom';
import './category.css'

export default function Category({ categories }) {
  return (
    <ul className='categories'>
      {categories.map((category, i) =>
        <li key={i} className='category'>
          <Link to="#">{category}</Link>
        </li>
      )}
    </ul>
  )
}
