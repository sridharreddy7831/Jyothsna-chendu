
import { WeddingEvent } from './types';

export const COLORS = {
  primary: '#800000', // Deep Maroon
  secondary: '#FFD700', // Gold
  accent: '#FF8C00', // Dark Orange/Saffron
  background: '#FDF5E6', // Old Lace
  text: '#4A0E0E', // Darker Maroon for text
};

export const WEDDING_DATE = new Date('2026-03-15T02:00:00');

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'nalangu',
    name: 'నలుగు (Nalangu)',
    date: 'March 13, 2026',
    time: '09:00 AM onwards',
    venue: 'Bride\'s Residence, Manikyarayanipalli',
    description: 'A traditional pre-wedding ritual of applying turmeric and oils to the bride, marking the beginning of the sacred celebrations.',
    icon: '✨',
    color: '#FFD700'
  },
  {
    id: 'reception',
    name: 'Reception & Dinner',
    date: 'March 14, 2026',
    time: '07:00 PM onwards',
    venue: 'R.L.N. Kalyana Mandapam, Puthalapattu',
    description: 'Join us for an evening of celebration with dinner and blessings.',
    icon: '🥂',
    color: '#C0C0C0'
  },
  {
    id: 'muhurtham',
    name: 'Subha Muhurtham',
    date: 'March 15, 2026',
    time: '02:00 AM - 03:00 AM (Subha Dhanasu Lagnam)',
    venue: 'R.L.N. Kalyana Mandapam, Tirupathi Main Road, Puthalapattu, Chittoor.',
    description: 'The sacred moment of union where Jyothsna & Chendu tie the knot in the presence of family and the divine.',
    icon: '🔥',
    color: '#800000'
  }
];

export const SLOKAS = [
  "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ। నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా॥",

  "ఓం సహ నావవతు। సహ నౌ భునక్తు। సహ వీర్యం కరవావహై। తేజస్వి నావధీతమస్తు మా విద్విషావహై॥",

  "యదేతద్ధృదయం తవ తదస్తు హృదయం మమ। యదిదం హృదయం మమ తదస్తు హృదయం తవ॥"
];

export const GALLERY_IMAGES = [
  { url: '/1.jpg' },
  { url: '/2.jpg' },
  { url: '/5.jpg' },
];
