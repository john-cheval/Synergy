import dynamic from 'next/dynamic';
// import "bootstrap/dist/css/bootstrap.css";
import 'animate.css'; 
import "./../styles/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./../styles/animate.min.css";
import "./../styles/flaticon.css";
import "./../styles/jquery-ui.min.css";
import "./../styles/magnific-popup.css";
import "./../styles/style.css";
import "./globals.css";
import BootstrapClient from "./_components/BootstrapClient.js";
import Header from "./_components/shared/Header";
const WowOver = dynamic(() => import('@/app/_components/shared/WowOver'), { ssr: false });
import Footer from "./_components/shared/Footer";




export const metadata = {
  title: "Synergy",
  description: "Your Strategic Partner for Business Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>       
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <WowOver/>
        <Header />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
