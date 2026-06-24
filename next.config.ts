import type { NextConfig } from "next";

/**
 * With `experimental.mdxRs: true`, Turbopack compiles .mdx files using
 * the native Rust-based MDX compiler — no webpack loader needed.
 *
 * The `@next/mdx` withMDX() wrapper only adds webpack loader rules, which
 * Turbopack rejects with "loader undefined … does not have serializable
 * options". Removing the wrapper eliminates that error entirely.
 *
 * Production builds (`next build`) also use the mdxRs compiler when the
 * experimental flag is present, so no webpack fallback is required.
 */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
