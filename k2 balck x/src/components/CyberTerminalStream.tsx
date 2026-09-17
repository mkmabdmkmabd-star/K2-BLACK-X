import React, { useState, useEffect, useRef } from 'react';

const CODE_SCRIPTS: { text: string; color: string; delay?: number }[] = [
  { text: '$ k2-blackx --init-security-mesh --live-stream', color: 'text-slate-400 font-bold' },
  { text: '[+] Core Engine: Initializing kernel modules (Linux 6.x)...', color: 'text-emerald-400' },
  { text: '[+] Volatility 3: Analyzing physical memory dump (0x7FFF8000)...', color: 'text-cyan-400' },
  { text: '[✔] Forensics Lab: Evidence timeline reconstructed successfully.', color: 'text-emerald-300' },
  { text: '[*] Network Probe: Scanning 10.0.0.0/8 [SYN Stealth Scan]...', color: 'text-amber-400' },
  { text: '[✔] Zero-Day Armor: Filtered 1,420 rogue intrusion packets.', color: 'text-teal-400' },
  { text: '[>] Launching Kali Rolling Suite: Ghidra & Radare2 linked.', color: 'text-indigo-400' },
  { text: '[+] AI Automation Daemon: Loading localized neural weights...', color: 'text-violet-400' },
  { text: '[✔] Inference pipeline active: 1,200 tok/sec (GPU acceleration).', color: 'text-emerald-400' },
  { text: '[*] Cryptographic Audit: Validating AES-256-GCM HSM keys...', color: 'text-yellow-300' },
  { text: '[✔] Certificate Authority: Root of Trust intact (Zero Anomalies).', color: 'text-cyan-300' },
  { text: '[>] Academic Research Engine: LaTeX & SPSS models compiled.', color: 'text-blue-400' },
  { text: '[*] Darknet Crawler: Telemetry feed listening on secure nodes...', color: 'text-slate-300' },
  { text: '[✔] Active Defense: K2 BlackX 15 Departments in Lockstep.', color: 'text-emerald-400 font-bold' },
  { text: '[↺] Security cycle completed. Re-arming continuous watchdog...', color: 'text-amber-400' },
];

export const CyberTerminalStream: React.FC = () => {
  const [lines, setLines] = useState<Array<{ id: number; text: string; color: string }>>([
    { id: 0, text: '$ k2-blackx --init-security-mesh --live-stream', color: 'text-slate-400 font-bold' },
    { id: 1, text: '[+] Core Engine: Initializing kernel modules (Linux 6.x)...', color: 'text-emerald-400' },
    { id: 2, text: '[+] Volatility 3: Analyzing physical memory dump (0x7FFF8000)...', color: 'text-cyan-400' },
  ]);
  const [currentTypingText, setCurrentTypingText] = useState<string>('');
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(3);
  const [charIndex, setCharIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef<number>(3);

  useEffect(() => {
    const targetScript = CODE_SCRIPTS[currentLineIndex % CODE_SCRIPTS.length];
    const fullText = targetScript.text;

    if (charIndex < fullText.length) {
      // Type next character
      const timer = setTimeout(() => {
        setCurrentTypingText(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, Math.random() * 25 + 15); // Natural typing speed variation

      return () => clearTimeout(timer);
    } else {
      // Line finished typing -> Commit line to history and start next
      const lineTimer = setTimeout(() => {
        setLines((prev) => {
          const updated = [
            ...prev,
            {
              id: nextIdRef.current++,
              text: fullText,
              color: targetScript.color,
            },
          ];
          // Keep the recent 9 lines for smooth scrolling
          return updated.length > 9 ? updated.slice(updated.length - 9) : updated;
        });

        setCurrentTypingText('');
        setCharIndex(0);
        setCurrentLineIndex((prev) => (prev + 1) % CODE_SCRIPTS.length);
      }, 400); // Brief pause before starting the next line

      return () => clearTimeout(lineTimer);
    }
  }, [charIndex, currentLineIndex]);

  // Auto scroll terminal to bottom on content update
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, currentTypingText]);

  const activeColor = CODE_SCRIPTS[currentLineIndex % CODE_SCRIPTS.length].color;

  return (
    <div
      ref={containerRef}
      className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed select-none h-56 overflow-y-auto overflow-x-hidden scrollbar-none flex flex-col justify-start"
    >
      {lines.map((line) => (
        <div key={line.id} className={`${line.color} transition-opacity duration-150`}>
          {line.text}
        </div>
      ))}

      {/* Currently typing active line with blinking cursor */}
      <div className={`${activeColor} flex items-center gap-1`}>
        <span>{currentTypingText}</span>
        <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
      </div>
    </div>
  );
};
