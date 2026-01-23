import { useState } from 'react';
import Icon from '@/components/ui/icon';

const goodScreenshots = [
  {
    url: 'https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/b84a15be-59c1-4f38-bea5-4186861cc87d.jpg',
    caption: 'Быстрый ответ на вопрос клиента',
    type: 'good'
  },
  {
    url: 'https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/87f2a763-5bad-41bd-8939-eda019df46e2.jpg',
    caption: 'Консультация по автомобилю',
    type: 'good'
  },
  {
    url: 'https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/3c6ddd3d-dbe3-4188-91e0-da015c630242.jpg',
    caption: 'Сбор контактных данных',
    type: 'good'
  }
];

const badScreenshots = [
  {
    url: 'https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/05c8cc7e-0a65-4257-958f-03089ea6d46a.jpg',
    caption: 'Много текста, не читабельно',
    type: 'bad'
  },
  {
    url: 'https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/e40598a2-80d7-4341-9501-fd1d43665ca1.jpg',
    caption: 'Долго отвечают, без продолжения диалога',
    type: 'bad'
  }
];

const allScreenshots = [...badScreenshots, ...goodScreenshots];

export default function ScreenshotsSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allScreenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allScreenshots.length) % allScreenshots.length);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="MessageSquare" size={16} />
              <span>Примеры диалогов</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Скриншоты диалогов с ботом
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Нужно всего лишь вовремя ответить клиенту на его вопрос
            </p>
          </div>

          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-red-50 px-6 py-3 rounded-2xl border-2 border-red-200">
                <div className="bg-red-500 p-2 rounded-lg">
                  <Icon name="XCircle" size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
                  Как не должно быть
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {badScreenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border-4 border-red-100 hover:border-red-300 transform hover:-translate-y-2"
                  onClick={() => openImage(index)}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.caption}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-600/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <p className="text-white font-bold text-lg mb-2">
                        {screenshot.caption}
                      </p>
                      <div className="flex items-center gap-2 text-red-100 text-sm">
                        <Icon name="AlertCircle" size={16} />
                        <span>Клиенты уходят</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="Maximize2" size={20} className="text-red-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-green-50 px-6 py-3 rounded-2xl border-2 border-green-200">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Icon name="CheckCircle2" size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
                  Как работает наш бот
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {goodScreenshots.map((screenshot, index) => (
                <div 
                  key={index + badScreenshots.length}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border-4 border-green-100 hover:border-green-300 transform hover:-translate-y-2"
                  onClick={() => openImage(index + badScreenshots.length)}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.caption}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-green-600/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <p className="text-white font-bold text-base mb-2">
                        {screenshot.caption}
                      </p>
                      <div className="flex items-center gap-2 text-green-100 text-sm">
                        <Icon name="TrendingUp" size={16} />
                        <span>Больше лидов</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="Maximize2" size={20} className="text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Закрыть"
          >
            <Icon name="X" size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 hidden md:block"
            aria-label="Предыдущее изображение"
          >
            <Icon name="ChevronLeft" size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 hidden md:block"
            aria-label="Следующее изображение"
          >
            <Icon name="ChevronRight" size={48} />
          </button>

          <div 
            className="max-w-5xl max-h-full w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={allScreenshots[selectedImage].url} 
              alt={allScreenshots[selectedImage].caption}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {allScreenshots[selectedImage].caption}
            </p>

            <div className="flex gap-2 mt-4 md:hidden">
              <button
                onClick={prevImage}
                className="text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Предыдущее изображение"
              >
                <Icon name="ChevronLeft" size={32} />
              </button>
              <button
                onClick={nextImage}
                className="text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Следующее изображение"
              >
                <Icon name="ChevronRight" size={32} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {allScreenshots.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImage ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}