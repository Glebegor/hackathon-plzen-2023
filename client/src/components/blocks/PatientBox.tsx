import React from 'react';

import type { Patient } from '@utils/patient';

interface Props {
  patient: Patient;
}

export const PatientBox: React.FC<Props> = ({ patient }) => (
  <div>
    <h3>
      {patient.name} {patient.surname}
    </h3>
    <ul>
      <li>Room: {patient.place}</li>
      <li>Mood: {patient.mood}</li>
    </ul>
  </div>
);
