"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Achievements & Certifications
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognitions and certifications earned throughout my journey.
                    </p>
                </motion.div>

                {/* Marquee Effect */}
                <div className="relative w-full overflow-hidden mask-gradient-x">
                    <div className="flex gap-8 items-center animate-scroll whitespace-nowrap hover:pause">
                        {[...resumeData.achievements, ...resumeData.achievements].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="relative flex-none w-64 h-48 bg-card rounded-xl border border-white/5 overflow-hidden group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-bold text-sm truncate">{item.name}</p>
                                    <p className="text-primary text-xs">{item.issuer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
