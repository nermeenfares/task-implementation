"use client";
import { useState } from "react";
import TextInput from "../FormFields/TextInput";

type Props = {
  onSearch: (city: string, coordinates?: { lat: number; lon: number }) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateCity = async (cityName: string) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        return {
          isValid: true,
          coordinates: {
            lat: data.results[0].latitude,
            lon: data.results[0].longitude,
          },
          cityName: data.results[0].name,
        };
      } else {
        return { isValid: false };
      }
    } catch (error) {
      console.error("Error validating city:", error);
      return { isValid: false };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setError("");
    setIsLoading(true);

    const validation = await validateCity(input.trim());

    if (validation.isValid) {
      onSearch(validation.cityName || input.trim(), validation.coordinates);
      setInput("");
    } else {
      setError("City not found. Please enter a valid city name.");
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <div className="w-full sm:w-[300px]">
          <TextInput
            placeholder="Enter city name..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError("");
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          // className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && (
        <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
      )}
    </div>
  );
}
