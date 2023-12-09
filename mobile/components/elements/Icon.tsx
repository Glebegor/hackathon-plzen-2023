import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';

import type {
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-common-types';

interface Props {
  name: IconName;
  type?: IconPrefix;
  style?: FontAwesomeIconStyle;
  size?: number;
}

library.add(fas);
library.add(far);
library.add(fab);

export const Icon: React.FC<Props> = ({ name, type = 'fas', style, size }) => (
  <FontAwesomeIcon icon={[type, name]} style={style} size={size} />
);
