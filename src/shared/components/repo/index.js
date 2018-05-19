import React from 'react';

import Contributors from '../../containers/repo/contributors';
import {Description} from './description';
import {Header} from './header';
import {Summary} from './summary';

export const Repo = ({repo=null}) => (
  repo &&
    <div>
      <Header repo={repo} />
      <Description repo={repo} />
      <Summary repo={repo} />
      <Contributors repo={repo} />
    </div>
);
