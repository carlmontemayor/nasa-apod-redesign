import * as React from 'react'
import { fetchNASAImages } from '../../api/fetchImage'
import { ImageViewer } from '../../components/ImageViewer/ImageViewer'
import { render, cleanup, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { RandomAprilImage } from '../fixtures/exampleNASAResponses'
import { mocked } from 'ts-jest/utils'

afterEach(() => {
  cleanup
  jest.resetAllMocks()
})

jest.mock('../../api/fetchImage')
const mockedAxios = mocked(fetchNASAImages)

describe('ImageViewer', () => {
  test('renders a sample image from API', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.resolve(RandomAprilImage))

    await act(async () => {
      const { getByText } = render(<ImageViewer />)
      await waitFor(() => [
        expect(getByText(RandomAprilImage.title)).toBeTruthy(),
      ])
    })
  })
})
