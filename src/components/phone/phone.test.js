/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// components
import Phone from '../nav'

test('renders main msg', () => {
  const { getByText } = render(
    <Router>
      <Phone />
    </Router>
  )
  const linkElement = getByText(/Contact/i)
  expect(linkElement).toBeInTheDocument()
})
