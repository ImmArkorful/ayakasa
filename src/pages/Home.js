import React from 'react'
import styled from 'styled-components'

//  Components
import Phoneholder from '../containers/Phoneholder'
import { Dashboard } from '../containers/dashboard'
import Nav from '../components/nav'

const Home = () => (
  <MainHolder>
    <InnerHolder>
      <Dashboard />
      <Phoneholder />
    </InnerHolder>
    <Nav />
  </MainHolder>
)

export default Home

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
  background-color: #f7e3dc;
  padding: 20px;
`

const InnerHolder = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 2fr;
`
