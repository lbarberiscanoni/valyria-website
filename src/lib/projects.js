// src/lib/projects.js
// Shared helpers for working with project date fields (start_date / end_date).

// Sorts projects most-recent-first by start_date. Projects without a start_date
// are treated as undated and pushed to the end, in their original relative order.
export function sortProjectsByDate(projects) {
  return [...projects].sort((a, b) => {
    const dateA = a.start_date ? new Date(a.start_date) : null;
    const dateB = b.start_date ? new Date(b.start_date) : null;

    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;

    return dateB - dateA;
  });
}

// Number of days between start_date and end_date, or null if either is missing
// or the range is invalid (e.g. end before start).
export function getDaysToCompletion(project) {
  if (!project.start_date || !project.end_date) return null;

  const start = new Date(project.start_date);
  const end = new Date(project.end_date);

  if (isNaN(start) || isNaN(end)) return null;

  const days = Math.round((end - start) / (1000 * 60 * 60 * 24));
  return days >= 0 ? days : null;
}

const MONTH_YEAR = { month: "short", year: "numeric" };

// Human-readable date range, e.g. "Sep 2023 - Jan 2024", "Sep 2023 - Present",
// or "" when there's no start_date to anchor the range.
export function formatProjectDateRange(project) {
  if (!project.start_date) return "";

  const start = new Date(project.start_date);
  if (isNaN(start)) return "";

  const startLabel = start.toLocaleDateString("en-US", MONTH_YEAR);

  if (!project.end_date) return `${startLabel} - Present`;

  const end = new Date(project.end_date);
  if (isNaN(end)) return startLabel;

  return `${startLabel} - ${end.toLocaleDateString("en-US", MONTH_YEAR)}`;
}
