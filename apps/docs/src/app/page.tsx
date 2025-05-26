import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@trinity/ui";
import { NewsletterForm } from "../components/forms/NewsletterForm";
import ContactForm from "../components/forms/ContactForm";
import MembershipForm from "../components/forms/MembershipForm";
import { Footer } from "../components/navigation/Footer";

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Portuguese Forum Rotary Club</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We are a community of leaders and changemakers dedicated to service above self. Join us in making a difference locally and globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Become a Member</CardTitle>
              <CardDescription>Join our vibrant community and help create positive change.</CardDescription>
            </CardHeader>
            <CardContent>
              <MembershipForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Have questions? Reach out and we’ll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Newsletter</CardTitle>
              <CardDescription>Stay up to date with our latest news and events.</CardDescription>
            </CardHeader>
            <CardContent>
              <NewsletterForm />
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}
