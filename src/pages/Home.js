import React from 'react'
import styled from 'styled-components'

//  Components
import Phoneholder from '../containers/Phoneholder'
import { Dashboard } from '../containers/dashboard'

const Home = () => (
  <MainHolder>
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
