import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@trinity/ui"
import { Footer } from "../components/navigation/Footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Trinity Monorepo</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore the unified architecture powering our fullstack ecosystem — from web and mobile apps to shared packages and developer tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Start here to set up your environment and understand the structure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/getting-started"
                className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
              >
                Go to Guide →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
              <CardDescription>
                Learn about each deployed app — Forum, CMS, Docs, Dashboard, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/applications"
                className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
              >
                Browse Apps →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Libraries</CardTitle>
              <CardDescription>
                Explore our shared packages: UI, Utils, Hooks, Auth, Config, Types, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/libraries"
                className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
              >
                View Libraries →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  )
}
