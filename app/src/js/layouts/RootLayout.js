import React from 'react'

import Header from 'components/Header'

const RootLayout = ({ children }) =>
  <div className='root'>
    <Header />
    {children}
  </div>

export default RootLayout
