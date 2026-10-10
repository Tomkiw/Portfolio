"use client";

import { getButtonClassName } from "@/components/ButtonLink";
import { StatusScreen } from "@/components/StatusScreen";

type ErrorPageProps = {
  error: Error & { digest?: string };
  /** Re-fetches and re-renders the failed part of the page (Next 16 API). */
  retry: () => void;
};

// Error boundaries must be Client Components. Production hides the message itself;
// the digest matches the error in the server logs.
export default function ErrorPage({ error, retry }: ErrorPageProps) {
  return (
    <StatusScreen
      eyebrow="Error"
      title={
        <>
          Something <em>broke.</em>
        </>
      }
      description="An unexpected error interrupted the page. It is often temporary — try again."
      details={error.digest ? `Reference: ${error.digest}` : undefined}
      action={
        <button type="button" className={getButtonClassName("primary")} onClick={retry}>
          Try again
        </button>
      }
    />
  );
}
