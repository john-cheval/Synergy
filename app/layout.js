import dynamic from "next/dynamic";
// import "bootstrap/dist/css/bootstrap.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "./../styles/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/animate.min.css";
import "./../styles/flaticon.css";
import "./../styles/jquery-ui.min.css";
import "./../styles/magnific-popup.css";
import "./../styles/style.css";
// import "./globals.css";
import BootstrapClient from "./_components/BootstrapClient.js";
import Header from "./_components/shared/Header";
// import Footer from "./_components/shared/Footer";
import ServerFooter from "./_components/shared/ServerFooter";
const WowOver = dynamic(() => import("@/app/_components/shared/WowOver"), {
  ssr: false,
});

export const metadata = {
  title: "Synergy",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function RootLayout({ children }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { address_list } = await fetch(`${APIURL}/full_details?ID=23`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/TT_Satoshi_Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <WowOver />
        <Header addressList={address_list} />
        {children}
        <BootstrapClient />
        <ServerFooter />
      </body>
    </html>
  );
}
