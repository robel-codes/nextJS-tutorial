import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },

};

export default async function Blog() {
   await new Promise((resolve) => { 
        setTimeout(() => {
        resolve("intentional delay")
    }, 2000)
    });
  return (
    <main>
      <h1>Blog</h1>
      <p>This page contains blog posts and articles.</p>
    </main>
  );
}