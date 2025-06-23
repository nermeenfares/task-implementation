export default function WeatherCard({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  const current = data.current;
  const hourly = data.hourly;
  const nextHours = hourly.time.slice(0, 6).map((t: string, i: number) => ({
    time: t,
    temp: hourly.temperature_2m[i],
    humidity: hourly.relative_humidity_2m[i],
    wind: hourly.wind_speed_10m[i],
  }));

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
      {/* content */}
    </div>
  );
}
