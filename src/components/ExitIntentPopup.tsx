import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ExitIntentPopupProps {
  onOpenChat: () => void;
}

export default function ExitIntentPopup({ onOpenChat }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShown) return;
      
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
        
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(106250852, 'reachGoal', 'exit_intent_popup_shown');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106250852, 'reachGoal', 'exit_intent_popup_closed');
    }
  };

  const handleTestBot = () => {
    onOpenChat();
    setIsVisible(false);
    
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106250852, 'reachGoal', 'exit_intent_test_bot_click');
    }
  };

  const handleFillForm = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
    
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106250852, 'reachGoal', 'exit_intent_fill_form_click');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-scale-in">
        <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors"
          >
            <Icon name="X" size={20} className="text-slate-600" />
          </button>

          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Icon name="Bot" size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Подождите! 🚀
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Протестируйте AI-бота прямо сейчас — это займет <span className="font-bold text-primary">всего 30 секунд</span>
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleTestBot}
              size="lg"
              className="w-full py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="MessageCircle" size={20} />
              Протестировать бота сейчас
            </Button>
            
            <Button
              onClick={handleFillForm}
              size="lg"
              variant="outline"
              className="w-full py-6 text-base font-bold border-2"
            >
              <Icon name="FileText" size={20} />
              Заполнить форму
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Без регистрации • Ответ за 10 секунд • 100% бесплатно
          </p>
        </div>
      </div>
    </>
  );
}
