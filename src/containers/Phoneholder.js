import React from 'react'
import styled from 'styled-components'

// components

import Phone from '../components/phone'

const Phoneholder = () => (
  <MainHolder>
    <BodyOne>
      <BodyTwo>
        <PhoneBackground>
          <Phone />
        </PhoneBackground>
      </BodyTwo>
    </BodyOne>
  </MainHolder>
)

export default Phoneholder

const MainHolder = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`

const BodyOne = styled.div`
  display: grid;
  height: 710px;
  width: 360px;
  background-color: #323343;
  border-radius: 30px;
`

const BodyTwo = styled.div`
  height: 700px;
  width: 350px;
  border-radius: 30px;
  padding: 5;
  align-self: center;
  justify-self: center;
`

const PhoneBackground = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  background-color: white;
`
