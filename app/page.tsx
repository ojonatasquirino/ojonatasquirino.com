import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <img
        src="/avatar.jpg"
        alt="Avatar de Jônatas Quirino"
        className="w-16 h-16 rounded-full mb-4 transition-transform duration-600 hover:rotate-6"
      />

      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>
      <p className="mb-3">
        {`Sintetizo o meu cérebro construindo design mínimo, software e pensamentos.`}
      </p>

      <div className="my-4">
        <BlogPosts limit={3} /> {/* Apenas os 3 mais recentes */}
      </div>
    </section>
  );
}
