import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@trinity/ui"
import Link from "next/link"
import { Footer } from "../../components/navigation/Footer"

export default function LibrariesIndexPage() {
  return (
    <>
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Shared Libraries</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          The Trinity Monorepo provides a modular set of packages to support UI design, config management, internationalization, type safety, and core utilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {[
            { label: "API Client", href: "/libraries/api-client", description: "Client wrapper for HTTP requests, interceptors, and shared API utilities." },
            { label: "Auth", href: "/libraries/auth", description: "Shared authentication strategies, middleware, and session management." },
            { label: "Hooks", href: "/libraries/hooks", description: "Reusable custom React hooks across all apps." },
            { label: "i18n", href: "/libraries/i18n", description: "Internationalization setup and translation helpers." },
            { label: "Locales", href: "/libraries/locales", description: "Language string maps and region support for i18n." },
            { label: "Prettier", href: "/libraries/prettier", description: "Unified Prettier config for code formatting." },
            { label: "Types", href: "/libraries/types", description: "Shared TypeScript types for APIs, models, and entities." },
            { label: "TypeScript", href: "/libraries/typescript", description: "Base TypeScript config for projects across the monorepo." },
            { label: "UI", href: "/libraries/ui", description: "Design system components built with ShadCN and Tailwind." },
            { label: "Utils", href: "/libraries/utils", description: "Shared utility functions and helpers." },
          ].map(({ label, href, description }) => (
            <Card key={href}>
              <CardHeader>
                <CardTitle>{label}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={href} className="text-sm font-medium text-primary hover:underline">
                  View Docs →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
