import React from 'react'
import Section from 'elements/Section'

const Languages = () =>
  <div className='container'>
    <Section>
      Languages I have strong proficiency or expertise in.
    </Section>
    <div className='content'>
      <table className='table'>
        <thead>
          <tr>
            <th>JavaScript</th>
            <th>Object-Oriented</th>
            <th>Functional</th>
            <th>Mobile</th>
            <th>Scripting</th>
            <th>Database</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React & Redux</td>
            <td>C</td>
            <td>Haskell</td>
            <td>React-Native</td>
            <td>Python</td>
            <td>Postgres</td>
          </tr>
          <tr>
            <td>Node</td>
            <td>Java</td>
            <td>Scala</td>
            <td>Swift</td>
            <td>Bash</td>
            <td>Redis</td>
          </tr>
          <tr>
            <td>Ramda</td>
            <td>C++</td>
            <td>Elixir</td>
            <td>Objective-C</td>
            <td>Webpack</td>
            <td>Dynamo</td>
          </tr>
          <tr>
            <td>Lodash</td>
            <td>Go</td>
            <td>Elm</td>
            <td>Android</td>
            <td>Perl</td>
            <td>Mongo</td>
          </tr>
          <tr>
            <td>jQuery</td>
            <td>Ruby</td>
            <td>Closure</td>
            <td>Kotlin</td>
            <td>Lua</td>
            <td>Cassandra</td>
          </tr>
          <tr>
            <td>Angular [1/2/4]</td>
            <td>C#</td>
            <td>Lisp</td>
            <td>Xamarin</td>
            <td>Actionscript</td>
            <td>MySQL</td>
          </tr>
        </tbody>
      </table>
    </div>
    <article className='message is-info'>
      <div className='message-body'>
        Rated from top to bottom by personal opinion. JavaScript is a category because it is my language of choice.
      </div>
    </article>
  </div>

export default Languages
