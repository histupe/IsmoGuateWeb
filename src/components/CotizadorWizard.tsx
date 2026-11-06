import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Cake,
  Calendar,
  Check,
  Church,
  Clock,
  Coffee,
  Crown,
  Disc3,
  Drum,
  GraduationCap,
  Guitar,
  Heart,
  House,
  Lamp,
  Lightbulb,
  ListMusic,
  MapPin,
  Mic,
  MonitorPlay,
  Music,
  Package,
  Palette,
  PenTool,
  Send,
  Shirt,
  Sparkles,
  Sticker,
  Trees,
  Users,
  UsersRound,
  Warehouse,
  X,
} from 'lucide-react';

/**
 * Cotizador paso a paso de Ismo Guate.
 * Hace preguntas cortas con botones, muestra una sugerencia en cada paso
 * y al final abre WhatsApp con un resumen ordenado.
 */

export type Division = 'sound' | 'creativity';

/**
 * Permite abrir el cotizador con la división (y el paquete) ya elegidos. `n` cambia en cada clic.
 * `canal` indica desde dónde se abrió (por ejemplo, el enlace del mensaje automático de WhatsApp).
 */
export type CotizadorPreset = { division: Division | null; paquete?: string; canal?: string; n: number };

const DIVISION_LABEL: Record<Division, string> = {
  sound: 'Sonido para un evento',
  creativity: 'Productos personalizados',
};

type Option = { label: string; icon: ReactNode };

type Step = {
  key: string;
  question: string;
  kind: 'options' | 'when' | 'quantity' | 'delivery' | 'contact';
  multi?: boolean;
  options?: Option[];
  /** Sugerencia general (clave "_") y sugerencias por opción elegida. */
  tips: Record<string, string>;
};

type Answers = Record<string, string[] | string>;

const ic = 'w-5 h-5';

const DIVISION_STEP: Step = {
  key: 'division',
  question: '¿Qué necesitas cotizar?',
  kind: 'options',
  options: [
    { label: 'Sonido para un evento', icon: <Music className={ic} /> },
    { label: 'Productos personalizados', icon: <Palette className={ic} /> },
  ],
  tips: {
    _: 'Te haremos unas preguntas rápidas para preparar una propuesta a tu medida. Toma menos de un minuto.',
    'Sonido para un evento': 'Ismo Sound: audio, micrófonos e iluminación con montaje y técnico incluidos.',
    'Productos personalizados': 'Ismo Creativity: sublimación, DTF, papelería y diseño, desde una pieza hasta pedidos por volumen.',
  },
};

