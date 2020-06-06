/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Phone from '../../../components/phone'

test('renders description', () => {
  const { getByText } = render(<Phone />)
  const linkElement = getByText(/Enter your Phone Number./i)
  expect(linkElement).toBeInTheDocument()
})
