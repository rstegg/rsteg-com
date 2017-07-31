import React from 'react'
import { NavLink } from 'react-router-dom'

const PostRow = ({ to, title, image, date, preview }) =>
  <li className='blog-row'>
    <NavLink to={to}>
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{title}</strong> <small>{date}</small>
                <br />
                {preview}
              </p>
            </div>
          </div>
        </article>
      </div>
    </NavLink>
  </li>

export default PostRow
