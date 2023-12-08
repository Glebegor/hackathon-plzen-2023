import React from 'react';

import { Icon } from '@components/elements/Icon';

import type { Patient } from '@utils/patient';

interface Props {
  patient: Patient;
}

export const PatientBox: React.FC<Props> = ({ patient }) => (
  <div>
    <Icon name="user" />
    <h3>
      {patient.name} {patient.surname}
    </h3>
    <ul>
      <li>Room: {patient.place}</li>
      <li>Mood: {patient.mood}</li>
    </ul>
    <Icon name={patient.moodIcon} />
  </div>
);
