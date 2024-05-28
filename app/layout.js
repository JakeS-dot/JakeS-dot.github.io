import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Jake Shankman | Portfolio",
  description: "Portfolio of Jake Shankman, A web developer who specializes in React and Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <GoogleAnalytics gaId="G-ES4PXVNQ0M" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
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
      <link rel="icon" href="favicon.ico" sizes="any"/>
    </head>

    <body>{children}</body>
    </html>
  );
}
