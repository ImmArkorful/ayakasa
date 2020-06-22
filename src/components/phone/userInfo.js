/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, Description, NumberInput } from './common'

const UserInfo = ({ primaryFont }) => {
  return (
    <InnerHolderNumber>
      <HeadMSG font={primaryFont}>
        <Trans>user_info_head_msg</Trans>
      </HeadMSG>
      <FormHolder>
        <Label font={primaryFont}>
          <Trans>name</Trans>
        </Label>
        <NumberInput type="text" font={primaryFont} onChange={(e) => {}} />
        <Label font={primaryFont}>
          <Trans>email</Trans>
        </Label>
        <NumberInput type="text" font={primaryFont} onChange={(e) => {}} />
        <Description font={primaryFont}>
          <Trans>user_info_description</Trans>
        </Description>
      </FormHolder>
      <ActionButton id="send-code" font={primaryFont} onClick={() => {}}>
        <Trans>done</Trans>
      </ActionButton>
    </InnerHolderNumber>
  )
}

const InnerHolderNumber = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const FormHolder = styled.div`
  margin: 0px;
  display: grid;
  align-content: flex-start;
`

const Label = styled.p`
  font-family: ${(props) => props.font};
  margin-top: 2px;
  text-align: left;
  font-size: 11px;
  line-height: 14px;
  margin: 0px 15px;
`

export default withTranslation()(UserInfo)

UserInfo.propTypes = {
  primaryFont: PropTypes.string.isRequired,
}
