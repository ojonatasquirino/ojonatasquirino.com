"use client";

import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ERP Mínimo",
    description:
      "ERP que integra os setores fundamentais de uma micro-empresa: Análise de faturamento, custos e lucro.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/erp-minimo",
    deploy: "https://erp-minimo.vercel.app",
  },
  {
    title: "Mercado",
    description:
      "Listagem eficiente para compras no mercado e shopping. Adiciona itens e suas respectivas quantidades e preços.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/mercado",
    deploy: "https://mercado-lista.vercel.app",
  },
  {
    title: "Meta Financeira",
    description:
      "Calcula quanto tempo o usuário atingirá a meta estabelicida com a capacidade de economia mensal.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/meta-financeira",
    deploy: "https://meta-financeira-blond.vercel.app",
  },
  {
    title: "Financeira Inteligente",
    description:
      "Análise de reserva de emergência, meta de patrimônio milionário e investimento de renda fixa.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ojonatasquirino/financeira-inteligente",
    deploy: "#",
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
            className="border border-gray-300/30 dark:border-white/10 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-black"
          >
            <div className="border border-gray-300/30 dark:border-white/10 h-32 bg-white dark:bg-[#0a0a0a] rounded-md flex items-center justify-center overflow-hidden">
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
            <div className="flex gap-4 mt-4 text-sm font-medium">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 dark:text-gray-200 hover:underline"
              >
                <Github size={16} className="mr-2" /> GitHub
              </a>
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 dark:text-gray-200 hover:underline"
              >
                <ExternalLink size={16} className="mr-2" /> Deploy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
