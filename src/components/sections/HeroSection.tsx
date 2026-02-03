import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Получайте продажи автомобилей из ваших закрытых лидов
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Вернем их в продажи с помощью ИИ-чат-бота:
              </p>

              <ul className="space-y-3 mb-8 text-base md:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Напоминаем о новом поступлении товара</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Предлагаем актуальные альтернативы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Передаём горячих клиентов в отдел продаж</span>
                </li>
              </ul>

              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Уведомим отдел продаж через WhatsApp, или изменением этапа в CRM. Реактивируйте базу без лишних затрат — просто и эффективно.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse hover:animate-none"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(106250852, 'reachGoal', 'click_callback');
                    }
                    scrollToSection('callback-form');
                  }}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать обратный звонок
                </Button>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base px-6 py-6 rounded-full border-2 hover:bg-gray-50"
                    asChild
                  >
                    <a 
                      href="https://vk.ru/club235378146" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).ym) {
                          (window as any).ym(106250852, 'reachGoal', 'click_try_bot_hero');
                        }
                      }}
                    >
                      <Icon name="MessageCircle" size={20} />
                      Попробовать бота
                    </a>
                  </Button>

                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base px-6 py-6 rounded-full border-2 hover:bg-gray-50"
                    onClick={() => scrollToSection('calculator')}
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Калькулятор
                  </Button>

                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base px-6 py-6 rounded-full border-2 hover:bg-gray-50"
                    onClick={() => scrollToSection('results')}
                  >
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Результаты
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex flex-col items-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl mb-6">
                  <video
                    ref={videoRef}
                    src="https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/07c10242-2663-4b84-8902-10c7e8a346f2.MOV"
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                    onClick={togglePlay}
                  >
                    Ваш браузер не поддерживает видео
                  </video>
                  
                  {/* Кнопка play/pause - всегда видна */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                      <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl">
                        <Icon 
                          name="Play" 
                          size={36} 
                          className="text-orange-500 ml-1"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Кликабельная область */}
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 cursor-pointer"
                    aria-label={isPlaying ? "Пауза" : "Воспроизвести видео"}
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Марат Хурматуллин
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-1">
                    Владелец маркетингового агенства
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    Опыт работы в автобизнесе более 8 лет
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}