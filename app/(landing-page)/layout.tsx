import Footer from "@/components/landingPage/layout/Footer";
import Navbar from "@/components/landingPage/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-white z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#f9f9f9]/70 to-[#d9eefe]/70 z-0" />

        {/* Blurred Decorations */}
        <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[349px] h-[60%] bg-[#c7deec] blur-3xl z-0" />
        <div
          className="absolute bg-[#b5cddf] rounded-4xl -rotate-[40deg] blur-3xl z-0"
          style={{
            width: "100vw",
            maxWidth: "1000px",
            height: "200px",
            top: "160px",
            left: "50%",
            transform: "translateX(-50%) rotate(-60deg)",
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10">
          <Navbar />
          <main className="main">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
