import { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader fixed w-full h-full z-[99999] bg-white">
          <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HeartIcon className="w-6 h-6 text-primary animate-[preloader_0.6s_infinite_alternate]" />
            <HeartIcon className="w-6 h-6 text-primary animate-[preloader_0.6s_0.3s_infinite_alternate]" />
            <HeartIcon className="w-6 h-6 text-primary animate-[preloader_0.6s_0.6s_infinite_alternate]" />
            <HeartIcon className="w-6 h-6 text-primary animate-[preloader_0.6s_0.9s_infinite_alternate]" />
          </div>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}
