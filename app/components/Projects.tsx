import { ProjectCard } from "./ProjectCard";

// Mock data for projects
const projects = [
  {
    title: "Local Cut",
    description:
      "Local-first browser video editor. Import, trim, split, and arrange clips — all processing stays on your device.",
    githubUrl: "https://github.com/awd17/local-video-editor",
    projectUrl: "https://local-cut.vercel.app/",
    imageUrl: "/LocalCutScreenshot.webp",
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
          />
        ))}
      </div>
    </section>
  );
}
