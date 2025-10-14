export default function ProductReviews({ params }: { params: { productId: string } }) {
    const productId = params.productId;
    return (
        <main>
            <h1>Reviews for Product {productId}</h1>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </main>
    );
}