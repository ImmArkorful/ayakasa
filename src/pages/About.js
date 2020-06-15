import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

//  Components

const About = () => (
  <MainHolder>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About - Our Mission, Your Dream.</title>
      <link rel="canonical" href="http://ayakasa.com/about" />
    </Helmet>
  </MainHolder>
)

export default About

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 20px;
`
