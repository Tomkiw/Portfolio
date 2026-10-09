import { useSyncExternalStore } from "react";
import { SECTION_ID } from "@/lib/content/navigation";
import type { SectionId } from "@/types/content";

const KNOWN_SECTION_IDS = new Set<string>(Object.values(SECTION_ID));

function isSectionId(value: string): value is SectionId {
  return KNOWN_SECTION_IDS.has(value);
}

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHash(): string {
  return window.location.hash;
}

function getServerHash(): string {
  return "";
}

/**
 * Section of the last in-page link the visitor followed (taken from the URL hash),
 * "home" by default. Any link — nav, logo, mobile menu — updates it, with no shared state.
 */
export function useActiveSection(): SectionId {
  const id = useSyncExternalStore(subscribe, getHash, getServerHash).slice(1);
  return isSectionId(id) ? id : SECTION_ID.home;
}
