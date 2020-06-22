import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

//  Components

const Contact = () => (
  <MainHolder>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact - Say Hi, Ask a Question.</title>
      <link rel="canonical" href="http://ayakasa.com/about" />
    </Helmet>
  </MainHolder>
)

export default Contact

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  padding: 20px;
`
