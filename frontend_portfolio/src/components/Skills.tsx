"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.skills.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/50 transition-colors relative group"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-xl font-bold mb-6 relative z-10 flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                {category.category}
                            </h3>

                            <div className="relative z-10 flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-default"
                                    >
                                        <div className="w-6 h-6 relative shrink-0">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-200">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
