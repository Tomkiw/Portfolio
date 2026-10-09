import type { Metadata } from "next";
import Link from "next/link";
import { getButtonClassName } from "@/components/ButtonLink";
import { ArrowIcon } from "@/components/icons";
import { StatusScreen } from "@/components/StatusScreen";

export const metadata: Metadata = {
  title: "Page not found",
};

// Also shown for every URL the site does not have.
export default function NotFound() {
  return (
    <StatusScreen
      eyebrow="404"
      title={
        <>
          Page <em>not found.</em>
        </>
      }
      description="The page you are looking for does not exist or has moved."
      action={
        <Link href="/" className={getButtonClassName("primary")}>
          Back to home
          <ArrowIcon />
        </Link>
      }
    />
  );
}
