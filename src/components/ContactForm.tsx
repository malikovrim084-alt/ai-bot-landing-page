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
    <Card className="p-8 bg-white/95 backdrop-blur-sm max-w-md mx-auto animate-scale-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Ваше ФИО"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
          />
        </div>
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full text-lg py-6 font-bold"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Icon name="Loader2" className="animate-spin" size={20} />
              Отправка...
            </span>
          ) : (
            'ОСТАВИТЬ ЗАЯВКУ'
          )}
        </Button>
      </form>
    </Card>
  );
}