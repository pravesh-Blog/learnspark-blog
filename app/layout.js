import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* google analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJHG78H7HF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NJHG78H7HF');
          `}
        </Script>
        <Providers>
          {children}
        </Providers>

        </body>
    </html>
  );
}
