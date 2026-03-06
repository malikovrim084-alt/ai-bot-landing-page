import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Возможности', href: '#capabilities' },
    { label: 'Цена', href: '#pricing' },
    { label: 'Наши клиенты', href: '#clients' },
    { label: 'Контакты', href: '#footer' },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="https://khurma.pro" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/Слой_1.png" 
              alt="Khurma" 
              className="h-10 md:h-14 hover:opacity-80 transition-opacity"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6 mx-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+79870266416" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
              <Icon name="Phone" size={20} />
              <span className="hidden md:inline">+7 987 026 6416</span>
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden mt-4 pb-2 border-t border-gray-100 pt-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}