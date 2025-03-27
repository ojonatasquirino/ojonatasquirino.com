import { BlogPosts } from "app/components/posts";
import { Github } from "lucide-react";

export default function Page() {
  return (
    <section>
      <img
        src="/avatar.jpg"
        alt="Avatar de Jônatas Quirino"
        className="w-16 h-16 mb-3 rounded-full border-2 border-white"
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

      <h1 className="mb-4 text-2xl  tracking-tighter">código aberto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[
          {
            title: "ojonatasquirino.com",
            description:
              "Site mínimo que contém meus escritos, designs e aplicações de software.",
            tags: ["React", "NextJS", "Tailwind", "MDX"],
            link: "https://github.com/ojonatasquirino/ojonatasquirino.com",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900"
          >
            <div className="h-32 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
              <div className="h-32 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src="/brain.png"
                  alt="brain"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline"
            >
              <Github size={16} className="mr-2" /> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
