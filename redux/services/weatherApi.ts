import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://geocoding-api.open-meteo.com/v1";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getCityCoordinates: builder.query({
      query: (city) => `${BASE_URL}/search?name=${city}&count=1`,
    }),
    getWeatherByCoords: builder.query({
      query: ({ lat, lon }) =>
        `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
    }),
  }),
});

export const {
  useLazyGetCityCoordinatesQuery,
  useLazyGetWeatherByCoordsQuery,
} = weatherApi;
