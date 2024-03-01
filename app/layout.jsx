import "@/assets/styles/global.css";

export const metadata = {
  title: "Find The Perfect Rental",
  description: "Find your dream rental house",
  keywords: "rental, find rentals, find home",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
