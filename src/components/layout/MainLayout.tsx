import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </>
  );
}