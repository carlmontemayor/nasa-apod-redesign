import * as React from 'react'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<NavigationBar />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the aproppriate title, subtitle, and footer', () => {
    render(<NavigationBar />)
    expect(screen.getByText('APOD')).toHaveTextContent('APOD')
    expect(
      screen.getByText('(astronomy picture of the day)')
    ).toHaveTextContent('(astronomy picture of the day)')
    expect(screen.getByText('Astronomy Picture of the Day')).toHaveTextContent(
      'Astronomy Picture of the Day'
    )
  })
})
