import { ArrowRight, Play } from "lucide-react";
import studentImage from "@/assets/student.png";

export default function HeroSection() {
  return (
    <div className="relative w-full bg-background text-foreground overflow-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glowExpand {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
        }
        .animate-fade-in { animation: fadeSlideIn 0.8s ease-out forwards; opacity: 0; }
        .animate-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow-expand { animation: glowExpand 6s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* Background Glows (Combined Effects) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Original Pulse Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(56,189,248,0.1) 40%, transparent 100%)" }}
        />
        {/* New Expand Glow */}
        <div
          className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full blur-[100px] animate-glow-expand"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Text) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 pt-8">
           <h1 className="animate-fade-in delay-100 text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] text-slate-900 dark:text-white">
  Build real skills.
  <br />
  <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-sky-400 bg-clip-text text-transparent">
    Get hired with UpEducative.
  </span>
</h1>
<p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
  Skip the generic tutorials. Master high-demand tech stacks through verified, stipend-paying Indian internships and structured training tracks.
</p>

            <p className="animate-fade-in delay-200 max-w-xl text-lg text-blue-200/70 leading-relaxed">
              Partnered with 150+ top colleges to bring you premium internships and expert mentorship. <br className="hidden sm:block" />
              <span className="text-sky-400 font-semibold tracking-wide text-sm mt-2 inline-block">100% VERIFIED • 1k+ ACTIVE</span>
            </p>

            <div className="animate-fade-in delay-300 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#050816] transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-400/50 active:scale-[0.98]">
                Explore more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-sky-400/30">
                <Play className="w-4 h-4 fill-current" />
                Watch
              </button>
            </div>
          </div>

          {/* Right Column (Floating Image) */}
          <div className="lg:col-span-7 flex justify-center animate-fade-in delay-300">
            <div className="animate-float">
              <img 
                src={studentImage} 
                alt="Student Laptop Presentation" 
                className="w-full max-w-5xl h-auto object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}