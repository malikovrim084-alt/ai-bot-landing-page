import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  useEffect(() => {
    fetch('https://functions.poehali.dev/8dddbd14-ed51-48be-a2e0-089dfbd42d93')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.videos && data.videos.length > 0) {
          setVideoUrl(data.videos[0].url);
        }
      })
      .catch(err => console.error('Error loading video:', err));
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUrlSubmit = () => {
    if (inputUrl.trim()) {
      setVideoUrl(inputUrl.trim());
      setShowUrlInput(false);
      setInputUrl('');
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Icon name="Car" size={16} />
                <span>Для автосалонов • 24/7 • За 10 секунд</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ваш автосалон теряет 50% лидов каждый месяц
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                AI-бот отвечает на Авито 24/7 за 10 секунд, собирает номера телефонов и передаёт горячие заявки менеджерам. <span className="font-semibold text-gray-900">Рост лидов на 40-50%</span> без увеличения рекламного бюджета.
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
                      href="https://t.me/khurmapro_bot" 
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
              {videoUrl ? (
                <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                  <video 
                    src={videoUrl} 
                    controls 
                    className="w-full aspect-video"
                  >
                    Ваш браузер не поддерживает видео
                  </video>
                  <button
                    onClick={() => setVideoUrl('')}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center p-8">
                    <Icon name="Video" className="text-white mx-auto mb-4" size={64} />
                    {showUrlInput ? (
                      <div className="max-w-md mx-auto">
                        <input
                          type="url"
                          placeholder="Вставьте ссылку на видео"
                          value={inputUrl}
                          onChange={(e) => setInputUrl(e.target.value)}
                          className="w-full px-4 py-3 rounded-full mb-3 text-gray-900"
                        />
                        <div className="flex gap-2 justify-center">
                          <Button
                            onClick={handleUrlSubmit}
                            className="bg-white text-orange-600 hover:bg-gray-100 rounded-full"
                          >
                            Добавить
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setShowUrlInput(false);
                              setInputUrl('');
                            }}
                            className="bg-transparent border-white text-white hover:bg-white/10 rounded-full"
                          >
                            Отмена
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-white text-lg font-semibold mb-4">Добавьте видео</p>
                        <Button
                          onClick={() => setShowUrlInput(true)}
                          className="bg-white text-orange-600 hover:bg-gray-100 rounded-full"
                        >
                          <Icon name="Link" size={18} className="mr-2" />
                          Вставить ссылку
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}