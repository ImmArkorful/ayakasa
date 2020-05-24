import React from 'react'
import Phoneholder from '../containers/Phoneholder'
import { Dashboard } from '../containers/dashboard'
import Nav from '../components/nav'

const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      borderWidth: 3,
      padding: 20,
      height: '100vh',
      backgroundColor: '#F7E3DC',
    }}
  >
    <div
      style={{
        display: 'flex',
      }}
    >
      <Dashboard />
      <Phoneholder />
    </div>
    <Nav />
  </div>
)

export default Home
