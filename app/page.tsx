import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <img
        src="/avatar.jpg" // Substitua pelo caminho correto da imagem
        alt="Avatar de Jônatas Quirino"
        className="w-16 h-16 rounded-full mb-4" // 24x24 é um tamanho padrão para avatares
      />
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        Jônatas Quirino
      </h1>
      <p className="mb-1">
        {`Sintetizo o meu cérebro com design mínimo, escrita de software e artigos.`}
      </p>
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  );
}
