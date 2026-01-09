"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [focused, setFocused] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Use the environment variable for the backend URL
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

            const response = await fetch(`${apiUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2">
                        Let's Work Together
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {["name", "email"].map((field) => (
                                <div key={field} className="relative">
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        id={field}
                                        value={(formData as any)[field]}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [field]: e.target.value })
                                        }
                                        onFocus={() => setFocused(field)}
                                        onBlur={() => setFocused("")}
                                        className="w-full bg-card border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 transition-colors peer"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor={field}
                                        className={`absolute left-6 transition-all pointer-events-none capitalize
                      ${focused === field || (formData as any)[field]
                                                ? "-top-2.5 text-xs bg-card px-2 text-primary"
                                                : "top-4 text-muted-foreground"
                                            }`}
                                    >
                                        {field}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({ ...formData, subject: e.target.value })
                                }
                                onFocus={() => setFocused("subject")}
                                onBlur={() => setFocused("")}
                                className="w-full bg-card border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 transition-colors"
                                placeholder=" "
                            />
                            <label
                                htmlFor="subject"
                                className={`absolute left-6 transition-all pointer-events-none
                  ${focused === "subject" || formData.subject
                                        ? "-top-2.5 text-xs bg-card px-2 text-primary"
                                        : "top-4 text-muted-foreground"
                                    }`}
                            >
                                Subject
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                onFocus={() => setFocused("message")}
                                onBlur={() => setFocused("")}
                                rows={6}
                                className="w-full bg-card border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 transition-colors resize-none"
                                placeholder=" "
                            />
                            <label
                                htmlFor="message"
                                className={`absolute left-6 transition-all pointer-events-none
                  ${focused === "message" || formData.message
                                        ? "-top-2.5 text-xs bg-card px-2 text-primary"
                                        : "top-4 text-muted-foreground"
                                    }`}
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
