import type { IconName } from '@fortawesome/fontawesome-common-types';

export interface Patient {
  id: number;
  name: string;
  surname: string;
  birth_certificate_number: string;
  place: string;
  isDoctor: boolean;
  mood: string;
  moodIcon: IconName;
}
