// client component
"use client"
import Link from "next/link";
import { use } from "react";

export default function Home( { params, searchParams 
}: { 
        params: Promise<{ articleId: string}>
        searchParams: Promise<{ lang?: "en" | "es" | "fr"}>
} ) {
    const { articleId } =  use(params);
    const { lang = "en" } = use(searchParams);
  return (
    <div>
        <h1>News article {articleId}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>Engilish</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>

    </div>
  );
}


// server component
// import Link from "next/link";

// export default async function Home( { params, searchParams 
// }: { 
//         params: Promise<{ articleId: string}>
//         searchParams: Promise<{ lang?: "en" | "es" | "fr"}>
// } ) {
//     const { articleId } = await params;
//     const { lang = "en" } = await searchParams;
//   return (
//     <div>
//         <h1>News article {articleId}</h1>
//         <p>Reading in {lang}</p>

//         <div>
//             <Link href={`/articles/${articleId}?lang=en`}>Engilish</Link>
//             <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//             <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//         </div>

//     </div>
//   );
// }

