import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface LiveChatProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function LiveChat({ isOpen: externalIsOpen, onOpenChange }: LiveChatProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  
  const setIsOpen = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalIsOpen(open);
    }
  };
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sessionId] = useState(`session-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Функция для получения новых сообщений
  const pollMessages = async () => {
    if (!sessionId) return;

    try {
      const response = await fetch(
        `https://functions.poehali.dev/a6fc0e6d-052a-48fb-8f88-fd9cd4e46ea9?chat_id=${sessionId}`,
        { method: 'GET' }
      );
      const data = await response.json();

      if (data.success && data.messages && data.messages.length > 0) {
        // Добавляем новые сообщения от бота
        const newMessages: Message[] = data.messages.map((msg: any) => ({
          id: `bot-${msg.id}`,
          text: msg.text || msg.file_name || 'Файл',
          sender: 'bot' as const,
          timestamp: new Date(msg.timestamp || Date.now())
        }));

        setMessages(prev => [...prev, ...newMessages]);
        setIsTyping(false);
      }
    } catch (error) {
      console.error('Error polling messages:', error);
    }
  };

  // Polling для получения новых сообщений от Suvvy (каждую секунду)
  useEffect(() => {
    if (!sessionId) return;

    const interval = setInterval(pollMessages, 1000);
    return () => clearInterval(interval);
  }, [sessionId]);



  const handleSendMessage = async () => {
    if (!inputText.trim() || isSending) return;

    const userMessageText = inputText;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsSending(true);
    setIsTyping(true);

    try {
      // Отправляем сообщение боту Suvvy
      const response = await fetch('https://functions.poehali.dev/a6fc0e6d-052a-48fb-8f88-fd9cd4e46ea9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessageText,
          name: 'Гость',
          phone: '',
          session_id: sessionId
        }),
      });

      const data = await response.json();

      // Обновляем session_id если изменился
      if (data.session_id) {
        setSessionId(data.session_id);
      }

      // Сразу проверяем новые сообщения (не ждём polling)
      setTimeout(() => pollMessages(), 500);
      setTimeout(() => pollMessages(), 2000);
      setTimeout(() => pollMessages(), 5000);



    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Кнопка чата */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-lg shadow-lg border-2 border-primary/20 animate-pulse">
            <p className="text-sm font-semibold text-foreground">🤖 Протестируй бота!</p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-bounce-slow"
          >
            <Icon name="Bot" size={28} />
          </button>
        </div>
      )}

      {/* Окно чата */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-primary/20 animate-scale-in">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Тестовый бот консультант автосалона</h3>
                <p className="text-xs text-white/80">🤖 ИИ-ассистент онлайн</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <>
              {/* Сообщения */}
              <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-white text-foreground rounded-bl-none shadow-sm border border-slate-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap break-words">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Индикатор "печатает" */}
                {isTyping && (
                  <div className="mb-4 flex justify-start">
                    <div className="bg-white text-foreground rounded-2xl rounded-bl-none shadow-sm border border-slate-200 px-4 py-3">
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Поле ввода */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Введите сообщение..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isSending}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isSending}
                    className="w-12 h-12 bg-primary hover:bg-primary/90 disabled:bg-slate-300 text-white rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    {isSending ? (
                      <Icon name="Loader2" size={20} className="animate-spin" />
                    ) : (
                      <Icon name="Send" size={20} />
                    )}
                  </button>
                </div>
              </div>
          </>
        </div>
      )}
    </>
  );
}