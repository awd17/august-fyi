import { ProjectCard } from "./ProjectCard";

// Mock data for projects
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    githubUrl: "https://github.com/awd17/august.fyi",
    projectUrl: "https://august.fyi",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=top",
  },
  {
    title: "Task Manager App",
    description:
      "Full-stack task management application with React and Node.js",
    githubUrl: "https://github.com/awd17/task-manager",
    projectUrl: "https://taskmanager.example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=top",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard using OpenWeather API",
    githubUrl: "https://github.com/awd17/weather-dashboard",
    projectUrl: "https://weather.example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=top",
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
