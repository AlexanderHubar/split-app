import { Metadata } from "next"
import { Suspense } from "react"
import { LoginButton } from "./login-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Login | Split App",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Login() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <Card className="max-w-lg">
        <CardHeader className="text-center">
          <CardTitle>Split App</CardTitle>
          <CardDescription>
            Dive into a hassle-free way to split bills with friends, family, or colleagues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <div className="mx-auto h-10 w-[185px] rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
            }
          >
            <LoginButton />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
