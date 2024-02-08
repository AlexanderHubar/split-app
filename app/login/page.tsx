import { Metadata } from "next"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginButton } from "./login-button"

export const metadata: Metadata = {
  title: "Login | Split App",
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
