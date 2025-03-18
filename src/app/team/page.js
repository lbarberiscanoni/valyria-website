import projectsData from "@/app/data/projects.json"; // Adjust the path if necessary

export default function Team() {
  // Extract developer names from the projects data
  const developers = projectsData.projects.map((project) => project.developer);
  
  // Create a set to remove duplicates, then convert back to an array
  const uniqueDevelopers = Array.from(new Set(developers));

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Team</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {uniqueDevelopers.map((developer) => {
          // Generate a slug by converting to lowercase and replacing spaces with hyphens
          const slug = developer.toLowerCase().replace(/\s+/g, "-");

          return (
            <li key={developer} style={{ marginBottom: "1rem" }}>
              <a
                href={`/${slug}`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {developer}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}