"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-card border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold font-heading mb-4">Let's Connect</h3>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            I'm currently available for freelance work and open to full-time opportunities.
                            If you have a project in mind, let's chat!
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={resumeData.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={resumeData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${resumeData.contact.email}`}
                                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            {['About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to get the latest updates and articles.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary/50 text-sm"
                            />
                            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                                Sub
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                        © 2024 {resumeData.name}. Made with <Heart size={14} className="text-red-500 fill-red-500" />
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-primary transition-all group"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
