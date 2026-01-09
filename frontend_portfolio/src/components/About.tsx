"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resume"; // Import data

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        My Journey
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {resumeData.timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="hidden md:block w-1/2" />

                                {/* Icon Bubble */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-card border border-primary/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <Briefcase size={20} className="text-primary" />
                                </div>

                                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                                    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                        <span className="text-primary font-mono text-sm mb-2 block">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-3">
                                            {item.company}
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
