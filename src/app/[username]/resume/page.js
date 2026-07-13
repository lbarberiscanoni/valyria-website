"use client"

// src/app/[username]/resume/page.js
import { useParams } from 'next/navigation';
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import teamData from "@/app/data/team.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { sortProjectsByDate, formatProjectDateRange } from "@/lib/projects";

export default function Resume() {
  const params = useParams();
  const username = params.username;
  const normalizedUsername = username.toLowerCase();
  const isFirstNameOnly = !normalizedUsername.includes('-');

  const allTeamMembers = [...teamData.leadership, ...teamData.students];

  const teamMember = allTeamMembers.find(member => {
    const fullName = member.name.toLowerCase().replace(/\s+/g, '-');
    if (isFirstNameOnly) {
      const firstName = member.name.split(' ')[0].toLowerCase();
      return firstName === normalizedUsername;
    }
    return fullName === normalizedUsername;
  });

  const experience = teamMember
    ? sortProjectsByDate(
        projectsData.projects.filter((project) => project.developer === teamMember.name)
      )
    : [];

  if (!teamMember) {
    return (
      <Section>
        <Container size="md">
          <p className="text-body">No resume found for &ldquo;{username}&rdquo;.</p>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section variant="hero">
        <Container size="md">
          <div className="flex-between flex-col md:flex-row gap-6">
            <div>
              <h1 className="heading-lg mb-2">{teamMember.name}</h1>
              <p className="text-body-lg text-secondary">{teamMember.role}</p>
            </div>

            {teamMember.links.resume_url && (
              <Button href={teamMember.links.resume_url} download variant="white">
                Download PDF
              </Button>
            )}
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href={`mailto:${teamMember.name.toLowerCase().replace(/\s+/g, '.')}@valyriastudios.com`}
              className="text-link"
            >
              Email
            </a>
            {teamMember.links.linkedin && (
              <a href={teamMember.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
                LinkedIn
              </a>
            )}
            {teamMember.links.github && (
              <a href={teamMember.links.github} target="_blank" rel="noopener noreferrer" className="text-link">
                GitHub
              </a>
            )}
            {teamMember.links.portfolio_url && (
              <a href={teamMember.links.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-link">
                Portfolio
              </a>
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <h2 className="heading-sm mb-4">Summary</h2>
          <p className="text-body mb-12">{teamMember.bio}</p>

          {teamMember.skills && teamMember.skills.length > 0 && (
            <>
              <h2 className="heading-sm mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-12">
                {teamMember.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-gray-200 rounded-full text-body-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}

          {experience.length > 0 && (
            <>
              <h2 className="heading-sm mb-4">Experience</h2>
              <div className="space-y-8">
                {experience.map((project) => (
                  <div key={project.name} className="border-l border-gray-200 pl-6">
                    <div className="flex-between flex-col sm:flex-row sm:items-baseline gap-1">
                      <h3 className="heading-xs">{project.name}</h3>
                      <span className="text-caption">{formatProjectDateRange(project)}</span>
                    </div>
                    <p className="text-caption mb-2">Client: {project.client}</p>
                    <p className="text-body">{project.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-12">
            <Link href={`/${username}`} className="text-link">
              &larr; Back to profile
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
