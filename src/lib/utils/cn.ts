type ClassName = string | false | null | undefined;

/** Joins truthy class names: cn(styles.tab, isActive && styles.active). */
export function cn(...classNames: ClassName[]): string {
  return classNames.filter(Boolean).join(" ");
}
