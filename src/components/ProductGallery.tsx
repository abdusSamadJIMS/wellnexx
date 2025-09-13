'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ProductImage } from '@/utils/type'

interface Props { images: ProductImage[] }

export default function ProductGallery({ images }: Props) {
    const [index, setIndex] = useState(0)
    return (
        <div className="w-full">
            <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden shadow">
                <Image
                    src={images[index]?.image || 'https://placehold.co/600x400'}
                    alt={images[index]?.description || 'product image'}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={true}
                />
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto">
                {images.map((it, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border ${i === index ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                        aria-label={`View image ${i + 1}`}
                    >
                        <Image src={it.image} alt={it.description || 'thumb'} width={160} height={100} style={{ objectFit: 'cover' }} />
                    </button>
                ))}
            </div>

            {images[index]?.description && (
                <p className="mt-2 text-sm text-slate-600">{images[index].description}</p>
            )}
        </div>
    )
}