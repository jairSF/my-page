import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello I'm Jair Silva a Product Designer</h1>
    <p>I have always had a fascination with the convergence of art, design, music, technology and life. I am currently looking for a job that will enable me to achieve my goals.
      I graduated from the Higher Institute of Communication and Design Toulouse Lautrec in the career of Web Design and Multimedia. I am passionate about branding, development from web design to programming, UX / UI and interactive development.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">About us</Link>
  </Layout>
)

export default IndexPage
