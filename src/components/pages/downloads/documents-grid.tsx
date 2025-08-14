'use client'

import { useState } from 'react'
import {
    FileText,
    File,
    FileDown,
    Download,
    Search,
} from 'lucide-react'

type DocCategory = 'All' | 'Catalogs' | 'Certificates' | 'MSDS' | 'Labels' | 'Other'

interface DocumentItem {
    id: number
    title: string
    description: string
    fileType: 'PDF' | 'DOC' | 'XLS' | 'IMG'
    category: DocCategory
    fileUrl: string
}

const documents: DocumentItem[] = [
    {
        id: 1,
        title: 'Product Catalog 2024',
        description: 'All products categorized by type and use case.',
        fileType: 'PDF',
        category: 'Catalogs',
        fileUrl: '/downloads/product-catalog-2024.pdf',
    },
    {
        id: 2,
        title: 'MSDS - Welnisol-4',
        description: 'Material Safety Data Sheet for Welnisol-4 tablets.',
        fileType: 'PDF',
        category: 'MSDS',
        fileUrl: '/downloads/msds-welnisol4.pdf',
    },
    {
        id: 3,
        title: 'GMP Compliance Certificate',
        description: 'Issued by Afflatus Pharmaceuticals Pvt. Ltd.',
        fileType: 'PDF',
        category: 'Certificates',
        fileUrl: '/downloads/gmp-certificate.pdf',
    },
    {
        id: 4,
        title: 'Label Mockup - Welnex-OC Cream',
        description: 'Retail label design and information layout.',
        fileType: 'IMG',
        category: 'Labels',
        fileUrl: '/downloads/label-welnex-oc.jpg',
    },
    {
        id: 5,
        title: 'Partnership Guidelines',
        description: 'Rules & terms for authorized resellers.',
        fileType: 'DOC',
        category: 'Other',
        fileUrl: '/downloads/partner-guidelines.docx',
    },
]

const iconByType = {
    PDF: <FileText className="w-8 h-8 text-red-500" />,
    DOC: <FileText className="w-8 h-8 text-blue-500" />,
    XLS: <FileText className="w-8 h-8 text-green-500" />,
    IMG: <File className="w-8 h-8 text-yellow-500" />,
    OTHER: <File className="w-8 h-8 text-gray-500" />,
}

const categories: DocCategory[] = ['All', 'Catalogs', 'Certificates', 'MSDS', 'Labels', 'Other']

const DocumentGrid = () => {
    const [active, setActive] = useState<DocCategory>('All')
    const [query, setQuery] = useState('')

    const filteredDocs = documents.filter((doc) => {
        const inCategory = active === 'All' || doc.category === active
        const inSearch =
            doc.title.toLowerCase().includes(query.toLowerCase()) ||
            doc.description.toLowerCase().includes(query.toLowerCase())
        return inCategory && inSearch
    })

    const handleDownloadAll = () => {
        filteredDocs.forEach((doc) => {
            window.open(doc.fileUrl, '_blank')
        })
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActive(category)}
                                className={`tab tab-sm transition tabs-boxed ${active === category ? 'tab-active bg-primary text-white' : ''
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search + Download All */}
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
                        <label className="input input-bordered flex items-center gap-2 w-full md:w-64">
                            <Search className="w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search documents..."
                                className="grow"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </label>
                        <button
                            onClick={handleDownloadAll}
                            className="btn btn-outline btn-primary gap-2 whitespace-nowrap"
                            disabled={filteredDocs.length === 0}
                        >
                            <Download className="w-4 h-4" />
                            Download All
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredDocs.map((doc) => (
                        <div key={doc.id} className="card shadow-md bg-slate-50 hover:shadow-xl transition rounded-xl">
                            <div className="card-body p-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    {iconByType[doc.fileType] || iconByType.OTHER}
                                    <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{doc.description}</p>
                                <div className="mt-auto text-right">
                                    <a
                                        href={doc.fileUrl}
                                        download
                                        className="btn btn-sm btn-outline btn-primary gap-2"
                                    >
                                        <FileDown className="w-4 h-4" />
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredDocs.length === 0 && (
                    <div className="text-center text-gray-500 mt-12 text-lg font-medium">
                        No documents found.
                    </div>
                )}
            </div>
        </section>
    )
}

export default DocumentGrid
