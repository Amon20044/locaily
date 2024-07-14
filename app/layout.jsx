import React from 'react';
import localFont from 'next/font/local';

const Quity = localFont({
  src: [
    { path: './fonts/quity.woff2', weight: 'normal', style: 'normal' },
    { path: './fonts/quity.woff', weight: 'normal', style: 'normal' },
    { path: './fonts/quity.ttf', weight: 'normal', style: 'normal' },
  ],
  variable: '--quity',
  display: 'swap',
});
const Quicksand = localFont({
  src: [
    { path: './fonts/Quicksand.woff2', weight: 'normal', style: 'normal' },
    { path: './fonts/Quicksand.woff', weight: 'normal', style: 'normal' },
    { path: './fonts/Quicksand.ttf', weight: 'normal', style: 'normal' },
  ],
  variable: '--quicksand',
  display: 'swap',
});
const led= localFont({
  src: [
    { path: './fonts/led.woff2', weight: 'normal', style: 'normal' },
    { path: './fonts/led.woff', weight: 'normal', style: 'normal' },
    { path: './fonts/led.ttf', weight: 'normal', style: 'normal' },
  ],
  variable: '--led',
  display: 'swap',
});

export const metadata = {
  title: "LocAI.ly",
  description: "team LocAI.ly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={Quicksand.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
