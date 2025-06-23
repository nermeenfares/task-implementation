import Footer from "@/components/landingPage/layout/Footer";
import Navbar from "@/components/landingPage/layout/Navbar";
import "../globals.css";
export const metadata = {
  title: "Example Landing Page",
  description: "Example Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-gradient-to-l  from-[#f9f9f9]   to-[#d9eefe] ">
        <Navbar />
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  );
}
