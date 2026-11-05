export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Video Editing' | 'Photo Editing' | 'Presentation' | 'Web Development' | 'Other Projects';
  year: string;
  tools: string[];
  shortDesc: string;
  overview: string;
  objective: string;
  process: string[];
  result: string;
  imageUrl?: string;
  isVideo?: boolean;
  isBeforeAfter?: boolean;
  galleryPlaceholders: { title: string; subtitle: string; aspect: string; image?: string }[];
  accentColor?: string;
}

export interface SkillItem {
  name: string;
  category: 'Design & Creative' | 'Editing & Multimedia' | 'Technology & Development' | 'Business & Digital Marketing' | 'Gaming & Digital Ecosystem';
  level: 'Learning' | 'Developing' | 'Practicing' | 'Experienced';
  tools: string[];
  description: string;
  learningFocus?: string;
}

export interface StudioBranch {
  id: string;
  number: string;
  title: string;
  status: 'Available / Active' | 'In Development' | 'Future Development';
  shortDesc: string;
  details: string;
  services: string[];
  icon: string;
}

export const PERSONAL_INFO = {
  fullName: 'Sopian Sahuri',
  nickname: 'Sopian',
  tagline: 'Generatif AI & Tools',
  roleTitle: 'Generatif AI & Tools • Multimedia Creator',
  subtitle: 'Junior Digital Creator & Founder of YannStudio',
  location: 'Prov. Banten, Kota Serang',
  studioLocation: 'Kota Serang, Banten',
  phone: '085892146202',
  whatsappDisplay: '+62 858-9214-6202',
  whatsappNumber: '6285892146202',
  email: 'sofyansauri0165@gmail.com',
  instagram: '_fyaaaan',
  instagramUrl: 'https://instagram.com/_fyaaaan',
  statusLabel: 'Sedang mengeksplorasi Generatif AI & merintis YannStudio',
  bio: 'Saya memiliki ketertarikan mendalam dalam eksplorasi teknologi Generatif AI, multimedia editing, desain grafis, dan pengembangan ekosistem kreatif digital melalui YannStudio.',
  profilePhoto: '/profile.png',
  story: 'Perjalanan saya berawal dari rasa ingin tahu yang besar terhadap teknologi masa depan dengan mengikuti pelatihan LPK Gen AI (Generative Artificial Intelligence). Dari hobi bereksperimen dengan berbagai tools digital, visual, dan prompt engineering, saya menemukan antusiasme untuk terus belajar memadukan kreativitas dan teknologi dalam karya nyata.',
  hobbies: 'Eksplorasi AI Prompting, Video Editing, Gaming (Mobile Legends & Free Fire), Desain Visual, dan Pengembangan Ide Bisnis.',
  goalsShortTerm: 'Memperdalam penguasaan tools Generatif AI, konsisten memproduksi karya multimedia bernilai tinggi, serta meluncurkan layanan kreatif perdana YannStudio.',
  goalsLongTerm: 'Membangun YannStudio menjadi ekosistem digital mandiri yang menaungi layanan kreatif, produk aset digital, serta komunitas gaming & marketplace terpercaya.',
  vision: 'Mengubah ide menjadi pengalaman digital yang bermakna dan dapat diakses dengan efisiensi teknologi modern.',
};

export const CREATIVE_PROCESS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Memahami tujuan, konteks ide, dan kebutuhan spesifik proyek secara menyeluruh.',
  },
  {
    number: '02',
    title: 'Define',
    desc: 'Menentukan konsep, riset referensi visual, dan menyusun kerangka solusi yang tepat.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Mengeksekusi desain visual, komposisi, estetika, dan alur dengan bantuan tools modern.',
  },
  {
    number: '04',
    title: 'Develop',
    desc: 'Mengintegrasikan aset, mengedit multimedia, atau membangun halaman web interaktif.',
  },
  {
    number: '05',
    title: 'Deliver',
    desc: 'Tahap pengujian kualitas, penyempurnaan detail, dan penyajian hasil akhir yang siap digunakan.',
  },
];

