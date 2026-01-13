import { Crosshair, Zap, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,128,0.1)_0%,transparent_70%)]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Crosshair className="w-20 h-20 text-primary animate-pulse-glow" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Bot className="w-8 h-8 text-secondary animate-flicker" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
          <span className="gradient-text">MEME SNIPER</span>
          <span className="block text-primary text-glow mt-2">AI</span>
        </h1>

        {/* Tagline */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-12 font-body">
          Lightning-fast AI-powered precision trading
        </p>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-3 text-primary">
          <Zap className="w-5 h-5 animate-flicker" />
          <span className="font-display text-sm tracking-widest uppercase">System Initializing</span>
          <Zap className="w-5 h-5 animate-flicker" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
};

export default Index;
