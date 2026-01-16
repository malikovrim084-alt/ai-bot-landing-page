import { useEffect } from 'react';

export default function SuvvyChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.suvvy.ai/widget.js';
    script.async = true;
    script.setAttribute('data-token', 'cc-709dd41583548ddfa01550252bdfd452e4ca0b4182b60c3d341411e59ac58ea3');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
