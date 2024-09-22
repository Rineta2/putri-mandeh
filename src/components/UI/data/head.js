import { Fragment } from "react";

import Script from "next/script";

export const metadata = {
  title: "Putri Mandeh",
  description:
    "Menyajikan kelezatan autentik masakan Padang yang bikin nagih! Nikmati rendang empuk, ayam goreng krispi, dan aneka lauk pauk lainnya dengan sambal yang menggugah selera.",
  author: "rineta",
  keywords: "Masakan Padang, Warung nasi padang",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Putri Mandeh",
    description:
      "Menyajikan kelezatan autentik masakan Padang yang bikin nagih! Nikmati rendang empuk, ayam goreng krispi, dan aneka lauk pauk lainnya dengan sambal yang menggugah selera.",
    url: "https://putri-mandeh.vercel.app/",
    siteName: "Putri Mandeh",
    images: [
      {
        url: "https://putri-mandeh.vercel.app/favicon.icon",
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Putri Mandeh",
    description:
      "Menyajikan kelezatan autentik masakan Padang yang bikin nagih! Nikmati rendang empuk, ayam goreng krispi, dan aneka lauk pauk lainnya dengan sambal yang menggugah selera.",
    creator: "@rineta",
    images: "https://putri-mandeh.vercel.app/favicon.icon",
  },
  verification: process.env.NEXT_PUBLIC_VERTIFICATION_API_KEY,
};

const siteUrl = "https://putri-mandeh";
const faviconUrl = `${siteUrl}/favicon.icon`;
const canonicalUrl = `${siteUrl}/`;

const Head = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "rineta",
    image: "https://putri-mandeh.vercel.app/favicon.icon",
    "@id": "https://putri-mandeh",
    url: "https://putri-mandeh",
    telephone: "081284258290",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jalan Leuwiliang, Kp. Babakan RT 05 RW 06, Desa Leuwiliang, Kec. Leuwiliang Kab. Bogor",
      addressLocality: "Leuwiliang Kab. Bogor",
      addressRegion: "Jawa Barat",
      postalCode: "16640",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.595038,
      longitude: 106.670528,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00 AM",
      closes: "21:00 PM",
    },
    sameAs: ["https://www.facebook.com/", "https://www.instagram.com/"],

    description:
      "Menyajikan kelezatan autentik masakan Padang yang bikin nagih! Nikmati rendang empuk, ayam goreng krispi, dan aneka lauk pauk lainnya dengan sambal yang menggugah selera.",
    logo: "https://putri-mandeh.vercel.app/favicon.icon",
  };

  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <Fragment>
      <title>{metadata.title}</title>
      <meta charSet="UTF-8" />
      <meta name="version" content="1.0" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="property & designer" />
      <meta name="google-site-verification" content={metadata.verification} />
      <meta property="og:title" content={metadata.title} />
      <meta name="author" content={metadata.author} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={faviconUrl} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href={faviconUrl} type="image/x-icon" sizes="any" />
      <link rel="icon" href={faviconUrl} type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={faviconUrl} />
      <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={canonicalUrl} />

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPGTC838');
            `,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPGTC838"
          height="0"
          width="0"
          title="Google Tag Manager"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </Fragment>
  );
};

export default Head;
