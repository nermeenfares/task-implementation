import WeatherCard from "@/components/weather-app/WeatherCard";
import { render, screen } from "@testing-library/react";

const mockData = {
  current: {
    temperature_2m: 22,
    wind_speed_10m: 10,
    time: "2025-06-23T14:00",
  },
  hourly: {
    time: [
      "2025-06-23T14:00",
      "2025-06-23T15:00",
      "2025-06-23T16:00",
      "2025-06-23T17:00",
      "2025-06-23T18:00",
      "2025-06-23T19:00",
    ],
    temperature_2m: [22, 23, 24, 25, 24, 23],
    relative_humidity_2m: [50, 52, 55, 53, 51, 50],
    wind_speed_10m: [10, 11, 12, 11, 10, 9],
  },
};

test("renders WeatherCard with data", () => {
  render(<WeatherCard data={mockData} />);
  expect(screen.getByText(/Current Weather/i)).toBeInTheDocument();
  expect(screen.getByText(/22°C/)).toBeInTheDocument();
});
