import { ButtonLink } from "@/components/ButtonLink";
import { ArrowIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/features/layout/MobileMenu";
import { NavLinks } from "@/features/layout/NavLinks";
import { anchorHref, SECTION_ID } from "@/lib/content/navigation";
import styles from "./Nav.module.scss";

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Logo />
        <NavLinks />
        <div className={styles.actions}>
          <ButtonLink href={anchorHref(SECTION_ID.contact)}>
            Let&apos;s Talk
            <ArrowIcon />
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
