export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: 'var(--sunset)', boxShadow: '0 0 14px var(--sunset)' }} />
          <span className="font-display tracking-[0.22em] uppercase">Hattrick Turf & Cafe</span>
        </div>
        <div className="text-xs tracking-[0.22em] uppercase text-foreground/55">
          © {new Date().getFullYear()} Hattrick. All rights reserved.
        </div>
        <div className="flex items-center gap-5 text-xs tracking-[0.22em] uppercase text-foreground/70">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">TikTok</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  )
}