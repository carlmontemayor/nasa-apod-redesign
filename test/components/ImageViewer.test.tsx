import * as React from 'react'
// import { fetchNASAImages } from '../../api/fetchImage'
import { ImageViewer } from '../../components/ImageViewer/ImageViewer'
import { render, cleanup, act } from '@testing-library/react'
import '@testing-library/jest-dom'
// import { RandomAprilImage } from '../fixtures/exampleNASAResponses'
// import { mocked } from 'ts-jest/utils'

afterEach(() => {
  cleanup
  jest.resetAllMocks()
})

jest.mock('../../api/fetchImage')
// const mockedAxios = mocked(fetchNASAImages)

describe('ImageViewer', () => {
  test('renders somethign', async () => {
    await act(async () => {
      const { getByText } = render(<ImageViewer />)
      expect(
        getByText('There was an error fetching the data.')
      ).toBeInTheDocument()
    })
  })
})