const SOUND_STEPS: Step[] = [
  {
    key: 'tipo',
    question: '¿Qué tipo de evento estás organizando?',
    kind: 'options',
    options: [
      { label: 'Boda', icon: <Heart className={ic} /> },
      { label: 'XV años', icon: <Crown className={ic} /> },
      { label: 'Cumpleaños o fiesta', icon: <Cake className={ic} /> },
      { label: 'Iglesia o congreso', icon: <Church className={ic} /> },
      { label: 'Corporativo o conferencia', icon: <Briefcase className={ic} /> },
      { label: 'Graduación', icon: <GraduationCap className={ic} /> },
      { label: 'Feria del libro', icon: <BookOpen className={ic} /> },
      { label: 'Otro', icon: <Sparkles className={ic} /> },
    ],
    tips: {
      _: 'Cada tipo de evento tiene momentos distintos. Saberlo nos ayuda a pensar exactamente qué vas a necesitar.',
      Boda: 'En bodas cuidamos tres momentos: la ceremonia (voz clara), la cena (música suave) y la fiesta (más energía).',
      'XV años': 'Para XV años pensamos en el vals, el brindis y la fiesta. Cuéntanos si habrá coreografía o entrada especial.',
      'Cumpleaños o fiesta': 'Tú nos compartes tu playlist de Spotify y nosotros la operamos durante todo el evento.',
      'Iglesia o congreso': 'En cultos y congresos lo más importante es que el mensaje se entienda en todo el lugar, no solo el volumen.',
      'Corporativo o conferencia': 'En conferencias la prioridad es la voz: micrófonos confiables y, si hay presentación, el audio de la computadora.',
      Graduación: 'Necesitarás micrófono para el maestro de ceremonias y música para la entrada de los graduandos.',
      'Feria del libro':
        'En ferias pensamos en presentaciones y charlas con micrófono, y música ambiente a un volumen que deje conversar en los stands.',
    },
  },
  {
    key: 'personas',
    question: '¿Cuántas personas esperas?',
    kind: 'options',
    options: [
      { label: '1 a 50', icon: <Users className={ic} /> },
      { label: '50 a 100', icon: <Users className={ic} /> },
      { label: '100 a 150', icon: <UsersRound className={ic} /> },
      { label: '150 a 200', icon: <UsersRound className={ic} /> },
      { label: 'Más de 200', icon: <UsersRound className={ic} /> },
    ],
    tips: {
      _: 'Más personas no solo significa más volumen: significa cubrir bien todo el espacio para que los de atrás también escuchen.',
      'Más de 200':'Para eventos grandes podemos repartir bocinas por el área para que el sonido llegue parejo sin aturdir a los de adelante.',
    },
  },
  {
    key: 'espacio',
    question: '¿Dónde se realizará el evento?',
    kind: 'options',
    options: [
      { label: 'Salón cerrado', icon: <Building2 className={ic} /> },
      { label: 'Jardín o aire libre', icon: <Trees className={ic} /> },
      { label: 'Cancha o techado abierto', icon: <Warehouse className={ic} /> },
      { label: 'Iglesia o templo', icon: <Church className={ic} /> },
      { label: 'Casa o terraza', icon: <House className={ic} /> },
    ],
    tips: {
      _: 'El espacio es clave para elegir un equipo que se adapte: no suena igual un salón que un jardín.',
      'Jardín o aire libre': 'Al aire libre el sonido se dispersa y se necesita más potencia. Si hay riesgo de lluvia, consideren un toldo para el equipo.',
      'Cancha o techado abierto': 'Los techos de lámina generan eco. Repartir bocinas, en lugar de subir el volumen, hace que todo se entienda mejor.',
      'Iglesia o templo': 'Los templos suelen tener eco. Ubicamos las bocinas para que la palabra y la alabanza se escuchen claras.',
      'Casa o terraza': 'En casa cuidamos el volumen y a los vecinos: un sistema compacto bien ubicado suele ser suficiente.',
    },
  },
  {
    key: 'audio',
    question: '¿Qué va a sonar en tu evento?',
    kind: 'options',
    multi: true,
    options: [
      { label: 'Música de playlist', icon: <ListMusic className={ic} /> },
      { label: 'DJ', icon: <Disc3 className={ic} /> },
      { label: 'Discursos o micrófonos', icon: <Mic className={ic} /> },
      { label: 'Música en vivo acústica', icon: <Guitar className={ic} /> },
      { label: 'Banda completa', icon: <Drum className={ic} /> },
      { label: 'Video con audio', icon: <MonitorPlay className={ic} /> },
    ],
    tips: {
      _: 'Puedes elegir varias opciones. Si habrá música en vivo, avísanos: necesita una consola con más canales y monitores para los músicos.',
      'Música de playlist': 'No incluimos DJ: tú nos compartes tu playlist de Spotify y nosotros nos encargamos de la reproducción.',
      DJ: 'Si tendrás DJ, cuéntanos qué equipo usa (controlador, laptop) para tener listas las conexiones a nuestro sistema de sonido.',
      'Discursos o micrófonos': 'Cuéntanos cuántas personas hablarán al mismo tiempo para preparar los micrófonos inalámbricos necesarios.',
      'Música en vivo acústica': 'Para formato acústico (voz y guitarra, o un dúo) preparamos micrófonos y entradas para los instrumentos.',
      'Banda completa': 'Una banda necesita micrófonos de batería, cajas directas y monitoreo para que los músicos se escuchen. Lo incluimos en la propuesta.',
      'Video con audio': 'Llevamos la conexión para el audio de la computadora o proyector, así el video se escucha por las bocinas.',
    },
  },
  {
    key: 'luces',
    question: '¿Te interesa iluminación?',
    kind: 'options',
    options: [
      { label: 'Sí, ambiente de colores', icon: <Lightbulb className={ic} /> },
      { label: 'Solo para el escenario', icon: <Lamp className={ic} /> },
      { label: 'No por ahora', icon: <X className={ic} /> },
      { label: 'Recomiéndenme', icon: <Sparkles className={ic} /> },
    ],
    tips: {
      _: 'Las luces Par LED cambian por completo el ambiente, sobre todo en eventos de noche.',
    },
  },
  {
    key: 'cuando',
    question: '¿Cuándo y dónde es el evento?',
    kind: 'when',
    tips: {
      _: 'La hora y la duración nos ayudan a planificar el montaje y el técnico. Si el evento es fuera de la capital, incluimos el transporte. Pregunta al lugar si hay tomacorrientes cerca del escenario.',
    },
  },
  {
    key: 'contacto',
    question: '¿A nombre de quién preparamos la cotización?',
    kind: 'contact',
    tips: {
      _: 'Al terminar se abrirá WhatsApp con tu resumen listo para enviar. Te respondemos con una propuesta a tu medida.',
    },
  },
];

