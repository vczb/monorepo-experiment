import Script from "next/script";

export const Analytics = () => (
  <div>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
    </Script>
  </div>
);
