
export enum AppView {
  SEARCH = 'search',
  IMAGE_EDIT = 'image_edit',
  VOICE = 'voice',
  VEO_ANIMATE = 'veo_animate'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: number;
  groundingUrls?: Array<{ uri: string; title: string }>;
}

export interface ImageResult {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface VideoResult {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}
