import React, { FC } from 'react';

import { IAdmin } from '../../models';

import './index.scss';

const DATA_ADMINS: IAdmin[] = [
  {
    telegramId: 'admin-1',
  },
  {
    telegramId: 'admin-2',
  },
  {
    telegramId: 'admin-3',
  },
];

export const Header: FC = () => (
  <div className="app-header">
    <div className="app-header__col-left">
      <h1>#LOGO</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
    </div>
    <div className="app-header__col-right">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, blanditiis!
      <br />
      {DATA_ADMINS.map((admin, index) => (
        <React.Fragment key={admin.telegramId}>
          <a href="http://site.com" className="link-admin" target="_blank" rel="noopener noreferrer">
            {`@${admin.telegramId}`}
          </a>
          {index === DATA_ADMINS.length - 1 ? '' : ', '}
        </React.Fragment>
      ))}
    </div>
  </div>
);
