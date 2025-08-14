'use client'

import { useState } from 'react'
import { Mail, User, Briefcase, FileUp, MessageSquare } from 'lucide-react'

const ApplyForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section className="relative py-24 bg-gradient-to-br from-blue-50 via-slate-100 to-white">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/bg/pattern.svg')] bg-cover bg-center pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 md:px-8 z-10 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md">Apply Now</h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Passionate about making a difference in healthcare? Submit your application or contact us at{' '}
                        <a href="mailto:hr@wellpath.in" className="text-blue-600 font-semibold hover:underline">
                            hr@wellpath.in
                        </a>
                    </p>
                </div>

                {submitted ? (
                    <div className="bg-green-100 text-green-800 text-center p-6 rounded-xl shadow-md text-lg font-medium">
                        🎉 Your application has been submitted. We’ll get back to you soon!
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/60 backdrop-blur-md border border-gray-200 p-10 rounded-2xl shadow-2xl animate-fade-in-up"
                    >
                        {/* Full Name */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-800 flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" /> Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-800 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary" /> Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Role */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-800 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" /> Role Interested In
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Sales Executive"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Resume */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-800 flex items-center gap-2">
                                <FileUp className="w-5 h-5 text-primary" /> Upload Resume
                            </label>
                            <input
                                type="file"
                                required
                                className="file-input file-input-bordered w-full"
                            />
                        </div>

                        {/* Message */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold text-gray-800 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary" /> Message
                            </label>
                            <textarea
                                placeholder="Tell us why you're a great fit..."
                                rows={5}
                                className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="btn btn-primary px-10 py-2 text-white font-semibold text-lg shadow-lg hover:scale-[1.03] transition-transform duration-200"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}

export default ApplyForm
