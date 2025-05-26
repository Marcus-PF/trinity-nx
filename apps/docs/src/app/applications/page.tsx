import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@trinity/ui"
import Link from "next/link"
import { Footer } from "../../components/navigation/Footer"

export default function ApplicationsIndexPage() {
  return (
    <>
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Applications</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Trinity supports multiple production-ready apps, each with dedicated roles and functionality. Explore their documentation below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          <Card>
            <CardHeader>
              <CardTitle>Forum Rotary</CardTitle>
              <CardDescription>A bilingual website for the Portuguese Forum Rotary Club.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/applications/forum-rotary" className="text-sm font-medium text-primary hover:underline">
                View Docs →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forum Website</CardTitle>
              <CardDescription>The general-purpose community platform and civic portal.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/applications/forum-web" className="text-sm font-medium text-primary hover:underline">
                View Docs →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}
