'use client'
import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Testimonial } from "@/utils/type"



// const testimonials: Testimonial[] = [
//     {
//         name: "Dr. Rakesh Mehta",
//         position: "Clinic Owner, Gujarat",
//         message:
//             "WellPath has become our go-to supplier. The delivery is always on time and the product quality is top-notch. Our patients trust the meds we prescribe because of them.",
//         image: "/images/testimonials/doc1.jpg",
//     },
//     {
//         name: "Ankita Shah",
//         position: "Procurement Manager, MediCare Pharmacy",
//         message:
//             "Switching to WellPath improved our medicine shelf. Transparent labeling, competitive pricing, and zero delays — truly professional and reliable.",
//         image: "/images/testimonials/pharmacy1.jpg",
//     },
//     {
//         name: "Junaid Khan",
//         position: "Medical Wholesaler, Mumbai",
//         message:
//             "Bulk orders, fast processing, and unmatched consistency. WellPath gives me confidence in every deal I make with my network.",
//         image: "/images/testimonials/wholesaler1.jpg",
//     },
// ]

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const [isPaused, setIsPaused] = useState(false)
    const scrollSpeedRef = useRef(1) // Adjust speed as needed
    const [isDragging, setIsDragging] = useState(false)

    // Auto-scroll with infinite loop
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const animate = () => {
            if (!isPaused && container && !isDragging) {
                container.scrollLeft += scrollSpeedRef.current

                // When we reach near the end of the content, reset to the beginning
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.style.scrollBehavior = 'auto'
                    container.scrollLeft = 1 // Reset to slightly more than 0 to prevent infinite loop
                    // Force reflow to apply the instant scroll
                    //   container.offsetHeight
                    container.style.scrollBehavior = 'smooth'
                }
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isPaused, isDragging])

    // Drag scroll
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let isDown = false
        let startX = 0
        let scrollLeft = 0

        const handleDown = (e: MouseEvent) => {
            isDown = true
            setIsDragging(true)
            startX = e.pageX - container.offsetLeft
            scrollLeft = container.scrollLeft
            container.style.scrollBehavior = 'auto'
            container.classList.add("cursor-grabbing")
            setIsPaused(true)
        }

        const handleMove = (e: MouseEvent) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - container.offsetLeft
            const walk = (x - startX) * 2 // Adjust multiplier for drag sensitivity
            container.scrollLeft = scrollLeft - walk

            // Infinite scroll during drag
            if (container.scrollLeft <= 0) {
                container.scrollLeft = container.scrollWidth - container.clientWidth - 1
                scrollLeft = container.scrollLeft
                startX = e.pageX - container.offsetLeft
            } else if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 1
                scrollLeft = container.scrollLeft
                startX = e.pageX - container.offsetLeft
            }
        }

        const handleUp = () => {
            isDown = false
            setIsDragging(false)
            container.style.scrollBehavior = 'smooth'
            container.classList.remove("cursor-grabbing")
            setIsPaused(false)
        }

        container.addEventListener("mousedown", handleDown)
        container.addEventListener("mousemove", handleMove)
        container.addEventListener("mouseleave", handleUp)
        container.addEventListener("mouseup", handleUp)

        return () => {
            container.removeEventListener("mousedown", handleDown)
            container.removeEventListener("mousemove", handleMove)
            container.removeEventListener("mouseleave", handleUp)
            container.removeEventListener("mouseup", handleUp)
        }
    }, [])

    return (
        <section className="py-24 bg-base-100 relative overflow-hidden">
            <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] z-0 pointer-events-none" />
            <div className="absolute -bottom-32 -right-10 w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Partners Say
                        <span className="block mx-auto w-24 h-1 bg-primary mt-3 rounded-full" />

                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear directly from clinics, pharmacies, and distributors who trust WellPath.
                    </p>
                </div>

                <div
                    className="overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={containerRef}
                        className="flex gap-6 cursor-grab overflow-x-auto no-scrollbar scrollbar-hide py-5" style={{ scrollBehavior: 'smooth' }}
                    >
                        {[...testimonials, ...testimonials].map((t, index) => (
                            <div
                                key={`${t.name}-${index}`}
                                className="flex-shrink-0 w-[300px] sm:w-[340px] h-[280px] bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow transition duration-300 flex flex-col justify-between"
                            >
                                {/* Quote */}
                                <div className="text-primary mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                                        <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" />
                                    </svg>
                                </div>

                                <p className="text-sm text-gray-700 leading-relaxed mb-5 break-words">
                                    {t.message}
                                </p>

                                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                                    <div className="avatar">
                                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-semibold text-sm text-gray-900 truncate">{t.name1}</h4>
                                        <p className="text-xs text-gray-500 truncate">{t.designation}, {t.city}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials