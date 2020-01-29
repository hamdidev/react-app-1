import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const IndexPage = () => (
  <div>
    <Header />
    <div className="hero">
      <div className="heroGroup">
        <h1>Learn to design and code React Apps</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
