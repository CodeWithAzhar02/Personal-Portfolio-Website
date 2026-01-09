"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resume";

const categories = ["All", ...new Set(resumeData.projects.map(p => p.category))];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? resumeData.projects
        : resumeData.projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Selected Works
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-white/5 hover:bg-white/10 text-muted-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors"
                            >
                                {/* Image Area */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/50 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700 relative z-0"
                                    />

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.links.github}
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                                        >
                                            <Github size={24} />
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            className="p-3 bg-primary rounded-full text-white hover:bg-blue-600 transition-colors shadow-lg"
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-primary text-xs font-bold tracking-wider uppercase mb-1 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                                                {project.title}
                                                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 rounded-md text-xs font-medium text-gray-300 border border-white/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
