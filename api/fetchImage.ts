import axios, { AxiosError } from "axios";
import { NASAResponse } from "types";

export const fetchNASAImages = async (): Promise<NASAResponse> => {
  try {
    const response = await axios.get<NASAResponse>(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
    );

    const nasaResponse = response.data;
    return nasaResponse;
  } catch (err) {
    if (err && err.response) {
      const error = err as AxiosError;
      return error.response.data;
    }
    throw err;
  }
};
