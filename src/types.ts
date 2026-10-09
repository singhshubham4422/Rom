export type StepId = 
  | 'page_1_opening'
  | 'page_2_playful'
  | 'page_3_memories'
  | 'page_4_honest'
  | 'page_5_forgiveness'
  | 'page_6_rose'
  | 'page_7_photo'
  | 'page_8_movie'
  | 'final_screenshot';

export interface PreloadState {
  isLoading: boolean;
  progress: number; // 0 to 100
  totalAssets: number;
  loadedAssets: number;
  failedAssets: string[];
  isError: boolean;
  errorMessage?: string;
}
