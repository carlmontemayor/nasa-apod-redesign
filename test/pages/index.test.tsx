import React from 'react'
import { render } from '../testUtils'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<NavigationBar />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
