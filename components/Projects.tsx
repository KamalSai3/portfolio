"use client";

import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    image: string; // Using colors/gradients for now, could be images
}

// FUTURE: Add new projects to this array.
// Ensure to add an relevant image or gradient.
const projects: Project[] = [
    {
        id: 1,
        title: "AI Dashboard",
        category: "Data Visualization",
        image: "bg-gradient-to-br from-purple-600 to-blue-600",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        category: "Full Stack Web App",
        image: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        id: 3,
        title: "Design System",
        category: "UI/UX Library",
        image: "bg-gradient-to-br from-orange-500 to-red-600",
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 min-h-screen bg-[#121212] px-8 py-24 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white">Selected Works</h2>

                {/* Placeholder for future projects */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">More projects to come</h3>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        I am currently working on deploying and uploading more exciting projects.
                        Stay tuned for updates as I build my portfolio.
                    </p>
                </div>

                {/* 
            FUTURE: Uncomment this grid when you are ready to display projects.
            Add new projects to the 'projects' array above.
        */}
                {/* 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 opacity-50 pointer-events-none grayscale blur-sm hidden">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              <div className={`h-80 w-full ${project.image} transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100`} />
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <p className="text-white/60">
                   A cutting-edge digital solution pushing the boundaries of what is possible on the web.
                </p>
              </div>
            </div>
          ))}
        </div> 
        */}
            </div>
        </section>
    );
}
