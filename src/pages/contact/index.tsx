export default function contact() {
  return (
    <main className="mt-10 flex flex-col gap-y-6">
      <section className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-medium">Contact Us</h1>
        <p className="text-xl">
          We’d love to hear from you! Let’s connect and create something amazing
          together.
        </p>
      </section>
      <section className="underline underline-offset-8 text-2xl">
        <a href="mailto:admin@aioneers.io?subject=Contact%20Us&body=Hi,%20I%20would%20like%20to%20discuss...">
          Send Message
        </a>
      </section>
      <section className="contact-info">
        <p>Email: admin@aioneers.io</p>
        <p>Phone: +123 456 7890</p>
      </section>
    </main>
  );
}
