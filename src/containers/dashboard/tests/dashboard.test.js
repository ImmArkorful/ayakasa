/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from '../Dashboard'

test('renders main msg', () => {
  const { getByText } = render(<Dashboard />)
  const linkElement = getByText(/Send SMS for Free!/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders description', () => {
  const { getByText } = render(<Dashboard />)
  const linkElement = getByText(
    /Send, save and manage your contacts, all in one place./i
  )
  expect(linkElement).toBeInTheDocument()
})
