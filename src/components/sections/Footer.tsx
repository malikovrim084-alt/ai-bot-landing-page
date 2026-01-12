import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-heading text-2xl font-bold mb-4">Свяжитесь со мной</h3>
          
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a href="tel:+79870266416" className="hover:text-primary transition-colors flex items-center gap-2 text-lg">
              <Icon name="Phone" size={24} />
              +7 987 026 6416
            </a>
            <span className="text-slate-600">|</span>
            <a href="https://wa.me/79870266416" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-lg">
              <Icon name="MessageCircle" size={24} />
              WhatsApp
            </a>
            <span className="text-slate-600">|</span>
            <a href="https://vk.ru/khurma.marketing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-lg">
              <Icon name="MessageSquare" size={24} />
              VK
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <p className="font-semibold text-xl mb-2">Рим Маликов</p>
            <a href="https://khurma.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-300 transition-colors text-lg">
              khurma.pro
            </a>
          </div>

          <div className="pt-4">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 AI-бот 24/7. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
