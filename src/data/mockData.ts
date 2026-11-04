import { GarmentItem, Look, StylistOption, DayPlan, WearHistoryEntry, AvatarConfig } from '../types';

export const INITIAL_WARDROBE: GarmentItem[] = [
  { id: 'item_1', name: 'Navy shirt', category: 'Tops', photo: 'assets/navy_shirt.jpg', condition: 'clean', fit: 'perfect', color: 'Navy Blue', brand: 'FabIndia' },
  { id: 'item_2', name: 'Beige chinos', category: 'Bottoms', photo: 'assets/beige_chinos.jpg', condition: 'clean', fit: 'perfect', color: 'Warm Beige', brand: 'Uniqlo' },
  { id: 'item_3', name: 'Cream kurta', category: 'Tops', photo: 'assets/olive_kurta.jpg', condition: 'clean', fit: 'perfect', color: 'Olive Cream', brand: 'Raw Mango' },
  { id: 'item_4', name: 'White sneakers', category: 'Shoes', photo: 'assets/white_sneakers.jpg', condition: 'clean', fit: 'perfect', color: 'Pure White', brand: 'Veja' },
  { id: 'item_5', name: 'Maroon top', category: 'Tops', photo: 'assets/maroon_top.jpg', condition: 'clean', fit: 'tight', color: 'Deep Maroon', brand: 'Zara' },
  { id: 'item_6', name: 'Dark skirt', category: 'Bottoms', photo: 'assets/dark_skirt.jpg', condition: 'clean', fit: 'perfect', color: 'Charcoal', brand: 'Mango' },
  { id: 'item_7', name: 'White linen shirt', category: 'Tops', photo: 'assets/white_linen_shirt.jpg', condition: 'clean', fit: 'loose', color: 'Linen Off-White', brand: 'Muji' },
  { id: 'item_8', name: 'Dark denim', category: 'Bottoms', photo: 'assets/dark_denim.jpg', condition: 'dirty', fit: 'perfect', color: 'Raw Indigo', brand: "Levi's" },
  { id: 'item_9', name: 'Tan loafers', category: 'Shoes', photo: 'assets/tan_loafers.jpg', condition: 'clean', fit: 'perfect', color: 'Honey Tan', brand: 'Clarks' },
  { id: 'item_10', name: 'Leather watch', category: 'Accessories', photo: 'assets/leather_watch.jpg', condition: 'clean', fit: 'perfect', color: 'Cognac', brand: 'Fossil' },
  { id: 'item_11', name: 'Black trainers', category: 'Shoes', photo: 'assets/black_trainers.jpg', condition: 'clean', fit: 'perfect', color: 'Onyx Black', brand: 'Nike' },
  { id: 'item_12', name: 'Brown sandals', category: 'Shoes', photo: 'assets/brown_sandals.jpg', condition: 'clean', fit: 'perfect', color: 'Earth Brown', brand: 'Birkenstock' },
  { id: 'item_13', name: 'Cream palazzo', category: 'Bottoms', photo: 'assets/cream_palazzo.jpg', condition: 'clean', fit: 'loose', color: 'Warm Cream', brand: 'Nicobar' },
  { id: 'item_14', name: 'Indigo kurti', category: 'Tops', photo: 'assets/indigo_kurti.jpg', condition: 'dirty', fit: 'perfect', color: 'Indigo', brand: 'Anokhi' },
  { id: 'item_15', name: 'Terracotta tee', category: 'Tops', photo: 'assets/terracotta_tee.jpg', condition: 'dirty', fit: 'tight', color: 'Terracotta', brand: 'Everlane' },
  { id: 'item_16', name: 'Tailored blazer', category: 'Tops', photo: 'assets/smart_blazer.jpg', condition: 'clean', fit: 'tight', color: 'Sage Green', brand: 'Massimo Dutti' }
];

