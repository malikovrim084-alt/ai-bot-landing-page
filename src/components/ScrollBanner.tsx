import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ScrollBannerProps {
  onOpenChat: () => void;
}

export default function ScrollBanner({ onOpenChat }: ScrollBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const percentage = (scrollTop / trackLength) * 100;
      
      setScrollPercentage(percentage);
      
      if (percentage >= 50 && !isClosed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  useEffect(() => {
    if (!isVisible || isClosed) return;

    const timer = setTimeout(() => {
      if (scrollPercentage >= 50) {
        setIsClosed(false);
      }
    }, 120000);

    return () => clearTimeout(timer);
  }, [isClosed, scrollPercentage]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106250852, 'reachGoal', 'scroll_banner_closed');
    }
  };

  const handleClick = () => {
    onOpenChat();
    setIsVisible(false);
    setIsClosed(true);
    
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106250852, 'reachGoal', 'scroll_banner_click');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 animate-slide-down">
      <div className="bg-gradient-to-r from-primary via-blue-600 to-primary text-white shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                <Icon name="Bot" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm md:text-base">
                  🤖 Хотите узнать цену на авто за 30 секунд? Спросите бота!
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                onClick={handleClick}
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg whitespace-nowrap"
              >
                <Icon name="MessageCircle" size={16} />
                <span className="hidden sm:inline">Задать вопрос боту</span>
                <span className="sm:hidden">Спросить</span>
              </Button>
              
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              >
                <Icon name="X" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
