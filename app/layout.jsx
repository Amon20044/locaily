import React from 'react';
import { Metadata } from 'next';
import { Font } from 'next/font';

const Quity = Font({
  src: [
    { path: '@/assets/fonts/quity.woff2', weight: 'normal', style: 'normal' },
    { path: '@/assets/fonts/quity.woff', weight: 'normal', style: 'normal' },
    { path: '@/assets/fonts/quity.ttf', weight: 'normal', style: 'normal' },
  ],
  display: 'swap',
});

export const metadata = metadata({
  title: "LocAI.ly",
  description: "team LocAI.ly",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`
          @font-face {
            font-family: 'Quity';
            src: url(${Quity.src[0].path}) format('woff2'),
                 url(${Quity.src[1].path}) format('woff'),
                 url(${Quity.src[2].path}) format('truetype');
            font-display: swap;
          }
          .quity {
            font-family: 'Quity';
          }
        `}</style>
      </head>
      <body className="quity">
        <div>{children}</div>
      </body>
    </html>
  );
}