export const INITIAL_LOOKS: Look[] = [
  {
    id: 'look_1',
    title: 'Easy everyday',
    caption: 'A relaxed look for your college day.',
    modelPhoto: 'assets/model_tryon_navy.jpg',
    top: { name: 'Navy shirt', photo: 'assets/navy_shirt.jpg', condition: 'clean', fit: 'perfect' },
    bottom: { name: 'Beige trousers', photo: 'assets/beige_chinos.jpg', condition: 'clean', fit: 'perfect' },
    footwear: { name: 'White sneakers', photo: 'assets/white_sneakers.jpg', condition: 'clean', fit: 'perfect' },
    accessory: { name: 'Leather watch', photo: 'assets/leather_watch.jpg', condition: 'clean', fit: 'perfect' }
  },
  {
    id: 'look_2',
    title: 'Office ready',
    caption: 'Crisp tailored tones suited for AC workdays.',
    modelPhoto: 'assets/model_tryon_linen.jpg',
    top: { name: 'White linen shirt', photo: 'assets/white_linen_shirt.jpg', condition: 'clean', fit: 'loose' },
    bottom: { name: 'Beige trousers', photo: 'assets/beige_chinos.jpg', condition: 'clean', fit: 'perfect' },
    footwear: { name: 'Tan loafers', photo: 'assets/tan_loafers.jpg', condition: 'clean', fit: 'perfect' },
    accessory: { name: 'Leather watch', photo: 'assets/leather_watch.jpg', condition: 'clean', fit: 'perfect' }
  },
  {
    id: 'look_3',
    title: 'Weekend casual',
    caption: 'Lightweight breathable cotton for warm afternoons.',
    modelPhoto: 'assets/model_tryon_kurta.jpg',
    top: { name: 'Olive kurta', photo: 'assets/olive_kurta.jpg', condition: 'clean', fit: 'perfect' },
    bottom: { name: 'Cream palazzo', photo: 'assets/cream_palazzo.jpg', condition: 'clean', fit: 'loose' },
    footwear: { name: 'Tan loafers', photo: 'assets/tan_loafers.jpg', condition: 'clean', fit: 'perfect' },
    accessory: { name: 'Leather watch', photo: 'assets/leather_watch.jpg', condition: 'clean', fit: 'perfect' }
  }
];

export const STYLIST_OPTIONS: StylistOption[] = [
  {
    id: 'opt_1',
    title: 'Easy Everyday Contrast',
    caption: 'Breathable navy cotton paired with beige chinos for Chennai 29°C.',
    modelPhoto: 'assets/model_tryon_navy.jpg',
    flatLayPhoto: 'assets/minimal_style.jpg',
    top: { name: 'Navy shirt', photo: 'assets/navy_shirt.jpg' },
    bottom: { name: 'Beige chinos', photo: 'assets/beige_chinos.jpg' },
    footwear: { name: 'White sneakers', photo: 'assets/white_sneakers.jpg' },
    rationale: 'Lightweight cotton prevents heat retention in Chennai humidity. High-contrast navy and beige create a timeless smart-casual balance. We avoided your dark denim because it is marked in laundry.'
  },
  {
    id: 'opt_2',
    title: 'Crisp Linen Tailored',
    caption: 'Clean monochrome tones ideal for indoor AC and meetings.',
    modelPhoto: 'assets/model_tryon_linen.jpg',
    flatLayPhoto: 'assets/office_ready.jpg',
    top: { name: 'White linen shirt', photo: 'assets/white_linen_shirt.jpg' },
    bottom: { name: 'Beige chinos', photo: 'assets/beige_chinos.jpg' },
    footwear: { name: 'Tan loafers', photo: 'assets/tan_loafers.jpg' },
    rationale: 'Relaxed linen airflow tailored with structured beige trousers. Tan loafers pull the earthy palette together. All 3 pieces are 100% clean and ready.'
  },
  {
    id: 'opt_3',
    title: 'Relaxed Urban Minimal',
    caption: 'Comfortable street style with lightweight ease.',
    modelPhoto: 'assets/model_tryon_maroon.jpg',
    flatLayPhoto: 'assets/style_casual.jpg',
    top: { name: 'Maroon top', photo: 'assets/maroon_top.jpg' },
    bottom: { name: 'Dark skirt', photo: 'assets/dark_skirt.jpg' },
    footwear: { name: 'White sneakers', photo: 'assets/white_sneakers.jpg' },
    rationale: 'Deep maroon tone paired with dark pleated skirt. White sneakers add casual athletic contrast for walking comfortably around the city.'
  },
  {
    id: 'opt_4',
    title: 'Refined Modern Heritage',
    caption: 'Elevated silhouette suitable for evening outings and celebrations.',
    modelPhoto: 'assets/model_tryon_kurta.jpg',
    flatLayPhoto: 'assets/traditional_kurta.jpg',
    top: { name: 'Cream kurta', photo: 'assets/olive_kurta.jpg' },
    bottom: { name: 'Cream palazzo', photo: 'assets/cream_palazzo.jpg' },
    footwear: { name: 'Tan loafers', photo: 'assets/tan_loafers.jpg' },
    rationale: 'Breathable ethnic silhouette with contemporary relaxed drape. Perfect for celebrations, dinners, and evening gatherings.'
  }
];

