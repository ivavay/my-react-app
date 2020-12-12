import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
      <h1>A multiciplinary designer based in Taipei, Taiwan</h1>
      <p>Hi! I'm Ivy Chen, currently studying Cognitive Science at UC Santa Cruz. I'm interested in the area of non-traditional learnings and how that might enable more people to pursue their creative interests. In my free time, I love to spend time honing my skills in 3D and creative coding. </p>
      <Link to="/page-2/">See work</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
