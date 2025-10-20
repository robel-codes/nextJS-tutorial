import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}   

export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Failed loaing review");
    }
    if (parseInt(reviewId) > 1000) {
        notFound();
        // redirect(`/products`);
        // diffrence between using redirect and router.push is that 
        // redirect is used in server components while router.push is used in client components
        // redirect is faster than router.push because it happens on the server side
        // router.push causes a full page reload while redirect does not

    }
    return (
        <main>
            <h1>Review {reviewId} for Product {productId}</h1>
            <p>This is the detailed review content for review {reviewId} of product {productId}.</p>
        </main>
    )
}