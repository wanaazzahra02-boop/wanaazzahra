export type SkillCategory = 'all' | 'speaking' | 'barista' | 'swimming' | 'planner';

export interface SkillItem {
  id: Exclude<SkillCategory, 'all'>;
  number: string;
  title: string;
  shortTitle: string;
  roleLabel: string;
  tagline: string;
  summary: string;
  details: string[];
  toolsOrFocus: string[];
  image: string;
  imageAlt: string;
  accentHex: string;
  tintBg: string;
  borderTint: string;
  accentText: string;
}

export interface CollaborationOption {
  id: string;
  title: string;
  context: string;
  description: string;
  accentDotHex: string;
  dmTemplate: string;
}

export const PROFILE = {
  name: 'Wana Az-Zahra',
  university: 'Politeknik Negeri Jakarta',
  major: 'MICE (Meeting, Incentive, Convention, and Exhibition)',
  instagramHandle: '@wanazahraaa',
  instagramUrl: 'https://instagram.com/wanazahraaa',
  headline: 'Halo, saya Wana Az-Zahra.',
  heroLead:
    'Mahasiswa MICE Politeknik Negeri Jakarta yang memadukan keberanian public speaking, ketelitian meracik kopi sebagai barista, disiplin atlet renang, serta keahlian menyusun rencana acara.',
  aboutParagraphs: [
    'Sebagai mahasiswa program studi MICE di Politeknik Negeri Jakarta, saya terbiasa hidup di tengah ritme yang dinamis—dari ruang perencanaan konsep acara hingga panggung utama yang penuh energi.',
    'Di luar dunia perkuliahan dan event planning, saya menekuni seni meracik kopi baik menggunakan mesin espresso maupun metode manual brew, serta menjaga fokus dan ketahanan fisik sebagai atlet renang. Perpaduan antara komunikasi panggung, ketekunan di bar kopi, dan sportivitas di kolam renang membentuk cara kerja saya yang terstruktur, komunikatif, dan sigap di segala situasi.',
  ],
  quickFacts: [
    {label: 'Nama Lengkap', value: 'Wana Az-Zahra'},
    {label: 'Pendidikan', value: 'Mahasiswa MICE · Politeknik Negeri Jakarta'},
    {label: 'Keahlian Kopi', value: 'Mesin Espresso & Manual Brew (V60)'},
    {label: 'Olahraga', value: 'Atlet Renang Aktif'},
    {label: 'Fokus Acara', value: 'Public Speaking & Event Planner'},
    {label: 'Instagram', value: '@wanazahraaa'},
  ],
};

