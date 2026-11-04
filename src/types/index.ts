export type ScreenId =
  | 'welcome'
  | 'style-pref'
  | 'add-wardrobe'
  | 'review-item'
  | 'today'
  | 'outfit-details'
  | 'swap-item'
  | 'outfit-ready'
  | 'ai-stylist'
  | 'custom-builder'
  | 'weekly-planning'
  | 'wardrobe'
  | 'saved'
  | 'wear-history'
  | 'profile'
  | 'premium'
  | 'manage-subscription'
  | 'reminders'
  | 'account-privacy'
  | 'appearance-settings'
  | 'performance-settings'
  | 'signin'
  | 'create-account'
  | 'reset-password'
  | 'new-password'
  | 'empty-wardrobe'
  | 'upload-failed'
  | 'not-enough-items'
  | 'offline-mode'
  | 'crop-photo'
  | 'edit-item'
  | 'outfit-feedback'
  | 'photo-access'
  | 'delete-account'
  | 'help-support';

export interface GarmentItem {
  id: string;
  name: string;
  category: 'Tops' | 'Bottoms' | 'Shoes' | 'Accessories' | 'Outerwear';
  photo: string;
  condition: 'clean' | 'dirty';
  fit: 'tight' | 'perfect' | 'loose';
  color?: string;
  brand?: string;
  season?: string;
}

export interface LookSlotItem {
  name: string;
  photo: string;
  condition?: 'clean' | 'dirty';
  fit?: 'tight' | 'perfect' | 'loose';
}

export interface Look {
  id: string;
  title: string;
  caption: string;
  modelPhoto: string;
  top: LookSlotItem;
  bottom: LookSlotItem;
  footwear: LookSlotItem;
  accessory: LookSlotItem;
}

export interface StylistOption {
  id: string;
  title: string;
  caption: string;
  modelPhoto: string;
  flatLayPhoto: string;
  top: { name: string; photo: string };
  bottom: { name: string; photo: string };
  footwear: { name: string; photo: string };
  rationale: string;
}

export interface AvatarConfig {
  gender: 'female' | 'male';
  skinTone: string;
  hairStyle: 'bun' | 'bob' | 'waves' | 'crop';
  hairColor: string;
  proportions: 'petite' | 'regular' | 'tall';
  top: 'tank' | 'navy_shirt' | 'linen_shirt' | 'kurta' | 'blazer' | 'maroon';
  bottom: 'wide_linen' | 'beige_chinos' | 'dark_skirt' | 'dark_denim' | 'palazzo';
  shoes: 'sneakers' | 'loafers' | 'sandals' | 'trainers';
  accessories: {
    watch: boolean;
    earrings: boolean;
    necklace: boolean;
  };
}

export interface DayPlan {
  id: string;
  dayName: string;
  dayNumber: number;
  dateStr: string;
  weather: string;
  temp: string;
  occasion: string;
  lookTitle: string;
  photo: string;
  isToday?: boolean;
  completed?: boolean;
}

export interface WearHistoryEntry {
  id: string;
  date: string;
  title: string;
  photo: string;
  rating: number;
  tags: string[];
}
