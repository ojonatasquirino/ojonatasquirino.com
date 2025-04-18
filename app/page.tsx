import { BlogPosts } from "app/components/posts";
import { Github } from "lucide-react";

export default function Page() {
  return (
    <section>
      <img
        src="/avatar.jpg"
        alt="Avatar de Jônatas Quirino"
        className="w-16 h-16 mb-3 rounded-full transition-transform duration-600 hover:rotate-6"
      />

      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>

      <p className="mb-3">
        {`Destilo meu cérebro construindo software, design mínimo e percepções autênticas.`}
      </p>
      <div className="my-4">
        <BlogPosts limit={4} /> {/* Apenas os 4 artigos mais recentes */}
      </div>
    </section>
  );
}
