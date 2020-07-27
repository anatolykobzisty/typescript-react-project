import React, { FC, useState } from 'react';

import { ETagGroup } from '../../enums';
import { ITag, IChannel } from '../../models';

import { Tags } from '../Tags';
import { Channels } from '../Channels';

import './index.scss';

const DATA_TAGS: ITag[] = [
  {
    group: ETagGroup.FRONTEND,
    value: 'html',
    displayValue: 'HTML',
  },
  {
    group: ETagGroup.FRONTEND,
    value: 'css',
    displayValue: 'CSS',
  },
  {
    group: ETagGroup.FRONTEND,
    value: 'js',
    displayValue: 'JavaScript',
  },
  {
    group: ETagGroup.BACKEND,
    value: 'java',
    displayValue: 'Java',
  },
  {
    group: ETagGroup.COMMON,
    value: 'interview',
    displayValue: 'Интервью',
  },
  {
    group: ETagGroup.DESIGN,
    value: 'sketch',
    displayValue: 'Sketch',
  },
];

const DATA_CHANNELS: IChannel[] = [
  {
    name: 'Канал 1',
    link: 'http://google.com',
    tags: [
      {
        group: ETagGroup.FRONTEND,
        value: 'html',
        displayValue: 'HTML',
      },
      {
        group: ETagGroup.FRONTEND,
        value: 'css',
        displayValue: 'CSS',
      },
      {
        group: ETagGroup.FRONTEND,
        value: 'js',
        displayValue: 'JavaScript',
      },
    ],
  },
  {
    name: 'Канал 2',
    link: 'http://google.com',
    tags: [
      {
        group: ETagGroup.FRONTEND,
        value: 'js',
        displayValue: 'JavaScript',
      },
    ],
  },
  {
    name: 'Канал 3',
    link: 'http://google.com',
    tags: [
      {
        group: ETagGroup.COMMON,
        value: 'interview',
        displayValue: 'Интервью',
      },
    ],
  },
];

export const Main: FC = () => {
  const [activeTags, setActiveTags] = useState<ITag[]>([]);

  const filterData = (channelsArray: IChannel[]) =>
    channelsArray.filter(channel =>
      activeTags.every(activeTag => channel.tags.some(channelTag => JSON.stringify(activeTag) === JSON.stringify(channelTag)))
    );

  const channels = activeTags.length ? filterData(DATA_CHANNELS) : DATA_CHANNELS;

  return (
    <div className="main">
      <Tags tags={DATA_TAGS} activeTags={activeTags} onSetActiveTags={setActiveTags} />
      <Channels channels={channels} />
    </div>
  );
};
