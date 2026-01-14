import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://functions.poehali.dev/967a1e10-5f93-415b-abe1-38af0891f912', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          message: 'Заявка с сайта'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Цель Яндекс.Метрики - успешная отправка формы
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(106250852, 'reachGoal', 'form_submit_success');
        }
        setIsSuccess(true);
        setName('');
        setPhone('');
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError('Произошла ошибка. Попробуйте позже или свяжитесь напрямую.');
      }
    } catch (err) {
      setError('Произошла ошибка. Попробуйте позже или свяжитесь напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="p-8 bg-white/95 backdrop-blur-sm max-w-md mx-auto animate-scale-in">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Заявка отправлена!</h3>
          <p className="text-muted-foreground">Я свяжусь с вами в ближайшее время</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-white to-blue-50 shadow-2xl border-2 border-primary/20 max-w-md mx-auto animate-scale-in">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Icon name="Rocket" className="text-primary" size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          Получите бесплатное ДЕМО
        </h3>
        <p className="text-muted-foreground">
          Свяжемся в течение 15 минут
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Ваше ФИО
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon name="User" className="text-muted-foreground" size={20} />
            </div>
            <input
              type="text"
              placeholder="Иван Иванов"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground font-medium"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Номер телефона
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon name="Phone" className="text-muted-foreground" size={20} />
            </div>
            <input
              type="tel"
              placeholder="+7 999 123-45-67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground font-medium"
            />
          </div>
        </div>
        {error && (
          <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-600 text-sm font-medium flex items-start gap-2">
            <Icon name="AlertCircle" size={20} className="flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full text-sm py-6 font-bold shadow-lg hover:shadow-xl transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Icon name="Loader2" className="animate-spin" size={18} />
              Отправка...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Icon name="Send" size={18} />
              ПОЛУЧИТЬ БЕСПЛАТНОЕ ДЕМО
            </span>
          )}
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-4">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </Card>
  );
}