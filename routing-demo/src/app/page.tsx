import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Product</Link>
      <Link href="/articles/id?lange=en">Read in Engilish</Link>\
      <Link href="/articles/id?lange=es">Read in Spanish</Link>
      <Link href="/articles/id?lange=fr">Read in French</Link>
    </main>
  );
}