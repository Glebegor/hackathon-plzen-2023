import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { PatientBox } from '@components/blocks/PatientBox';
import { Icon } from '@components/elements/Icon';
import { Loader } from '@components/elements/Loader';

import type { Patient } from '@utils/patient';

const EXAMPLE_PATIENTS: Patient[] = [
  {
    id: 1,
    birth_certificate_number: '123',
    isDoctor: false,
    name: 'Igor',
    surname: 'Suszenka',
    place: '102',
    mood: 'Sad',
  },
  {
    id: 2,
    birth_certificate_number: '123',
    isDoctor: false,
    name: 'Igor',
    surname: 'Suszenka',
    place: '102',
    mood: 'Sad',
  },
  {
    id: 3,
    birth_certificate_number: '123',
    isDoctor: false,
    name: 'Igor',
    surname: 'Suszenka',
    place: '102',
    mood: 'Sad',
  },
];

export const HomePage: React.FC = () => (
  <DefaultLayout title="Home">
    <h1>Home</h1>
    <Icon name="house" />
    <Loader />
    <h2>Patients</h2>
    {EXAMPLE_PATIENTS.map((patient) => (
      <PatientBox key={patient.id} patient={patient} />
    ))}
  </DefaultLayout>
);
