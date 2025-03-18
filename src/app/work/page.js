import projectsData from "@/app/data/projects.json";

export default function Work() {
  const { projects } = projectsData;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Our Work</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((project, index) => {
          // Generate a URL-friendly slug for the developer
          const slug = project.developer
            .toLowerCase()
            .replace(/\s+/g, "-"); // e.g. "Mit Patel" -> "mit-patel"

          return (
            <li key={index} style={{ marginBottom: "2rem" }}>
              <h2>{project.name}</h2>
              <p>
                <strong>Developer:</strong> {project.developer} <br />
                <strong>Designer:</strong> {project.designer} <br />
                <strong>Client:</strong> {project.client}
              </p>
              <p>{project.description}</p>
              <p>
                <a href={`/${slug}`} style={{ color: "blue", textDecoration: "underline" }}>
                  Visit {project.developer}'s Portfolio
                </a>
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
