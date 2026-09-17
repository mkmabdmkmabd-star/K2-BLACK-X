import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Terminal, Search, Cpu, Copy, Check, Sparkles, Lock, 
  FileText, KeyRound, AlertTriangle, Info, Globe, Database, Network, 
  HardDrive, Wrench, GraduationCap, BookOpen, Palette, Users, Play, 
  RefreshCw, CheckCircle2, ArrowRight, Eye, ShieldAlert, Zap, Send, Code,
  Sliders
} from 'lucide-react';

interface ToolProps {
  onSelectService?: (serviceTitle: string) => void;
}

// ==========================================
// 1. الأمن السيبراني: فاحص الرؤوس ومحاكي الثغرات
// ==========================================
export const ToolCyberSecurity: React.FC<ToolProps> = () => {
  const [targetUrl, setTargetUrl] = useState('https://secure-portal.k2blackx.internal');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    score: string;
    grade: string;
    headers: { name: string; status: 'pass' | 'fail' | 'warn'; detail: string }[];
  } | null>({
    score: '88/100',
    grade: 'A',
    headers: [
      { name: 'Strict-Transport-Security (HSTS)', status: 'pass', detail: 'max-age=31536000; includeSubDomains; preload' },
      { name: 'Content-Security-Policy (CSP)', status: 'pass', detail: 'default-src \'self\'; script-src \'self\' \'wasm-unsafe-eval\'' },
      { name: 'X-Frame-Options', status: 'pass', detail: 'DENY (الحماية من هجمات Clickjacking)' },
      { name: 'X-Content-Type-Options', status: 'pass', detail: 'nosniff (منع التخمين الخبيث للملفات)' },
      { name: 'Referrer-Policy', status: 'warn', detail: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', status: 'fail', detail: 'غير مفعلة (يوصى بحظر الوصول غير المصرح للكاميرا والميكروفون)' }
    ]
  });

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanResult({
        score: '92/100',
        grade: 'A+',
        headers: [
          { name: 'Strict-Transport-Security (HSTS)', status: 'pass', detail: 'مفعل بأعلى معايير التشفير (31536000s)' },
          { name: 'Content-Security-Policy (CSP)', status: 'pass', detail: 'محصن ضد هجمات XSS و Data Injection' },
          { name: 'X-Frame-Options', status: 'pass', detail: 'حظر التضمين الخبيث داخل iFrames' },
          { name: 'X-Content-Type-Options', status: 'pass', detail: 'nosniff مفعل بنجاح' },
          { name: 'Cross-Origin-Resource-Policy', status: 'pass', detail: 'same-origin' },
          { name: 'Permissions-Policy', status: 'pass', detail: 'تم تقييد الكاميرا والموقع الجغرافي' }
        ]
      });
    }, 900);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
        <div className="flex items-center justify-between gap-3 mb-2">
          <label className="text-xs font-bold text-slate-300">أداة التدقيق الأمني ومحاكي فحص الثغرات (VAPT & Security Headers):</label>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">OWASP TOP 10</span>
        </div>
        <div className="flex gap-2">
          <input 
            type="text"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
            placeholder="https://yourdomain.com"
          />
          <button
            onClick={handleScan}
            disabled={scanning}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5 disabled:opacity-50"
          >
            {scanning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <ShieldCheck className="w-3.5 h-3.5" />}
            <span>{scanning ? 'جاري الفحص...' : 'فحص أمني فوري'}</span>
          </button>
        </div>
      </div>

      {scanResult && (
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <span className="text-xs text-slate-400">تقييم الجاهزية الدفاعية للموقع:</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-300">Score: {scanResult.score}</span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded font-black text-xs font-mono">
                GRADE {scanResult.grade}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {scanResult.headers.map((h, idx) => (
              <div key={idx} className="p-2.5 bg-slate-900/60 border border-slate-800/80 rounded-lg text-xs flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-slate-200 font-bold">{h.name}</span>
                  <span className={`px-1.5 py-0.2 text-[10px] rounded font-bold ${
                    h.status === 'pass' ? 'bg-emerald-500/20 text-emerald-300' :
                    h.status === 'warn' ? 'bg-amber-500/20 text-amber-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {h.status === 'pass' ? 'محصن [OK]' : h.status === 'warn' ? 'تنبيه [WARN]' : 'مفقود [RISK]'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono truncate">{h.detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. التحليل الجنائي الرقمي: فاحص الهاش والميتاداتا
// ==========================================
export const ToolDigitalForensics: React.FC<ToolProps> = () => {
  const [evidenceText, setEvidenceText] = useState('EVIDENCE_LOG_CASE_2026_K2X_SECURE_EXTRACTION');
  const [evidenceHash, setEvidenceHash] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function calcHash() {
      const msgUint8 = new TextEncoder().encode(evidenceText);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
      const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
      setEvidenceHash(hashHex);
    }
    calcHash();
  }, [evidenceText]);

  const copyHash = () => {
    navigator.clipboard.writeText(evidenceHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-300">حساب البصمة الجنائية الرقمية (Cryptographic Integrity Hash):</label>
          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">ISO/IEC 27037</span>
        </div>
        <textarea
          rows={2}
          value={evidenceText}
          onChange={(e) => setEvidenceText(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"
          placeholder="أدخل نص السجل الجنائي أو بيانات الدليل للتحقق من سلامته وعدم التلاعب به..."
        />
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">SHA-256 Checksum:</span>
            <button
              onClick={copyHash}
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ الهاش'}</span>
            </button>
          </div>
          <p className="text-xs font-mono text-cyan-400 break-all select-all bg-slate-900 p-2 rounded border border-slate-800">
            {evidenceHash || 'جاري الحساب...'}
          </p>
        </div>
      </div>

      {/* Chain of Custody Sample Preview */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <span className="text-xs font-bold text-slate-300 block">سلسلة حيازة الدليل الجنائي المعتمدة (Chain of Custody Sample):</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="p-2 bg-slate-900/70 border border-slate-800 rounded">
            <span className="text-[10px] text-slate-500 block">نوع الدليل</span>
            <span className="text-white font-bold">RAM Memory Dump</span>
          </div>
          <div className="p-2 bg-slate-900/70 border border-slate-800 rounded">
            <span className="text-[10px] text-slate-500 block">أداة الاستخراج</span>
            <span className="text-cyan-400 font-bold">LiME / FTK Imager</span>
          </div>
          <div className="p-2 bg-slate-900/70 border border-slate-800 rounded">
            <span className="text-[10px] text-slate-500 block">ساعة الضبط (UTC)</span>
            <span className="text-amber-300 font-bold">2026-09-14 02:40</span>
          </div>
          <div className="p-2 bg-slate-900/70 border border-slate-800 rounded">
            <span className="text-[10px] text-slate-500 block">سلامة الدليل</span>
            <span className="text-emerald-400 font-bold">VERIFIED 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. أنظمة كالي لينكس: محاكي الطرفية التفاعلية
// ==========================================
export const ToolLinuxKali: React.FC<ToolProps> = () => {
  const [selectedTool, setSelectedTool] = useState<'nmap' | 'metasploit' | 'hydra' | 'aircrack'>('nmap');
  const [copied, setCopied] = useState(false);

  const toolsCommands = {
    nmap: {
      cmd: 'nmap -sS -sV -sC -O -T4 -p- 192.168.1.1/24 -oA k2_scan_result',
      desc: 'فحص خفي (SYN Stealth) لكافة المنافذ الـ 65535 مع كشف إصدارات الخدمات ونظام التشغيل وتصدير النتائج.',
      output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-14
Nmap scan report for gateway.k2blackx.net (192.168.1.1)
Host is up (0.00042s latency).
PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 9.6p1 Debian (protocol 2.0)
80/tcp   open  http        nginx 1.26.0 (Hardened)
443/tcp  open  ssl/https   nginx 1.26.0 (TLS 1.3 only)
3306/tcp closed mysql
OS details: Linux 6.6.x (Debian/Kali Rolling)`
    },
    metasploit: {
      cmd: 'msfconsole -q -x "use auxiliary/scanner/smb/smb_version; set RHOSTS 192.168.1.0/24; run; exit"',
      desc: 'فحص فوري لإصدارات بروتوكول مشاركة الملفات SMB واكتشاف أي خوادم معرضة لثغرات EternalBlue.',
      output: `[*] 192.168.1.10:445 - SMB Detected: Windows Server 2022 Build 20348 (Dialect 3.1.1)
[*] 192.168.1.15:445 - SMB Detected: Samba 4.19.5-Debian
[*] Scanned 254 of 254 hosts (100% complete)
[*] Auxiliary module execution completed`
    },
    hydra: {
      cmd: 'hydra -l audit_admin -P /usr/share/wordlists/rockyou.txt -t 4 -s 22 ssh://192.168.1.5',
      desc: 'اختبار صلابة كلمات المرور ضد الهجوم التخميني لمنفذ SSH وضمان عدم استخدام اعتمادات افتراضية.',
      output: `Hydra v9.5 (c) 2026 by van Hauser / THC - Please use responsibly
[DATA] max 4 tasks per host, resolving targets...
[STATUS] 480.00 tries/min, 960 tries in 00:02h, 14343169 to do...
[22][ssh] host: 192.168.1.5 - Target enforced Rate-Limiting & Fail2Ban (Blocked IP after 5 attempts)`
    },
    aircrack: {
      cmd: 'aircrack-ng -w /usr/share/wordlists/passwords.lst -b 00:14:6C:7E:40:80 wpa2_handshake.cap',
      desc: 'تحليل أمان شبكات Wi-Fi وتدقيق تشفير WPA2/WPA3 4-Way Handshake.',
      output: `Aircrack-ng 1.7
[00:01:23] Tested 182,490 keys (got 2192.4 k/s)
KEY FOUND! [ ComplexWPA3Secure#2026! ]
Decrypted 1 network packets successfully.`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(toolsCommands[selectedTool].cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(['nmap', 'metasploit', 'hydra', 'aircrack'] as const).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedTool(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
              selectedTool === key 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' 
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">{toolsCommands[selectedTool].desc}</span>
          <button
            onClick={handleCopy}
            className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-mono shrink-0 mr-2"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'تم النسخ!' : 'نسخ الأمر'}</span>
          </button>
        </div>
        <div className="p-2.5 bg-black rounded-lg font-mono text-xs text-emerald-400 border border-slate-800 flex items-center gap-2 overflow-x-auto">
          <span className="text-slate-500 select-none">root@kali:~#</span>
          <span>{toolsCommands[selectedTool].cmd}</span>
        </div>
      </div>

      <div className="p-3 bg-black border border-slate-800/90 rounded-xl font-mono text-xs text-slate-300 space-y-1">
        <div className="text-[11px] text-slate-500 border-b border-slate-900 pb-1 mb-2 flex items-center justify-between">
          <span>محاكاة إخراج الطرفية (Live Terminal Output Simulation):</span>
          <span className="text-emerald-400 text-[10px]">KERNEL 6.x</span>
        </div>
        <pre className="whitespace-pre-wrap leading-relaxed text-[11px] text-slate-300">
          {toolsCommands[selectedTool].output}
        </pre>
      </div>
    </div>
  );
};

// ==========================================
// 4. البرمجة والسكريبتات: مدقق Regex الأمني
// ==========================================
export const ToolSoftwareScripting: React.FC<ToolProps> = () => {
  const [testInput, setTestInput] = useState("Target server connected from 192.168.1.105 with key sk_live_k2x_9843a8b2910");
  const [regexType, setRegexType] = useState<'ip' | 'apikey' | 'sqli'>('ip');

  const regexPatterns = {
    ip: {
      regex: /\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b/g,
      label: 'عناوين IP في السجلات',
      pattern: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b'
    },
    apikey: {
      regex: /\\b(sk_live_[a-zA-Z0-9_]{16,})\\b/g,
      label: 'مفاتيح API مسربة',
      pattern: 'sk_live_[a-zA-Z0-9_]{16,}'
    },
    sqli: {
      regex: /('|\"|;|--|\\bUNION\\b|\\bSELECT\\b)/gi,
      label: 'أنماط حقن SQL المشبوهة',
      pattern: '(\'|\"|;|--|UNION|SELECT)'
    }
  };

  const matches = testInput.match(regexPatterns[regexType].regex) || [];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['ip', 'apikey', 'sqli'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setRegexType(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              regexType === t 
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40' 
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
            }`}
          >
            {regexPatterns[t].label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span>نص الاختبار للفلترة واستخراج الأنماط:</span>
          <span className="font-mono text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40">
            /{regexPatterns[regexType].pattern}/
          </span>
        </div>
        <textarea
          rows={2}
          value={testInput}
          onChange={(e) => setTestInput(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-xs font-mono text-white focus:outline-none focus:border-violet-500"
        />
      </div>

      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <span className="text-xs text-slate-400 block">نتائج المطابقة الفورية (Matches Found: {matches.length}):</span>
        {matches.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {matches.map((m, i) => (
              <span key={i} className="px-2.5 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded font-mono text-xs">
                {m}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-slate-500 font-mono">لم يتم العثور على تطابقات بالنمط المختار</span>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 5. تصميم وتطوير المواقع: فاحص الـ SSL و Core Web Vitals
// ==========================================
export const ToolWebDev: React.FC<ToolProps> = () => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-200">فحص أداء وتشفير المواقع (Core Web Vitals & SSL 2026):</span>
          <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">PWA & TLS 1.3</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 block mb-1">زمن الاستجابة (TTFB)</span>
            <span className="text-lg font-black text-emerald-400 font-mono">48ms</span>
            <span className="text-[9px] text-emerald-500 block">فائق السرعة (Edge CDN)</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 block mb-1">تشفير الشهادة</span>
            <span className="text-lg font-black text-cyan-400 font-mono">TLS 1.3</span>
            <span className="text-[9px] text-cyan-500 block">ECDSA 384-bit</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 block mb-1">أكبر رسم للمحتوى (LCP)</span>
            <span className="text-lg font-black text-teal-400 font-mono">0.8s</span>
            <span className="text-[9px] text-teal-500 block">مثالي (Google Standard)</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 block mb-1">تقييم الـ SEO والأمان</span>
            <span className="text-lg font-black text-amber-400 font-mono">100/100</span>
            <span className="text-[9px] text-amber-500 block">مهيأ للأجهزة الذكية</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 space-y-1">
        <span className="text-teal-400 font-bold block">ملاحظات التحسين المعتمدة من K2 BlackX:</span>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          كافة مشاريع تطوير الويب المنفذة عبر فريقنا تتضمن تفعيل ضغط Brotli التلقائي، تخزين الـ Cache الهرمي، والتأكد من انعدام ثغرات Cross-Site Scripting (XSS) ومطابقة متطلبات WCAG 2.1.
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 6. الأتمتة وتطوير البوتات: محاكي الـ Webhooks
// ==========================================
export const ToolAutomationBots: React.FC<ToolProps> = () => {
  const [platform, setPlatform] = useState<'telegram' | 'discord' | 'custom'>('telegram');
  const [msgTitle, setMsgTitle] = useState('تنبيه أمني: رصد محاولة دخول جديدة');
  const [copied, setCopied] = useState(false);

  const payloads = {
    telegram: JSON.stringify({
      chat_id: "-1002938491823",
      text: `🚨 *K2 BlackX Alert System*\n\n📌 *الحدث:* ${msgTitle}\n🕒 *التوقيت:* ${new Date().toLocaleTimeString('ar-SA')}\n🔒 *البروتوكول:* Blocked via Firewall rule #441`,
      parse_mode: "Markdown"
    }, null, 2),
    discord: JSON.stringify({
      embeds: [{
        title: msgTitle,
        description: "تم رصد الحدث ومعالجته آلياً عبر بوت الأتمتة المخصص.",
        color: 3066993,
        fields: [
          { name: "الحالة", value: "محمي بنجاح [OK]", inline: true },
          { name: "Node", value: "Cluster-01-EU", inline: true }
        ]
      }]
    }, null, 2),
    custom: JSON.stringify({
      event: "webhook_trigger",
      payload: {
        title: msgTitle,
        timestamp: Date.now(),
        status: "success"
      }
    }, null, 2)
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(payloads[platform]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['telegram', 'discord', 'custom'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
              platform === p 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
            }`}
          >
            {p === 'telegram' ? 'تيليغرام بوت' : p === 'discord' ? 'ديسكورد Webhook' : 'REST JSON'}
          </button>
        ))}
      </div>

      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
        <label className="text-xs text-slate-300 font-bold block">عنوان الإشعار أو الرسالة:</label>
        <input
          type="text"
          value={msgTitle}
          onChange={(e) => setMsgTitle(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
        />
      </div>

      <div className="p-3 bg-black border border-slate-800 rounded-xl space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-1.5">
          <span>Payload Body Preview:</span>
          <button
            onClick={handleCopy}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'تم النسخ!' : 'نسخ الـ JSON'}</span>
          </button>
        </div>
        <pre className="text-amber-300 overflow-x-auto text-[11px] leading-relaxed">
          {payloads[platform]}
        </pre>
      </div>
    </div>
  );
};

// ==========================================
// 7. الذكاء الاصطناعي: محاكي تشغيل الـ LLM محلياً
// ==========================================
export const ToolAILab: React.FC<ToolProps> = () => {
  const [model, setModel] = useState<'llama3' | 'mistral' | 'deepseek'>('llama3');
  const [prompt, setPrompt] = useState('حلل هذا التقرير الأمني واستخرج مؤشرات الاختراق دون الاتصال بالإنترنت');
  const [generating, setGenerating] = useState(false);
  const [output, setOutput] = useState<string>('');

  const modelSpecs = {
    llama3: { name: 'Llama-3-8B-Instruct (Local Offline)', vram: '6.2 GB', speed: '48 tok/s', quant: 'Q4_K_M' },
    mistral: { name: 'Mistral-7B-v0.3 (Air-Gapped)', vram: '5.8 GB', speed: '55 tok/s', quant: 'Q5_K_M' },
    deepseek: { name: 'DeepSeek-Coder-6.7B (Code Specialized)', vram: '5.2 GB', speed: '52 tok/s', quant: 'Q4_K_S' }
  };

  const handleRun = () => {
    setGenerating(true);
    setOutput('');
    setTimeout(() => {
      setGenerating(false);
      setOutput(`[AI Engine - Local Offline Inference Complete]:
1. تم فحص السجل المعطى دون أي تسريب بيانات للشبكة الخارجية (Zero Cloud Leakage).
2. تم استخراج 3 عناوين IP مشبوهة ذات نمط هجوم Brute-force متكرر.
3. التوصية: تطبيق قاعدة جدار حماية لمنع المنفذ 22 مع تقييد الـ Bastion Host.`);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(['llama3', 'mistral', 'deepseek'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setModel(m)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              model === m 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
            }`}
          >
            {modelSpecs[m].name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
        <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-500 block">VRAM المطلوب</span>
          <span className="text-white font-bold">{modelSpecs[model].vram}</span>
        </div>
        <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-500 block">سرعة التوليد</span>
          <span className="text-emerald-400 font-bold">{modelSpecs[model].speed}</span>
        </div>
        <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-500 block">صيغة التكميم</span>
          <span className="text-rose-300 font-bold">{modelSpecs[model].quant}</span>
        </div>
      </div>

      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
          />
          <button
            onClick={handleRun}
            disabled={generating}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
          >
            {generating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
            <span>{generating ? 'معالجة...' : 'تشغيل النموذج'}</span>
          </button>
        </div>
      </div>

      {output && (
        <div className="p-3 bg-black border border-slate-800 rounded-xl font-mono text-xs text-rose-300 whitespace-pre-wrap leading-relaxed">
          {output}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 8. تحليل ومعالجة البيانات: محاكي OCR ومحول JSON
// ==========================================
export const ToolDataAnalytics: React.FC<ToolProps> = () => {
  const [rawText, setRawText] = useState(`فاتورة رقم: 2026-INV-992
العميل: مؤسسة التقنية المتقدمة
التاريخ: 2026-09-14
الإجمالي: 4,500.00 ر.س
الضريبة: 675.00 ر.س`);
  const [jsonOutput, setJsonOutput] = useState<string>('');

  const handleParse = () => {
    const lines = rawText.split('\n');
    const result: Record<string, string> = {};
    lines.forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        result[parts[0].trim()] = parts.slice(1).join(':').trim();
      }
    });
    setJsonOutput(JSON.stringify(result, null, 2));
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
        <label className="text-xs font-bold text-slate-300 block">نص ممسوح ضوئياً (OCR Extracted Text):</label>
        <textarea
          rows={3}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleParse}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition"
        >
          تحويل إلى بيانات مهيكلة (JSON Converter)
        </button>
      </div>

      {jsonOutput && (
        <div className="p-3 bg-black border border-slate-800 rounded-xl font-mono text-xs text-indigo-300">
          <span className="text-slate-400 block mb-1 text-[11px]">Structured Output (Ready for Database / Excel):</span>
          <pre className="overflow-x-auto text-[11px]">{jsonOutput}</pre>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 9. الدعم الفني: فاحص الشبكة ومولد تذاكر الدعم
// ==========================================
export const ToolRemoteSupport: React.FC<ToolProps> = () => {
  const [issue, setIssue] = useState('انقطاع خدمة الـ VPN وبطء استجابة خادم الملفات الداخلي');
  const [priority, setPriority] = useState<'عالي' | 'متوسط' | 'حرج'>('عالي');
  const [ticketGenerated, setTicketGenerated] = useState(false);

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <span className="text-xs font-bold text-slate-200 block">تشخيص المشاكل وتوليد تذكرة دعم فني فورية (Ticket Dispatch):</span>
        
        <div className="flex gap-2">
          {(['عالي', 'متوسط', 'حرج'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPriority(p)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                priority === p 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' 
                  : 'bg-slate-950 text-slate-400 border border-slate-800'
              }`}
            >
              أولوية: {p}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
          placeholder="وصف العطل التقني..."
        />

        <button
          onClick={() => setTicketGenerated(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition"
        >
          توليد تقرير التشخيص الفني
        </button>
      </div>

      {ticketGenerated && (
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono space-y-1 text-slate-300">
          <div className="flex items-center justify-between text-blue-400 border-b border-slate-800 pb-1">
            <span>TICKET #K2X-SUP-8821</span>
            <span className="text-emerald-400">STATUS: QUEUED</span>
          </div>
          <p className="text-slate-400 text-[11px] pt-1">
            تم تجهيز المعطيات: الأولوية [{priority}] • التشخيص المبدئي: فحص تكوين الـ Routing وجدار الحماية.
          </p>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 10. استعادة البيانات: محاكي الفحص والتطهير العسكري
// ==========================================
export const ToolDataRecovery: React.FC<ToolProps> = () => {
  const [wipePasses, setWipePasses] = useState(3);
  const [wiping, setWiping] = useState(false);
  const [progress, setProgress] = useState(0);

  const startWipe = () => {
    setWiping(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setWiping(false);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-200">محاكي التطهير والمسح الآمن المعتمد (DoD 5220.22-M Wipe):</span>
          <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono">MIL-SPEC</span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          إتلاف نهائي للبيانات لمنع استرجاعها بواسطة أدوات التحليل الجنائي، مع تطبيق المعيار العسكري الأمريكي (3-Pass Zero & Random Fill).
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={startWipe}
            disabled={wiping}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5 disabled:opacity-50"
          >
            {wiping ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{wiping ? `جاري المسح ${progress}%` : 'بدء محاكاة التطهير الآمن'}</span>
          </button>
          <span className="text-xs font-mono text-slate-400">{wipePasses} Passes Completed</span>
        </div>

        {progress > 0 && (
          <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
            <div className="bg-red-500 h-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>

      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1">
        <span className="text-emerald-400 font-bold block">قدرات استعادة البيانات المتاحة لدى K2 BlackX:</span>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          استرجاع الأقراص التالفة منطقياً وفيزيائياً (SATA, NVMe, RAID 0/1/5, USB)، واستخراج البيانات من أنظمة الملفات NTFS, EXT4, APFS, Btrfs بنسبة نجاح تفوق 90%.
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 11. الهاردوير وإنترنت الأشياء: حاسبة المقاومات ومخطط GPIO
// ==========================================
export const ToolHardwareIoT: React.FC<ToolProps> = () => {
  const [band1, setBand1] = useState(1); // Brown = 1
  const [band2, setBand2] = useState(0); // Black = 0
  const [multiplier, setMultiplier] = useState(100); // Red = 10^2 = 100

  const resistance = (band1 * 10 + band2) * multiplier;
  const resistanceFormatted = resistance >= 1000 ? `${(resistance / 1000).toFixed(1)} kΩ` : `${resistance} Ω`;

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-200">حاسبة ألوان المقاومات الإلكترونية (Resistor Code Lab):</span>
          <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded font-mono">ESP32 / Arduino</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">الحلقة 1:</label>
            <select
              value={band1}
              onChange={(e) => setBand1(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded p-1.5 text-xs text-white"
            >
              <option value={1}>بني (1)</option>
              <option value={2}>أحمر (2)</option>
              <option value={4}>أصفر (4)</option>
              <option value={5}>أخضر (5)</option>
            </select>
          </div>
          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">الحلقة 2:</label>
            <select
              value={band2}
              onChange={(e) => setBand2(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded p-1.5 text-xs text-white"
            >
              <option value={0}>أسود (0)</option>
              <option value={2}>أحمر (2)</option>
              <option value={7}>بنفسجي (7)</option>
            </select>
          </div>
          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">المضاعف:</label>
            <select
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded p-1.5 text-xs text-white"
            >
              <option value={10}>× 10 (بني)</option>
              <option value={100}>× 100 (أحمر)</option>
              <option value={1000}>× 1k (برتقالي)</option>
              <option value={10000}>× 10k (أصفر)</option>
            </select>
          </div>
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between font-mono">
          <span className="text-xs text-slate-400">قيمة المقاومة المحسوبة:</span>
          <span className="text-lg font-black text-orange-400">{resistanceFormatted} ±5%</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 12. المشاريع التقنية والتعليمية: مخطط المعمارية
// ==========================================
export const ToolTechProjects: React.FC<ToolProps> = () => {
  const [projectType, setProjectType] = useState<'iot' | 'ai' | 'web'>('ai');

  const blueprints = {
    ai: {
      title: 'نظام تشخيص طبي ذكي مبني بنماذج محلية',
      stack: ['FastAPI (Python)', 'React + Tailwind', 'PyTorch / ONNX', 'SQLite'],
      duration: '10 - 14 يوماً',
      docs: ['مخطط UML كاملاً', 'كود نظيف مع الشرح', 'تقرير أكاديمي 30 صفحة']
    },
    iot: {
      title: 'محطة مراقبة بيئية ذكية متصلة بالسحاب عبر ESP32',
      stack: ['C++ (PlatformIO)', 'MQTT Broker', 'Node-RED Dashboard', 'InfluxDB'],
      duration: '7 - 10 أيام',
      docs: ['مخطط الدوائر Fritzing', 'كود الفيرموير المصدري', 'فيديو شرح ومناقشة']
    },
    web: {
      title: 'منصة خدمات متكاملة مع نظام صلاحيات ودفع إلكتروني',
      stack: ['Next.js 14', 'PostgreSQL / Prisma', 'Tailwind CSS', 'Docker'],
      duration: '12 - 16 يوماً',
      docs: ['توثيق Swagger API', 'توزيع عبر السحاب', 'شرح خطوة بخطوة']
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['ai', 'iot', 'web'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setProjectType(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              projectType === t 
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' 
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
            }`}
          >
            {t === 'ai' ? 'مشروع ذكاء اصطناعي' : t === 'iot' ? 'مشروع هاردوير وإنترنت أشياء' : 'منصة ويب متكاملة'}
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white font-mono">{blueprints[projectType].title}</span>
          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">
            {blueprints[projectType].duration}
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-[11px] text-slate-400 block">المكدس البرمجي الموصى به:</span>
          <div className="flex flex-wrap gap-1.5">
            {blueprints[projectType].stack.map((s, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[11px] font-mono text-purple-300">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1 pt-1 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-400 block">المخرجات المعتمدة للتسليم والمناقشة:</span>
          <ul className="text-xs text-slate-300 space-y-1">
            {blueprints[projectType].docs.map((d, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 13. الخدمات الأكاديمية: مولّد التوثيق المعتمد
// ==========================================
export const ToolAcademicResearch: React.FC<ToolProps> = () => {
  const [style, setStyle] = useState<'apa' | 'ieee'>('apa');
  const [author, setAuthor] = useState('Al-Ahmadi, K., & Smith, J.');
  const [title, setTitle] = useState('Advanced Zero-Trust Architecture in Autonomous Cyber Defense');
  const [year, setYear] = useState('2026');
  const [copied, setCopied] = useState(false);

  const citation = style === 'apa'
    ? `${author} (${year}). ${title}. Journal of Cybersecurity and Forensics, 12(3), 145-162.`
    : `[1] ${author}, "${title}," J. Cybersecur. Forensics, vol. 12, no. 3, pp. 145-162, ${year}.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-200">مولّد التوثيق والمراجع الأكاديمية المعتمدة:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setStyle('apa')}
              className={`px-2.5 py-1 rounded text-xs font-bold ${style === 'apa' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-950 text-slate-400'}`}
            >
              APA 7th
            </button>
            <button
              onClick={() => setStyle('ieee')}
              className={`px-2.5 py-1 rounded text-xs font-bold ${style === 'ieee' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-950 text-slate-400'}`}
            >
              IEEE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
            placeholder="اسم الباحث"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
            placeholder="عنوان الورقة"
          />
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
            placeholder="السنة"
          />
        </div>

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>صيغة التوثيق الجاهزة للاقتباس:</span>
            <button onClick={copyCitation} className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono text-xs">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ التوثيق'}</span>
            </button>
          </div>
          <p className="font-mono text-xs text-amber-200 select-all leading-relaxed">{citation}</p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 14. التصميم والهوية البصرية: مختبر التباين السيبراني
// ==========================================
export const ToolDesignBranding: React.FC<ToolProps> = () => {
  const brandPalette = [
    { name: 'Obsidian Matte', hex: '#020408', desc: 'خلفية السيرفرات الداكنة' },
    { name: 'Titanium Grey', hex: '#555a64', desc: 'معدن الهيكل والدروع' },
    { name: 'Cyber Gold', hex: '#e5b967', desc: 'رمز التميز والاختراق' },
    { name: 'Emerald Shield', hex: '#10b981', desc: 'جاهزية الدفاع والحماية' }
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <span className="text-xs font-bold text-slate-200 block">لوحة الألوان السيبرانية المعتمدة لـ K2 BlackX:</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {brandPalette.map((c, idx) => (
            <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-col gap-2">
              <div className="h-10 rounded-lg border border-slate-800 shadow-inner" style={{ backgroundColor: c.hex }} />
              <div>
                <span className="text-xs font-bold text-white block">{c.name}</span>
                <span className="text-[10px] font-mono text-slate-400 block">{c.hex}</span>
                <span className="text-[9px] text-slate-500 block mt-0.5">{c.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 15. التدريب وتطوير المهارات: فاحص الجاهزية السيبرانية
// ==========================================
export const ToolTrainingSkills: React.FC<ToolProps> = () => {
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [scoreCalculated, setScoreCalculated] = useState(false);

  const calculateBenchmark = () => {
    setScoreCalculated(true);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <span className="text-xs font-bold text-slate-200 block">اختبار تقييم الجاهزية والمهارات الفنية (Skill Assessment):</span>

        <div className="space-y-2 text-xs">
          <p className="text-slate-300 font-medium">1. ما الغرض الأساسي من استخدام شهادات التجزئة (Hash Functions) في التحليل الجنائي؟</p>
          <div className="flex flex-col gap-1.5">
            {[
              { id: 'a', text: 'إثبات سلامة وعدم تغيير الدليل الرقمي (Integrity Verification)' },
              { id: 'b', text: 'زيادة سرعة نقل الملفات عبر الشبكة' },
              { id: 'c', text: 'إخفاء محتويات القرص عن الفاحصين' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setQ1(opt.id)}
                className={`p-2 rounded text-right transition ${q1 === opt.id ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-950 text-slate-400 border border-slate-800'}`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-xs pt-2">
          <p className="text-slate-300 font-medium">2. أي أمر في Kali Linux يُستخدم لتنفيذ فحص المنافذ الخفي دون إكمال مصافحة TCP؟</p>
          <div className="flex flex-col gap-1.5">
            {[
              { id: 'a', text: 'nmap -sS <target> (SYN Stealth Scan)' },
              { id: 'b', text: 'ping -c 4 <target>' },
              { id: 'c', text: 'traceroute <target>' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setQ2(opt.id)}
                className={`p-2 rounded text-right transition ${q2 === opt.id ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-950 text-slate-400 border border-slate-800'}`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={calculateBenchmark}
          disabled={!q1 || !q2}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition disabled:opacity-50"
        >
          حساب مستوى الجاهزية الفنية
        </button>
      </div>

      {scoreCalculated && (
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="font-bold">المستوى الفني: متقدم / احترافي (Tier 2 Ready)</span>
            <span className="font-mono bg-emerald-500/20 px-2 py-0.5 rounded">100% Score</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
            إجاباتك دقيقة وتتوافق مع المعايير المهنية. يوصى بالانضمام للمسارات المتقدمة: تدريب فحص الاختراق المتقدم واختبار شبكات الـ Active Directory.
          </p>
        </div>
      )}
    </div>
  );
};
