import { SectionData } from '../types';

export const SECTIONS_DATA: SectionData[] = [
  {
    id: 1,
    title: 'الأمن السيبراني',
    subtitle: 'Cybersecurity & Defense',
    iconName: 'ShieldCheck',
    color: {
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/10',
      gradient: 'from-emerald-500/20 to-teal-500/5',
    },
    summary: 'حماية متقدمة للبنية التحتية والمواقع والبيانات الحساسة، واكتشاف الثغرات وتأمين الأصول الرقمية بأحدث المعايير الدولية.',
    featuredTool: {
      name: 'فاحص الثغرات وحساب التشفير',
      type: 'Security Scanner',
      description: 'أداة فورية لفحص قوة كلمات المرور وتحليل روابط المواقع وتوليد التجزئات الأمنية (Hashes).'
    },
    services: [
      {
        id: 's1-1',
        sectionId: 1,
        title: 'البرمجة المتخصصة في الأمن السيبراني',
        description: 'تطوير برمجيات وأكواد أمنية مخصصة للتحقق من الصلاحيات والتشفير الدفاعي ورصد الاختراقات.',
        deliverables: ['أكواد تشفير معيارية', 'سكربتات حماية متقدمة', 'فحص تدفق البيانات الأمنية'],
        tools: ['Python', 'C/C++', 'Go', 'Cryptography Libs'],
        duration: '3 - 7 أيام',
        badge: 'تخصص دقيق'
      },
      {
        id: 's1-2',
        sectionId: 1,
        title: 'أدوات وحلول الأمن السيبراني',
        description: 'بناء وتخصيص منظومات جدار الحماية (Firewall) وأنظمة كشف التسلل (IDS/IPS) وSIEM لمؤسستك.',
        deliverables: ['تثبيت وإعداد جدران الحماية', 'نظام كشف التسلل السلوكي', 'لوحة مراقبة التهديدات'],
        tools: ['Suricata', 'Snort', 'Wazuh', 'iptables'],
        duration: '2 - 5 أيام',
        badge: 'حلول مؤسسية'
      },
      {
        id: 's1-3',
        sectionId: 1,
        title: 'فحص أمان المواقع الإلكترونية',
        description: 'اختبار اختراق أخلاقي شامل (VAPT) للمواقع وتطبيقات الويب وفق معايير OWASP Top 10.',
        deliverables: ['تقرير ثغرات تفصيلي ومصنف', 'خطة معالجة وسد الثغرات', 'إعادة اختبار للتأكد من المعالجة'],
        tools: ['Burp Suite', 'OWASP ZAP', 'Nikto', 'Nmap'],
        duration: '1 - 3 أيام',
        badge: 'الأكثر طلباً'
      },
      {
        id: 's1-4',
        sectionId: 1,
        title: 'تحليل البرمجيات والملفات المشبوهة',
        description: 'تحليل البرمجيات الخبيثة (Malware Analysis) الساكن والديناميكي في بيئة معزولة (Sandbox).',
        deliverables: ['تقرير سلوك الملف التنفيذي', 'استخراج مؤشرات الاختراق (IoCs)', 'توصيات التطهير'],
        tools: ['Ghidra', 'x64dbg', 'Cuckoo Sandbox', 'YARA'],
        duration: '2 - 4 أيام',
        badge: 'تحليل معمق'
      },
      {
        id: 's1-5',
        sectionId: 1,
        title: 'تأمين الحسابات والمواقع والخدمات الإلكترونية',
        description: 'تطبيق التحقق بخطوتين (2FA/MFA)، تقوية كلمات المرور، وتأمين لوحات التحكم والخوادم الحساسة.',
        deliverables: ['تفعيل المصادقة متعددة العوامل', 'سياسات الصلاحيات الأقل (Least Privilege)', 'تأمين اتصالات SSL/TLS'],
        tools: ['YubiKey', 'MFA Protocols', 'Certbot', 'Hardening Guides'],
        duration: '1 - 2 يوم',
        badge: 'حماية سريعة'
      },
      {
        id: 's1-6',
        sectionId: 1,
        title: 'التوعية والحماية من الابتزاز الإلكتروني',
        description: 'جلسات استشارية تقنية سرية لإيقاف التهديدات الرقمية وسحب البيانات المسربة وحماية الضحايا قانونياً وتقنياً.',
        deliverables: ['استجابة سريعة وسرية تامة', 'إزالة أو تأمين المحتوى المسرب', 'تأمين الهوية الرقمية'],
        tools: ['OSINT Defense', 'Privacy Shield', 'Legal Compliance'],
        duration: 'فوري / طارئ',
        badge: 'سرية مطلقة'
      }
    ]
  },
  {
    id: 2,
    title: 'التحليل الجنائي الرقمي والأدلة الرقمية',
    subtitle: 'Digital Forensics & Incident Response',
    iconName: 'SearchCheck',
    color: {
      bg: 'bg-cyan-950/40',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/10',
      gradient: 'from-cyan-500/20 to-blue-500/5',
    },
    summary: 'جمع وفحص وتحليل الأدلة الرقمية من الأجهزة والشبكات والملفات وفق منهجية معتمدة قانونياً وسلسلة حيازة موثقة.',
    featuredTool: {
      name: 'محلل الميتاداتا والتجزئة الرقمية',
      type: 'Forensic Inspector',
      description: 'أداة قراءة البيانات الوصفية EXIF وفحص التجزئة الجنائية MD5/SHA-256 للملفات.'
    },
    services: [
      {
        id: 's2-1',
        sectionId: 2,
        title: 'التحليل الجنائي الرقمي',
        description: 'استخراج وفحص الأدلة من الحواسيب، الخوادم، ووسائط التخزين لتحديد مسار الأحداث وزمن وقوعها.',
        deliverables: ['صورة جنائية طبق الأصل (Bit-stream Image)', 'جدول زمني للأحداث (Timeline Analysis)', 'تقرير فني معتمد'],
        tools: ['Autopsy', 'FTK Imager', 'EnCase', 'Sleuth Kit'],
        duration: '3 - 7 أيام',
        badge: 'معتمد'
      },
      {
        id: 's2-2',
        sectionId: 2,
        title: 'تحليل الأدلة الرقمية',
        description: 'فحص ملفات النظام، السجلات (System Logs)، وذاكرة الوصول العشوائي (RAM) للكشف عن التلاعب.',
        deliverables: ['استخراج سجلات الأحداث المشفرة', 'فحص ذاكرة الرام الحية', 'توثيق سلسلة الحيازة'],
        tools: ['Volatility', 'LogParser', 'Sysinternals'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's2-3',
        sectionId: 2,
        title: 'تحليل الصور والملفات الرقمية',
        description: 'فحص التزييف الرقمي للصور، وتأكيد صحتها، واستكشاف ما إذا كانت معدلة ببرامج التصميم أو الذكاء الاصطناعي.',
        deliverables: ['تحليل مستوى الخطأ (ELA)', 'كشف التعديلات المخفية', 'مطابقة البكسلات والخوارزميات'],
        tools: ['FotoForensics', 'GIMP Forensic', 'JPEGsnoop'],
        duration: '1 - 3 أيام'
      },
      {
        id: 's2-4',
        sectionId: 2,
        title: 'تحليل البيانات الوصفية (Metadata)',
        description: 'استخراج الميتاداتا الخفية كإحداثيات GPS، وتاريخ الإنشاء الأصلي، ونوع الجهاز المستخدم من كافة الملفات.',
        deliverables: ['استخراج كافة حقول EXIF/XMP', 'تحليل توقيعات الكاميرات والأجهزة', 'تقرير ميتاداتا شامل'],
        tools: ['ExifTool', 'Mat2', 'FOCA'],
        duration: '1 يوم'
      },
      {
        id: 's2-5',
        sectionId: 2,
        title: 'تحليل البريد الإلكتروني',
        description: 'فحص ترويسة الرسائل (Email Headers)، وتتبع خوادم الإرسال الأصلية، وكشف رسائل التصيد والاحتيال.',
        deliverables: ['تتبع IP المرسل الحقيقي', 'فحص سجلات SPF/DKIM/DMARC', 'تحليل الروابط والمرفقات في البريد'],
        tools: ['EmailHeaderAnalyzer', 'MXToolbox', 'Wireshark'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's2-6',
        sectionId: 2,
        title: 'تحليل الروابط والملفات المشبوهة',
        description: 'فحص الروابط المفخخة والملفات المشكوك بأمرها لمعرفة السيرفرات المتصلة بها ونوع الثغرة المستغلة.',
        deliverables: ['تفكيك الروابط والتحويلات الخفية', 'فحص محتوى المرفقات بأمان', 'تقرير فحص التهديد'],
        tools: ['VirusTotal API', 'URLScan.io', 'Any.run'],
        duration: '1 يوم'
      },
      {
        id: 's2-7',
        sectionId: 2,
        title: 'تحليل الآثار الرقمية بشكل قانوني',
        description: 'توثيق وحفظ الأدلة الرقمية وفق الأصول القانونية المعتمدة لتقديمها أمام المحاكم والجهات الرسمية.',
        deliverables: ['سلسلة حيازة جنائية (Chain of Custody)', 'شهادة مطابقة الهاش الرقمي', 'محضر فحص فني قانوني'],
        tools: ['Chain-of-Custody Protocols', 'Cryptographic Hashing'],
        duration: '2 - 4 أيام'
      },
      {
        id: 's2-8',
        sectionId: 2,
        title: 'إعداد تقارير الأدلة الرقمية',
        description: 'صياغة تقارير جنائية تقنية واضحة ومقنعة تشرح المسار الفني والنتائج بأسلوب يفهمه القضاة والمحامون.',
        deliverables: ['تقرير رسمي معتمد', 'ملخص تنفيذي غير تقني', 'ملاحق الأدلة التقنية المرجعية'],
        tools: ['Forensic Reporting Standards', 'ISO/IEC 27037'],
        duration: '2 - 3 أيام',
        badge: 'توثيق رسمي'
      }
    ]
  },
  {
    id: 3,
    title: 'أنظمة Linux وKali Linux',
    subtitle: 'Linux Systems & Kali Ecosystem',
    iconName: 'Terminal',
    color: {
      bg: 'bg-indigo-950/40',
      border: 'border-indigo-500/30',
      text: 'text-indigo-400',
      glow: 'shadow-indigo-500/10',
      gradient: 'from-indigo-500/20 to-blue-500/5',
    },
    summary: 'تهيئة وتخصيص توزيعات Linux للاستخدامات الدفاعية والهجومية والأكاديمية، وإعداد معامل الاختراق الأخلاقي الافتراضية.',
    featuredTool: {
      name: 'محاكي أوامر اللينكس ومعجم كالي',
      type: 'Terminal Helper',
      description: 'دليل أوامر سريع وتكوين حزم كالي لينكس الأساسية للباحثين والمطورين.'
    },
    services: [
      {
        id: 's3-1',
        sectionId: 3,
        title: 'تنصيب وتهيئة Kali Linux',
        description: 'تثبيت Kali Linux كنظام أساسي، أو كنظام وهمي (Virtual Machine / WSL)، وضبط التحديثات والمستودعات الرسمية.',
        deliverables: ['تثبيت نظيف ومحدث', 'إعداد كروت الشبكة اللاسلكية بنمط المراقبة (Monitor Mode)', 'ضبط بيئة العرض والمظهر'],
        tools: ['VirtualBox', 'VMware Workstation', 'Kali Linux', 'WSL2'],
        duration: '1 يوم'
      },
      {
        id: 's3-2',
        sectionId: 3,
        title: 'تنصيب وتهيئة أدوات الأمن السيبراني',
        description: 'تثبيت وتحديث حزم الأدوات المتقدمة مثل Metasploit, Nmap, Wireshark, Burp Suite Pro وضبط مساراتها.',
        deliverables: ['حزم أدوات كاملة بدون أخطاء الاعتماديات', 'إعداد قواعد بيانات الأدوات', 'أكواد تشغيل سريعة'],
        tools: ['APT', 'Git Repositories', 'Python Virtualenvs', 'Docker'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's3-3',
        sectionId: 3,
        title: 'إعداد بيئات العمل الأمنية',
        description: 'بناء بيئة عمل معزولة ومحمية للعمليات الأمنية مع بروكسيات وشبكات VPN مخصصة لمنع تسريب الهوية.',
        deliverables: ['تأمين نظام التشغيل بالكامل', 'تشفير الأقراص بـ LUKS', 'عزل المنافذ والاتصالات'],
        tools: ['Tor', 'WireGuard', 'Proxychains', 'UFW / iptables'],
        duration: '2 - 3 أيام'
      },
      {
        id: 's3-4',
        sectionId: 3,
        title: 'إعداد مختبرات الأمن السيبراني للتدريب',
        description: 'بناء مختبرات افتراضية قابلة للاختراق (Vulnerable Labs) مثل DVWA, Metasploitable, Active Directory Lab.',
        deliverables: ['بيئة تدريب كاملة وجاهزة', 'سيناريوهات اختراق ودفاع تدريبية', 'دليل حل وإرشادات'],
        tools: ['Active Directory Lab', 'Metasploitable', 'Docker CTFs', 'Proxmox'],
        duration: '2 - 5 أيام',
        badge: 'تدريب عملي'
      },
      {
        id: 's3-5',
        sectionId: 3,
        title: 'تهيئة بيئات Linux للاستخدامات التقنية',
        description: 'تجهيز خوادم Ubuntu, Debian, Rocky Linux لتشغيل السيرفرات وقواعد البيانات وتطبيقات الإنتاج بكفاءة قصوى.',
        deliverables: ['ضبط إدارة الموارد والأداء', 'إعداد جدران الحماية ومراقبة السيرفر', 'إعداد النسخ الاحتياطي التلقائي'],
        tools: ['Ubuntu Server', 'Debian', 'Nginx', 'Systemd Services'],
        duration: '1 - 3 أيام'
      }
    ]
  },
  {
    id: 4,
    title: 'البرمجة وتطوير البرمجيات',
    subtitle: 'Software Engineering & Scripting',
    iconName: 'Code2',
    color: {
      bg: 'bg-violet-950/40',
      border: 'border-violet-500/30',
      text: 'text-violet-400',
      glow: 'shadow-violet-500/10',
      gradient: 'from-violet-500/20 to-purple-500/5',
    },
    summary: 'برمجة وتطوير حلول برمجية حديثة متعددة المنصات، وبناء سكريبتات لأتمتة المهام وتصحيح المشاكل البرمجية المعقدة.',
    services: [
      {
        id: 's4-1',
        sectionId: 4,
        title: 'تطوير التطبيقات والبرمجيات متعددة المنصات',
        description: 'بناء تطبيقات قوية تعمل على أنظمة Windows, macOS, Linux, Android و iOS باستخدام أحدث الأطر الحديثة.',
        deliverables: ['تطبيق قابل للتثبيت', 'كود مصدري نظيف وموثق', 'واجهة مستخدم عصرية وسريعة'],
        tools: ['React Native', 'Electron', 'Flutter', 'Next.js', 'Node.js'],
        duration: '7 - 21 يوم'
      },
      {
        id: 's4-2',
        sectionId: 4,
        title: 'برمجة الأدوات والسكريبتات المخصصة',
        description: 'كتابة سكريبتات متخصصة لتنفيذ مهام محددة كاستخراج البيانات، المعالجة التلقائية، والتفاعل مع الملفات.',
        deliverables: ['سكربت منفذ بنقرة واحدة', 'دليل الاستخدام السريع', 'دعم الصيغ المختلفة'],
        tools: ['Python', 'Bash / Shell', 'PowerShell', 'Node.js'],
        duration: '1 - 4 أيام',
        badge: 'سرعة ودقة'
      },
      {
        id: 's4-3',
        sectionId: 4,
        title: 'تصحيح أخطاء البرامج',
        description: 'تنقيح الأكواد (Debugging)، إصلاح المشكلات البرمجية، تسريع الأداء، وسد الثغرات المنطقية.',
        deliverables: ['تحديد وإصلاح الخلل الجذري', 'اختبار شامل للكود بعد التصحيح', 'تقرير سبب المشكلة وتفادي تكرارها'],
        tools: ['GDB', 'Chrome DevTools', 'Postman', 'Sentry'],
        duration: '1 - 3 أيام'
      },
      {
        id: 's4-4',
        sectionId: 4,
        title: 'صيانة وتطوير المشاريع البرمجية القائمة',
        description: 'تحديث وترقية المشاريع القديمة (Legacy Code) وإضافة ميزات برمجية جديدة دون التأثير على استقرار النظام.',
        deliverables: ['تحديث المكتبات والاعتماديات', 'إعادة هيكلة الكود (Refactoring)', 'توثيق الإضافات الجديدة'],
        tools: ['Git', 'CI/CD Pipelines', 'Docker', 'Modern Frameworks'],
        duration: '3 - 10 أيام'
      },
      {
        id: 's4-5',
        sectionId: 4,
        title: 'تطوير الحلول البرمجية المخصصة',
        description: 'ابتكار وبناء أنظمة برمجية مصممة خصيصاً لتلبية احتياج إداري أو تقني فريد في عملك أو مشروعك.',
        deliverables: ['تصميم معماري متكامل', 'تطبيق ويب أو سطح مكتب', 'دعم فني وتدريب'],
        tools: ['PostgreSQL', 'Express', 'React', 'FastAPI'],
        duration: '10 - 30 يوم'
      }
    ]
  },
  {
    id: 5,
    title: 'تصميم وتطوير المواقع والخدمات الإلكترونية',
    subtitle: 'Web Development & Cloud Hosting',
    iconName: 'Globe',
    color: {
      bg: 'bg-blue-950/40',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/10',
      gradient: 'from-blue-500/20 to-sky-500/5',
    },
    summary: 'إنشاء وتطوير مواقع احترافية ومتاجر متكاملة مع خدمات الاستضافة السحابية وتأمين وسرعة فائقة وفق أحدث المقاييس.',
    services: [
      {
        id: 's5-1',
        sectionId: 5,
        title: 'تصميم وتطوير المواقع الإلكترونية',
        description: 'مواقع تعريفية، ومواقع شركات، وبوابات أعمال بتصميم متجاوب وسريع ومتوافق مع كافة مقاسات الشاشات.',
        deliverables: ['تصميم عصري متجاوب بالكامل', 'لوحة تحكم سهلة لإدارة المحتوى', 'توافق مع محركات البحث SEO'],
        tools: ['React', 'Next.js', 'Tailwind CSS', 'WordPress Headless'],
        duration: '4 - 14 يوم'
      },
      {
        id: 's5-2',
        sectionId: 5,
        title: 'إنشاء المتاجر الإلكترونية',
        description: 'متاجر تجارة إلكترونية كاملة تدعم بوابات الدفع الإلكتروني، سلة المشتريات، وتتبع الشحنات.',
        deliverables: ['ربط بوابات الدفع', 'نظام إدارة المخزون والطلبات', 'تصميم واجهة متجر جذابة'],
        tools: ['WooCommerce', 'Shopify', 'Stripe', 'PayTabs / Moyasar'],
        duration: '7 - 18 يوم'
      },
      {
        id: 's5-3',
        sectionId: 5,
        title: 'تطوير الخدمات والأنظمة الإلكترونية',
        description: 'بوابات للعملاء، أنظمة حجز المواعيد، وبوابات الاشتراكات الرقمية السحابية المخصصة.',
        deliverables: ['نظام تسجيل مستخدمين وصلاحيات', 'قاعدة بيانات سحابية متقدمة', 'إشعارات تلقائية عبر البريد'],
        tools: ['Node.js', 'PostgreSQL', 'Redis', 'Auth0 / Firebase Auth'],
        duration: '10 - 25 يوم'
      },
      {
        id: 's5-4',
        sectionId: 5,
        title: 'تحسين سرعة وأداء المواقع',
        description: 'تسريع زمن تحميل الصفحات، ضغط الصور والأكواد، وتحقيق أعلى النتائج في Google PageSpeed Insights.',
        deliverables: ['درجة أداء +90 على PageSpeed', 'تقليل استهلاك السيرفر', 'تحسين نقاط Core Web Vitals'],
        tools: ['Lighthouse', 'Cloudflare CDN', 'WebP Optimizer', 'Minification'],
        duration: '2 - 4 أيام'
      },
      {
        id: 's5-5',
        sectionId: 5,
        title: 'صيانة وتحديث المواقع',
        description: 'مراقبة استقرار الموقع دورياً، وتحديث القوالب والإضافات الأمنية وعلاج أي انقطاع فوري.',
        deliverables: ['فحص دوري 24/7', 'تحديثات أمنية مستمرة', 'إصلاح أي عطل طارئ'],
        tools: ['Uptime Kuma', 'Security Plugins', 'Version Control'],
        duration: 'شهري / مستمر'
      },
      {
        id: 's5-6',
        sectionId: 5,
        title: 'رفع ونشر المواقع على الاستضافة',
        description: 'نشر المواقع على استضافات VPS أو خوادم سحابية كـ AWS, Cloudflare, DigitalOcean وضبط شهادات SSL.',
        deliverables: ['تثبيت شهادة SSL مجانية', 'توجيه السجلات DNS', 'بيئة إنتاج مؤمنة ومستقرة'],
        tools: ['cPanel', 'Nginx', 'SSL Let\'s Encrypt', 'Cloudflare'],
        duration: '1 يوم'
      },
      {
        id: 's5-7',
        sectionId: 5,
        title: 'نقل المواقع بين الاستضافات',
        description: 'نقل موقعك وقواعد البيانات بالكامل إلى استضافة جديدة أو خادم أسرع بدون انقطاع الخدمة (Zero Downtime).',
        deliverables: ['نقل كامل لكافة الملفات وقواعد البيانات', 'اختبار الموقع قبل توجيه الدومين', 'بدون أي توقف للزوار'],
        tools: ['rsync', 'mysqldump', 'DNS Migration'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's5-8',
        sectionId: 5,
        title: 'النسخ الاحتياطي للمواقع واستعادتها',
        description: 'جدولة النسخ الاحتياطي السحابي التلقائي مع خطط تعافي سريعة عند حدوث أي طارئ أو هجوم.',
        deliverables: ['نسخ يومي/أسبوعي مشفر', 'تخزين خارجي سحابي منفصل', 'بروتوكول استرجاع خلال دقائق'],
        tools: ['S3 Buckets', 'Cron Jobs', 'Automated Backup Scripts'],
        duration: '1 يوم'
      },
      {
        id: 's5-9',
        sectionId: 5,
        title: 'حجز وتجهيز النطاقات والاستضافة',
        description: 'المساعدة في اختيار وحجز أفضل أسماء النطاقات (Domains) وحزم الاستضافة الملائمة لحجم مشروعك.',
        deliverables: ['حجز نطاق رسمي موثوق', 'ربط البريد الإلكتروني الرسمي', 'تأمين حماية الخصوصية WHOIS'],
        tools: ['DNS Manager', 'Google Workspace Email', 'Domain Registrars'],
        duration: '1 يوم'
      }
    ]
  },
  {
    id: 6,
    title: 'الأتمتة وربط الأنظمة',
    subtitle: 'Automation, APIs & Bot Systems',
    iconName: 'Cpu',
    color: {
      bg: 'bg-amber-950/40',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      glow: 'shadow-amber-500/10',
      gradient: 'from-amber-500/20 to-yellow-500/5',
    },
    summary: 'تقليل الجهد البشري عبر أتمتة الإجراءات المتكررة وربط البرامج ببعضها عن طريق واجهات البرمجة API وبوتات المراسلة.',
    services: [
      {
        id: 's6-1',
        sectionId: 6,
        title: 'أتمتة المهام والعمليات الرقمية (Automation)',
        description: 'بناء سيناريوهات أتمتة ذكية تنفذ الإجراءات آلياً بمجرد حدوث شرط معين بدون أي تدخل يدوي.',
        deliverables: ['مخطط مسار العمل الآلي', 'توصيل المنصات المتفرقة', 'سجلات تدقيق للمهام المنفذة'],
        tools: ['Make / Integromat', 'n8n', 'Zapier', 'Python Automation'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's6-2',
        sectionId: 6,
        title: 'ربط الأنظمة والخدمات عبر API',
        description: 'توصيل برنامجك الداخلي ببوابات الدفع، شركات الشحن، الرسائل النصية SMS، وبرامج المحاسبة.',
        deliverables: ['تكامل RESTful / Webhooks سلس', 'تشفير ومصادقة الطلبات', 'معالجة الاستثناءات والأخطاء'],
        tools: ['REST API', 'GraphQL', 'Webhooks', 'OAuth2'],
        duration: '2 - 6 أيام'
      },
      {
        id: 's6-3',
        sectionId: 6,
        title: 'تطوير التكاملات البرمجية',
        description: 'تطوير وسائط برمجية مخصصة (Custom Middleware) لتبادل البيانات وتحديث المخزون والطلبات فورياً.',
        deliverables: ['تزامن بيانات ثنائي الاتجاه', 'تأكيد سلامة البيانات', 'دليل وثائقي للـ API'],
        tools: ['Node.js', 'Python', 'Redis Pub/Sub'],
        duration: '3 - 7 أيام'
      },
      {
        id: 's6-4',
        sectionId: 6,
        title: 'تطوير بوتات Telegram / Discord',
        description: 'برمجة بوتات تفاعلية ذكية للرد على العملاء، وتوزيع التنبيهات، وإدارة المجموعات، وتنفيذ الأوامر التقنية.',
        deliverables: ['بوت متصل 24/7 على سيرفر سحابي', 'أزرار وقوائم تفاعلية', 'لوحة تحكم في البوت'],
        tools: ['python-telegram-bot', 'Discord.js', 'Telegraf', 'VPS Docker'],
        duration: '2 - 5 أيام',
        badge: 'شائع جداً'
      },
      {
        id: 's6-5',
        sectionId: 6,
        title: 'أتمتة العمليات المتكررة',
        description: 'أتمتة إرسال الفواتير، التقارير الأسبوعية، رسائل التذكير، وتحديث الجداول الإدارية بشكل مجدول.',
        deliverables: ['برامج مهام مجدولة (Cron Jobs)', 'قوالب بريد ورسائل ذكية', 'تنبيه فوري عند أي فشل'],
        tools: ['Celery', 'Cron', 'Google Apps Script'],
        duration: '1 - 3 أيام'
      }
    ]
  },
  {
    id: 7,
    title: 'الذكاء الاصطناعي والحلول الذكية',
    subtitle: 'AI Engineering & Smart Agents',
    iconName: 'Sparkles',
    color: {
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/10',
      gradient: 'from-emerald-500/20 to-teal-500/5',
    },
    summary: 'تسخير قدرات الذكاء الاصطناعي الحديث، وبناء شات بوت مخصص مدرب على بياناتك، وأدوات تعمل بدون اتصال بالإنترنت.',
    services: [
      {
        id: 's7-1',
        sectionId: 7,
        title: 'إنشاء Chatbots مخصصة',
        description: 'مساعد ذكي مدرب على كتالوج منتجاتك، أو مستندات شركتك لتقديم إجابات دقيقة واحترافية للعملاء طوال اليوم.',
        deliverables: ['شات بوت مدمج في موقعك أو واتساب', 'قاعدة معرفية مخصصة (RAG)', 'لوحة تحكم لمراجعة المحادثات'],
        tools: ['LangChain', 'LlamaIndex', 'Vector DBs (Chroma/Pinecone)', 'Gemini / OpenAI'],
        duration: '4 - 10 أيام',
        badge: 'حل حديث'
      },
      {
        id: 's7-2',
        sectionId: 7,
        title: 'أتمتة الأعمال باستخدام الذكاء الاصطناعي',
        description: 'فرز الإيميلات وتلخيص المقالات وكتابة الردود وصياغة التقارير اليومية بالاعتماد على نماذج اللغة الضخمة.',
        deliverables: ['سلسلة معالجة نصوص ذكية', 'تصنيف المستندات تلقائياً', 'توفير ساعات العمل اليومية'],
        tools: ['LLM Automation', 'FastAPI', 'JSON Schema Extraction'],
        duration: '3 - 7 أيام'
      },
      {
        id: 's7-3',
        sectionId: 7,
        title: 'تحليل البيانات باستخدام الذكاء الاصطناعي',
        description: 'كشف الأنماط الخفية والتنبؤ بالاتجاهات المستقبلية وتصنيف سلوك المستهلكين بالخوارزميات الذكية.',
        deliverables: ['نماذج تنبؤية مدربة', 'تقرير رؤى استثمارية وتقنية', 'رسومات بيانية تفاعلية'],
        tools: ['Scikit-learn', 'Pandas', 'XGBoost', 'Prophet'],
        duration: '4 - 9 أيام'
      },
      {
        id: 's7-4',
        sectionId: 7,
        title: 'دمج نماذج الذكاء الاصطناعي داخل التطبيقات والمواقع',
        description: 'إضافة ميزات توليد الصور، التلخيص، الترجمة الفورية، أو المساعد الصوتي داخل نظامك الحالي.',
        deliverables: ['ربط API فائق السرعة والأمان', 'واجهة مستخدم متناسقة', 'إدارة حد الاستهلاك والتكلفة'],
        tools: ['Google GenAI SDK', 'OpenAI API', 'Hugging Face'],
        duration: '3 - 8 أيام'
      },
      {
        id: 's7-5',
        sectionId: 7,
        title: 'إنشاء أدوات ذكاء اصطناعي مخصصة للأعمال',
        description: 'برامج وتطبيقات داخلية مخصصة لفرق العمل لحل مشكلات قطاعك بدقة وأمان تام.',
        deliverables: ['تطبيق ذكاء اصطناعي خاص بالمؤسسة', 'صلاحيات وصول ومصادقة للموظفين', 'أمان وحفظ لخصوصية بياناتك'],
        tools: ['Streamlit', 'Next.js', 'FastAPI', 'Docker'],
        duration: '7 - 15 يوم'
      },
      {
        id: 's7-6',
        sectionId: 7,
        title: 'توفير أدوات ذكاء اصطناعي تعمل دون إنترنت',
        description: 'تشغيل نماذج الذكاء الاصطناعي محلياً على أجهزتك وسيرفراتك الخاصة (Offline LLM) لسرية البيانات بنسبة 100%.',
        deliverables: ['تثبيت نماذج مفتوحة المصدر محلياً', 'عدم إرسال أي معلومة خارج شبكتك', 'واجهة دردشة وتحليل محلية سريعة'],
        tools: ['Ollama', 'Llama 3 / Mistral / DeepSeek', 'Local WebUI', 'GPU Acceleration'],
        duration: '2 - 4 أيام',
        badge: 'سرية وأمان 100%'
      }
    ]
  },
  {
    id: 8,
    title: 'تحليل ومعالجة البيانات',
    subtitle: 'Data Analytics & Database Architecture',
    iconName: 'BarChart3',
    color: {
      bg: 'bg-teal-950/40',
      border: 'border-teal-500/30',
      text: 'text-teal-400',
      glow: 'shadow-teal-500/10',
      gradient: 'from-teal-500/20 to-emerald-500/5',
    },
    summary: 'تنظيف البيانات، واستخراج النصوص بالـ OCR، وبناء لوحات التحكم (Dashboards) التفاعلية لدعم القرار وتصميم قواعد البيانات.',
    services: [
      {
        id: 's8-1',
        sectionId: 8,
        title: 'تحليل ومعالجة البيانات',
        description: 'استكشاف البيانات الضخمة (EDA)، واستخلاص النتائج والمؤشرات الحيوية لمشروعك بأسلوب إحصائي دقيق.',
        deliverables: ['تقرير تحليلي تنفيذي', 'مؤشرات الأداء الرئيسية (KPIs)', 'ملفات البيانات المصنفة'],
        tools: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebooks'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's8-2',
        sectionId: 8,
        title: 'تنظيف وترتيب البيانات',
        description: 'معالجة القيم المفقودة والتكرارات والبيانات غير المتسقة لتصبح جاهزة للتحليل أو الإدخال في الأنظمة.',
        deliverables: ['ملفات نقية خالية من الأخطاء والتكرار', 'توحيد صيغ الأرقام والتواريخ', 'كود التنظيف التلقائي'],
        tools: ['OpenRefine', 'Python RegEx', 'Excel Power Query'],
        duration: '1 - 3 أيام'
      },
      {
        id: 's8-3',
        sectionId: 8,
        title: 'معالجة ملفات Excel وCSV',
        description: 'دمج الجداول الضخمة، تطبيق المعادلات المتقدمة، وبرمجة ماكرو (VBA) لأتمتة الحسابات.',
        deliverables: ['جداول مؤتمتة بمعادلات ديناميكية', 'دمج وتنسيق آلاف الصفوف بلحظات', 'حماية الخلايا الحساسة'],
        tools: ['Excel Advanced', 'VBA / Macros', 'Power BI'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's8-4',
        sectionId: 8,
        title: 'استخراج البيانات من المستندات',
        description: 'استخراج وتجميع البيانات المنظمة من ملفات PDF والفواتير والعقود وتصديرها لجداول جاهزة.',
        deliverables: ['تحويل آلاف المستندات لجداول منظمة', 'مطابقة الحقول بدقة', 'فلترة البيانات المستخلصة'],
        tools: ['pdfplumber', 'PyPDF2', 'Regex Parsing'],
        duration: '1 - 3 أيام'
      },
      {
        id: 's8-5',
        sectionId: 8,
        title: 'OCR – تحويل الصور والمستندات إلى نص',
        description: 'التعرف الضوئي على الحروف للنصوص العربية والإنجليزية من المستندات الممسوحة ضوئياً والوثائق المصورة.',
        deliverables: ['نصوص رقمية قابلة للبحث والتعديل', 'تنسيق متناسق للمستند الأصلي', 'ملفات Word أو Word Searchable PDF'],
        tools: ['Tesseract OCR', 'Google Vision OCR', 'EasyOCR Arabic'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's8-6',
        sectionId: 8,
        title: 'إنشاء لوحات المعلومات (Dashboards)',
        description: 'تصميم شاشات بيانية حية تعرض أداء المبيعات، الزوار، أو العمليات مع فلاتر تفاعلية.',
        deliverables: ['لوحة تحكم تفاعلية', 'تحديث البيانات المباشر', 'مخططات بيانية جذابة'],
        tools: ['Power BI', 'Tableau', 'Metabase', 'Recharts'],
        duration: '3 - 7 أيام',
        badge: 'رؤية بصرية'
      },
      {
        id: 's8-7',
        sectionId: 8,
        title: 'تصميم قواعد البيانات',
        description: 'بناء مخططات قواعد البيانات (ERD)، وضبط العلاقات والمفاتيح وفهرسة الحقول لسرعة استعلام قصوى.',
        deliverables: ['مخطط هيكلي للعلاقات ERD', 'أكواد إنشاء الجداول وتفادي التكرار (Normal Form)', 'فهارس استعلامات سريعة'],
        tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's8-8',
        sectionId: 8,
        title: 'تحليل نتائج الاستبيانات',
        description: 'تفريغ وتحليل استبيانات Google Forms وSurveyMonkey واستخراج النسب المئوية والدلالات الإحصائية.',
        deliverables: ['جداول التكرارات والنسب المئوية', 'رسوم بيانية توضيحية لكل سؤال', 'تقرير النتائج والاستنتاجات'],
        tools: ['SPSS', 'Excel Analytics', 'DataWrapper'],
        duration: '1 - 3 أيام'
      }
    ]
  },
  {
    id: 9,
    title: 'الدعم والخدمات التقنية عن بُعد',
    subtitle: 'Remote Support & Technical Troubleshooting',
    iconName: 'MonitorCheck',
    color: {
      bg: 'bg-sky-950/40',
      border: 'border-sky-500/30',
      text: 'text-sky-400',
      glow: 'shadow-sky-500/10',
      gradient: 'from-sky-500/20 to-blue-500/5',
    },
    summary: 'مساندة فنية فورية عن بُعد عبر برامج آمنة لحل مشاكل الحواسيب والأنظمة وتجهيز بيئات العمل التقنية للشركات والأفراد.',
    services: [
      {
        id: 's9-1',
        sectionId: 9,
        title: 'الدعم الفني عن بُعد',
        description: 'جلسات دعم تفاعلية آمنة ومشفرة لمعالجة أي عطل تقني طارئ في جهازك بنقرات بسيطة.',
        deliverables: ['اتصال آمن ومراقب بالكامل', 'حل المشكلة فورياً', 'تقرير بسبب العطل'],
        tools: ['AnyDesk', 'TeamViewer', 'RustDesk (مفتوح المصدر وخاص)'],
        duration: 'جلسة سريعة (1 - 2 ساعة)',
        badge: 'استجابة فورية'
      },
      {
        id: 's9-2',
        sectionId: 9,
        title: 'تهيئة Windows وLinux عن بُعد',
        description: 'تثبيت البرامج الأساسية، ضبط تعريفات الأجهزة (Drivers)، وتحسين سرعة الإقلاع وحذف البرامج العالقة.',
        deliverables: ['نظام تشغيل سريع ومستقر', 'تعريفات محدثة لكافة القطع', 'حذف البرمجيات الدعائية المزعجة'],
        tools: ['Windows PowerShell', 'Linux Bash', 'Driver Utilities'],
        duration: '1 - 3 ساعات'
      },
      {
        id: 's9-3',
        sectionId: 9,
        title: 'حل مشاكل البرامج وأنظمة التشغيل',
        description: 'علاج الشاشة الزرقاء (BSOD)، أعطال ملفات DLL المفقودة، فشل التحديثات، وبطء استجابة التطبيقات.',
        deliverables: ['إصلاح ملفات النظام التالفة', 'سجل أخطاء نظيف', 'فحص سلامة القرص والذاكرة'],
        tools: ['SFC / DISM', 'Event Viewer', 'Memory Diagnostics'],
        duration: '1 - 3 ساعات'
      },
      {
        id: 's9-4',
        sectionId: 9,
        title: 'تنصيب وتهيئة أدوات البرمجة عن بُعد',
        description: 'إعداد محررات الأكواد VS Code ومترجمات اللغات (Python, Node, GCC) وإعداد متغيرات البيئة PATH.',
        deliverables: ['بيئة برمجية جاهزة للعمل فوراً', 'إضافات الإنتاجية المساعدة', 'اختبار أول كود بنجاح'],
        tools: ['VS Code', 'Git', 'Node.js', 'Python Envs', 'MinGW'],
        duration: '1 - 2 ساعة'
      },
      {
        id: 's9-5',
        sectionId: 9,
        title: 'المساعدة في إعداد البيئات التقنية',
        description: 'تجهيز بيئات العمل للمصممين، المهندسين، والطلبة بما يلائم متطلبات برامجهم الثقيلة.',
        deliverables: ['تخصيص المساحات وتوزيع الذاكرة', 'إعداد برامج المحاكاة والتصميم', 'نصائح استقرار الأداء'],
        tools: ['Virtualization', 'Resource Tuning'],
        duration: '2 - 3 ساعات'
      }
    ]
  },
  {
    id: 10,
    title: 'استعادة وإدارة البيانات الرقمية',
    subtitle: 'Data Recovery & Secure Sanitization',
    iconName: 'HardDrive',
    color: {
      bg: 'bg-rose-950/40',
      border: 'border-rose-500/30',
      text: 'text-rose-400',
      glow: 'shadow-rose-500/10',
      gradient: 'from-rose-500/20 to-red-500/5',
    },
    summary: 'إنقاذ الملفات والصور المفقودة من الهواتف والفلاشات والأقراص بعد الحذف أو الفورمات، والمسح الآمن غير القابل للاسترجاع.',
    services: [
      {
        id: 's10-1',
        sectionId: 10,
        title: 'استرجاع الملفات المحذوفة من الهواتف',
        description: 'استعادة الصور ومقاطع الفيديو وسجلات المحادثات والملفات من أجهزة Android و iPhone بعد الحذف الخطأ.',
        deliverables: ['فحص عميق للذاكرة الداخلية', 'استخراج الملفات السليمة', 'نقلها لوحدة تخزين آمنة'],
        tools: ['ADB Forensics', 'iOS Backup Recovery', 'TestDisk'],
        duration: '1 - 3 أيام',
        badge: 'عناية خاصة'
      },
      {
        id: 's10-2',
        sectionId: 10,
        title: 'استرجاع الملفات من وحدات التخزين والفلاشات',
        description: 'استنقاذ البيانات من فلاشات USB وبطاقات SD وأقراص HDD و SSD التي تعاني من تلف في نظام الملفات.',
        deliverables: ['قراءة القطاعات التالفة بأمان', 'إعادة بناء هيكل المجلدات', 'فحص سلامة الملفات المسترجعة'],
        tools: ['R-Studio', 'PhotoRec', 'EaseUS Data Tech', 'DDrescue'],
        duration: '1 - 4 أيام'
      },
      {
        id: 's10-3',
        sectionId: 10,
        title: 'استرجاع البيانات بعد الفورمات',
        description: 'استعادة الأقسام والملفات بعد التهيئة السريعة أو الخاطئة لوحدة التخزين قبل الكتابة فوقها.',
        deliverables: ['استعادة البارتيشن المفقود بالكامل', 'استخراج الملفات حسب الامتدادات Raw Recovery', 'فرز وتصنيف المستندات'],
        tools: ['DiskGenius', 'Partition Recovery Suite'],
        duration: '1 - 3 أيام'
      },
      {
        id: 's10-4',
        sectionId: 10,
        title: 'المسح الآمن والنهائي لبيانات الهواتف',
        description: 'حذف البيانات بأساليب عسكرية معتمدة (DoD 5220.22-M) تضمن استحالة استرجاع الصور والملفات عند بيع الجهاز.',
        deliverables: ['الكتابة فوق البيانات بعدة دورات (Multi-pass Overwrite)', 'شهادة مسح آمن موثقة', 'تأكيد خلو الذاكرة من أي بقايا'],
        tools: ['DoD Standards', 'NIST 800-88', 'Secure Erase Utilities'],
        duration: '1 يوم',
        badge: 'حماية الخصوصية'
      }
    ]
  },
  {
    id: 11,
    title: 'الأجهزة والإلكترونيات',
    subtitle: 'Hardware, Embedded Systems & IoT',
    iconName: 'Wrench',
    color: {
      bg: 'bg-orange-950/40',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      glow: 'shadow-orange-500/10',
      gradient: 'from-orange-500/20 to-amber-500/5',
    },
    summary: 'تطوير وتجهيز الدوائر والمشاريع الإلكترونية والأنظمة المدمجة وأجهزة اختبار الاختراق السيبراني الميدانية.',
    services: [
      {
        id: 's11-1',
        sectionId: 11,
        title: 'أجهزة ومعدات الأمن السيبراني',
        description: 'تجهيز وبرمجة أدوات فحص الشبكات المحمولة مثل Raspberry Pi, WiFi Pineapple, BadUSB, Rubber Ducky.',
        deliverables: ['جهاز محمول جاهز ومضبوط برمجياً', 'سكربتات وفيرموير مخصص', 'دليل الأمان والاستخدام المسؤول'],
        tools: ['Raspberry Pi', 'Flipper Zero / BadUSB', 'ESP32 / ESP8266', 'Kali NetHunter'],
        duration: '2 - 7 أيام',
        badge: 'عتاد متقدم'
      },
      {
        id: 's11-2',
        sectionId: 11,
        title: 'صناعة وتطوير الأجهزة الإلكترونية',
        description: 'تصميم المخططات التخطيطية للدوائر وتصميم ألواح PCB وتصنيع نماذج أولية مطبوعة ومجربة.',
        deliverables: ['ملفات تصنيع Gerber كاملة', 'قائمة المكونات (BOM)', 'مخطط توصيل الدائرة بدقة'],
        tools: ['KiCad', 'EasyEDA', 'Proteus', 'Altium'],
        duration: '5 - 15 يوم'
      },
      {
        id: 's11-3',
        sectionId: 11,
        title: 'تطوير الأجهزة والمشاريع الإلكترونية',
        description: 'برمجة المتحكمات الدقيقة مثل Arduino و ESP و STM32 لربط الحساسات والمحركات بالإنترنت (IoT).',
        deliverables: ['كود برمجي مدمج (Firmware)', 'معايرة الحساسات بدقة', 'ربط القراءات بتطبيق أو داشبورد'],
        tools: ['Arduino IDE', 'C/C++ Embedded', 'MicroPython', 'MQTT'],
        duration: '4 - 12 يوم'
      },
      {
        id: 's11-4',
        sectionId: 11,
        title: 'تجهيز المكونات والأدوات التقنية',
        description: 'توفير واختبار القطع النادرة والحساسات الميكانيكية والإلكترونية المناسبة لطبيعة ابتكارك.',
        deliverables: ['فحص جودة وسلامة القطع', 'تجهيز الأسلاك والملحقات', 'توصيل وتجميع العتاد'],
        tools: ['Oscilloscope', 'Multimeter', 'Logic Analyzer'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's11-5',
        sectionId: 11,
        title: 'حلول الأجهزة التقنية المخصصة',
        description: 'حل المشاكل الهندسية وابتكار دوائر مخصصة لمعالجة إشارات معينة أو التحكم في أجهزة صناعية.',
        deliverables: ['دراسة الجدوى الفنية', 'نموذج أولي عملي (PoC)', 'تقرير الفحص الكهربائي'],
        tools: ['Embedded Engineering', 'Power Management'],
        duration: '7 - 20 يوم'
      }
    ]
  },
  {
    id: 12,
    title: 'المشاريع التقنية والتعليمية',
    subtitle: 'Graduation & Technical Capstone Projects',
    iconName: 'GraduationCap',
    color: {
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/10',
      gradient: 'from-emerald-500/20 to-teal-500/5',
    },
    summary: 'دعم شامل لطلاب الهندسة والحاسب والتقنية في تصميم وتنفيذ مشاريع التخرج والنماذج الأولية مع شرح تدريبي كامل.',
    services: [
      {
        id: 's12-1',
        sectionId: 12,
        title: 'تصميم وتنفيذ مشاريع التخرج التقنية',
        description: 'بناء مشاريع برمجية وشبكية وأمنية متكاملة لطلاب علوم الحاسب، نظم المعلومات، والأمن السيبراني.',
        deliverables: ['كود المشروع بالكامل جاهز للعمل', 'كتيب توثيقي للنظام والمعمارية', 'جلسة شرح تفصيلية لكيفية عمل النظام'],
        tools: ['Full-Stack', 'AI Models', 'Cybersecurity Labs', 'Cloud Deployments'],
        duration: '10 - 25 يوم',
        badge: 'شرح كامل للطالب'
      },
      {
        id: 's12-2',
        sectionId: 12,
        title: 'تصميم وتنفيذ المشاريع الإلكترونية التعليمية',
        description: 'تنفيذ مجسمات ذكية وروبوتات تعليمية وأنظمة منازل ذكية (Smart Home) لطلاب الهندسة.',
        deliverables: ['دائرة إلكترونية مجربة ومثبتة', 'كود مبرمج ومعلق باللغة العربية', 'مخطط التوصيل والفيديو التوضيحي'],
        tools: ['Arduino', 'Raspberry Pi', 'Sensors Array', '3D Printing'],
        duration: '7 - 15 يوم'
      },
      {
        id: 's12-3',
        sectionId: 12,
        title: 'تطوير النماذج الأولية للمشاريع',
        description: 'تحويل الأفكار النظرية وبراءات الاختراع إلى نماذج أولية عملية (MVP) صالحة للعرض على لجان التحكيم.',
        deliverables: ['نموذج تجريبي فعال', 'اختبار سيناريوهات الاستخدام', 'تقرير تقييم الأداء'],
        tools: ['Rapid Prototyping', 'Figma', 'Hardware PoC'],
        duration: '5 - 14 يوم'
      },
      {
        id: 's12-4',
        sectionId: 12,
        title: 'المساعدة في تنفيذ المشاريع البرمجية والإلكترونية',
        description: 'إسناد ومساعدة مستمرة لتخطي العقبات التقنية التي تواجه فرق العمل والطلبة أثناء التنفيذ الذاتي.',
        deliverables: ['جلسات توجيه وكشف أخطاء', 'إصلاح نقاط التعليق في المشروع', 'توجيهات لرفع كفاءة المشروع'],
        tools: ['Mentoring', 'Pair Programming', 'Code Review'],
        duration: 'حسب الطلب'
      },
      {
        id: 's12-5',
        sectionId: 12,
        title: 'إعداد وتجهيز بيئات المشاريع والتجارب العملية',
        description: 'تجهيز السيرفرات السحابية والحزم البرمجية وضبط بيئة التجربة لتشغيل المشروع بيسر يوم المناقشة.',
        deliverables: ['سيرفر مستضاف ومؤمن', 'روابط العرض المباشر (Demo)', 'خطة بديلة حال انقطاع النت في القاعة'],
        tools: ['Docker', 'Vercel / Render', 'Offline Fallback Pack'],
        duration: '1 - 3 أيام'
      }
    ]
  },
  {
    id: 13,
    title: 'الخدمات الأكاديمية والبحثية',
    subtitle: 'Academic Research & Publishing Standards',
    iconName: 'BookOpen',
    color: {
      bg: 'bg-yellow-950/40',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      glow: 'shadow-yellow-500/10',
      gradient: 'from-yellow-500/20 to-amber-500/5',
    },
    summary: 'صياغة وتنسيق البحوث العلمية ورسائل الماجستير وفق معايير الجامعات العالمية (IEEE, APA) والتدقيق اللغوي الاحترافي.',
    services: [
      {
        id: 's13-1',
        sectionId: 13,
        title: 'إعداد وتنسيق البحوث والتقارير',
        description: 'تنسيق متقن للبحوث الأكاديمية والمقالات العلمية من حيث الهوامش والعناوين والفقرات وفق اشتراطات النشر.',
        deliverables: ['تنسيق مطابق للدليل الجامعي', 'فهارس آلية للمحتويات والأشكال', 'ملف Word مفتوح + نسخة PDF'],
        tools: ['LaTeX', 'MS Word Academic Templates', 'Mendeley'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's13-2',
        sectionId: 13,
        title: 'تنسيق البحوث والرسائل وفق القوالب الجامعية',
        description: 'تطبيق القالب الرسمي المعتمد لجامعتك بدقة متناهية تشمل الخطوط، الأحجام، الفراغات والغلاف الخارجي.',
        deliverables: ['تطبيق دليل كتابة الرسائل الجامعية', 'ترقيم الصفحات الروماني والعربي بدقة', 'صفحات الإقرار والشكر والغلاف'],
        tools: ['University Styles', 'Advanced Typography'],
        duration: '2 - 4 أيام'
      },
      {
        id: 's13-3',
        sectionId: 13,
        title: 'إعداد وتنسيق رسائل الماجستير',
        description: 'مراجعة وتنسيق شامل لرسائل الماجستير والأطروحات الطويلة مع ضبط الفصول والملاحق والمراجع بدقة متناهية.',
        deliverables: ['رسالة متناسقة بصرياً وفنياً', 'فهرس متقدم للمراجع والمصطلحات', 'جاهزية كاملة للطباعة والتجليد'],
        tools: ['EndNote', 'Zotero', 'LaTeX'],
        duration: '4 - 8 أيام',
        badge: 'دقة أكاديمية'
      },
      {
        id: 's13-4',
        sectionId: 13,
        title: 'تنسيق المراجع والمصادر',
        description: 'ترتيب وتنسيق قائمة المراجع والمصادر وفق النظم الدولية مثل APA 7th, IEEE, Harvard, Chicago.',
        deliverables: ['مطابقة توثيق المتن مع القائمة الختامية', 'ترتيب هجائي أو تسلسلي دقيق', 'إضافة روابط الـ DOI للمراجع'],
        tools: ['APA 7th', 'IEEE Standards', 'Zotero', 'Mendeley'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's13-5',
        sectionId: 13,
        title: 'إنشاء وتنسيق الجداول والأشكال',
        description: 'تصميم جداول ورسوم بيانية أكاديمية عالية الدقة والوضوح وترقيمها ترقيماً تلقائياً متطابقاً مع الفهارس.',
        deliverables: ['جداول منسقة بمظهر أكاديمي موحد', 'صور ومخططات بدقة Vector / 300 DPI', 'فهرس مستقل للجداول والأشكال'],
        tools: ['OriginPro', 'Excel Graphics', 'Draw.io'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's13-6',
        sectionId: 13,
        title: 'التدقيق اللغوي والتنسيقي',
        description: 'مراجعة لغوية ونحوية وإملائية للنصوص العربية والإنجليزية لضمان لغة أكاديمية رصينة خالية من الأخطاء.',
        deliverables: ['نص سليم نحوياً وبلاغياً', 'إعادة صياغة العبارات الركيكة', 'ملف التعديلات المتبعة (Track Changes)'],
        tools: ['Arabic Linguistic Proofing', 'Grammarly Premium', 'Academic Lexicon'],
        duration: '2 - 4 أيام'
      },
      {
        id: 's13-7',
        sectionId: 13,
        title: 'تحويل الملفات الأكاديمية بين Word / PDF / PowerPoint',
        description: 'تحويل الملفات بدون تشويه الخطوط أو الجداول أو المعادلات الرياضية المعقدة.',
        deliverables: ['تحويل دقيق ومحافظ على التنسيق', 'معادلات رياضية قابلة للتعديل', 'ملفات متوافقة مع كل البرامج'],
        tools: ['Adobe Acrobat Pro', 'MathType', 'Pandoc'],
        duration: '1 يوم'
      },
      {
        id: 's13-8',
        sectionId: 13,
        title: 'تحويل البحث إلى عرض تقديمي',
        description: 'استخلاص أبرز نتائج وأهداف بحثك وتلخيصها في عرض تقديمي (PowerPoint) احترافي وجذاب للمناقشة.',
        deliverables: ['شرائح بصرية بتصميم عصري ملائم لموضوع البحث', 'نقاط تركيز مختصرة ومباشرة', 'ملاحظات إلقاء للمتحدث'],
        tools: ['PowerPoint', 'Canva Pro', 'Slide Crafting'],
        duration: '1 - 3 أيام',
        badge: 'جاهز للمناقشة'
      }
    ]
  },
  {
    id: 14,
    title: 'التصميم والمحتوى الرقمي',
    subtitle: 'Graphic Design, Branding & Multimedia',
    iconName: 'Palette',
    color: {
      bg: 'bg-fuchsia-950/40',
      border: 'border-fuchsia-500/30',
      text: 'text-fuchsia-400',
      glow: 'shadow-fuchsia-500/10',
      gradient: 'from-fuchsia-500/20 to-pink-500/5',
    },
    summary: 'إبداع بصري يرسخ هوية مشروعك: تصميم الشعارات، منشورات السوشيال ميديا، مونتاج الفيديو، والكتالوجات التفاعلية.',
    services: [
      {
        id: 's14-1',
        sectionId: 14,
        title: 'تصميم الشعارات والهويات البصرية',
        description: 'ابتكار شعار مميز فريد مع دليل الهوية البصرية الكامل (الألوان، الخطوط، واستخدامات العلامة التجارية).',
        deliverables: ['ملفات فيكتور مفتوحة المصدر (AI, SVG, PNG)', 'دليل استخدام الهوية (Brand Guidelines)', 'نماذج موك اب للمطبوعات'],
        tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
        duration: '3 - 7 أيام',
        badge: 'هوية متكاملة'
      },
      {
        id: 's14-2',
        sectionId: 14,
        title: 'تصميم منشورات ومحتوى السوشيال ميديا',
        description: 'تصاميم بوستات وستوريات احترافية تجذب الانتباه وتعزز التفاعل لمختلف المنصات (إنستغرام، X، لينكدإن).',
        deliverables: ['قوالب موحدة قابلة للتعديل', 'مقاسات مثالية لكل منصة', 'تصاميم بصرية عالية الجودة'],
        tools: ['Photoshop', 'Canva Pro', 'Illustrator'],
        duration: '1 - 3 أيام'
      },
      {
        id: 's14-3',
        sectionId: 14,
        title: 'تصميم الإعلانات الرقمية',
        description: 'بنرات إعلانية وترويجية محسوبة القياسات والرسائل البصرية لزيادة معدل النقر والتحويلات الإعلانية.',
        deliverables: ['بنرات لحملات Google وMeta', 'إعلانات متحركة أو ثابتة', 'رسائل تسويقية واضحة (CTA)'],
        tools: ['Google Display Standards', 'After Effects', 'Photoshop'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's14-4',
        sectionId: 14,
        title: 'تحرير الصور',
        description: 'تفريغ الصور، تصحيح الألوان، إزالة العيوب والشوائب، ودمج العناصر الرقمية بشكل واقعي.',
        deliverables: ['صور منتجات جاهزة للمتاجر', 'خلفيات بيضاء نقية أو شفافة', 'إضاءة احترافية وتفاصيل واضحة'],
        tools: ['Lightroom', 'Photoshop Retouching'],
        duration: '1 يوم'
      },
      {
        id: 's14-5',
        sectionId: 14,
        title: 'تحرير الفيديوهات القصيرة',
        description: 'مونتاج فيديوهات Reels وTikTok وسنابتشات وإضافة نصوص ملفتة ومؤثرات صوتية تزيد من انتشار الفيديو.',
        deliverables: ['فيديو عمودي 9:16 بجودة Full HD/4K', 'كتابة النصوص المتحركة التلقائية (Subtitles)', 'مؤثرات صوتية وموسيقى مجانية الحقوق'],
        tools: ['Premiere Pro', 'CapCut Pro', 'After Effects'],
        duration: '1 - 2 يوم',
        badge: 'انتشار سريع'
      },
      {
        id: 's14-6',
        sectionId: 14,
        title: 'تصميم ملفات PDF والكتالوجات الإلكترونية',
        description: 'تصميم بروفايل الشركات (Company Profile) والكتالوجات والمجلات الرقمية مع أزرار تفاعلية للاتصال والتصفح.',
        deliverables: ['كتالوج تفاعلي بروابط مباشرة', 'نسخة خفيفة للمشاركة عبر الواتساب', 'نسخة عالية الدقة للطباعة'],
        tools: ['InDesign', 'Illustrator', 'Interactive PDF'],
        duration: '3 - 6 أيام'
      },
      {
        id: 's14-7',
        sectionId: 14,
        title: 'تحويل الكتب الورقية إلى كتب رقمية',
        description: 'مسح الكتب وتنسيقها وصنع فهارس وروابط داخلية لتصبح كتاباً إلكترونياً تفاعلياً بصيغة PDF أو ePub.',
        deliverables: ['كتاب إلكتروني ePub أو PDF', 'فهرس جانبي بنقرة زر', 'خطوط واضحة وقراءة مريحة للعين'],
        tools: ['Calibre', 'Acrobat Book Builder', 'InDesign'],
        duration: '2 - 5 أيام'
      },
      {
        id: 's14-8',
        sectionId: 14,
        title: 'تصميم وطباعة البطاقات الشخصية',
        description: 'تصميم كروت العمل الشخصية (Business Cards) بتقنيات عصرية كالبطاقات الذكية NFC ورموز QR التفاعلية.',
        deliverables: ['تصميم وجهين أنيق', 'رمز QR يوجه لبيانات الاتصال وموقعك', 'ملف طباعة جاهز بمقاييس القطع (Bleed)'],
        tools: ['Illustrator', 'NFC Encoding', 'QR Generator'],
        duration: '1 يوم'
      }
    ]
  },
  {
    id: 15,
    title: 'التدريب والمهارات التقنية',
    subtitle: 'Technical Education & Cyber Mentorship',
    iconName: 'GraduationCap',
    color: {
      bg: 'bg-cyan-950/40',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/10',
      gradient: 'from-cyan-500/20 to-teal-500/5',
    },
    summary: 'برامج تدريبية وتأهيلية عملية وشخصية من الصفر حتى الاحتراف في الحاسب، البرمجة، وأنظمة التشغيل والأمن السيبراني.',
    services: [
      {
        id: 's15-1',
        sectionId: 15,
        title: 'دورات أساسيات تقنيات الحاسوب',
        description: 'تأصيل علمي وعملي لمكونات الحاسب، طريقة عمل الشبكات، المفاهيم الأساسية، والتعامل الذكي مع الملفات.',
        deliverables: ['منهج تدريبي مسجل ومباشر', 'تطبيقات عملية خطوة بخطوة', 'شهادة إتمام دورة'],
        tools: ['Interactive Labs', 'Curriculum Guide'],
        duration: 'برنامج تدريبي (1 - 2 أسبوع)'
      },
      {
        id: 's15-2',
        sectionId: 15,
        title: 'التدريب الفردي على مهارات الحاسوب',
        description: 'جلسات تدريب خصوصية 1-on-1 مصممة لتلبية سرعتك واحتياجك الشخصي في أي مهارة تقنية تريد اكتسابها.',
        deliverables: ['اهتمام فردي كامل', 'إجابة فورية على استفساراتك', 'خطة تدريب مخصصة لسرعتك'],
        tools: ['Live Sessions', 'Screen Sharing'],
        duration: 'ساعات مرنة حسب جدولك',
        badge: 'تدريب مخصص 1-on-1'
      },
      {
        id: 's15-3',
        sectionId: 15,
        title: 'التدريب على Microsoft Office',
        description: 'إتقان حزمة أوفيس (Word, Excel, PowerPoint) للموظفين والطلاب ورفع إنتاجيتك الإدارية.',
        deliverables: ['إتقان دوال وجداول Excel', 'تنسيق تقارير Word الرسمية', 'عروض PowerPoint الإبداعية'],
        tools: ['MS Office 365', 'Practical Business Cases'],
        duration: '5 - 10 أيام'
      },
      {
        id: 's15-4',
        sectionId: 15,
        title: 'التدريب على أنظمة التشغيل',
        description: 'التعمق في التعامل مع أنظمة Windows وLinux، إتقان سطر الأوامر (Terminal/CLI)، وإدارة الصلاحيات والخدمات.',
        deliverables: ['فهم معماري للنظام', 'إتقان أكثر من 50 أمراً حيوياً في الطرفية', 'حل المشاكل وإدارة السيرفرات'],
        tools: ['Linux Bash', 'PowerShell', 'System Administration'],
        duration: '1 - 2 أسبوع'
      },
      {
        id: 's15-5',
        sectionId: 15,
        title: 'التدريب على أساسيات البرمجة',
        description: 'تعلم المنطق البرمجي، وهياكل البيانات والخوارزميات عبر لغات مشهورة كـ Python أو JavaScript من الصفر.',
        deliverables: ['بناء أول 3 مشاريع برمجية حقيقية', 'فهم كائنات OOP والمصفوفات', 'أساس متين يؤهلك لسوق العمل'],
        tools: ['Python', 'JavaScript', 'Problem Solving Platforms'],
        duration: '2 - 4 أسابيع'
      },
      {
        id: 's15-6',
        sectionId: 15,
        title: 'التدريب على أساسيات الأمن السيبراني',
        description: 'مقدمة شاملة للاختراق الأخلاقي، أنواع التهديدات، مفاهيم التشفير، وحماية الشبكات والأجهزة الشخصية.',
        deliverables: ['تطبيق على بيئات تدريب افتراضية', 'فهم ثغرات الويب الشائعة OWASP', 'حماية نفسك ومؤسستك'],
        tools: ['Kali Linux Labs', 'TryHackMe Scenarios', 'Wireshark'],
        duration: '2 - 4 أسابيع',
        badge: 'مسار أمني مميز'
      },
      {
        id: 's15-7',
        sectionId: 15,
        title: 'إعداد المختبرات الافتراضية للتدريب',
        description: 'مساعدتك في بناء معملك الافتراضي في جهازك للتدرب المستمر بأمان دون التأثير على ملفاتك الشخصية.',
        deliverables: ['تركيب شبكة افتراضية معزولة', 'تنزيل أجهزة الهدف الضعيفة', 'شرح سيناريوهات الهجوم والدفاع'],
        tools: ['VirtualBox', 'VMware', 'GNS3 / Packet Tracer'],
        duration: '1 - 2 يوم'
      },
      {
        id: 's15-8',
        sectionId: 15,
        title: 'توفير كتب ومراجع البرمجة والأمن السيبراني',
        description: 'توفير وتوجيه نحو أفضل المراجع والكتب الأكاديمية العالمية وخارطة طريق (Roadmap) دقيقة لمسارك التقني.',
        deliverables: ['حقيبة كتب ومراجع PDF منتقاة بعناية', 'خطة دراسة ذاتية مرتبة بالأولويات', 'قنوات ومواقع التدريب المجانية والمدفوعة'],
        tools: ['Curated Library', 'Roadmap Guides'],
        duration: 'فوري'
      }
    ]
  }
];
