import React from 'react'
import { Tab, Tabs } from 'elements/Tabs'

const Nav = () =>
  <Tabs>
    <Tab path='/about/languages'>
      <Tab.Icon icon='code' />
      <Tab.Title>Programming Langauges</Tab.Title>
    </Tab>
    <Tab path='/about/interests'>
      <Tab.Icon icon='heart' />
      <Tab.Title>Interests</Tab.Title>
    </Tab>
    <Tab path='/about/summary'>
      <Tab.Icon icon='list-alt' />
      <Tab.Title>Summary</Tab.Title>
    </Tab>
    <Tab path='/about/contact'>
      <Tab.Icon icon='comment-alt' />
      <Tab.Title>Contact</Tab.Title>
    </Tab>
  </Tabs>

export default Nav
