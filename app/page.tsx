import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>
      <p className="mb-4">
        {`Seguidor de Cristo, marido da Vic, pai de Eva e desenvolvedor de software. Entusiasta de tecnologia, economia e filosofia antiga, mergulho nos insights do pensamento reformado e estóico. 
        Minha curiosidade impulsiona escritos que abrangem áreas que exploram como princípios atemporais influenciam e dão sentido à vida moderna :)`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
