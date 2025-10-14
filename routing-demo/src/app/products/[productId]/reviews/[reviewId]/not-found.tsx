// not found page doesn't accept any props
// https://nextjs.org/docs/app/building-your-application/routing/not-found-pages
// so use usePathname hook 
"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <main>
            <h1>Review {reviewId} Found for product {productId}</h1>
            <p>Sorry, couldnot find requested resource.</p>
        </main>
    );
}