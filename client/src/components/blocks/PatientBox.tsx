import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@components/elements/Icon';

import { AppRoute } from '@utils/route';

import type { Patient } from '@typings/patient';

interface Props {
  patient: Patient;
}

export const PatientBox: React.FC<Props> = ({ patient }) => {
  const navigate = useNavigate();

  return (
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
      <button
        onClick={() => navigate(`${AppRoute.PATIENT_DETAIL}/${patient.id}`)}
      >
        Detail
      </button>
    </div>
  );
};