export const STUDIO_BRANCHES: StudioBranch[] = [
  {
    id: 'creative-services',
    number: '01',
    title: 'Creative & Editing Services',
    status: 'Available / Active',
    shortDesc: 'Layanan kreatif digital untuk kebutuhan konten visual, video, branding, dan presentasi modern.',
    details: 'Mencakup video editing untuk Reels/Shorts/TikTok, photo retouching & visual poster, carousel edukatif, slide presentasi PowerPoint profesional, serta pembuatan website portofolio/landing page yang terus dikembangkan.',
    services: [
      'Video Editing (Reels, Shorts, TikTok, YouTube)',
      'Photo Editing & Digital Poster Design',
      'Informative Carousel & Social Media Assets',
      'PowerPoint / Pitch Deck Presentation Design',
      'Web Landing Page Development (In Progress)',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'gaming-services',
    number: '02',
    title: 'Gaming Services',
    status: 'In Development',
    shortDesc: 'Layanan ekosistem gaming yang berfokus pada game kompetitif populer seperti Mobile Legends & Free Fire.',
    details: 'Dikembangkan secara bertahap dengan memprioritaskan keamanan, kenyamanan pemain, dan kepatuhan penuh terhadap ketentuan resmi masing-masing platform game.',
    services: [
      'Mobile Legends Strategy & Analysis Sharing',
      'Free Fire Content & Community Support',
      'Gaming Creative Media & Tournament Posters',
      'Komunitas & Diskusi Taktis Game',
    ],
    icon: 'Gamepad2',
  },
  {
    id: 'digital-products',
    number: '03',
    title: 'Digital Products Store',
    status: 'In Development',
    shortDesc: 'Rencana toko penyedia aset digital siap pakai untuk desainer, editor, dan kreator konten.',
    details: 'Menyediakan bahan editing siap pakai, source code template website, koleksi sound effects, template PowerPoint elegan, template poster, serta preset visual.',
    services: [
      'Bahan & Preset Video Editing',
      'Template PowerPoint & Pitch Deck Siap Pakai',
      'Source Code Starter Website & Komponen UI',
      'Sound Effects (SFX) & Audio Assets Terkurasi',
      'Template Poster & Carousel Media Sosial',
    ],
    icon: 'FolderArchive',
  },
  {
    id: 'digital-marketplace',
    number: '04',
    title: 'Digital Marketplace',
    status: 'Future Development',
    shortDesc: 'Rencana pengembangan jangka panjang untuk ekosistem transaksi digital yang aman dan terpercaya.',
    details: 'Menghadirkan wadah jual beli item, akun, dan mata uang virtual game dengan standar verifikasi ketat, perlindungan pembeli-penjual, serta mematuhi hukum dan regulasi platform terkait.',
    services: [
      'Sistem Rekening Bersama / Escrow Aman',
      'Verifikasi Identitas & Transaksi Sah',
      'Kepatuhan Penuh terhadap Ketentuan Platform & Game',
      'Customer Support & Layanan Terjamin',
    ],
    icon: 'ShieldCheck',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Generative AI & Prompt Engineering',
    category: 'Technology & Development',
    level: 'Practicing',
    tools: ['ChatGPT', 'Claude', 'Midjourney', 'Gemini AI', 'Perplexity'],
    description: 'Eksplorasi prompt struktural untuk pembuatan konsep visual, perancangan teks, dan riset ide konten.',
    learningFocus: 'Advanced system prompting & alur kerja otomatisasi kreatif berbasis AI.',
  },
  {
    name: 'Video Editing & Motion Basics',
    category: 'Editing & Multimedia',
    level: 'Practicing',
    tools: ['CapCut', 'Premiere Pro', 'Canva'],
    description: 'Penyusunan alur cerita video pendek, transisi halus, sound sync, subtitle dinamis, dan grading warna dasar.',
    learningFocus: 'Peningkatan ritme visual (pacing) dan motion graphics yang lebih dinamis.',
  },
  {
    name: 'Photo Editing & Retouching',
    category: 'Editing & Multimedia',
    level: 'Developing',
    tools: ['Adobe Photoshop', 'Lightroom Mobile', 'Canva'],
    description: 'Penyesuaian tone warna, retouching objek, manipulasi background, dan peningkatan kualitas visual.',
    learningFocus: 'Color grading sinematik dan teknik masking presisi.',
  },
  {
    name: 'Poster & Social Media Design',
    category: 'Design & Creative',
    level: 'Practicing',
    tools: ['Canva', 'Photoshop', 'Figma'],
    description: 'Pembuatan layout poster event, banner promosi, feed Instagram, dan carousel edukatif dengan visual terarah.',
    learningFocus: 'Tipografi editorial modern dan penerapan whitespace yang seimbang.',
  },
  {
    name: 'PowerPoint & Presentation Design',
    category: 'Design & Creative',
    level: 'Practicing',
    tools: ['Microsoft PowerPoint', 'Google Slides', 'Canva'],
    description: 'Penyusunan slide presentasi yang rapi, profesional, tidak membosankan, dan mudah dipahami audiens.',
    learningFocus: 'Visual storytelling data dan transisi slide interaktif.',
  },
  {
    name: 'Frontend Web Development',
    category: 'Technology & Development',
    level: 'Learning',
    tools: ['HTML5', 'CSS3', 'Tailwind CSS', 'React Basics', 'VS Code'],
    description: 'Mempelajari dasar struktur web, styling responsif menggunakan utility classes, dan komponen UI modern.',
    learningFocus: 'Penguasaan React hooks, TypeScript, dan struktur web interaktif.',
  },
  {
    name: 'Gaming Analysis (MLBB & FF)',
    category: 'Gaming & Digital Ecosystem',
    level: 'Experienced',
    tools: ['Mobile Legends', 'Free Fire', 'Discord', 'In-Game Analytics'],
    description: 'Pemahaman mendalam mengenai meta kompetitif, strategi drafting, rotasi makro, dan manajemen komunitas gamer.',
    learningFocus: 'Integrasi komunitas gaming ke dalam ekosistem layanan YannStudio.',
  },
  {
    name: 'Digital Business & Studio Management',
    category: 'Business & Digital Marketing',
    level: 'Developing',
    tools: ['Notion', 'Google Workspace', 'WhatsApp Business'],
    description: 'Merancang SOP layanan pelanggan, alur pemesanan awal, katalog produk digital, dan perencanaan roadmap.',
    learningFocus: 'Skalabilitas model bisnis studio digital dan penentuan pricing yang kompetitif.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Poster Eksplorasi Visual & AI Concept',
    category: 'Design',
    year: '2025',
    tools: ['Figma', 'Generative AI', 'Photoshop'],
    shortDesc: 'Studi perancangan poster bertema futuristik dengan eksplorasi tipografi editorial dan perpaduan warna kontras tinggi.',
    imageUrl: '/src/assets/images/poster_visual_concept_1793861478236.jpg',
    overview: 'Proyek ini merupakan eksperimen perancangan visual poster yang menggabungkan aset generasi AI terkurasi dengan komposisi tipografi editorial kontemporer. Proyek ini mendemonstrasikan bagaimana AI dapat mempercepat perumusan konsep visual tanpa mengorbankan kontrol estetika seorang desainer.',
    objective: 'Menciptakan identitas visual poster yang eye-catching, berkarakter tegas, serta menguji penerapan palet warna merah, hitam, dan putih secara harmonis.',
    process: [
      'Riset moodboard dan tema editorial visual modern',
      'Pembuatan prompt terstruktur untuk menghasilkan elemen visual utama',
      'Kurasi dan compositing di software pengolah grafis',
      'Penyusunan hierarki tipografi, grid layout, dan detail aksen merah',
    ],
    result: 'Poster beresolusi tinggi dengan komposisi seimbang yang siap diadaptasi untuk keperluan media sosial maupun cetak.',
    galleryPlaceholders: [
      { title: 'Full Print Mockup', subtitle: 'Modern studio wall mounted showcase', aspect: '4:3', image: '/src/assets/images/poster_visual_concept_1793861478236.jpg' },
      { title: 'Composition Grid', subtitle: 'Grid layout & alignment hierarchy', aspect: '4:3' },
      { title: 'Typography Detail', subtitle: 'Editorial title styling & kerning', aspect: '16:9' },
    ],
    accentColor: '#DC2626',
  },
  {
    id: 'proj-2',
    title: 'Short Video Editing & Pacing Reel',
    category: 'Video Editing',
    year: '2025',
    tools: ['CapCut Pro', 'Premiere Pro', 'AI Voice & SFX'],
    shortDesc: 'Editing video format vertikal 9:16 dengan transisi dinamis, penyesuaian beat musik, dan subtitle kinetik yang rapi.',
    imageUrl: '/src/assets/images/video_editing_showcase_1793861477620.jpg',
    isVideo: true,
    overview: 'Eksperimen penyuntingan video vertikal dan horizontal yang dirancang untuk platform digital dan konten kreator. Menitikberatkan pada ritme transisi yang selaras dengan musik latar (sound synchronization), timeline multitrack presisi, serta penempatan teks kinetik yang meningkatkan retensi penonton.',
    objective: 'Menguji alur editing yang cepat namun nyaman ditonton dengan audio mixing yang bersih dan visual grading yang konsisten.',
    process: [
      'Storyboarding dan pemilahan rekaman footage terbaik',
      'Pemotongan kasar (rough cut) mengikuti beat tempo musik',
      'Pemberian efek transisi halus dan sound effects di setiap aksentuasi',
      'Penambahan subtitle kinetik bergaya modern dan color grading',
    ],
    result: 'Reel dengan timeline multi-layer dinamis, color wheel balancing, dan visual hook yang menarik perhatian sejak detik pertama.',
    galleryPlaceholders: [
      { title: 'Editing Suite Monitor', subtitle: 'Multitrack audio-video sync structure', aspect: '16:9', image: '/src/assets/images/video_editing_showcase_1793861477620.jpg' },
      { title: 'Color Grading Node', subtitle: 'Cinematic shadow and highlight adjustment', aspect: '4:3' },
      { title: 'Subtitle Typography', subtitle: 'High legibility mobile subtitle design', aspect: '9:16' },
    ],
    accentColor: '#EF4444',
  },
  {
    id: 'proj-3',
    title: 'Creative Retouching & Atmospheric Mood',
    category: 'Photo Editing',
    year: '2024',
    tools: ['Photoshop', 'Lightroom Mobile'],
    shortDesc: 'Studi manipulasi foto digital dan pencahayaan dramatis untuk menghasilkan atmosfer visual yang berkarakter.',
    imageUrl: '/src/assets/images/photo_editing_retouch_1793861497353.jpg',
    isBeforeAfter: true,
    overview: 'Eksperimen retouching foto yang berfokus pada teknik split-screen perbandingan sebelum (RAW) dan sesudah (Retouched & Graded). Penyesuaian pencahayaan dramatis, pembersihan tekstur kulit, isolasi rim light crimson, dan rekonstruksi tone warna menghasilkan mood editorial kelas atas.',
    objective: 'Mengembangkan keahlian manipulasi tone dan depth of field agar foto memiliki nilai komersial dan estetika editorial majalah.',
    process: [
      'Koreksi exposure dasar dan pengaturan curve',
      'Masking subjek utama dan isolasi background',
      'Penerapan color grading kontras hangat-dingin',
      'Sentuhan akhir grain halus untuk tekstur analog',
    ],
    result: 'Komparasi Sebelum & Sesudah berkualitas tinggi dengan transisi pencahayaan dramatis dan tonalitas warna yang memikat.',
    galleryPlaceholders: [
      { title: 'Before & After Contrast', subtitle: 'Dynamic range & skin tone enhancement', aspect: '4:3', image: '/src/assets/images/photo_editing_retouch_1793861497353.jpg' },
      { title: 'Tone Curve Analysis', subtitle: 'RGB channel balancing for moody dark tone', aspect: '16:9' },
    ],
    accentColor: '#991B1B',
  },
  {
    id: 'proj-4',
    title: 'Professional Pitch Deck Slide Template',
    category: 'Presentation',
    year: '2025',
    tools: ['PowerPoint', 'Canva', 'Figma'],
    shortDesc: 'Perancangan template presentasi pitch deck 16:9 dengan struktur data yang bersih, minimalis, dan elegan.',
    imageUrl: '/src/assets/images/pitch_deck_slides_mockup_1793861977475.jpg',
    overview: 'Proyek perancangan slide presentasi bisnis yang ditujukan bagi startup atau inisiatif kreatif. Menghilangkan elemen visual berantakan dan menggantinya dengan layout berorientasi data yang mudah dibaca.',
    objective: 'Membuktikan bahwa slide presentasi dapat terlihat mewah dan persuasif melalui keselarasan font, whitespace luas, dan visual pendukung yang relevan.',
    process: [
      'Penyusunan outline narasi presentasi (Problem, Solution, Market, Product, Roadmap)',
      'Penentuan sistem grid slide dan ukuran tipografi baku',
      'Desain diagram modular dan visual mockup',
      'Penyempurnaan animasi transisi slide yang halus',
    ],
    result: 'Deck 15 slide yang siap digunakan ulang (reusable) dengan panduan warna dan penempatan konten yang terstruktur.',
    galleryPlaceholders: [
      { title: 'Slide Master Layout', subtitle: '16:9 grid system with strict padding', aspect: '16:9', image: '/src/assets/images/pitch_deck_slides_mockup_1793861977475.jpg' },
      { title: 'Data Infographic Slide', subtitle: 'Clean chart and metric visualization', aspect: '16:9' },
      { title: 'Roadmap Timeline Slide', subtitle: 'Milestone tracking slide component', aspect: '16:9' },
    ],
    accentColor: '#DC2626',
  },
  {
    id: 'proj-5',
    title: 'YannStudio Digital Hub Concept',
    category: 'Web Development',
    year: '2025',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    shortDesc: 'Konsep website responsif yang menjadi pusat portofolio pribadi dan etalase layanan YannStudio.',
    imageUrl: '/src/assets/images/yannstudio_web_hub_1793861977474.jpg',
    overview: 'Pembangunan website modern yang berfungsi sebagai portofolio pribadi sekaligus portal resmi YannStudio. Dibangun dengan React dan Tailwind CSS untuk memastikan performa kilat dan tampilan yang memukau di semua ukuran layar.',
    objective: 'Menciptakan antarmuka pengguna (UI/UX) bertaraf profesional dengan identitas visual khas merah-hitam dan navigasi yang intuitif.',
    process: [
      'Perancangan arsitektur informasi dan user flow',
      'Penyusunan visual hierarchy bertema poster editorial',
      'Implementasi komponen React modular dan responsif',
      'Optimasi aksesibilitas, formulir WhatsApp, dan performa',
    ],
    result: 'Website interaktif yang siap dikembangkan lebih lanjut dengan arsitektur kode bersih dan mudah dirawat.',
    galleryPlaceholders: [
      { title: 'Responsive Hero Viewport', subtitle: 'Editorial hero section on desktop & mobile', aspect: '16:9', image: '/src/assets/images/yannstudio_web_hub_1793861977474.jpg' },
      { title: 'Interactive Studio Ecosystem', subtitle: '4 business branch visual cards', aspect: '16:9' },
      { title: 'Direct WhatsApp Order Flow', subtitle: 'Instant consultation messaging trigger', aspect: '4:3' },
    ],
    accentColor: '#DC2626',
  },
  {
    id: 'proj-6',
    title: 'Mobile Legends Community Media Kit',
    category: 'Design',
    year: '2024',
    tools: ['Canva', 'Photoshop'],
    shortDesc: 'Paket grafis untuk turnamen komunitas Mobile Legends lokal mencakup jadwal tanding, bagan bracket, dan poster promosi.',
    imageUrl: '/src/assets/images/gaming_tournament_poster_1793861496401.jpg',
    overview: 'Pembuatan serangkaian materi promosi visual untuk turnamen esports komunitas. Didesain agar mudah diedit oleh panitia dengan layout yang jelas untuk menampilkan nama tim, waktu tanding, dan sponsor.',
    objective: 'Meningkatkan citra profesional turnamen komunitas game melalui aset visual yang berstandar tinggi.',
    process: [
      'Pengumpulan aset karakter resmi dan logo sponsor',
      'Perancangan layout bracket turnamen dan feed match update',
      'Pengujian keterbacaan teks jadwal di layar smartphone',
      'Penyusunan template siap pakai',
    ],
    result: 'Paket visual poster turnamen esports dengan kobaran api crimson, tipografi kejuaraan dinamis, dan layout yang siap cetak maupun posting media sosial.',
    galleryPlaceholders: [
      { title: 'Championship Poster Mockup', subtitle: 'Dynamic high contrast esports tournament layout', aspect: '4:3', image: '/src/assets/images/gaming_tournament_poster_1793861496401.jpg' },
      { title: 'Match Day Announce', subtitle: 'Instagram square graphic layout', aspect: '1:1' },
    ],
    accentColor: '#EF4444',
  },
];
