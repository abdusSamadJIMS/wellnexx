'use client'

import { useState, useMemo, SetStateAction } from 'react'
import {
    MapPin,
    Building2,
    ChevronDown,
    ChevronUp,
    Search,
} from 'lucide-react'
import clsx from 'clsx'

const jobs = [
    {
        id: 1,
        title: 'Medical Sales Representative',
        department: 'Sales',
        location: 'Lucknow',
        description:
            'Build relationships with healthcare providers, promote our products, and drive growth in your region.',
    },
    {
        id: 2,
        title: 'Quality Control Executive',
        department: 'Quality Assurance',
        location: 'Haridwar Plant',
        description:
            'Ensure that all pharmaceutical products meet high safety, compliance, and quality standards.',
    },
    {
        id: 3,
        title: 'Regulatory Affairs Associate',
        department: 'Compliance',
        location: 'Remote',
        description:
            'Manage product documentation, liaise with authorities, and ensure we meet all national guidelines.',
    },
    {
        id: 4,
        title: 'Packaging Supervisor',
        department: 'Production',
        location: 'Haridwar Plant',
        description:
            'Oversee and ensure quality packaging of all pharmaceutical products according to GMP standards.',
    },
]

const uniqueDepartments = Array.from(new Set(jobs.map((j) => j.department)))
const uniqueLocations = Array.from(new Set(jobs.map((j) => j.location)))

export default function OpenPositionsSection() {
    const [openJob, setOpenJob] = useState<number | null>(null)
    const [search, setSearch] = useState('')
    const [department, setDepartment] = useState('')
    const [location, setLocation] = useState('')

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.description.toLowerCase().includes(search.toLowerCase())
            const matchesDept = department ? job.department === department : true
            const matchesLoc = location ? job.location === location : true
            return matchesSearch && matchesDept && matchesLoc
        })
    }, [search, department, location])

    return (
        <section className="py-24 bg-gradient-to-br from-white to-blue-50 border-t">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in-up">
                    Open <span className="text-primary">Positions</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by title or description"
                            className="pl-10 input input-bordered"
                            value={search}
                            onChange={(e: { target: { value: SetStateAction<string> } }) => setSearch(e.target.value)}
                        />
                    </div>
                    <select
                        className="select select-bordered w-full"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="">All Departments</option>
                        {uniqueDepartments.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>
                    <select
                        className="select select-bordered w-full"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">All Locations</option>
                        {uniqueLocations.map((l) => (
                            <option key={l} value={l}>
                                {l}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-6">
                    {filteredJobs.map((job) => {
                        const isOpen = openJob === job.id
                        return (
                            <div
                                key={job.id}
                                className={clsx(
                                    'border border-gray-200 rounded-xl shadow-sm transition-all duration-300 bg-white overflow-hidden',
                                    isOpen ? 'shadow-lg scale-[1.01]' : 'hover:shadow-md'
                                )}
                            >
                                <button
                                    onClick={() => setOpenJob(isOpen ? null : job.id)}
                                    className="w-full text-left px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 cursor-pointer"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 animate-fade-in">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-gray-600 mt-1 gap-4">
                                            <span className="flex items-center gap-1">
                                                <Building2 className="w-4 h-4" /> {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-primary">
                                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed animate-fade-in">
                                        <p className="mb-4">{job.description}</p>
                                        <a
                                            href={`mailto:hr@wellpath.in?subject=Application for ${job.title}`}
                                            className="btn btn-sm btn-primary"
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    {filteredJobs.length === 0 && (
                        <div className="text-center text-gray-500 py-10 animate-fade-in">
                            No positions match your criteria.
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
