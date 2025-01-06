import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>
      <p className="mb-4">
        {`Cristão católico-reformado, marido da Vic & pai de Eva. Sintetizo as minhas curiosidades em design minimalista, softwares e textos.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
