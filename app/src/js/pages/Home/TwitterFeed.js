import React from 'react'

const TwitterFeed = () =>
  <div className='home__twitter-feed'>
    <a className='twitter-timeline' data-height='300' href='https://twitter.com/rstegd'>
      Tweets by rstegd
    </a>
    <script async src='//platform.twitter.com/widgets.js' charSet='utf-8'></script>
  </div>

export default TwitterFeed
