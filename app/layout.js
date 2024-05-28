import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Jake Shankman | Portfolio",
  description:
    "Portfolio of Jake Shankman, A web developer who specializes in React and Next.JS",
  keywords:
    "Jake Shankman, Portfolio, Web developer, years, experience, python, react, skills, development, web, interfaces, " +
    "coding, html, css, html css, js, html css js, client expectations, github, aws, i am, jake Shankman, jake shankman",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Jake Shankman | Portfolio</title>
        <meta name="title" content="Jake Shankman | Portfolio" />
        <meta
          name="description"
          content="Portfolio of Jake Shankman, A web developer who specializes in React and Next.JS"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jakeshankman.me/" />
        <meta property="og:title" content="Jake Shankman | Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Jake Shankman, A web developer who specializes in React and Next.JS"
        />
        <meta property="og:image" content="/meta-tags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jakeshankman.me/" />
        <meta property="twitter:title" content="Jake Shankman | Portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio of Jake Shankman, A web developer who specializes in React and Next.JS"
        />
        <meta property="twitter:image" content="/meta-tags.png" />

        <link rel="canonical" href="https://jakeshankman.me" />
        <GoogleAnalytics gaId="G-ES4PXVNQ0M" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Jake Shankman | Portfolio</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jake Shankman",
              "additionalName": "Jacob Shankman",
              "givenName": "Jacob",
              "familyName": "Shankman",
              "url": "https://jakeshankman.me",
              "birthPlace": {
                "@type": "Place",
                "name": "Atlanta, Georgia",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "addressCountry": "USA"
                }
              },
              "email": "mailto:jakeshankman15@gmail.com",
              "gender": "Male",
              "knowsAbout": [
                "Web Development",
                "JavaScript",
                "React",
                "Node.js",
                "CSS",
                "HTML",
                "SEO",
                "Next.js"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer",
                "url": "https://freelancer.com"
              },
              "jobTitle": "Web Developer",
              "sameAs": [
                "https://www.linkedin.com/in/jake-shankman-1182a321a/",
                "https://github.com/JakeS-dot"
              ],
              "image": "https://jakeshankman.me/portrait.JPG",
              "workLocation": {
                "@type": "Place",
                "name": "Remote",
                "url": "https://jakeshankman.me/contact"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "mailto:jakeshankman15@gmail.org",
                "availableLanguage": ["English", "German"]
              }
            }
          `,
          }}
        ></script>
      </head>

      <body>{children}</body>
    </html>
  );
}
