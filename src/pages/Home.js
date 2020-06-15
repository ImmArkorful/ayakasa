import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

//  Components
import Phoneholder from '../containers/Phoneholder'
import { Dashboard } from '../containers/dashboard'

const Home = () => (
  <MainHolder>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ayakasa - Bulk SMS, Consumer Marketing, Analytics.</title>
      <link rel="canonical" href="http://ayakasa.com/about" />
    </Helmet>
    <InnerHolder>
      <Dashboard />
      <Phoneholder />
    </InnerHolder>
  </MainHolder>
)

export default Home

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 20px;
`

const InnerHolder = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 2fr;
`
