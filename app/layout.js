import Navbar from "./components/Navbar";
import "../legacy/css/common.css";

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}