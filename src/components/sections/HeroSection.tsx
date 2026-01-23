import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import VideoUploader from '@/components/VideoUploader';

export default function HeroSection() {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Видео из хранилища poehali.dev
    const videoUrl = 'https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/07c10242-2663-4b84-8902-10c7e8a346f2.MOV';
    setVideoUrl(videoUrl);
  }, []);

  // Автовоспроизведение при загрузке видео
  useEffect(() => {
    if (videoUrl && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => {
        console.log('Автовоспроизведение заблокировано:', e.message);
      });
    }
  }, [videoUrl]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUrlSubmit = () => {
    if (inputUrl.trim()) {
      const url = inputUrl.trim();
      setVideoUrl(url);
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
              <div className="flex flex-col items-center">
                {videoUrl ? (
                  <div className="relative group mb-6">
                    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-2">
                      <video
                        ref={videoRef}
                        key={videoUrl}
                        controls
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => console.error('Ошибка загрузки видео:', e)}
                        onLoadedData={() => console.log('Видео загружено и готово')}
                      >
                        <source src={videoUrl} type="video/quicktime" />
                        Ваш браузер не поддерживает видео
                      </video>
                    </div>
                    <button
                      onClick={() => setVideoUrl('')}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="X" size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl mb-6">
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
                          <div className="flex flex-col gap-3">
                            <VideoUploader onVideoUploaded={(url) => setVideoUrl(url)} />
                            <Button
                              onClick={() => setShowUrlInput(true)}
                              variant="outline"
                              className="bg-transparent border-white text-white hover:bg-white/10 rounded-full"
                            >
                              <Icon name="Link" size={18} className="mr-2" />
                              Или вставить ссылку
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
                
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