const CREATIVITY_STEPS: Step[] = [
  {
    key: 'producto',
    question: '¿Qué productos te interesan?',
    kind: 'options',
    multi: true,
    options: [
      { label: 'Tazas o termos', icon: <Coffee className={ic} /> },
      { label: 'Playeras o textiles', icon: <Shirt className={ic} /> },
      { label: 'Stickers', icon: <Sticker className={ic} /> },
      { label: 'Invitaciones o papelería', icon: <PenTool className={ic} /> },
      { label: 'Kit o empaque personalizado', icon: <Package className={ic} /> },
      { label: 'Otro', icon: <Sparkles className={ic} /> },
    ],
    tips: {
      _: 'Puedes elegir varios productos. Combinarlos para un mismo evento o marca da un resultado más uniforme.',
    },
  },
  {
    key: 'cantidad',
    question: '¿Cuántas piezas necesitas de cada producto?',
    kind: 'quantity',
    tips: {
      _: 'Escribe la cantidad exacta de cada producto. Hacemos desde una pieza hasta pedidos por volumen, y en pedidos grandes manejamos precio especial.',
    },
  },
  {
    key: 'diseno',
    question: '¿Ya tienes el diseño?',
    kind: 'options',
    options: [
      { label: 'Sí, ya lo tengo', icon: <Check className={ic} /> },
      { label: 'Tengo una idea', icon: <Lightbulb className={ic} /> },
      { label: 'Necesito que lo diseñen', icon: <PenTool className={ic} /> },
    ],
    tips: {
      _: 'Si ya tienes logo o arte, envíalo por WhatsApp en buena calidad (PNG o PDF) para que el resultado se vea nítido.',
      'Necesito que lo diseñen': 'Te ayudamos a crear el arte. Cuéntanos colores, estilo o referencias que te gusten.',
    },
  },
  {
    key: 'entrega',
    question: '¿Para cuándo lo necesitas?',
    kind: 'delivery',
    tips: {
      _: 'Los productos personalizados necesitan tiempo de producción. Mientras antes nos escribas, más opciones tendrás.',
    },
  },
  {
    key: 'contacto',
    question: '¿A nombre de quién preparamos la cotización?',
    kind: 'contact',
    tips: {
      _: 'Al terminar se abrirá WhatsApp con tu resumen listo para enviar. Te respondemos con una propuesta a tu medida.',
    },
  },
];

const DURATIONS = ['2 a 3 horas', '4 a 5 horas', '6 a 8 horas', 'Más de 8 horas', 'Varios días'];
const ORIGINS = ['Instagram', 'Facebook', 'TikTok', 'Google', 'Recomendación', 'Otro'];

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-white/40 transition-all text-white placeholder:text-slate-600';
/** Abre el calendario o el reloj al tocar cualquier parte del campo (no solo el ícono pequeño). */
const openPicker = (e: MouseEvent<HTMLInputElement>) => {
  try {
    e.currentTarget.showPicker?.();
  } catch {
    // Algunos navegadores no lo permiten; en ese caso se usa el comportamiento normal.
  }
};

const dateInputClass = '[color-scheme:dark] cursor-pointer';

