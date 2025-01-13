import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Leia os meus escritos!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">escritos</h1>
      <BlogPosts />
    </section>
  );
}
