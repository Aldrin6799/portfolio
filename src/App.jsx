import React, { useState, useEffect } from 'react';
import {
  Code2,
  Database,
  Briefcase,
  Award,
  Instagram,
  Linkedin,
  User,
  Send,
  Phone,
  ChevronRight,
  Sparkles,
  Sun,
  Moon,
  MapPin,
  Globe,
  Github,
  Layout,
  Layers,
  Terminal,
  Cpu,
  GitBranch,
  Monitor,
  HardDrive,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Activity,
  Calendar,
  Menu,
  X,
  Languages,
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'jp'

  // Translation Dictionary
  const translations = {
    en: {
      nav: ['About', 'LIXIL', 'Experience', 'Skills', 'Contact'],
      hero: 'Software Developer at LIXIL Ichinoseki, specializing in Industrial Digital Transformation (DX) and Secure Network Monitoring.',
      location: 'Ichinoseki, Iwate, Japan',
      profBackground: 'Professional Background',
      aboutP1:
        'Currently leading DX initiatives at LIXIL Japan, I focus on building internal tools that bridge factory operations with enterprise cloud architecture.',
      aboutP2:
        'My work on RFID and real-time monitoring systems has earned recognition for significant labor and cost reductions.',
      philosophyTitle: 'Project Philosophy',
      philosophy:
        'Transforming speed and initial disaster response by checking thousands of IPs near-instantly, effectively changing how we visualize system life during emergencies.',
      lixilTitle: 'Enterprise DX Development @ LIXIL',
      milestones: 'Previous Career Milestones',
      impact: 'Technical Impact',
      contact: 'Contact Me',
    },
    jp: {
      nav: ['自己紹介', 'LIXILプロジェクト', '経歴', 'スキル', '連絡先'],
      hero: 'LIXIL一関のシステムエンジニア。産業デジタルトランスフォーメーション（DX）とセキュアなネットワーク監視を専門としています。',
      location: '岩手県一関市',
      profBackground: '専門的な背景',
      aboutP1:
        '現在、LIXILジャパンでDXイニシアチブを牽引し、工場のオペレーションとエンタープライズクラウドアーキテクチャを橋渡しする社内ツールの構築に注力しています。',
      aboutP2:
        'RFIDやリアルタイム監視システムに関する私の取り組みは、大幅な労力削減とコスト削減で高い評価を得ています。',
      philosophyTitle: 'プロジェクトの理念',
      philosophy:
        '数千のIPを瞬時にチェックすることで、災害初期対応のスピードを一変させ、緊急時のシステム稼働状況の可視化を根本から変えます。',
      lixilTitle: 'LIXIL社内DX開発',
      milestones: 'これまでのキャリア',
      impact: '技術的インパクト',
      contact: 'お問い合わせ',
    },
  };

  const t = (key) => translations[lang][key] || key;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const lixilProjects = [
    {
      title:
        lang === 'en' ? 'RFID Material Management' : 'RFID資材管理システム',
      award: 'LIXIL AWARD NOV 2024',
      tech: ['VB.NET', 'Access Database', 'RFID'],
      desc:
        lang === 'en'
          ? 'Implemented at Ichinoseki Factory to automate sash material inventory. Replaced manual pallet checking with simultaneous radio-wave scanning.'
          : 'サッシ資材の棚卸しを自動化するために一関工場で導入。手動のパレット確認を電波による同時スキャンに置き換えました。',
      impact:
        lang === 'en'
          ? 'Reduced labor costs by 90% and development costs by 66% through in-house system engineering.'
          : '自社システムエンジニアリングにより、労務コストを90％、開発コストを約3分の1に削減。',
    },
    {
      title:
        lang === 'en'
          ? 'Supplier Delivery Visualization'
          : '仕入先納入状況の見える化',
      tech: ['PHP', 'JavaScript', 'jQuery', 'Ajax', 'SQL Server', 'VB.NET'],
      desc:
        lang === 'en'
          ? 'A nationwide dashboard providing real-time visibility into supplier delivery status and compliance to standard lead times.'
          : '仕入先の納入状況や標準リードタイムの遵守状況をリアルタイムで可視化する全国版ダッシュボード。',
      impact:
        lang === 'en'
          ? 'Eliminated inventory blind spots for indirect and direct departments, enabling optimal personnel allocation.'
          : '間接部門および直接部門の在庫ブラインドスポットを解消し、最適な人員配置を可能にしました。',
    },
    {
      title: lang === 'en' ? 'DX Knowledge Library' : 'DXナレッジライブラリ',
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'MSSQL'],
      desc:
        lang === 'en'
          ? 'Centralized responsive dashboard acting as a Single Source of Truth for manufacturing and logistics applications.'
          : '製造および物流アプリケーションの「信頼できる唯一の情報源」として機能する、一元化されたレスポンシブダッシュボード。',
      impact:
        lang === 'en'
          ? 'Includes automated health monitoring (10m pings) and real-time status badges with automated crash alerts.'
          : '自動ヘルスモニタリング（10分間隔）と、自動クラッシュアラートを備えたリアルタイムステータスバッジを搭載。',
    },
    {
      title: lang === 'en' ? 'Go Network Monitor' : 'Goネットワークモニター',
      tech: ['Golang', 'MS SQL', 'AES-256', 'REST API'],
      desc:
        lang === 'en'
          ? 'High-speed distributed system using goroutines to check thousands of device IPs near-instantly across global factories.'
          : 'Goのgoroutineを使用して、世界中の工場の数千のデバイスIPをほぼ瞬時にチェックする高速分散システム。',
      impact:
        lang === 'en'
          ? 'Transforms disaster response speed through instant visualization of alive/dead hardware using encrypted remote agents.'
          : '暗号化されたリモートエージェントを使用し、ハードウェアの稼働状況を即座に可視化することで、災害対応スピードを向上。',
    },
  ];

  const previousExperience = [
    {
      company: 'Zealous Service',
      period: '2023.09 - 2024.01',
      title: lang === 'en' ? 'PHP Developer' : 'PHPデベロッパー',
      tech: ['PHP', 'MySQL', 'Ajax'],
      highlights:
        lang === 'en'
          ? [
              'Developed frontend/backend for healthcare projects',
              'Real-time updates via Ajax',
            ]
          : [
              'ヘルスケアプロジェクトのフロントエンド/バックエンド開発',
              'Ajaxによるリアルタイム更新を実装',
            ],
    },
    {
      company: 'Nihon Edutech',
      period: '2022.03 - 2023.03',
      title:
        lang === 'en' ? 'Frontend Developer' : 'フロントエンドデベロッパー',
      tech: ['Angular', 'Node.js', 'Bootstrap'],
      highlights:
        lang === 'en'
          ? [
              'Built interactive job portal search engine',
              'Optimized MySQL search response times',
            ]
          : [
              'インタラクティブな求人ポータル検索エンジンの構築',
              'MySQL検索レスポンス時間の最適化',
            ],
    },
  ];

  const skillCategories = [
    {
      category:
        lang === 'en' ? 'Frontend & Design' : 'フロントエンド & デザイン',
      items: [
        {
          name: 'React',
          desc: lang === 'en' ? 'MODERN UI DEV' : '最新UI開発',
          icon: <Monitor className="text-sky-400" />,
        },
        {
          name: 'Angular',
          desc: lang === 'en' ? 'ENTERPRISE WEB' : '企業向けWeb',
          icon: <Layers className="text-red-500" />,
        },
        {
          name: 'Tailwind CSS',
          desc: lang === 'en' ? 'UTILITY-FIRST' : 'ユーティリティ優先',
          icon: <Layout className="text-teal-400" />,
        },
        {
          name: 'Bootstrap',
          desc: lang === 'en' ? 'RESPONSIVE UI' : 'レスポンシブUI',
          icon: <Layout className="text-purple-500" />,
        },
        {
          name: 'HTML & CSS',
          desc: lang === 'en' ? 'FUNDAMENTALS' : 'Web基礎',
          icon: <Code2 className="text-orange-500" />,
        },
      ],
    },
    {
      category:
        lang === 'en'
          ? 'Backend & Frameworks'
          : 'バックエンド & フレームワーク',
      items: [
        {
          name: 'Node.js',
          desc: 'RUNTIME',
          icon: <Globe className="text-green-500" />,
        },
        {
          name: 'Golang',
          desc: 'HIGH-PERF',
          icon: <Terminal className="text-cyan-500" />,
        },
        {
          name: 'PHP / Laravel',
          desc: 'LOGIC',
          icon: <HardDrive className="text-indigo-400" />,
        },
        {
          name: 'VB.NET / C#',
          desc: 'ENTERPRISE',
          icon: <Briefcase className="text-blue-600" />,
        },
      ],
    },
    {
      category:
        lang === 'en' ? 'Databases & Security' : 'データベース & セキュリティ',
      items: [
        {
          name: 'MS SQL / MySQL',
          desc: 'RELATIONAL',
          icon: <Database className="text-red-500" />,
        },
        {
          name: 'BigQuery',
          desc: 'ANALYTICS',
          icon: <Database className="text-blue-400" />,
        },
        {
          name: 'Access',
          desc: 'INTERNAL',
          icon: <Database className="text-purple-500" />,
        },
        {
          name: 'AES-256',
          desc: 'ENCRYPTION',
          icon: <ShieldCheck className="text-green-500" />,
        },
      ],
    },
    {
      category: lang === 'en' ? 'Cloud & Tools' : 'クラウド & ツール',
      items: [
        {
          name: 'GCP',
          desc: 'CLOUD INFRA',
          icon: <Globe className="text-blue-500" />,
        },
        {
          name: 'OutSystems',
          desc: 'LOW-CODE',
          icon: <Briefcase className="text-red-600" />,
        },
        {
          name: 'Git',
          desc: 'VCS',
          icon: <GitBranch className="text-slate-400" />,
        },
        // { name: "Docker", desc: "CONTAINERS", icon: <Globe className="text-cyan-400" /> }
      ],
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 font-sans">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full md:w-[95%] max-w-5xl">
        <div className="mx-2 md:mx-0 mt-2 md:mt-0 flex items-center justify-between px-6 py-3 rounded-2xl md:rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg">
          <span className="font-black text-cyan-600 dark:text-cyan-400 tracking-tighter">
            ALDRIN.dev
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {t('nav').map((item, index) => (
              <a
                key={item}
                href={`#${translations.en.nav[index].toLowerCase()}`}
                className="text-xs font-bold hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'jp' : 'en')}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500/10 transition-colors"
            >
              <Languages size={14} className="text-cyan-500" />
              {lang === 'en' ? '日本語' : 'ENG'}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-cyan-600 dark:text-cyan-400"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 text-slate-600 dark:text-slate-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mx-2 mt-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-6">
              {t('nav').map((item, index) => (
                <a
                  key={item}
                  href={`#${translations.en.nav[index].toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-white/5 pb-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-20 px-6 max-w-6xl mx-auto text-center">
        <div className="mb-6 px-4 py-1 rounded-full inline-flex bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase">
          <MapPin size={12} className="mr-2" /> {t('location')}
        </div>
        <h1 className="text-5xl md:text-9xl font-black mb-6 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent uppercase tracking-tighter leading-none">
          ALDRIN
        </h1>
        <p className="text-md md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
          {t('hero')}
        </p>
        <a
          href="mailto:aldrin6661@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold shadow-xl hover:scale-105 transition-transform uppercase text-xs tracking-widest"
        >
          {t('contact')} <ChevronRight size={18} />
        </a>
      </header>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200 dark:border-white/5"
      >
        <h2 className="text-[10px] font-black tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-10 uppercase flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-500"></span>
          {t('profBackground')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-slate-600 dark:text-slate-400">
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
            <div className="flex gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
                <GraduationCap className="text-cyan-500 mb-2" size={20} />
                <p className="text-[10px] font-black uppercase tracking-tighter">
                  B.sc IT (2017-2020)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
                <Award className="text-cyan-500 mb-2" size={20} />
                <p className="text-[10px] font-black uppercase">JLPT N4 & N5</p>
              </div>
            </div>
          </div>
          <div className="bg-cyan-500/5 dark:bg-cyan-500/10 p-8 rounded-3xl border border-cyan-500/20">
            <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tight">
              {t('philosophyTitle')}
            </h3>
            <p className="text-sm italic text-cyan-700 dark:text-cyan-300">
              "{t('philosophy')}"
            </p>
          </div>
        </div>
      </section>

      {/* LIXIL In-House DX Projects */}
      <section id="lixil" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-[10px] font-black tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-10 uppercase text-center">
          {t('lixilTitle')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {lixilProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <h3 className="text-lg font-black uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>
                {project.award && (
                  <a
                    href="https://newsroom.lixil.com/hubfs/newsroom/PDF/JapanComms/20241128_ThoseWhoCreateLIXIL_vol.4.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="whitespace-nowrap bg-yellow-500/10 text-yellow-600 text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest border border-yellow-500/20">
                      {project.award}
                    </span>
                  </a>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl mb-4 border border-slate-100 dark:border-white/5">
                <p className="text-[10px] font-black text-cyan-500 uppercase mb-2 flex items-center gap-2 tracking-widest">
                  <Activity size={12} /> {t('impact')}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed font-medium">
                  {project.impact}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-[10px] font-black tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-10 uppercase flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-500"></span>
          {t('milestones')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousExperience.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase size={80} />
              </div>
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-2">
                <Calendar size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">
                {exp.company}
              </h3>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
                {exp.title}
              </p>
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-cyan-500 mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full uppercase text-slate-500 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-[10px] font-black tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-8 uppercase flex items-center gap-4">
                <span className="h-px w-12 bg-cyan-500"></span>
                {cat.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 transition-all text-center group"
                  >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-tight truncate">
                      {skill.name}
                    </p>
                    <p className="text-[9px] text-slate-400 dark:text-slate-600 font-bold uppercase mt-1 tracking-tighter leading-tight">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Footer */}
      <footer
        id="contact"
        className="py-6 border-t border-slate-200 dark:border-white/5 text-center"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="mailto:aldrin6661@gmail.com"
            className="text-sm font-bold tracking-tight hover:text-cyan-500 dark:text-slate-400 transition-colors uppercase"
          >
            aldrin6661@gmail.com
          </a>

          <div className="flex gap-6 text-slate-400">
            <a
              href="https://wa.me/916374217841"
              className="hover:text-green-500 transition-colors"
            >
              <Phone size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/aldrin-t-04bb9824b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>

            {/* Instagram link added */}
            <a
              href="https://www.instagram.com/calm_echo99"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>

          <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 dark:text-slate-600 uppercase">
            © 2026 ALDRIN • ICHINOSEKI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
