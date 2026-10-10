import { MEDIA_QUERY } from "@/lib/constants";
import { useMediaQuery } from "./useMediaQuery";

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery(MEDIA_QUERY.reducedMotion);
}
