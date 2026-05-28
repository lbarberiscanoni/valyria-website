"use client"

// src/components/ProjectCard.js
import Link from "next/link";
import Button from "@/components/Button";

export default function ProjectCard({ project, size = "large" }) {
  const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
  const imageHeight = size === "small" ? "h-48" : "h-80";

  const Thumbnail = () => (
    <a
      href={project["video-url"] || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => !project["video-url"] && e.preventDefault()}
    >
      <div className={`bg-gray-200 ${imageHeight}`}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl text-gray-500">{project.name}</span>
          </div>
        )}
      </div>
    </a>
  );

  // Small version for home page cards
  if (size === "small") {
    return (
      <div className="card">
        <Thumbnail />
        <div className="card-body">
          <h3 className="card-title">{project.name}</h3>
          <p className="card-subtitle">
            <span className="font-medium">Client:</span> {project.client} •{" "}
            <span className="font-medium">Designer:</span> {project.designer}
          </p>
          <p className="text-body line-clamp-3 mb-4">{project.description}</p>
          <div className="card-action gap-4">
            <Link href={`/${slug}`} className="text-link">
              View details
            </Link>
            {project["project-url"] && (
              <a
                href={project["project-url"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Live project
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Large version for work page and portfolio page
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Thumbnail />
      <div>
        <h2 className="heading-md mb-4">{project.name}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-caption font-medium">Client</p>
            <p className="text-body-lg">{project.client}</p>
          </div>
          <div>
            <p className="text-caption font-medium">Developer</p>
            <Link href={`/${slug}`} className="text-body-lg hover:underline">
              {project.developer}
            </Link>
          </div>
          <div>
            <p className="text-caption font-medium">Designer</p>
            <p className="text-body-lg">{project.designer}</p>
          </div>
        </div>
        <p className="text-body mb-8">{project.description}</p>
        <div className="flex flex-wrap gap-4">
          {project["project-url"] && (
            <Button href={project["project-url"]} variant="primary">
              View Live Project
            </Button>
          )}
          {project["repo-link"] && (
            <Button href={project["repo-link"]} variant="secondary">
              GitHub Repository
            </Button>
          )}
          {project["video-url"] && (
            <Button href={project["video-url"]} variant="secondary">
              Watch Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
