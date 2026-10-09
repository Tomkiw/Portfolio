import os from "node:os";
import path from "node:path";
import type { NextConfig } from "next";

// The dev server only trusts localhost, so a phone opening it by this machine's
// network address never hydrates (the preloader stays stuck). Read from the machine
// rather than hard-coded, because the address changes between networks.
const lanAddresses = Object.values(os.networkInterfaces())
  .flatMap((addresses) => addresses ?? [])
  .filter(({ family, internal }) => family === "IPv4" && !internal)
  .map(({ address }) => address);

const nextConfig: NextConfig = {
  allowedDevOrigins: lanAddresses,
  sassOptions: {
    // Lets style modules write `@use "breakpoints"` instead of long relative paths.
    loadPaths: [path.join(process.cwd(), "src", "styles")],
  },
};

export default nextConfig;
