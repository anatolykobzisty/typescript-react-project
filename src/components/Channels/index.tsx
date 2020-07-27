import React, { FC } from 'react';

import { IChannel } from '../../models';

import './index.scss';

interface IProps {
  channels: IChannel[];
}

export const Channels: FC<IProps> = ({ channels }) => (
  <div className="channels-list">
    {channels.length ? (
      channels.map(channel => (
        <div className="channels-list__item" key={channel.name}>
          <a href={channel.link} className="channels-list__item-link" target="_blank" rel="noopener noreferrer">
            {channel.name}
          </a>
        </div>
      ))
    ) : (
      <div className="channels-list--emty">Данных нет</div>
    )}
  </div>
);
