import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <img
        src="/avatar.jpg"
        alt="Avatar de Jônatas Quirino"
        className="w-16 h-16 rounded-full mb-4"
      />
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>
      <p className="mb-3">
        {`Sintetizo o meu cérebro criando design mínimo, escrevendo software e percepções.`}
      </p>

      <div className="my-4">
        <BlogPosts limit={3} /> {/* Apenas os 3 mais recentes */}
      </div>
    </section>
  );
}
