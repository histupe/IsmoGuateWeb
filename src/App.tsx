/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Music, 
  Phone, 
  CheckCircle2, 
  MessageCircle,
  Users,
  Mic2,
  PartyPopper,
  Palette,
  Printer,
  Layers,
  ShoppingBag,
  ChevronRight,
  Sparkles,
  Facebook,
  Instagram,
  Music2,
  Settings,
  ShieldCheck,
  Zap,
  Clock,
  Layout,
  Package,
  ArrowRight,
  Mail,
  Send,
  Calendar,
  MessageSquare,
  Star,
  Image as ImageIcon,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [packageType, setPackageType] = useState<'sound' | 'creativity'>('sound');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "50245644861";
  const creativityWhatsappNumber = "50239146137";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Ismo%20Sound%2C%20estoy%20por%20realizar%20un%20evento`;
  const catalogLink = `https://wa.me/${creativityWhatsappNumber}?text=¡Hola%20Ismo%20Guate!%20¿Me%20envían%20el%20catálogo%20de%20Ismo%20Creativity?%20Vengo%20de%20la%20web`;
  const quoteLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustaría%20cotizar%20un%20evento%20con%20Ismo%20Sound.`;
  const creativityQuoteLink = `https://wa.me/${creativityWhatsappNumber}?text=Hola!%20Me%20gustaría%20solicitar%20una%20cotización%20para%20Ismo%20Creativity.`;

  // Logos from user input (Text-based for now as requested)
  const LogoGuate = () => (
    <span className="text-2xl font-black tracking-tighter">
      <span className="text-orange-500">ISMO</span>
      <span className="text-white">GUATE</span>
    </span>
  );

  const LogoSound = ({ className = "text-3xl" }: { className?: string }) => (
    <span className={`${className} font-sans font-bold tracking-tight`}>
      <span className="text-blue-300">ISMO</span>
      <span className="text-white" translate="no">SOUND</span>
    </span>
  );

  const LogoCreativity = ({ className = "text-3xl", dark = false }: { className?: string, dark?: boolean }) => (
    <span className={`${className} font-sans font-bold tracking-tight`}>
      <span className="text-orange-500">ISMO</span>
      <span className="text-green-500" translate="no">CREATIVITY</span>
    </span>
  );

  const divisionLogos = {
    sound: '/assets/logos/ismo_sound.svg',
    creativity: '/assets/logos/ismo_creativity.svg' ,
    creativityWhite: '/assets/logos/ismo_creativity_white.svg'
  };

  const DivisionLogo = ({ src, alt, className = "w-20 h-20 object-contain" }: { src: string, alt: string, className?: string }) => (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );

  const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  // Division illustration sources
  const photoSound1 = "assets/divisions/division_sound.svg";
  const photoCreativity1 = "assets/divisions/division_creativity.svg";

  const galleryImages = [
    { url: '/assets/gallery/foto1.svg', alt: 'Evento Ismo Sound 1', title: 'Montaje Profesional' },
    { url: '/assets/gallery/foto2.svg', alt: 'Evento Ismo Sound 2', title: 'Sonido e Iluminación' },
    { url: '/assets/gallery/foto3.svg', alt: 'Evento Ismo Sound 3', title: 'Equipos premium' },
    { url: '/assets/gallery/foto4.svg', alt: 'Evento Ismo Sound 4', title: 'Sonido de calidad' },
    { url: '/assets/gallery/foto5.svg', alt: 'Evento Ismo Sound 5', title: 'Tiempo de reflexion' },
    { url: '/assets/gallery/foto6.svg', alt: 'Evento Ismo Sound 6', title: 'Asistencia personalizada' },
    { url: '/assets/gallery/foto7.svg', alt: 'Ismo Creativity 1', title: 'Creatividad' },
  ];

  const GalleryCard = ({ img }: { img: { url: string; alt: string; title: string } }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
      return null;
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => setSelectedImage(img.url)}
        className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-slate-600 group hover:border-blue-300/30 transition-all cursor-pointer overflow-hidden relative"
      >
        <img
          src={img.url}
          alt={img.alt}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          onError={() => setIsVisible(false)}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <p className="text-white font-bold text-sm">{img.title}</p>
        </div>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 relative">
      {/* Background Lighting Effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Base Background matching Paquetes section */}
        <div className="absolute inset-0 bg-slate-900" />
        
        {/* Subtle Depth Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.8)_0%,#0f172a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
        
        {/* Geometric Texture (First Half) */}
        <div className="absolute inset-0 geometric-pattern opacity-[0.05] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />
        
        {/* Stage Lights / Beams - More subtle */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-900/10 blur-[140px]" />
        
        {/* Spotlight Effect behind text - Very subtle */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] blur-3xl" />
        
        {/* Light Beams - Reduced opacity for elegance */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03], rotate: [14, 16, 14] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-px h-screen bg-gradient-to-b from-blue-300/10 to-transparent blur-sm origin-top" 
        />
        <motion.div 
          animate={{ opacity: [0.02, 0.06, 0.02], rotate: [-9, -11, -9] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/3 w-px h-screen bg-gradient-to-b from-purple-500/10 to-transparent blur-sm origin-top" 
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <LogoGuate />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#sound" className="hover:text-blue-300 transition-colors">Ismo <span translate="no">Sound</span></a>
            <a href="#creativity" className="hover:text-orange-400 transition-colors">Ismo <span translate="no">Creativity</span></a>
            <a href="#packages" className="hover:text-white transition-colors">Paquetes</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
            
            <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-6">
              <a href="https://www.facebook.com/profile.php?id=61572393180709" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/ismo_guate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@ismo.guate?_r=1&_t=ZS-95LiovyHIbh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-all hover:scale-105 px-5 py-2.5 rounded-full font-bold text-sm text-white shadow-lg shadow-green-500/20"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Escríbenos Ahora</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/5"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <a 
              href="#sound" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-blue-300 transition-colors"
            >
              Ismo <span translate="no">Sound</span>
            </a>
            <a 
              href="#creativity" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-orange-400 transition-colors"
            >
              Ismo <span translate="no">Creativity</span>
            </a>
            <a 
              href="#packages" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-white transition-colors"
            >
              Paquetes
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-white transition-colors"
            >
              Contacto
            </a>
            
            <div className="pt-6 border-t border-white/10 flex items-center gap-8">
              <a href="https://www.facebook.com/profile.php?id=61572393180709" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ismo_guate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@ismo.guate?_r=1&_t=ZS-95LiovyHIbh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all">
                <Music2 className="w-6 h-6" />
              </a>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-all px-5 py-4 rounded-2xl font-bold text-white shadow-lg shadow-green-500/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center">
        {/* BACKGROUND LAYER: Atmosfera Premium */}
        <div className="absolute inset-0 z-0 bg-[#020617]">
          {/* Degradado Base: Azul Marino a Morado */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000c24] via-[#020617] to-[#1e0030]" />
          
          {/* Luces de Escenario (Spotlights) */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-700/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-700/20 blur-[130px] rounded-full" />
          
          {/* Textura de malla y ruido sutil */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            {/* Headline Poderoso */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-white"
            >
              Sonido Profesional + <span className="text-blue-300 drop-shadow-[0_0_20px_rgba(147,197,253,0.3)]">Creatividad.</span>
            </motion.h1>

            {/* Subheadline Realista */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-12"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <p className="text-lg md:text-xl text-white font-sans font-bold tracking-wide">
                  Ismo <span translate="no">Sound</span> <span className="text-slate-500 font-light mx-1 font-sans">|</span> <span className="text-slate-300 font-medium font-sans">Audio profesional</span>
                </p>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <p className="text-lg md:text-xl text-white font-sans font-bold tracking-wide">
                  Ismo <span translate="no">Creativity</span> <span className="text-slate-500 font-light mx-1 font-sans">|</span> <span className="text-slate-300 font-medium font-sans">Personalizados y papelería creativa</span>
                </p>
              </div>
            </motion.div>

            {/* Indicadores de Confianza */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
            >
              {[
                { icon: <Users className="w-4 h-4" />, text: "15 a 400 personas" },
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Montaje Profesional" },
                { icon: <Zap className="w-4 h-4" />, text: "Atención Rápida" },
                { icon: <Star className="w-4 h-4" />, text: "Calidad Premium" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <span className="text-blue-300">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs de Conversión */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-green-500/20 flex items-center gap-3 hover:-translate-y-1"
                >
                  Cotizar por WhatsApp <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="#sound"
                  className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all border border-white/10 backdrop-blur-md hover:-translate-y-1"
                >
                  Ver Servicios
                </a>
              </div>
            </motion.div>
          </div>

          {/* BLOQUE DE DOS DIVISIONES: Estilo Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* ISMO SOUND CARD */}
            <motion.a
              href="#sound"
              whileHover={{ y: -10 }}
              className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-blue-300/20 to-transparent border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10 bg-[#020617]/40 backdrop-blur-2xl rounded-[2.4rem] h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-300/10 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2"><LogoSound /></h3>
                <p className="text-slate-400 text-sm mb-6">Audio + Iluminación + Montaje Técnico</p>
                <div className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-widest">
                  Saber más <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* ISMO CREATIVITY CARD */}
            <motion.a
              href="#creativity"
              whileHover={{ y: -10 }}
              className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-orange-500/20 to-transparent border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10 bg-[#020617]/40 backdrop-blur-2xl rounded-[2.4rem] h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2"><LogoCreativity /></h3>
                <p className="text-slate-400 text-sm mb-6">Personalización + Detalles + Sublimación</p>
                <a 
                  href={catalogLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest cursor-pointer"
                >
                  Ver Catálogo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.a>
          </div>

        </div>
      </section>

      {/* ISMO SOUND SECTION */}
      <section id="sound" className="py-32 px-6 border-t border-white/5 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0a09] to-[#290a04] -z-10" />
        <div className="absolute inset-0 speaker-mesh-large opacity-5 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <DivisionLogo src={divisionLogos.sound} alt="Logo Ismo Sound" />
            <LogoSound className="text-4xl" />
            <div className="h-px flex-grow bg-blue-300/20" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Audio e Iluminación <span className="text-blue-300">Profesional</span></h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-10">
                Ofrecemos soluciones integrales de audio para que tu mensaje se escuche con total claridad y potencia. 
                Cuidamos cada detalle técnico para que tú solo te preocupes por disfrutar.
              </p>

              <div className="space-y-8 mb-12">
                <h3 className="text-2xl font-bold flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-6 h-6 text-blue-300" /> Tu evento sin preocupaciones
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Entrega y montaje del equipo",
                    "Configuración y ajuste de sonido",
                    "Micrófonos para presentaciones y música",
                    "Opciones según tu necesidad",
                    "Asesoría personalizada"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="mt-1 bg-blue-300 rounded-full p-1">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="inline-flex items-center gap-3 bg-blue-300 hover:bg-blue-400 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-300/30 hover:-translate-y-1">
                Cotiza tu evento ahora <WhatsAppIcon className="w-6 h-6" />
              </a>
            </motion.div>

            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-300/20 blur-2xl rounded-full -z-10" />
                <img src={photoSound1} className="rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-video" alt="Sound Setup" referrerPolicy="no-referrer" />
                
                {/* Brand Showcase Section */}
                <div className="mt-8 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                  <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-6 text-blue-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Trabajamos con marcas reconocidas
                  </h4>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                      'Electro-Voice', 'Midas', 'Shure', 'Behringer', 
                      'Turbosound', 'Peavey', 'Gravity', 'Proel'
                    ].map((brand, i) => (
                      <div 
                        key={i} 
                        className="bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-center hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-[10px] font-black tracking-widest text-slate-300 group-hover:text-white transition-colors uppercase">
                          {brand}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-relaxed italic text-center border-t border-white/5 pt-4">
                    “Equipo confiable para eventos sociales, corporativos y cristianos.”
                  </p>
                </div>
              </div>

              {/* Lighting Sub-section */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-300/10 to-transparent border border-white/10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Sparkles className="text-blue-300" /> Iluminación que transforma
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Contamos con iluminación Par LED RGBW ideal para bodas, escenarios, fiestas y eventos corporativos. 
                  Creamos ambientes cálidos, elegantes o energéticos según tu evento.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-medium">
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Par LED RGBW</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Atmosfera que eleva tu evento</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Equipos de calidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISMO CREATIVITY SECTION */}
      <section id="creativity" className="py-32 px-6 border-t border-white/5 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <DivisionLogo src={divisionLogos.creativity} alt="Logo Ismo Creativity" />
            <LogoCreativity className="text-4xl" dark />
            <div className="h-px flex-grow bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Personalización y <span className="text-green-500">Papelería Creativa</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Creamos productos personalizados para eventos y marcas, desde una pieza hasta pedidos por volumen. 
                Calidad que se nota y diseños que impactan.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <Printer className="text-orange-500" />, title: 'Sublimación', desc: 'Tazas, termos, gorras y más.' },
                  { icon: <Layers className="text-orange-500" />, title: 'DTF', desc: 'Playeras y textiles.' },
                  { icon: <Palette className="text-orange-500" />, title: 'Papelería', desc: 'Stickers, invitaciones, planificadores.' },
                  { icon: <Sparkles className="text-orange-500" />, title: 'Diseño', desc: 'Arte personalizado.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600" /> Ideal para:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Eventos Sociales', 'Iglesias', 'Emprendimientos', 'Marcas Corporativas'].map((tag, i) => (
                    <span key={i} className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={catalogLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1"
              >
                Solicita tu catálogo <ShoppingBag className="w-6 h-6" />
              </a>
            </div>
            <div className="lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-full -z-10" />
                <img src={photoCreativity1} className="rounded-3xl shadow-xl border border-slate-200 w-full object-cover aspect-video" alt="Creativity Work" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Nos enfocamos en la calidad, el orden y la satisfacción de nuestros clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: 'Atención personalizada', desc: 'Te asesoramos para elegir el equipo o producto ideal.', color: 'blue' },
              { icon: <ShieldCheck />, title: 'Calidad Garantizada', desc: 'Marcas profesionales en sonido y los mejores materiales en creatividad.', color: 'orange' },
              { icon: <Layout />, title: 'Estética y Orden', desc: 'Cuidamos la imagen de tu evento y el acabado de tus productos.', color: 'green' },
              { icon: <Zap />, title: 'Opciones a medida', desc: 'Paquetes y productos que se ajustan a tu presupuesto.', color: 'blue' },
              { icon: <Mic2 />, title: 'Experiencia Real', desc: 'Creando atmósfera en eventos.', color: 'orange' },
              { icon: <Clock />, title: 'Respuesta Rápida', desc: 'Cotizaciones y atención ágil por WhatsApp.', color: 'green' }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-${card.color === 'blue' ? 'blue-300' : card.color === 'orange' ? 'orange-500' : 'green-500'}/30 transition-all`}
              >
                <div className={`w-12 h-12 rounded-2xl ${card.color === 'blue' ? 'bg-blue-300/10 text-blue-300' : card.color === 'orange' ? 'bg-orange-500/10 text-orange-500' : 'bg-green-500/10 text-green-500'} flex items-center justify-center mb-6`}>
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proceso Simple y <span className="text-orange-500">Efectivo</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hacemos que tu proyecto o evento sea una realidad sin complicaciones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Escríbenos", desc: "Inicia tu cotización de forma rápida por WhatsApp.", color: "text-blue-300" },
              { step: "02", title: "Cuéntanos tu idea", desc: "Dinos qué necesitas, la fecha o el diseño que buscas.", color: "text-orange-500" },
              { step: "03", title: "Propuesta Ideal", desc: "Te recomendamos la mejor opción técnica o creativa.", color: "text-green-500" },
              { step: "04", title: "Entrega y Disfrute", desc: "Nosotros nos encargamos de que todo salga perfecto.", color: "text-blue-300" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className={`text-5xl font-black ${item.color}/20 mb-6 group-hover:${item.color}/40 transition-colors`}>
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUGGESTED PACKAGES */}
      <section id="packages" className="py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Paquetes Sugeridos</h2>
            <p className="text-slate-400">Selecciona la división de tu interés para ver opciones.</p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="flex justify-center w-full">
              <div className="bg-slate-950 p-1.5 rounded-2xl border border-white/5 flex gap-2">
                <button 
                  onClick={() => setPackageType('sound')}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${packageType === 'sound' ? 'bg-blue-300 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Music className="w-4 h-4" /> Ismo <span translate="no">Sound</span>
                </button>
                <button 
                  onClick={() => setPackageType('creativity')}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${packageType === 'creativity' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Palette className="w-4 h-4" /> Ismo <span translate="no">Creativity</span>
                </button>
              </div>
            </div>

          </div>

          {packageType === 'creativity' && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 text-center"
            >
              <p className="text-xl md:text-2xl font-bold text-white">
                "Elije el paquete ideal para ti y deja que nosotros hagamos la magia."
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageType === 'sound' ? (
              <>
                {[
                  { 
                    title: 'Paquete Básico', 
                    cap: '15–60 personas', 
                    features: ['Sonido claro y compacto', 'Ideal para reuniones pequeñas', '1 Micrófono incluido', 'Montaje básico'],
                    color: 'blue'
                  },
                  { 
                    title: 'Paquete Personalizado', 
                    cap: 'A tu medida', 
                    features: ['Diseñado según tus necesidades', 'Ideal para cualquier tipo de evento', 'Equipo premium seleccionado', 'Asesoría técnica completa'],
                    color: 'orange',
                    popular: true
                  },
                  { 
                    title: 'Paquete Full Evento', 
                    cap: '200–400 personas', 
                    features: ['Sonido con subwoofers', 'Iluminación Par LED', 'Ideal para escenarios', 'Técnico de audio incluido'],
                    color: 'blue'
                  }
                ].map((pkg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`sound-${i}`} 
                    className={`relative p-8 rounded-3xl bg-slate-950 border ${pkg.popular ? 'border-orange-500/50' : 'border-white/5'} flex flex-col`}
                  >
                    {pkg.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Más Popular</span>}
                    <h4 className="text-2xl font-bold mb-2">{pkg.title}</h4>
                    <p className="text-slate-500 text-sm mb-6">{pkg.cap}</p>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 ${pkg.color === 'orange' ? 'text-orange-500' : 'text-blue-300'}`} /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className={`w-full py-4 rounded-xl font-black text-center transition-all flex items-center justify-center gap-2 ${pkg.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-300 hover:bg-blue-400'} text-white shadow-lg`}>
                      Consulta disponibilidad <MessageCircle className="w-5 h-5" />
                    </a>
                  </motion.div>
                ))}
              </>
            ) : (
              <>
                {[
                  { 
                    title: 'Pack Emprende bonito', 
                    cap: 'Ideal para iniciar con estilo', 
                    features: ['50 Stickers personalizados', '10 Tazas con tu logo', 'Diseño básico incluido', 'Acabado profesional'],
                    color: 'orange'
                  },
                  { 
                    title: 'Pack a tu medida', 
                    cap: 'Creamos lo que imaginas', 
                    features: ['¿Tienes una idea especial? ', 'La imaginacion no tiene límites', 'Pensado para momentos especiales'],
                    color: 'green',
                    popular: true
                  },
                  { 
                    title: 'Pack Marca Creativa', 
                    cap: 'Haz que tu marca se vea profesional', 
                    features: ['100 Stickers premium', '50 Tazas de alta calidad', 'Empaque personalizado', 'Precio especial por volumen'],
                    color: 'orange'
                  }
                ].map((pkg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`creativity-${i}`} 
                    className={`relative p-8 rounded-3xl bg-slate-950 border ${pkg.popular ? 'border-green-500/50' : 'border-white/5'} flex flex-col`}
                  >
                    {pkg.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Más Cotizado</span>}
                    <h4 className="text-2xl font-bold mb-2">{pkg.title}</h4>
                    <p className="text-slate-500 text-sm mb-6">{pkg.cap}</p>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 ${pkg.color === 'orange' ? 'text-orange-500' : 'text-green-500'}`} /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href={creativityQuoteLink} className={`w-full py-4 rounded-xl font-black text-center transition-all flex items-center justify-center gap-2 ${pkg.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-600 hover:bg-green-700'} text-white shadow-lg`}>
                      Solicita cotización <MessageCircle className="w-5 h-5" />
                    </a>
                  </motion.div>
                ))}
              </>
            )}
          </div>
          <p className="text-center mt-12 text-slate-500 text-sm">* Todo se ajusta según el lugar y necesidad específica.</p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Eventos Realizados</h2>
            <p className="text-slate-400">Una muestra de nuestro trabajo profesional. Fotos reales de Ismo Guate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <GalleryCard key={img.url} img={img} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full max-h-full"
          >
            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors font-bold flex items-center gap-2"
              onClick={() => setSelectedImage(null)}
            >
              Cerrar ✕
            </button>
          </motion.div>
        </div>
      )}

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="py-32 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Side: Info */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-300/10 border border-blue-300/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
                Contacto Directo
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                ¿Listo para iniciar <br />
                <span className="text-orange-500">tu proyecto?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                Ya sea un evento espectacular o productos personalizados, estamos listos para ayudarte.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Llámanos o Escríbenos</p>
                    <a href="tel:+50245644861" className="text-xl font-bold text-white hover:text-blue-200 transition-colors">+502 4564 4861</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Correo Electrónico</p>
                    <a href="mailto:info@ismoguate.com.gt" className="text-xl font-bold text-white hover:text-orange-200 transition-colors">info@ismoguate.com.gt</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="glass bg-slate-950/95 p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-2xl">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  
                  // Construct WhatsApp message
                  const message = `Hola Ismo Guate! Me gustaría solicitar una cotización:%0A%0A` +
                    `*Interés:* ${data.interest}%0A` +
                    `*Nombre:* ${data.name}%0A` +
                    `*Evento/Proyecto:* ${data.event_type}%0A` +
                    `*Fecha:* ${data.date}%0A` +
                    `*Cantidad/Personas:* ${data.people}%0A` +
                    `*Mensaje:* ${data.message}`;
                  
                  const destinationNumber = data.interest === 'Ismo Creativity (Personalizados)' ? creativityWhatsappNumber : whatsappNumber;
                  window.open(`https://wa.me/${destinationNumber}?text=${message}`, '_blank');
                  e.currentTarget.reset();
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">División de Interés</label>
                  <select 
                    required
                    name="interest"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 transition-all text-white appearance-none"
                  >
                    <option translate="no" className="bg-slate-900" value="Ismo Sound (Eventos)">Ismo Sound (Eventos)</option>
                    <option translate="no" className="bg-slate-900" value="Ismo Creativity (Personalizados)">Ismo Creativity (Personalizados)</option>
                    <option className="bg-slate-900" value="Ambas Divisiones">Ambas Divisiones</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 transition-all text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tipo de Evento / Proyecto</label>
                    <select 
                      name="event_type"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 transition-all text-white appearance-none"
                    >
                      <option className="bg-slate-900" value="Boda">Boda</option>                      
                      <option className="bg-slate-900" value="Evento Corporativo">Evento Corporativo</option>
                      <option className="bg-slate-900" value="Evento Social">Evento Social</option>
                      <option className="bg-slate-900" value="Personalizados / Regalos">Personalizados / Regalos</option>
                      <option className="bg-slate-900" value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Fecha Estimada</label>
                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        required
                        name="date"
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-orange-500/50 transition-all text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Cantidad / Personas</label>
                    <div className="relative">
                      <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        required
                        name="people"
                        type="text" 
                        placeholder="Ej. 150 personas o 50 tazas"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-orange-500/50 transition-all text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Detalles Adicionales</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-5 top-5 w-4 h-4 text-slate-500" />
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-orange-500/50 transition-all text-white placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 group"
                >
                  Enviar Solicitud <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest">
                  Al enviar, se abrirá WhatsApp con tu información lista para enviar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */ }
      <footer className="bg-black border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="py-4">
            <LogoGuate />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-slate-400">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ubicación</h4>
              <p className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-blue-300" /> Guatemala, Ciudad</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contacto</h4>
              <a href="tel:+50245644861" className="text-xl font-bold text-white hover:text-blue-200 transition-colors">+502 4564 4861</a>
              <a href="mailto:info@ismoguate.com.gt" className="block text-sm text-slate-400 hover:text-slate-200 transition-colors">info@ismoguate.com.gt</a>
              <div className="mt-4 flex items-center justify-center gap-3 opacity-80">
                <img src={divisionLogos.sound} alt="Ismo Sound" className="w-20 h-20 object-contain" />
                <img src={divisionLogos.creativityWhite} alt="Ismo Creativity" className="w-20 h-20 object-contain" />
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 rounded-full text-white font-black transition-all shadow-lg shadow-green-500/20">
                Consulta disponibilidad <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Horario</h4>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 pt-4">
            <a href="https://www.facebook.com/profile.php?id=61572393180709" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 transition-all hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ismo_guate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-all hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@ismo.guate?_r=1&_t=ZS-95LiovyHIbh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
              <Music2 className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-10 border-t border-white/5 text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ismo Guate. Calidad y Creatividad en cada proyecto.
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap px-0 group-hover:px-2">
          Cotiza tu evento ahora
        </span>
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