export const INITIAL_WEEKLY_PLAN: DayPlan[] = [
  { id: 'day_1', dayName: 'Mon', dayNumber: 3, dateStr: 'Nov 3', weather: '☀️ Sunny', temp: '31°C', occasion: 'Office / AC', lookTitle: 'Crisp Linen Tailored', photo: 'assets/model_tryon_linen.jpg', completed: true },
  { id: 'day_2', dayName: 'Tue', dayNumber: 4, dateStr: 'Nov 4', weather: '🌤️ Partly cloudy', temp: '29°C', occasion: 'College Campus', lookTitle: 'Easy everyday', photo: 'assets/model_tryon_navy.jpg', isToday: true, completed: false },
  { id: 'day_3', dayName: 'Wed', dayNumber: 5, dateStr: 'Nov 5', weather: '☀️ Clear sky', temp: '30°C', occasion: 'Client Meeting', lookTitle: 'Smart Tailored Blazer', photo: 'assets/smart_blazer.jpg', completed: false },
  { id: 'day_4', dayName: 'Thu', dayNumber: 6, dateStr: 'Nov 6', weather: '🌧️ Afternoon rain', temp: '28°C', occasion: 'Creative Studio', lookTitle: 'Relaxed Urban Minimal', photo: 'assets/model_tryon_maroon.jpg', completed: false },
  { id: 'day_5', dayName: 'Fri', dayNumber: 7, dateStr: 'Nov 7', weather: '☀️ Warm', temp: '32°C', occasion: 'Casual Friday', lookTitle: 'Terracotta Comfort', photo: 'assets/style_casual.jpg', completed: false },
  { id: 'day_6', dayName: 'Sat', dayNumber: 8, dateStr: 'Nov 8', weather: '✨ Evening breeze', temp: '27°C', occasion: 'Dinner with friends', lookTitle: 'Weekend casual', photo: 'assets/model_tryon_kurta.jpg', completed: false },
  { id: 'day_7', dayName: 'Sun', dayNumber: 9, dateStr: 'Nov 9', weather: '☀️ Relaxed morning', temp: '30°C', occasion: 'Brunch & Walk', lookTitle: 'Heritage Kurti Ease', photo: 'assets/festive_look.jpg', completed: false }
];

export const INITIAL_WEAR_HISTORY: WearHistoryEntry[] = [
  { id: 'wh_1', date: 'Yesterday, Nov 3', title: 'Crisp Linen Tailored', photo: 'assets/model_tryon_linen.jpg', rating: 5, tags: ['Work', 'Comfortable', 'Lightweight'] },
  { id: 'wh_2', date: 'Sunday, Nov 2', title: 'Weekend Ethnic Kurta', photo: 'assets/model_tryon_kurta.jpg', rating: 5, tags: ['Ethnic', 'Relaxed', 'Festive'] },
  { id: 'wh_3', date: 'Saturday, Nov 1', title: 'Relaxed Urban Minimal', photo: 'assets/model_tryon_maroon.jpg', rating: 4, tags: ['City Walk', 'Casual'] },
  { id: 'wh_4', date: 'Friday, Oct 31', title: 'Smart Casual Blazer', photo: 'assets/smart_blazer.jpg', rating: 5, tags: ['Presentation', 'Crisp'] },
  { id: 'wh_5', date: 'Thursday, Oct 30', title: 'Easy everyday', photo: 'assets/model_tryon_navy.jpg', rating: 4, tags: ['College', 'Easy'] }
];

export const DEFAULT_AVATAR_CONFIG: AvatarConfig = {
  gender: 'female',
  skinTone: '#F3D5C6',
  hairStyle: 'bun',
  hairColor: '#1E120A',
  proportions: 'regular',
  top: 'tank',
  bottom: 'wide_linen',
  shoes: 'sneakers',
  accessories: {
    watch: true,
    earrings: true,
    necklace: false
  }
};
