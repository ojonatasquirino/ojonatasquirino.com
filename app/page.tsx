"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Folder } from "lucide-react";

export default function MinimalLinksPage() {
  const profile = {
    name: "Jônatas Quirino",
    description:
      "Escrevo software e construo soluções para negócios com automação e LLMs.",
    avatar: "/image.png",
    overlay: "/overlay.png",
  };

  const links = [
    {
      title: "GitHub",
      url: "https://github.com/ojonatasquirino",
      icon: Github,
      badge: null,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/ojonatasquirino",
      icon: Linkedin,
      badge: null,
    },
    {
      title: "TabNews",
      url: "https://www.tabnews.com.br/ojonatasquirino",
      icon: Folder,
      badge: null,
    },
    {
      title: "Contato",
      url: "mailto:ojonatasquirino@gmail.com",
      icon: Mail,
      badge: null,
    },
  ];

  const handleLinkClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 py-16 max-w-md">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="mb-2 relative w-36 h-24 mx-auto group transition-transform duration-300 ease-in-out">
            {/* Imagem base */}
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt={`Foto de perfil de ${profile.name}`}
              className="w-24 h-24 rounded-full border-4 border-border/20 shadow-lg absolute left-0 top-1/2 -translate-y-1/2 z-10 transform transition-transform duration-300 ease-in-out group-hover:rotate-3"
            />

            {/* Imagem Overlay */}
            <img
              src={profile.overlay}
              alt="Sobreposição"
              className="w-[90px] h-[90px] absolute left-16 top-1/2 -translate-y-1/2 shadow-md z-20 transform transition-transform duration-300 ease-in-out group-hover:-rotate-6"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-1">
            {profile.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed text-base">
            {profile.description}
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          {links.map((link, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-200 hover:shadow-md border-border/50 hover:border-border bg-card/50 backdrop-blur-sm max-w-xs mx-auto"
              onClick={() => handleLinkClick(link.url)}
            >
              <div className="flex items-center justify-center space-x-2">
                <link.icon className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium text-foreground text-sm group-hover:text-foreground/80 transition-colors">
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
