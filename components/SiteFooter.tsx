export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-border/20 px-6 py-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-muted/35">
          © {year} Suhaib Khan
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-muted/25">
          Built thoughtfully.
        </p>
      </div>
    </footer>
  );
}
