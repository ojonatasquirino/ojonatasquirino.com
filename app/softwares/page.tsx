"use client";
import { Github } from "lucide-react";
const projects = [
  {
    title: "ERP Mínimo",
    description:
      "ERP mínimo que integra os setores de uma micro-empresa. Gestão e análise de faturamento, lucro e fluxo de caixa.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/erp-minimo",
  },
  {
    title: "Mercado",
    description:
      "Listagem eficiente para compras fazer compras no mercado. Cria itens e itera unidades e preço.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/mercado",
  },
  {
    title: "Meta Financeira",
    description:
      "Calcula quanto tempo o usuário a atingirá a meta estabelicida com a capacidade de economia mensal.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/meta-financeira",
  },
  {
    title: "Financeira Inteligente",
    description:
      "Análise de reserva de emergência, meta de patrimônio milionário e investimento de renda fixa ao longo do tempo.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/financeira-inteligente",
  },
];

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-2xl tracking-tighter">
        softwares • código aberto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#808080] dark:border-[#0a0a0a] rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-black"
          >
            <div className="h-32 bg-white dark:bg-[#0a0a0a] rounded-md flex items-center justify-center overflow-hidden">
              <img
                src="/brain.png"
                alt="brain"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-[#0a0a0a] rounded-md"
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
    </div>
  );
}
