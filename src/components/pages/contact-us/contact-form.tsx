'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // TODO: API call logic
        setSubmitted(true)
    }

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50" id="contact-form">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Send Us a <span className="text-primary">Message</span>
                    </h2>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        We’d love to hear from you. Fill out the form below and we’ll get back to you within 24 hours.
                    </p>
                </div>

                {submitted ? (
                    <div className="bg-green-100 text-green-800 text-center p-6 rounded-lg shadow-lg font-medium animate-fade-in-up">
                        ✅ Your message has been sent successfully!
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 rounded-2xl shadow-xl animate-fade-in-up border border-slate-200"
                    >
                        {/* Name */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                required
                                className="input input-bordered w-full transition-all focus:ring-2 focus:ring-primary/60"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="input input-bordered w-full transition-all focus:ring-2 focus:ring-primary/60"
                            />
                        </div>

                        {/* Subject */}
                        <div className="form-control col-span-1 md:col-span-2">
                            <label className="label font-semibold text-gray-700">Subject (Optional)</label>
                            <input
                                type="text"
                                placeholder="e.g. Inquiry about partnership"
                                className="input input-bordered w-full transition-all focus:ring-2 focus:ring-primary/60"
                            />
                        </div>

                        {/* Message */}
                        <div className="form-control col-span-1 md:col-span-2">
                            <label className="label font-semibold text-gray-700">Message</label>
                            <textarea
                                placeholder="Write your message here..."
                                rows={6}
                                required
                                className="textarea textarea-bordered w-full transition-all focus:ring-2 focus:ring-primary/60"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-1 md:col-span-2 text-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary text-white font-semibold px-8 gap-2 hover:scale-105 transition-transform duration-200 shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}

export default ContactForm