const labelClass = 'text-xs font-bold text-slate-400 uppercase tracking-widest ml-1';

function suggestedPackage(a: Answers): string {
  const people = (a.personas as string[] | undefined)?.[0] ?? '';
  const audio = (a.audio as string[] | undefined) ?? [];
  if (audio.includes('Banda completa') || audio.includes('Música en vivo acústica')) {
    return 'Paquete Personalizado (música en vivo)';
  }
  if (people === '1 a 50') return 'Paquete Básico';
  if (people === '150 a 200' || people === 'Más de 200') return 'Paquete Full Evento';
  return 'Paquete Personalizado';
}

const list = (v: string[] | string | undefined) => (Array.isArray(v) ? v.join(', ') : v ?? '');

export default function CotizadorWizard({
  soundNumber,
  creativityNumber,
  preset,
}: {
  soundNumber: string;
  creativityNumber: string;
  preset?: CotizadorPreset;
}) {
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  // Si el cliente llegó desde un botón de Sound o Creativity, se salta la primera pregunta.
  useEffect(() => {
    if (!preset?.division) return;
    setAnswers({
      division: [DIVISION_LABEL[preset.division]],
      ...(preset.paquete ? { paquete: preset.paquete } : {}),
    });
    setIndex(1);
    setDone(false);
    setError('');
  }, [preset?.n]);

  const canal = preset?.canal || 'Página web';

  const division: Division | null =
    answers.division?.[0] === 'Sonido para un evento'
      ? 'sound'
      : answers.division?.[0] === 'Productos personalizados'
        ? 'creativity'
        : null;

  const steps = [DIVISION_STEP, ...(division === 'creativity' ? CREATIVITY_STEPS : SOUND_STEPS)];
  const step = steps[index];
  // Creativity usa su paleta (azul #04176B, coral y mint); Sound usa su azul claro.
  const accent = division === 'creativity' ? 'creativity' : 'sound';

  const set = (key: string, value: string[] | string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError('');
  };

  const toggle = (opt: string) => {
    const current = (answers[step.key] as string[] | undefined) ?? [];
    if (step.multi) {
      set(step.key, current.includes(opt) ? current.filter((x) => x !== opt) : [...current, opt]);
    } else {
      // Al cambiar de división se reinicia el resto de respuestas.
      if (step.key === 'division' && current[0] !== opt) {
        setAnswers({ division: [opt] });
        setError('');
        return;
      }
      set(step.key, [opt]);
    }
  };

  // Productos elegidos en Creativity; cada uno lleva su cantidad exacta.
  const products = (answers.producto as string[] | undefined) ?? [];
  const qtyKey = (product: string) => `cantidad:${product}`;
  const quantitiesText = products
    .filter((p) => answers[qtyKey(p)])
    .map((p) => `${p}: ${list(answers[qtyKey(p)])}`)
    .join(', ');

  const validate = (): string => {
    const a = answers;
    switch (step.kind) {
      case 'options':
        return ((a[step.key] as string[] | undefined) ?? []).length ? '' : 'Elige una opción para continuar.';
      case 'when':
        if (!a.fecha || !a.hora || !a.duracion || !String(a.lugar ?? '').trim()) {
          return 'Indica la fecha, la hora, la duración y el lugar para continuar.';
        }
        return '';
      case 'quantity': {
        const missing = products.filter((p) => !(Number(a[qtyKey(p)]) >= 1));
        return missing.length ? `Escribe la cantidad de: ${missing.join(', ')}.` : '';
      }
      case 'delivery':
        return a.fechaEntrega ? '' : 'Indica la fecha en que lo necesitas.';
      case 'contact':
        return String(a.nombre ?? '').trim() ? '' : 'Escribe tu nombre para continuar.';
    }
  };

  const next = () => {
    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }
    if (index < steps.length - 1) setIndex(index + 1);
    else setDone(true);
  };

  const back = () => {
    setError('');
    if (done) setDone(false);
    else if (index > 0) setIndex(index - 1);
  };

  const packageRows: [string, string][] = answers.paquete ? [['Paquete de interés', list(answers.paquete)]] : [];

  const summaryRows: [string, string][] = packageRows.concat(
    division === 'creativity'
      ? [
          ['Productos y cantidades', quantitiesText || list(answers.producto)],
          ['Diseño', list(answers.diseno)],
          ['Fecha de entrega', list(answers.fechaEntrega)],
        ]
      : [
          ['Evento', list(answers.tipo)],
          ['Personas', list(answers.personas)],
          ['Lugar', list(answers.espacio)],
          ['Audio', list(answers.audio)],
          ['Iluminación', list(answers.luces)],
          ['Fecha', list(answers.fecha)],
          ['Hora de inicio', list(answers.hora)],
          ['Duración', list(answers.duracion)],
          ['Ubicación', list(answers.lugar)],
        ],
  );

  const sendWhatsApp = () => {
    const lines = [
      `¡Hola Ismo Guate! Quiero cotizar ${division === 'creativity' ? 'productos personalizados (Ismo Creativity)' : 'sonido para un evento (Ismo Sound)'}:`,
      '',
      ...summaryRows.filter(([, v]) => v).map(([k, v]) => `*${k}:* ${v}`),
      ...(division === 'sound' ? [`*Paquete sugerido:* ${suggestedPackage(answers)}`] : []),
      '',
      `*Nombre:* ${list(answers.nombre)}`,
      `*Nos encontró por:* ${list(answers.origen) || 'No indicado'}`,
      `*Cotizó desde:* ${canal}`,
      ...(String(answers.notas ?? '').trim() ? [`*Detalles:* ${String(answers.notas).trim()}`] : []),
    ];
    const number = division === 'creativity' ? creativityNumber : soundNumber;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  };

  const selected = (answers[step.key] as string[] | undefined) ?? [];
  const lastSelected = step.kind === 'options' ? selected[selected.length - 1] : undefined;
  const tip = (lastSelected && step.tips[lastSelected]) || step.tips._;
  const progress = done ? 100 : ((index + 1) / (steps.length + 1)) * 100;

  const selectedClass =
    accent === 'creativity'
      ? 'bg-creativity-blue border-coral text-white'
      : 'bg-blue-300/15 border-blue-300/60 text-white';
  const barClass = accent === 'creativity' ? 'bg-coral' : 'bg-blue-300';
  const tipIconClass = accent === 'creativity' ? 'text-coral' : 'text-blue-300';
  const nextButtonClass =
    accent === 'creativity'
      ? 'bg-coral hover:brightness-105 text-creativity-blue rounded-full'
      : 'bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-xl shadow-orange-500/20';

  return (
    <div className="space-y-6">
      {/* Progreso */}
      <div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full ${barClass} transition-all duration-500`} style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {done ? 'Resumen' : `Paso ${index + 1} de ${steps.length}`}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={done ? 'summary' : `${division}-${index}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          {done ? (
            <>
              <h3 className="text-2xl md:text-3xl font-bold">Este es tu resumen</h3>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6 space-y-1">
                {division === 'sound' && (
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Sugerencia orientativa</p>
                    <p className="text-xl font-bold text-blue-300">{suggestedPackage(answers)}</p>
                  </div>
                )}
                {[...summaryRows, ['Nombre', list(answers.nombre)] as [string, string]].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2 border-t border-white/5 text-sm">
                    <span className="text-slate-400">{k}</span>
                    <span className="text-right text-white font-medium">{v || '—'}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                La propuesta final se ajusta al lugar y a tus necesidades. Te confirmamos disponibilidad por WhatsApp.
              </p>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.question}</h3>
                {step.multi && (
                  <p className={`mt-2 text-sm font-semibold ${tipIconClass}`}>Puedes elegir varias opciones</p>
                )}
              </div>

              {step.kind === 'options' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {step.options!.map((opt) => {
                    const on = selected.includes(opt.label);
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => toggle(opt.label)}
                        aria-pressed={on}
                        className={`relative flex flex-col items-start gap-2 text-left p-4 rounded-2xl border transition-all ${
                          on ? selectedClass : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30'
                        }`}
                      >
                        <span className={on ? tipIconClass : 'text-slate-400'}>{opt.icon}</span>
                        <span className="text-sm font-semibold leading-tight">{opt.label}</span>
                        {on && <Check className={`absolute top-3 right-3 w-4 h-4 ${tipIconClass}`} />}
                      </button>
                    );
                  })}
                </div>
              )}

              {step.kind === 'when' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="space-y-2 block">
                      <span className={labelClass}>Fecha</span>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type="date"
                          onClick={openPicker}
                          value={list(answers.fecha)}
                          onChange={(e) => set('fecha', e.target.value)}
                          className={`${inputClass} ${dateInputClass} pl-12`}
                        />
                      </div>
                    </label>
                    <label className="space-y-2 block">
                      <span className={labelClass}>Hora de inicio</span>
                      <div className="relative">
                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type="time"
                          onClick={openPicker}
                          value={list(answers.hora)}
                          onChange={(e) => set('hora', e.target.value)}
                          className={`${inputClass} ${dateInputClass} pl-12`}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <span className={labelClass}>Duración aproximada</span>
                    <div className="flex flex-wrap gap-2">
                      {DURATIONS.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => set('duracion', d)}
                          aria-pressed={answers.duracion === d}
                          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                            answers.duracion === d ? selectedClass : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="space-y-2 block">
                    <span className={labelClass}>Municipio o lugar</span>
                    <div className="relative">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Ej. Mixco, Salón Las Flores"
                        value={list(answers.lugar)}
                        onChange={(e) => set('lugar', e.target.value)}
                        className={`${inputClass} pl-12`}
                      />
                    </div>
                  </label>
                </div>
              )}

              {step.kind === 'delivery' && (
                <label className="space-y-2 block">
                  <span className={labelClass}>Fecha de entrega</span>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    <input
                      type="date"
                      onClick={openPicker}
                      value={list(answers.fechaEntrega)}
                      onChange={(e) => set('fechaEntrega', e.target.value)}
                      className={`${inputClass} ${dateInputClass} pl-12`}
                    />
                  </div>
                </label>
              )}

              {step.kind === 'quantity' && (
                <div className="space-y-3">
                  {products.map((product) => (
                    <label
                      key={product}
                      className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <span className="text-sm font-semibold text-white">{product}</span>
                      <span className="flex items-center gap-2">
                        <input
                          type="number"
                          inputMode="numeric"
                          min={1}
                          step={1}
                          placeholder="0"
                          value={list(answers[qtyKey(product)])}
                          onChange={(e) => set(qtyKey(product), e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-28 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-right text-white focus:outline-none focus:border-coral"
                        />
                        <span className="text-xs text-slate-400">piezas</span>
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {step.kind === 'contact' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="space-y-2 block">
                      <span className={labelClass}>Tu nombre</span>
                      <input
                        type="text"
                        placeholder="Ej. Juan Pérez"
                        value={list(answers.nombre)}
                        onChange={(e) => set('nombre', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="space-y-2 block">
                      <span className={labelClass}>¿Cómo nos encontraste?</span>
                      <select
                        value={list(answers.origen)}
                        onChange={(e) => set('origen', e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option className="bg-slate-900" value="">
                          Elige una opción
                        </option>
                        {ORIGINS.map((o) => (
                          <option key={o} className="bg-slate-900" value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="space-y-2 block">
                    <span className={labelClass}>Algo más que debamos saber (opcional)</span>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      value={list(answers.notas)}
                      onChange={(e) => set('notas', e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                </div>
              )}

              {/* Sugerencia del paso */}
              <div className="flex gap-3 rounded-2xl bg-white/5 border border-white/5 p-4">
                <Lightbulb className={`w-5 h-5 shrink-0 mt-0.5 ${tipIconClass}`} />
                <p className="text-sm text-slate-300 leading-relaxed">{tip}</p>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Navegación */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={back}
          className={`flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors ${
            index === 0 && !done ? 'invisible' : ''
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Atrás
        </button>
        {done ? (
          <button
            type="button"
            onClick={sendWhatsApp}
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-green-500/20"
          >
            Enviar por WhatsApp <Send className="w-5 h-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className={`flex items-center gap-3 px-8 py-4 font-black transition-all ${nextButtonClass}`}
          >
            {index === steps.length - 1 ? 'Ver resumen' : 'Siguiente'} <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
