export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    return (
        <main>
            <h1>Review {reviewId} for Product {productId}</h1>
            <p>This is the detailed review content for review {reviewId} of product {productId}.</p>
        </main>
    )
}