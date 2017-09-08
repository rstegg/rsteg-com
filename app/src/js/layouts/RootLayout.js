import React from 'react'

import Dock from 'components/Dock'

const RootLayout = ({ children }) =>
  <div className='root'>
    {children}
    <Dock />
  </div>

export default RootLayout
