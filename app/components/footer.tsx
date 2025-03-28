import { InstagramIcon, GithubIcon, LinkedinIcon } from "lucide-react";
export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-wrap gap-3 text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/ojonatasquirino"
          >
            <InstagramIcon size={20} />
            <p className="h-7"></p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ojonatasquirino"
          >
            <GithubIcon size={20} />
            <p className="h-7"></p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jonatasquirino/"
          >
            <LinkedinIcon size={20} />
            <p className="h-7"></p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        {new Date().getFullYear()} © Jônatas Quirino
      </p>
    </footer>
  );
}
