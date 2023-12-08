import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Icon } from '@components/elements/Icon';

import { EXAMPLE_PATIENTS } from './HomePage';

export const ManagementPage: React.FC = () => (
  <DefaultLayout>
    <h1>Management</h1>
    <h2>Patients</h2>
    <table border={1}>
      <thead>
        <tr>
          <th>Jméno</th>
          <th>Příjmení</th>
          <th>Pokoj</th>
          <th>Akce</th>
        </tr>
      </thead>
      <tbody>
        {EXAMPLE_PATIENTS.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.surname}</td>
            <td>{patient.place}</td>
            <td>
              <button>
                <Icon name="pencil" />
              </button>
              <button>
                <Icon name="trash" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </DefaultLayout>
);
