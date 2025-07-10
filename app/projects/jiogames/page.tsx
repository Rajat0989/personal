import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function Jiogames() {
  const crumbs = [{ label: "JIOGAMES" }];

  return (
    <main className="page-container page-container-default project-page">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />
        <article className="w-full flex flex-col gap-8">
          <section className="flex flex-col gap-3.5">
            <h1>Jiogames Project</h1>
            <p className="large text-muted-foreground">
              Project details coming soon.
            </p>
            <div className="w-full">
              <Image
                src="/images/jiogames/jio.png"
                alt="ChatGPT main interface"
                width={1200}
                height={675}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </section>
        </article>
        <Footer />
      </div>
    </main>
  );
}
