import styled from 'styled-components'

const HeadMSG = styled.h3`
  text-align: center;
  font-family: ${(props) => props.font};
  margin: 15px;
  line-height: 30px;
`

const ActionButton = styled.button`
  margin: 15px;
  font-family: ${(props) => props.font};
  padding: 8px;
  border-radius: 5px;
  height: 40px;
  align-self: flex-end;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-family: ${(props) => props.font};
  text-align: center;
  font-size: 13px;
  line-height: 16px;
  margin: 15px;
`

const NumberInput = styled.input`
  font-family: ${(props) => props.font};
  height: 35px;
  margin: 15px;
  border-radius: 5px;
`

export { HeadMSG, ActionButton, Description, NumberInput }
