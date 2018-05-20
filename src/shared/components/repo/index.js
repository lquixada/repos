import React from 'react';

import Contributors from '../../containers/repo/contributors';
import {Description} from './description';
import {Header} from './header';
import {Summary} from './summary';

export const Repo = ({repo, hasLoaded}) => (
  hasLoaded? <Loading /> : <Content repo={repo} />
);

const Loading = () => (
  <div>Loading...</div>
);

const Content = ({repo}) => (
  <div>
    <Header title={repo.name} url={repo.html_url} />
    <Description text={repo.description} />
    <Summary repo={repo} />
    <Contributors repoName={repo.name} />
  </div>
);
