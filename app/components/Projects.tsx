import { ProjectCard } from "./ProjectCard";

// Mock data for projects
const projects = [
  {
    title: "Poly Research",
    description:
      "Deep analysis agent for Polymarket markets with odds estimation and edge-focused reports.",
    githubUrl: "https://github.com/awd17/polyresearch",
    projectUrl: "https://polyresearch.vercel.app/",
    imageUrl: "/PolyResearchScreenshot.png",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    githubUrl: "https://github.com/awd17/august-fyi",
    projectUrl: "https://august.fyi",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=top",
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
