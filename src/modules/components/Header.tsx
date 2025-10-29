type Page = 'home' | 'photos' | 'writing' | 'online' | 'contact';

export function Header({ onNavigate, current }: { onNavigate: (p: Page) => void; current: Page }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <button
          className="text-lg font-semibold hover:opacity-90"
          onClick={() => onNavigate('home')}
        >
          Amiya Mandal
        </button>

        <nav className="flex items-center gap-4 text-sm">
          {[
            ['Photos', 'photos'],
            ['Writing', 'writing'],
            ['Online', 'online'],
            ['Contact', 'contact'],
          ].map(([label, key]) => {
            const k = key as Page;
            const active = current === k;
            return (
              <button
                key={label}
                onClick={() => onNavigate(k)}
                className={
                  'px-2 py-1 rounded transition-colors ' +
                  (active ? 'bg-foreground text-background' : 'hover:text-foreground text-muted')
                }
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


