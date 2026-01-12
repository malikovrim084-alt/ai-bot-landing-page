import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="https://khurma.pro" className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/Основной знак на белом фоне.png" 
              alt="Khurma Marketing" 
              className="h-14 md:h-20 hover:opacity-80 transition-opacity"
            />
          </a>
          <div className="flex items-center gap-4">
            <a href="tel:+79870266416" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
              <Icon name="Phone" size={20} />
              +7 987 026 6416
            </a>
            <Button 
              size="sm"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-pulse hover:animate-none"
            >
              Заказать демо
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}