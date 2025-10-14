export default async function Docs( { params,

} : {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <h1>
                viewing docs for feature {slug[0]} concept {slug[1]}
            </h1>
        ) 
    } else if (slug?.length === 1) {
    return (
        <main>
            <h1>viewing docs for feature {slug[0]}</h1>
        </main>
    );
}
return <h1> Docs home page </h1>
}