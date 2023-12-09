import type { IconName } from '@fortawesome/fontawesome-svg-core';

export interface Mood {
  id: number;
  hex: string;
  name: string;
  charset: IconName;
}
