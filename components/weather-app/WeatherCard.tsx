import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

export default function WeatherCard({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  if (loading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No data available</p>;

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
      <div className="text-center">
        <h2 className="text-xl font-bold">Current Weather</h2>
        <p className="text-3xl font-semibold">{current.temperature_2m}°C</p>
        <p className="text-md text-slate-600">
          Wind: {current.wind_speed_10m} km/h
        </p>
        <p className="text-sm text-slate-400">Time: {current.time}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Next Hours</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {nextHours.map(
            (
              h: {
                time: string | any[];
                temp:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                humidity:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                wind:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              },
              idx: Key | null | undefined
            ) => (
              <div key={idx} className="bg-blue-100 p-3 rounded-xl text-center">
                <p className="font-medium text-sm">{h.time.slice(11)}</p>
                <p className="text-lg font-bold">{h.temp}°C</p>
                <p className="text-sm text-slate-600">💧 {h.humidity}%</p>
                <p className="text-sm text-slate-600">🌬️ {h.wind} km/h</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
