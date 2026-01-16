import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const TelegramWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.setAttribute('data-telegram-discussion', 'khurmapro_bot');
      script.setAttribute('data-comments-limit', '5');
      script.setAttribute('data-colorful', '1');
      script.async = true;

      const container = document.getElementById('telegram-chat-widget');
      if (container && !container.hasChildNodes()) {
        container.appendChild(script);
      }

      return () => {
        if (container) {
          container.innerHTML = '';
        }
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-96 h-[500px] flex flex-col animate-in slide-in-from-bottom-5">
            <div className="flex items-start justify-between mb-3 pb-3 border-b">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Чат с поддержкой</p>
                  <p className="text-xs text-gray-500">Telegram</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden rounded-lg">
              <iframe
                src="https://t.me/khurmapro_bot"
                className="w-full h-full border-0"
                title="Telegram Chat"
                allow="clipboard-write"
              />
            </div>

            <div id="telegram-chat-widget" className="mt-2"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0088cc] hover:bg-[#0077b3] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
          aria-label="Открыть Telegram чат"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
};

export default TelegramWidget;
