import { ArrowIcon } from "@/components/icons";
import { ProjectMockup } from "@/features/portfolio/ProjectMockup";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types/content";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={cn(styles.project, styles[project.size])} data-cursor="view" data-tick="">
      <ProjectMockup project={project} />

      <span className={styles.number}>{project.number} —</span>
      <span className={styles.arrow} aria-hidden="true">
        <ArrowIcon />
      </span>

      <dl className={styles.metrics}>
        {project.metrics.map((metric) => (
          <div key={metric.label} className={styles.metric}>
            <dt className={styles.metricLabel}>{metric.label}</dt>
            <dd className={styles.metricValue}>{metric.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.overlay}>
        <span className={styles.category}>{project.categoryLabel}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </article>
  );
}
