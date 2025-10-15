import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },

};

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <p>This page contains blog posts and articles.</p>
    </main>
  );
}