export const SKILLS: SkillItem[] = [
  {
    id: 'speaking',
    number: '01',
    title: 'Public Speaking',
    shortTitle: 'Public Speaking',
    roleLabel: 'MC · Moderator · Presenter',
    tagline: 'Menghidupkan suasana panggung dengan komunikasi yang jelas dan hangat.',
    summary:
      'Terbiasa tampil di depan audiens sebagai pembawa acara, moderator diskusi, maupun presenter. Mengutamakan intonasi yang terukur, artikulasi yang bersih, dan kemampuan membaca suasana audiens.',
    details: [
      'Master of Ceremony (MC) untuk acara kampus, seminar, dan komunitas',
      'Moderator sesi diskusi panel dan talkshow interaktif',
      'Penyampaian materi presentasi yang terstruktur dan persuasif',
      'Penanganan improvisasi alur panggung saat terjadi perubahan jadwal mendadak',
    ],
    toolsOrFocus: ['Artikulasi & Vokal', 'Penguasaan Panggung', 'Interaksi Audiens'],
    image: '/src/assets/images/hero_stage_microphone_1795500318366.jpg',
    imageAlt: 'Panggung acara modern dengan mikrofon dan tirai merah maroon',
    accentHex: '#9F1B38',
    tintBg: 'bg-[#FFF5F7]',
    borderTint: 'border-[#F3D5DC]',
    accentText: 'text-[#7A1328]',
  },
  {
    id: 'barista',
    number: '02',
    title: 'Barista Pembuat Kopi',
    shortTitle: 'Barista Kopi',
    roleLabel: 'Mesin Espresso · Manual Brew',
    tagline: 'Meracik cita rasa seimbang lewat kalibrasi mesin dan seduhan manual.',
    summary:
      'Memiliki keahlian meracik kopi secara konsisten menggunakan mesin espresso maupun metode manual brew. Memahami pengaturan gilingan, suhu air, rasio seduh, hingga tekstur susu untuk minuman berbasis espresso.',
    details: [
      'Pengoperasian mesin espresso: ekstraksi shot, kalibrasi grind size, dan steaming susu',
      'Metode manual brew: V60 pour-over dengan kontrol rasio dan waktu seduh yang presisi',
      'Penyajian menu klasik hingga signature beverage yang bersih dan rapi',
      'Menjaga standar kebersihan bar serta keramahan pelayanan kepada penikmat kopi',
    ],
    toolsOrFocus: ['Mesin Espresso', 'Manual Brew V60', 'Latte Art & Rasio'],
    image: '/src/assets/images/craft_barista_coffee_1795500300577.jpg',
    imageAlt: 'Barista menuang latte art ke cangkir maroon di samping alat seduh V60',
    accentHex: '#D97706',
    tintBg: 'bg-[#FFFBEB]',
    borderTint: 'border-[#FDE68A]',
    accentText: 'text-[#92400E]',
  },
  {
    id: 'swimming',
    number: '03',
    title: 'Atlet Renang',
    shortTitle: 'Atlet Renang',
    roleLabel: 'Ketahanan · Disiplin · Sportivitas',
    tagline: 'Menjaga konsistensi performa, stamina, dan ketenangan di setiap lintasan.',
    summary:
      'Latar belakang sebagai atlet renang melatih ketangguhan mental, kedisiplinan waktu, dan manajemen energi. Kebiasaan berlatih rutin membentuk fokus tinggi saat menghadapi target dan tekanan.',
    details: [
      'Disiplin jadwal latihan fisik, teknik gaya renang, dan pengaturan napas',
      'Manajemen stamina serta kecepatan untuk menjaga ritme dari start hingga finis',
      'Mentalitas kompetitif yang sportif, tenang, dan siap bekerja dalam tim',
      'Ketahanan fisik prima yang mendukung mobilitas tinggi saat mengelola acara lapangan',
    ],
    toolsOrFocus: ['Stamina & Pernapasan', 'Disiplin Latihan', 'Mental Kompetitif'],
    image: '/src/assets/images/craft_swimming_athlete_1795500300052.jpg',
    imageAlt: 'Kolam renang kompetisi dengan air biru jernih dan lintasan merah putih',
    accentHex: '#0284C7',
    tintBg: 'bg-[#F0F9FF]',
    borderTint: 'border-[#BAE6FD]',
    accentText: 'text-[#075985]',
  },
  {
    id: 'planner',
    number: '04',
    title: 'Event Planner (MICE)',
    shortTitle: 'Event Planner',
    roleLabel: 'Konsep · Rundown · Eksekusi',
    tagline: 'Menyusun alur acara dari konsep awal hingga eksekusi lapangan yang tertib.',
    summary:
      'Didukung pendidikan MICE di Politeknik Negeri Jakarta, saya terampil menyusun perencanaan acara secara menyeluruh: mulai dari perancangan konsep, timeline kerja, rundown detail, hingga koordinasi tim saat hari H.',
    details: [
      'Perencanaan konsep acara, tema visual, dan struktur pengalaman peserta',
      'Penyusunan rundown menit demi menit serta pembagian tugas stage crew',
      'Koordinasi lintas divisi, narasumber, vendor, dan kebutuhan teknis venue',
      'Antisipasi skenario darurat agar acara tetap berjalan mulus sesuai jadwal',
    ],
    toolsOrFocus: ['Event Rundown', 'Koordinasi Tim', 'Manajemen MICE'],
    image: '/src/assets/images/craft_mice_planner_1795500320742.jpg',
    imageAlt: 'Meja kerja perencana acara MICE dengan buku catatan merah maroon dan kartu jadwal warna-warni',
    accentHex: '#7C3AED',
    tintBg: 'bg-[#F5F3FF]',
    borderTint: 'border-[#DDD6FE]',
    accentText: 'text-[#5B21B6]',
  },
];

export const COLLABORATIONS: CollaborationOption[] = [
  {
    id: 'mc-event',
    title: 'MC & Moderator Acara',
    context: 'Seminar · Talkshow · Festival Kampus',
    description:
      'Memandu acara dengan alur komunikatif, pembawaan rapi, serta transisi sesi yang tepat waktu.',
    accentDotHex: '#7A1328',
    dmTemplate:
      'Halo Wana! Saya ingin mengajak kolaborasi untuk menjadi MC/Moderator pada acara [Nama Acara] tanggal [Tanggal]. Apakah bersedia berdiskusi?',
  },
  {
    id: 'barista-brew',
    title: 'Barista & Manual Brew',
    context: 'Pop-up Coffee · Event Booth · Workshop',
    description:
      'Menyajikan racikan espresso maupun manual brew V60 dengan alur bar yang bersih dan ramah.',
    accentDotHex: '#D97706',
    dmTemplate:
      'Halo Wana! Kami tertarik berkolaborasi untuk kebutuhan barista / manual brew booth pada tanggal [Tanggal]. Boleh ngobrol lebih lanjut?',
  },
  {
    id: 'event-planning',
    title: 'Perencanaan Acara MICE',
    context: 'Konsep · Rundown · Stage Management',
    description:
      'Membantu menyusun event planner, timeline persiapan, hingga koordinasi kru selama acara berlangsung.',
    accentDotHex: '#0284C7',
    dmTemplate:
      'Halo Wana! Kami sedang menyiapkan acara [Nama Acara] dan tertarik bekerja sama dalam penyusunan event planner & rundown. Bisa diskusi sebentar?',
  },
];
