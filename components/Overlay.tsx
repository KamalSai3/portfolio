"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Section 1: Intro (0% - 20%)
    const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Section 2: Work (20% - 50%)
    // Starts appearing at 0.15, fully visible at 0.3, starts fading at 0.45
    const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.5], ["50%", "0%", "-50%"]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);

    // Section 3: Philosophy (50% - 80%)
    const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], ["50%", "0%", "-50%"]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center text-white">
            {/* Scroll Progress Indicator for debugging/visuals if needed, or just sections */}

            {/* Section 1 - Center */}
            <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="absolute inset-0 flex items-center justify-center p-8 text-center"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                        Kamal Sai.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 font-light">
                        Associate Software Developer Intern @ Mphasis
                    </p>
                </div>
            </motion.div>

            {/* Section 2 - Left */}
            <motion.div
                style={{ y: y2, opacity: opacity2 }}
                className="absolute inset-0 flex items-center justify-start p-12 md:p-24"
            >
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Full Stack Developer & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            AI 
                        </span><br /> Enthusiast.
                    </h2>
                    <p className="text-lg text-white/60">
                        Blending technical skills to create immersive web applications.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 - Right */}
            <motion.div
                style={{ y: y3, opacity: opacity3 }}
                className="absolute inset-0 flex items-center justify-end p-12 md:p-24 text-right"
            >
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Building scalable <br />
                        solutions.
                    </h2>
                    <p className="text-lg text-white/60">
                        High performance code meets pixel-perfect aesthetics.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
