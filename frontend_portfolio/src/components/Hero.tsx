"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

            {/* Animated Particles/Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.3, 0.8, 0],
                            scale: [0.5, 1.5],
                            x: Math.random() * 1000 - 500,
                            y: Math.random() * 1000 - 500,
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full blur-sm"
                    />
                ))}
            </div>

            <div className="container px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide"
                    >
                        AVAILABLE FOR HIRE
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                            {resumeData.name}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium mb-4 text-primary/80">
                        {resumeData.role}
                    </p>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        {resumeData.summary}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all"
                        >
                            View My Work <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Download CV <Download size={20} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
