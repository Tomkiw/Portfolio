"use client";

import { useState } from "react";
import { ProjectCard } from "@/features/portfolio/ProjectCard";
import { PROJECT_FILTERS, PROJECTS } from "@/lib/content/projects";
import type { ProjectFilter } from "@/types/content";
import styles from "./ProjectGallery.module.scss";

const SHOW_ALL: ProjectFilter = "all";

/** Category filters and the project grid — the only interactive part of the Work section. */
export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>(SHOW_ALL);

  const visibleProjects =
    activeFilter === SHOW_ALL
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <>
      <ul className={styles.filters} aria-label="Filter projects by category">
        {PROJECT_FILTERS.map((filter) => (
          <li key={filter.id}>
            <button
              type="button"
              className={styles.filter}
              aria-pressed={filter.id === activeFilter}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
