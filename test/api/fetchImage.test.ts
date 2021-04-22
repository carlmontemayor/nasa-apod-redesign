import { fetchNASAImages } from '../../api/fetchImage'
import { RandomAprilImage } from '../fixtures/exampleNASAResponses'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('NASA API response', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  describe('fetches a test response', () => {
    it('requests a response from the NASA API', async () => {
      mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: RandomAprilImage })
      )

      const aprilDate = new Date(2021, 3, 21)

      const entity = await fetchNASAImages(aprilDate)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(entity).toEqual(RandomAprilImage)
    })
  })
})
