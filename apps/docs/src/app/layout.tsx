import { Geist, Geist_Mono } from "next/font/google"
import "@trinity/ui/globals.css"
import { Providers } from "../components/providers"
import { MainNav } from "../components/navigation/MainNav"
import { MobileNav } from "../components/navigation/MobileNav"

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <Providers>
          <header className="border-b px-4 py-3 flex items-center justify-between">
            <MainNav />
            <MobileNav />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
