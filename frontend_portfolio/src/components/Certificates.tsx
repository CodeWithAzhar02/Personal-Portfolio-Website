"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { resumeData } from "@/data/resume";
import Image from "next/image";

export default function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const certificates = resumeData.achievements;

    // Auto-scroll logic
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            next();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    return (
        <section id="certificates" className="py-20 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Certifications
                    </h2>
                    <p className="text-muted-foreground">
                        Continuous learning and professional development
                    </p>
                </motion.div>

                <div
                    className="relative max-w-5xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] bg-card/30 backdrop-blur-md border border-white/10 shadow-2xl relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col md:flex-row"
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-[65%] h-64 md:h-full relative bg-black/40 flex items-center justify-center p-8">
                                    <div className="relative w-full h-full">
                                        <img
                                            src={certificates[currentIndex].image}
                                            alt={certificates[currentIndex].name}
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-[35%] p-8 flex flex-col justify-center bg-gradient-to-br from-card/90 to-black/90 backdrop-blur-sm border-l border-white/5 relative overflow-hidden">
                                    {/* Decorative Texture */}
                                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative z-10"
                                    >
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 ring-1 ring-primary/50">
                                            <Award size={24} />
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight">
                                            {certificates[currentIndex].name}
                                        </h3>

                                        <div className="h-1 w-12 bg-primary rounded-full mb-4" />

                                        <p className="text-lg text-primary/90 font-medium mb-1 flex items-center gap-2">
                                            Issuer: <span className="text-white">{certificates[currentIndex].issuer}</span>
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-primary/50 z-20 transition-all duration-500" style={{ width: `${((currentIndex + 1) / certificates.length) * 100}%` }} />
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-4 bg-card/80 border border-white/10 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg backdrop-blur-sm group z-20"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-4 bg-card/80 border border-white/10 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg backdrop-blur-sm group z-20"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {certificates.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
