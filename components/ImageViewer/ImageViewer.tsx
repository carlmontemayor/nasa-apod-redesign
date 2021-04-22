import { fetchNASAImages } from 'api/fetchImage'
import { ReactElement, useEffect, useState } from 'react'
import { NASAResponse } from 'types'

export const ImageViewer = (): ReactElement => {
  const [apodData, setApodData] = useState<NASAResponse>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    const nasaData = fetchNASAImages(new Date())
    nasaData
      .then((data) => {
        setApodData(data)
      })
      .catch((err) => {
        if (err && err.response) {
          setErrorMessage('There was an error fetching the data.')
        }
      })
  }, [])

  return (
    <>
      {errorMessage === '' && apodData ? (
        <div className="flex">
          <div className="p-8">
            {apodData.media_type === 'image' ? (
              <img
                className="rounded-xl shadow-2xl mb-8 max-w-full max-h-full"
                height="auto"
                width="auto"
                src={apodData.hdurl}
              ></img>
            ) : (
              <iframe
                allowFullScreen
                className="m-2"
                src={apodData.url}
                height="auto"
                width="auto"
              ></iframe>
            )}
            <div className="flex justify-center ">
              <div className="bg-gray-200 m-2 p-2 pl-4 pr-4 rounded-xl text-black border-none font-bold shadow">
                Media Type:{' '}
                {apodData.media_type.charAt(0).toUpperCase() +
                  apodData.media_type.slice(1)}
              </div>
              <div className="bg-gray-200 m-2 p-2 pl-4 pr-4 rounded-xl text-black border-none font-bold shadow">
                Version: {apodData.service_version}
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-bold mb-2">{apodData.title}</div>
            <div className="text-xl mb-2">
              {new Date(apodData.date).toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="mb-2">{apodData.explanation}</div>
          </div>
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  )
}
