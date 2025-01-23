import React, { useState, useEffect, useCallback } from 'react';
import { Twitter, Instagram as Telegram, Link } from 'lucide-react';

const GODZILLA_ASCII = `

░██████╗░░█████╗░██████╗░███████╗██╗██╗░░░░░██╗░░░░░░█████╗░
██╔════╝░██╔══██╗██╔══██╗╚════██║██║██║░░░░░██║░░░░░██╔══██╗
██║░░██╗░██║░░██║██║░░██║░░███╔═╝██║██║░░░░░██║░░░░░███████║
██║░░╚██╗██║░░██║██║░░██║██╔══╝░░██║██║░░░░░██║░░░░░██╔══██║
╚██████╔╝╚█████╔╝██████╔╝███████╗██║███████╗███████╗██║░░██║
░╚═════╝░░╚════╝░╚═════╝░╚══════╝╚═╝╚══════╝╚══════╝╚═╝░░╚═╝
─────▄████▀█▄
───▄█████████████████▄
─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
▄███████▄.▲.▲▲▲▲▲▲▲▲
████████████████████▀▀
`;

const CITY_ASCII = `
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████ 
 
`;

function App() {
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [isDestroying, setIsDestroying] = useState(true);

  const moveGodzilla = useCallback(() => {
    if (isDestroying) {
      setPosition((prev) => (prev > window.innerWidth ? -500 : prev + 5));
    }
  }, [isDestroying]);

  useEffect(() => {
    const interval = setInterval(moveGodzilla, speed);
    return () => clearInterval(interval);
  }, [moveGodzilla, speed]);

  const handleGodzillaClick = () => {
    setSpeed((prev) => Math.max(prev * 0.7, 10));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-green-400 p-8 flex flex-col items-center relative overflow-hidden">
      {/* Background radiation effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none opacity-20" />
      
      <h1 className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
        OG Godzilla Token
      </h1>
      
      <div className="relative w-full h-80 overflow-hidden mb-8 font-mono"> {/* Increased height */}
        <pre 
          className="absolute cursor-pointer transition-transform hover:scale-105 animate-pulse"
          style={{ 
            left: `${position}px`,
            whiteSpace: 'pre',
            fontFamily: 'monospace',
            transform: 'scale(1.5)',
            textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
            color: '#00ff00'
          }}
          onClick={handleGodzillaClick}
        >
          {GODZILLA_ASCII}
        </pre>
        
        <pre 
          className="absolute bottom-0 left-0 right-0 animate-pulse"
          style={{ 
            whiteSpace: 'pre',
            fontFamily: 'monospace',
            textShadow: '0 0 5px rgba(0, 255, 0, 0.5)'
          }}
        >
          {CITY_ASCII.repeat(8)}
        </pre>
      </div>

      <div className="text-center mb-12 relative">
        <p className="text-2xl mb-4 font-bold animate-pulse">
          Hold Godzilla to increase destruction!
        </p>
        <div className="absolute -inset-1 bg-green-500/20 blur-xl rounded-full -z-10" />
      </div>

      <div className="flex gap-8">
        <a
          href="https://t.me/+vDvBtbz2GAAzODVh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          <Twitter className="w-6 h-6" />
          <span className="font-bold">Twitter/X</span>
        </a>
        
        <a
          href="https://t.me/+vDvBtbz2GAAzODVh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-[#0088cc] to-[#0077b5] text-white px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#0088cc]/20 hover:shadow-[#0088cc]/40"
        >
          <Telegram className="w-6 h-6" />
          <span className="font-bold">Telegram</span>
        </a>
        
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
        >
          <Link className="w-6 h-6" />
          <span className="font-bold">Buy Token</span>
        </a>
      </div>

      <div className="mt-16 text-center max-w-4xl relative">
        <div className="absolute -inset-1 bg-green-500/10 blur-3xl rounded-3xl -z-10" />
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
          About OG Godzilla Token
        </h2>
        <p className="text-xl leading-relaxed text-green-300">
          Inspired by the legendary 1954 Godzilla, OG Godzilla Token brings the 
          King of Monsters to the blockchain. Join our community of kaiju enthusiasts 
          and be part of this monster-sized project! Experience the power of the 
          original kaiju in a modern crypto environment.
        </p>
      </div>
    </div>
  );
}

export default App;