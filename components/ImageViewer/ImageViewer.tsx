import { fetchNASAImages } from "api/fetchImage";
import { ReactElement, useEffect, useState } from "react";
import { NASAResponse } from "types";

export const ImageViewer = (): ReactElement => {
  const [apodData, setApodData] = useState<NASAResponse>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const nasaData = fetchNASAImages();
    nasaData
      .then((data) => {
        setApodData(data);
      })
      .catch((err) => {
        if (err && err.response) {
          setErrorMessage("There was an error fetching the data.");
        }
      });
  }, []);

  return (
    <>
      {errorMessage === "" && apodData ? (
        <>
          <div>{apodData.date}</div>
          <div>{apodData.explanation}</div>
          <div>{apodData.hdurl}</div>
          <div>{apodData.media_type}</div>
          <div>{apodData.service_version}</div>
          <div>{apodData.title}</div>
          <div>{apodData.url}</div>
        </>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
};
