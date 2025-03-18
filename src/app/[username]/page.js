// app/[username]/page.js
import projectsData from "@/app/data/projects.json";

export default function Portfolio({ params }) {
  const { username } = params;
  const userProjects = projectsData.projects.filter(
    (project) =>
      project.developer.toLowerCase().includes(username.toLowerCase())
  );

  return (
    <main>
      <h1>{username}'s Portfolio</h1>
      {userProjects.length > 0 ? (
        userProjects.map((project, idx) => (
          <div key={idx}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* etc. */}
          </div>
        ))
      ) : (
        <p>No projects found for {username}</p>
      )}
    </main>
  );
}
