import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 
        The ScrollyCanvas provides the 500vh height container.
        Overlay sits on top (fixed).
      */}
      <ScrollyCanvas />

      {/* 
        Overlay is fixed, so we place it anywhere, but logically it belongs 
        with the canvas. 
      */}
      <Overlay />

      {/* 
        Projects appear after the 500vh scroll.
        Since ScrollyCanvas is 500vh tall relative flow, Projects
        will naturally sit below it.
      */}
      {/* Profile Section with Education, Skills, and Bio */}
      <Profile />

      <Projects />

      <footer className="py-12 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Kamal. All rights reserved. <span className="opacity-50 ml-2">v1.3</span></p>
      </footer>
    </main>
  );
}
