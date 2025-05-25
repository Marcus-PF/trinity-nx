import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>
          Header
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}