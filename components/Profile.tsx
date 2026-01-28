"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";

// Skill Data with CDN Logos
const skills = {
    languages: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    frameworks: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, // Next.js often white, might need filter
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" }, // Devicon might miss this
        { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg" },
        { name: "Scikit Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

        // LangChain custom or text if not found easily standard
    ],
    databases: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ]
};

export default function Profile() {
    return (
        <section className="relative z-10 bg-[#121212] px-8 py-24 md:px-24">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Education Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-white/10 pb-4">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-purple-400">KSSEM</h3>
                            <p className="text-white/80 mt-2">B.E. in Computer Science & Business Systems</p>
                            <div className="flex justify-between mt-4 text-sm text-white/50">
                                <span>2022 - 2026</span>
                                <span>CGPA: 8.2</span>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-purple-400">RNSPUC</h3>
                            <p className="text-white/80 mt-2">Pre-University Course</p>
                            <div className="flex justify-between mt-4 text-sm text-white/50">
                                <span>2021</span>
                                <span>Score: 87.5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-white/10 pb-4">Skills</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white/70 mb-6">Languages</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.languages.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                                    <span className="text-white">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white/70 mb-6">Frameworks & Libraries</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.frameworks.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                                    <span className="text-white">{skill.name}</span>
                                </div>
                            ))}
                            {/* Manual Add for LangChain */}
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <span className="text-white font-bold">🦜🔗</span>
                                <span className="text-white">LangChain</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white/70 mb-6">Databases & Backend</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.databases.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-500/50">
                                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                                    <span className="text-white">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-white/10 pb-4">Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Text Achievements */}
                        <div className="col-span-1 md:col-span-2 space-y-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white">First Prize</h3>
                                <p className="text-white/60">Major Project Exhibition (Computer Science and Business Systems)</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white">Second Prize</h3>
                                <p className="text-white/60">Idea Club Competition</p>
                            </div>
                        </div>

                        {/* Photo */}
                        <div className="relative aspect-video md:aspect-auto md:h-full rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/achievement_1.png"
                                alt="Achievement Interaction"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Socials / Footer-ish area */}
                <div className="flex gap-6 justify-center pt-12">
                    <a href="https://github.com/KamalSai3" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                        <Github size={20} />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kamal-sai-b3509822b" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077b5] text-white font-bold hover:brightness-110 transition-all">
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                </div>

            </div>
        </section>
    );
}
