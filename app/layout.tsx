import { Providers } from "./providers"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
