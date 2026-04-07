import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-slate-950">
          Lee Gyu Chan<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden lg:block">
            <Button>Contact</Button>
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <Button className="w-full">Contact</Button>
          </a>
        </nav>
      )}
    </header>
  );
}
