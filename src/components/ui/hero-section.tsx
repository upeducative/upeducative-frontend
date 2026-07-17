import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu,
} from "lucide-react";

// --- MOCK BRANDS ---
const CLIENTS = [
  { name: "Acme Corp", icon: Hexagon },
  { name: "Quantum", icon: Triangle },
  { name: "Command+Z", icon: Command },
  { name: "Phantom", icon: Ghost },
  { name: "Ruby", icon: Gem },
  { name: "Chipset", icon: Cpu },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-blue-200/60 font-medium sm:text-xs">
      {label}
    </span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#050816] text-white overflow-hidden font-sans">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Glow - White to Blue Cinematic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30 animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(56,189,248,0.2) 40%, rgba(37,99,235,0.1) 100%)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(37,99,235,0.05) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-200 flex items-center gap-2">
                  Award-Winning Design
                  <Star className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
                </span>
              </div>
            </div>

            {/* Heading with Blue Gradient */}
            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-br from-white via-blue-200 to-sky-400 bg-clip-text text-transparent">
                Experiences
              </span>
              <br />
              That Matter
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-blue-200/70 leading-relaxed">
              We design interfaces that combine beauty with functionality,
              creating seamless experiences that users love and businesses thrive
              on.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#050816] transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-400/50 active:scale-[0.98]">
                View Portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-sky-400/30">
                <Play className="w-4 h-4 fill-current" />
                Watch Showreel
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-8 backdrop-blur-[28px] shadow-2xl">
              {/* Card Glow Effect - Blue Radial */}
              <div
                className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(37,99,235,0.1) 100%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">
                      150+
                    </div>
                    <div className="text-sm text-blue-200/60">
                      Projects Delivered
                    </div>
                  </div>
                </div>

                {/* Progress Bar Section - Blue Gradient */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200/60">Client Satisfaction</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-white via-sky-400 to-blue-600" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="5+" label="Years" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="24/7" label="Support" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="100%" label="Quality" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-blue-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-blue-200">
                    <Crown className="w-3 h-3 text-sky-400" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 py-8 backdrop-blur-[28px]">
              <h3 className="mb-6 px-8 text-sm font-medium text-blue-200/60">
                Trusted by Industry Leaders
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {/* Triple list for seamless loop */}
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      {/* Brand Icon */}
                      <client.icon className="h-6 w-6 text-white fill-current" />
                      {/* Brand Name */}
                      <span className="text-lg font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
