"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Folder, ExternalLink } from "lucide-react";

export default function MinimalLinksPage() {
  const profile = {
    name: "Jônatas Quirino",
    description:
      "Escrevo software sob ecossistema front-end e construo soluções com automação e IA.",
    avatar: "/image.png",
  };

  const links = [
    {
      title: "GitHub",
      description: "Repositórios e contribuições públicas.",
      url: "https://github.com/ojonatasquirino",
      icon: Github,
      badge: null,
    },
    {
      title: "LinkedIn",
      description:
        "Conteúdos sobre carreira, novidades na área de tecnologia e aprendizados.",
      url: "https://linkedin.com/in/jonatasquirino",
      icon: Linkedin,
      badge: null,
    },
    {
      title: "TabNews",
      description: "Fórum de artigos técnicos sobre tecnologia e programação.",
      url: "https://www.tabnews.com.br/ojonatasquirino",
      icon: Folder,
      badge: null,
    },
    {
      title: "Contato",
      description: "Me mande um e-mail :)",
      url: "mailto:ojonatasquirino@gmail.com",
      icon: Mail,
      badge: null,
    },
  ];

  const handleLinkClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else if (url.startsWith("/")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 py-16 max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt={`Foto de perfil de ${profile.name}`}
              className="w-24 h-24 rounded-full mx-auto border-4 border-border/20 shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            {profile.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed text-base">
            {profile.description}
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-200 hover:shadow-md border-border/50 hover:border-border bg-card/50 backdrop-blur-sm"
              onClick={() => handleLinkClick(link.url)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                          {link.title}
                        </h3>
                        {link.badge && (
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-muted text-muted-foreground"
                          >
                            {link.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} &copy; Jônatas Quirino
          </p>
        </div>
      </div>
    </div>
  );
}
