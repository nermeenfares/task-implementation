import Providers from "@/providers";
import { ReactNode } from "react";

export const metadata = {
  title: "Weather App",
  description: "Real-time weather forecast",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
