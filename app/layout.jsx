import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Find The Perfect Rental",
  description: "Find your dream rental house",
  keywords: "rental, find rentals, find home",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
