import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ContactForm from '@/components/ContactForm';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Icon name="Car" size={16} />
              <span>Для автосалонов • Отвечает за 10 секунд • 24/7</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 leading-tight">
              AI-бот для автосалонов — продает машины 24/7
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Консультирует клиентов по авто, отвечает на вопросы о комплектациях и ценах. Записывает на тест-драйв, пока менеджеры спят.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="default" 
                className="px-6 py-5"
                asChild
              >
                <a href="https://t.me/khurmapro_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  Попробовать бота
                </a>
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="px-6 py-5"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Рассчитать прибыль
              </Button>
            </div>
          </div>
          <div className="max-w-md mx-auto animate-scale-in">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}