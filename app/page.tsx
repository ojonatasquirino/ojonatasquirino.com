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

      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>
      <p className="mb-3">{``}</p>

      <div className="my-4">
        <BlogPosts limit={3} /> {/* Apenas os 3 artigos mais recentes */}
      </div>
    </section>
  );
}
