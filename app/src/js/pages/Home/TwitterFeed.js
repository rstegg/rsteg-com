import React from 'react'

const height = screen.height <= 1024 ? screen.height * 0.5 : '275'

const TwitterFeed = () =>
  <div className='home__twitter-feed'>
    <a className='twitter-timeline' data-height={height} href='https://twitter.com/rstegd'>
      Tweets by rstegd
    </a>
    <script async src='//platform.twitter.com/widgets.js' charSet='utf-8'></script>
  </div>

export default TwitterFeed
