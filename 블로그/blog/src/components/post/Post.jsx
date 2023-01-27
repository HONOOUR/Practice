import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Category from '../category/Category'
import Author from './../author/Author'
// import './post.css'
import { PostLink, PostImg, ContentsWrap, PostH3, PostDescription } from './PostStyle';

export default function Post({ post }) {
  return (
    // <li key={post.id}>
    //   <Link to={`/post/${post.id}`} className="post">
    //     <article>
    //       <img src={post.thumbnail} alt="" />
    //       <div className="contents-wrap">
    //         <Category categories={post.category} />
    //         <h3>{post.title}</h3>
    //         <Author username={post.userName}
    //           created={post.created}
    //           profileImg={post.profileImg}
    //         />
    //         <p className="post-description">
    //           {post.summary}
    //         </p>
    //       </div>
    //     </article>
    //   </Link>
    // </li>
    <li key={post.id}>
      <PostLink to={`/post/${post.id}`}>
        <article>
          <PostImg src={post.thumbnail} alt="" />
          <ContentsWrap className="contents-wrap">
            <Category categories={post.category} />
            <PostH3>{post.title}</PostH3>
            <Author username={post.userName}
              created={post.created}
              profileImg={post.profileImg}
            />
            <PostDescription className="post-description">
              {post.summary}
            </PostDescription>
          </ContentsWrap>
        </article>
      </PostLink>
    </li>
  )
}
