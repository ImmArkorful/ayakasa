import React from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton } from './common'

const Home = ({ primaryFont, signOut }) => {
  return (
    <InnerHolderVerify>
      <HeadMSG font={primaryFont}>
        <Trans>user_info_description</Trans>
      </HeadMSG>

      <ActionButton
        id="sign-in-button"
        font={primaryFont}
        onClick={() => {
          signOut()
        }}
      >
        <Trans>send</Trans>
      </ActionButton>
    </InnerHolderVerify>
  )
}

Home.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
}

export default withTranslation()(Home)

const InnerHolderVerify = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`
