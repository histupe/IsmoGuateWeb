/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const whatsappNumber = "50245644861";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Vengo%20de%20la%20página%20web%20y%20quisiera%20más%20información.`;
  const catalogLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustaría%20solicitar%20el%20catálogo%20de%20Ismo%20Creativity.`;
  const quoteLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustaría%20cotizar%20un%20evento%20con%20Ismo%20Sound.`;

  // Logos from user input (Text-based for now as requested)
  const LogoGuate = () => (
    <span className="text-2xl font-black tracking-tighter">
      <span className="text-orange-500">ISMO</span>
      <span className="text-white">GUATE</span>
    </span>
  );

  const LogoSound = ({ className = "text-3xl" }: { className?: string }) => (
    <span className={`${className} font-black tracking-tighter`}>
      <span className="text-blue-300">ISMO</span>
      <span className="text-white">SOUND</span>
    </span>
  );

  const LogoCreativity = ({ className = "text-3xl", dark = false }: { className?: string, dark?: boolean }) => (
    <span className={`${className} font-black tracking-tighter`}>
      <span className="text-orange-500">ISMO</span>
      <span className="text-green-500">CREATIVITY</span>
    </span>
  );

  // Placeholder for user photos
  const photoSound1 = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800";
  const photoLighting = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";
  const photoCreativity1 = "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800";

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
          <div className="flex items-center">
            <LogoGuate />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#sound" className="hover:text-blue-300 transition-colors">Ismo Sound</a>
            <a href="#creativity" className="hover:text-orange-400 transition-colors">Ismo Creativity</a>
            <a href="#packages" className="hover:text-white transition-colors">Paquetes</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-all hover:scale-105 px-5 py-2.5 rounded-full font-bold text-sm text-white shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Escríbenos Ahora</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center">
        {/* BACKGROUND LAYER: Atmosfera Premium */}
        <div className="absolute inset-0 -z-10 bg-[#020617]">
          {/* Luces de Escenario (Spotlights) */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/15 blur-[120px] rounded-full" />
          
          {/* Textura de malla y ruido sutil */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            {/* Badge de Autoridad */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">Producción Profesional en Guatemala</span>
            </motion.div>

            {/* Headline Poderoso */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-white"
            >
              Tu evento con <span className="text-blue-300 drop-shadow-[0_0_20px_rgba(147,197,253,0.3)]">potencia.</span><br />
              Tu marca con <span className="text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">estilo.</span>
            </motion.h1>

            {/* Subheadline Realista */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Desde el montaje técnico impecable hasta el branding que todos recordarán. 
              Solución integral para bodas, iglesias y eventos corporativos.
            </motion.p>

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
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em] animate-pulse">
                ⚡ Respuesta inmediata vía WhatsApp
              </span>
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
                <p className="text-slate-400 text-sm mb-6">Personalización + Branding + Sublimación</p>
                <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest">
                  Ver Catálogo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* SOCIAL PROOF: Clientes Felices */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center"
          >
            <div className="flex -space-x-3 mb-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                +50
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              Decenas de eventos realizados con éxito en todo el país
            </p>
          </motion.div>
        </div>
      </section>

      {/* ISMO SOUND SECTION */}
      <section id="sound" className="py-32 px-6 border-t border-white/5 bg-black/40 relative overflow-hidden">
        <div className="absolute inset-0 speaker-mesh-large opacity-5 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-300/10 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
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
                    "Opciones con o sin técnico según tu necesidad",
                    "Asesoría según el lugar y cantidad de personas"
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

              <a href={quoteLink} className="inline-flex items-center gap-3 bg-blue-300 hover:bg-blue-400 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-300/30 hover:-translate-y-1">
                Cotiza tu evento ahora <MessageCircle className="w-6 h-6" />
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
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Controlador DMX</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Pedestales Gravity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISMO CREATIVITY SECTION */}
      <section id="creativity" className="py-32 px-6 border-t border-white/5 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
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
                  { icon: <Printer className="text-orange-500" />, title: 'Sublimación', desc: 'Tazas, termos, gorras.' },
                  { icon: <Layers className="text-orange-500" />, title: 'DTF', desc: 'Playeras y textiles.' },
                  { icon: <Palette className="text-orange-500" />, title: 'Papelería', desc: 'Stickers, invitaciones.' },
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

              <a href={catalogLink} className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1">
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
              { icon: <Users />, title: 'Atención personalizada', desc: 'Te asesoramos para elegir el equipo o producto ideal.' },
              { icon: <ShieldCheck />, title: 'Equipo profesional', desc: 'Marcas reconocidas que garantizan confiabilidad.' },
              { icon: <Layout />, title: 'Montaje limpio', desc: 'Cuidamos la estética y el orden en cada evento.' },
              { icon: <Zap />, title: 'Opciones a medida', desc: 'Paquetes que se ajustan a tu presupuesto y necesidad.' },
              { icon: <Mic2 />, title: 'Experiencia real', desc: 'Eventos desde 15 hasta 400 personas con éxito.' },
              { icon: <Clock />, title: 'Respuesta rápida', desc: 'Cotizaciones y atención ágil por WhatsApp.' }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-blue-300/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-300/10 flex items-center justify-center text-blue-300 mb-6">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proceso Simple y <span className="text-blue-300">Profesional</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hacemos que la organización técnica de tu evento sea la parte más fácil.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Escríbenos por WhatsApp", desc: "Inicia tu cotización de forma rápida y directa." },
              { step: "02", title: "Cuéntanos tu evento", desc: "Dinos qué necesitas, la fecha y la ubicación." },
              { step: "03", title: "Paquete Ideal", desc: "Te recomendamos la mejor opción según tu presupuesto." },
              { step: "04", title: "Montaje y Disfrute", desc: "Nosotros nos encargamos de todo lo técnico." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-blue-300/10 transition-colors">{item.step}</div>
                <div className="relative pt-8">
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
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Paquetes Sugeridos</h2>
            <p className="text-slate-400">Orientación para tu evento (ajustable según necesidad).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Paquete Básico', 
                cap: '15–60 personas', 
                features: ['Sonido claro y compacto', 'Ideal para reuniones pequeñas', '1 Micrófono incluido', 'Montaje básico'],
                color: 'blue'
              },
              { 
                title: 'Paquete Estándar', 
                cap: '60–200 personas', 
                features: ['Sonido potente (2 columnas)', 'Ideal para bodas y fiestas', '2 Micrófonos inalámbricos', 'Configuración profesional'],
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
              <div key={i} className={`relative p-8 rounded-3xl bg-slate-950 border ${pkg.popular ? 'border-orange-500/50' : 'border-white/5'} flex flex-col`}>
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
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-slate-500 text-sm">* Todo se ajusta según el lugar y necesidad específica.</p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Eventos Realizados</h2>
            <p className="text-slate-400">Una muestra de nuestro trabajo profesional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-slate-600 group hover:border-blue-300/30 transition-all cursor-pointer overflow-hidden relative">
                <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs uppercase tracking-widest">Espacio para Foto Real</span>
                <div className="absolute inset-0 bg-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
                ¿Listo para elevar <br />
                <span className="text-blue-300">tu próximo evento?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                Llena el formulario y nos pondremos en contacto contigo en menos de 24 horas para brindarte una propuesta personalizada.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Llámanos o Escríbenos</p>
                    <p className="text-xl font-bold">+502 4564 4861</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Correo Electrónico</p>
                    <p className="text-xl font-bold">info@ismoguate.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-2xl">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  
                  // Construct WhatsApp message
                  const message = `Hola Ismo Guate! Me gustaría solicitar una cotización:%0A%0A` +
                    `*Nombre:* ${data.name}%0A` +
                    `*Evento:* ${data.event_type}%0A` +
                    `*Fecha:* ${data.date}%0A` +
                    `*Personas:* ${data.people}%0A` +
                    `*Mensaje:* ${data.message}`;
                  
                  window.open(`https://wa.me/50245644861?text=${message}`, '_blank');
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tipo de Evento</label>
                    <select 
                      name="event_type"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white appearance-none"
                    >
                      <option className="bg-slate-900" value="Boda">Boda</option>
                      <option className="bg-slate-900" value="Fiesta de 15">Fiesta de 15</option>
                      <option className="bg-slate-900" value="Evento Corporativo">Evento Corporativo</option>
                      <option className="bg-slate-900" value="Convivio">Convivio</option>
                      <option className="bg-slate-900" value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Fecha del Evento</label>
                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        required
                        name="date"
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">No. de Personas</label>
                    <div className="relative">
                      <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        required
                        name="people"
                        type="number" 
                        placeholder="Ej. 150"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600"
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-300 hover:bg-blue-400 text-slate-900 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-300/20 flex items-center justify-center gap-3 group"
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
              <p className="text-xl font-bold text-white">+502 4564 4861</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 rounded-full text-white font-black transition-all shadow-lg shadow-green-500/20">
                Consulta disponibilidad <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Horario</h4>
              <p>Domingo a Viernes: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 pt-4">
            <a href="https://www.facebook.com/ismoguate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 transition-all hover:scale-110">
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
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap px-0 group-hover:px-2">
          Cotiza tu evento ahora
        </span>
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
