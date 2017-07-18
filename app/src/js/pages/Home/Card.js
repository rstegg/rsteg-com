import React from 'react'

const Card = ({ children }) =>
  <div className='card'>
    {children}
  </div>

Card.Image = ({ src }) =>
  <div className='card-image'>
    <figure className='image is-4by3'>
      <img src={src} alt='Image' />
    </figure>
  </div>

Card.Image.displayName = 'Card.Image'

Card.Header = ({ children }) =>
  <div className='card-header'>
    {children}
  </div>

Card.Header.displayName = 'Card.Header'

Card.Title = ({ children }) =>
  <div className='card-header-title'>
    {children}
  </div>

Card.Title.displayName = 'Card.Title'

Card.Icon = ({ icon }) =>
  <div className='card-header-icon'>
    <i className={`fal fa-${icon}`}></i>
  </div>

Card.Icon.displayName = 'Card.Icon'

Card.Content = ({ children }) =>
  <div className='card-content'>
    {children}
  </div>

Card.Content.displayName = 'Card.Content'

Card.Meta = ({ image, title, subtitle }) =>
  <div className='media'>
    {image && <div className='media-left'>
      <figure className='image is-48x48'>
        <img src={image} alt='Image' />
      </figure>
    </div>}
    <div className='media-content'>
      {title && <p className='title is-4'>{title}</p>}
      {subtitle && <p className='subtitle is-6'>{subtitle}</p>}
    </div>
  </div>

Card.Meta.displayName = 'Card.Meta'

Card.Description = ({ date, children }) =>
  <div className='content'>
    {children}
    <br />
    {date && <small>{date}</small>}
  </div>

Card.Description.displayName = 'Card.Description'

export default Card
