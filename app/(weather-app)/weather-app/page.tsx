"use client";
import SearchBar from "@/components/weather-app/SearchBar";
import WeatherCard from "@/components/weather-app/WeatherCard";
import {
  useLazyGetCityCoordinatesQuery,
  useLazyGetWeatherByCoordsQuery,
} from "@/redux/services/weatherApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Zagazig");

  const [getCoords, coordsResult] = useLazyGetCityCoordinatesQuery();
  const [getWeather, weatherResult] = useLazyGetWeatherByCoordsQuery();

  useEffect(() => {
    if (city) getCoords(city);
  }, [city]);

  useEffect(() => {
    if (coordsResult.data?.results?.length) {
      const { latitude, longitude } = coordsResult.data.results[0];
      getWeather({ lat: latitude, lon: longitude });
    }
  }, [coordsResult.data]);

  const loading = coordsResult.isLoading || weatherResult.isLoading;
  const error = coordsResult.error || weatherResult.error;
  const weather = weatherResult.data;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6">
      <div className="max-w-2xl mx-auto">
        <SearchBar onSearch={setCity} />
        {loading && <p className="text-center">Loading...</p>}
        {error && (
          <p className="text-center text-red-600">
            Error fetching weather data
          </p>
        )}
        {weather && <WeatherCard data={weather} />}
      </div>
    </main>
  );
}
