
import React, { useState, useEffect, useRef } from 'react';
import { Upload, PlayCircle } from 'lucide-react';

const VSL: React.FC = () => {
  const [viewers, setViewers] = useState(1248);
  const [videoSrc, setVideoSrc] = useState<string>("https://assets.mixkit.co/videos/preview/mixkit-frying-delicious-snack-on-a-pan-41584-large.mp4");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Efeito para simular pessoas entrando e saindo rapidamente (30 a 50 pessoas de variação)
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        // Variação maior de 30 a 50 conforme pedido
        const change = Math.floor(Math.random() * 21) + 30; // Gera entre 30 e 50
        const isEntry = Math.random() > 0.45; // Mais provável de entrar do que sair para manter audiência alta
        
        const newValue = isEntry ? prev + change : prev - change;
        return newValue < 1000 ? 1000 : newValue; // Piso de 1000 pessoas
      });
    }, 1500); // Mais rápido que o anterior

    return () => clearInterval(interval);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="container mx-auto max-w-4xl">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          Apresentação Exclusiva
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
          Assista ao Vídeo Abaixo
        </h2>
        <p className="text-stone-500 font-medium">Veja os segredos da Dona Lu em ação</p>
      </div>

      <div className="relative aspect-video rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden bg-stone-900 border-4 border-white group">
        {/* Real Video Player with Local Upload Support */}
        <video 
          key={videoSrc}
          className="w-full h-full object-cover"
          controls
          autoPlay={false}
          muted={false}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {/* Floating Upload Overlay (Visible on hover if not playing or always available via button) */}
        <div className="absolute top-4 right-4 z-20">
            <button 
                onClick={triggerUpload}
                className="bg-black/60 hover:bg-orange-600 text-white backdrop-blur-md p-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 text-xs font-bold border border-white/20"
                title="Trocar Vídeo"
            >
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Upload VSL</span>
            </button>
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="video/*" 
                className="hidden" 
            />
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-stone-500 text-sm font-semibold">
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-md border border-stone-100 transition-all duration-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="tabular-nums font-bold text-stone-700">{viewers.toLocaleString('pt-BR')} pessoas assistindo agora</span>
        </div>
        <div className="hidden sm:block text-stone-200">|</div>
        <div className="text-orange-600 animate-pulse font-bold flex items-center gap-2">
          <PlayCircle className="w-4 h-4" />
          Aproveite enquanto o vídeo está no ar
        </div>
      </div>
    </section>
  );
};

export default VSL;
