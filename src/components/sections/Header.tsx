import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const menuItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Контакты', href: '#footer' },
  ];

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
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="tel:+79870266416" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">+7 987 026 6416</span>
          </a>
        </div>
      </div>
    </header>
  );
}