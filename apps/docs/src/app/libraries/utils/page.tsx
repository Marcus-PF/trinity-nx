import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@trinity/ui";
import { Footer } from "../../../components/navigation/Footer"

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the @trinity/utils library docs</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          This is going to be a whole lot of fun!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Why is there so much content here!</CardTitle>
              <CardDescription>This is the @trinity/utils library Docs</CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-4xl font-bold mb-4">Yay!</h2>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}
