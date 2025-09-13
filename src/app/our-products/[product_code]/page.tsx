
import ProductGallery from '@/components/ProductGallery'
import { products } from '@/utils/constant/products'
import { formatINR } from '@/utils/constant/utils'
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
    return products.map((p) => ({ product_code: p.product_code.toLowerCase() }))
}

export const dynamic = 'force-static'

export default async function ProductPage({
    params,
}: {
    params: Promise<{ product_code: string }>
}) {
    const { product_code } = await params  // ✅ await here

    const product = products.find(
        (p) => p.product_code.toLowerCase() === product_code.toLowerCase()
    )

    if (!product) notFound()

    const ldJson = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.product_name,
        "sku": product.product_code,
        "image": product.images.map((i) => i.image),
        "description": product.images[0]?.description || "",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": product.rate.toString(),
            "availability": "https://schema.org/InStock",
        },
    }

    return (
        <main className="max-w-6xl mx-auto p-4 sm:p-8">
            <script type="application/ld+json">{JSON.stringify(ldJson)}</script>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
                <div className="lg:col-span-2">
                    <ProductGallery images={product.images} />

                    <section className="mt-6 prose max-w-none">
                        <h1 className="text-2xl font-semibold">{product.product_name}</h1>
                        <p className="text-sm text-slate-500">
                            {product.drug_category} • {product.pack}
                        </p>

                        <h3 className="mt-4">Description</h3>
                        <p>{product.images[0]?.description}</p>

                        {product.compositions.length > 0 && (
                            <>
                                <h3 className="mt-4">Composition</h3>
                                <ul>
                                    {product.compositions.map((c, idx) => (
                                        <li key={idx}>{c}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </section>
                </div>

                <aside className="lg:col-span-1 border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-full">
                            <h3 className="text-left font-bold text-xl">{product.name}</h3>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="text-3xl font-semibold">{formatINR(product.rate)}</div>
                        <div className="text-sm text-slate-500">MRP / Pack: {product.pack}</div>
                    </div>

                    <div className="mt-4 flex gap-3">
                        <a
                            href={`https://wa.me/919568096888?text=Enquiry of ${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border"
                        >
                            Enquiry
                        </a>
                    </div>

                    <div className="mt-4 text-sm text-slate-600">
                        <strong>Category:</strong> {product.drug_category}
                    </div>

                    {product.compositions.length > 0 && (
                        <div className="mt-4 text-sm">
                            <strong>Key Ingredients</strong>
                            <ul className="list-disc ml-5">
                                {product.compositions.map((c, idx) => (
                                    <li key={idx}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </div>
        </main>
    )
}
