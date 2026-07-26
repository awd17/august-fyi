import { ProjectCard } from "./ProjectCard";

// Mock data for projects
const projects = [
  {
    title: "Timbre",
    description:
      "Private, fast voice dictation for macOS. Lives in your menu bar, transcribes locally, and inserts text wherever your cursor is.",
    githubUrl: "https://github.com/awd17/Timbre",
    projectUrl: "https://www.timbre.website/",
    imageUrl: "/TimbreScreenshot.webp",
    stack: "Swift · SwiftUI · Parakeet · FluidAudio · KeyboardShortcuts",
  },
  {
    title: "Local Cut",
    description:
      "Local-first browser video editor. Import, trim, split, and arrange clips — all processing stays on your device.",
    githubUrl: "https://github.com/awd17/local-video-editor",
    projectUrl: "https://local-cut.vercel.app/",
    imageUrl: "/LocalCutScreenshot.webp",
    stack: "Vite · React · TypeScript · WebCodecs · Zustand · Tailwind",
  },
  {
    title: "Poly Research",
    description:
      "Deep analysis agent for Polymarket markets with odds estimation and edge-focused reports.",
    githubUrl: "https://github.com/awd17/polyresearch",
    projectUrl: "https://polyresearch.vercel.app/",
    imageUrl: "/PolyResearchScreenshot.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex flex-col space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            projectUrl={project.projectUrl}
            imageUrl={project.imageUrl}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
}
