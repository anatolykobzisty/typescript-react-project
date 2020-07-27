import React, { FC, useState, useEffect } from 'react';

import { ETagGroup } from '../../enums';
import { ITag, IChannel } from '../../models';
import { BASE_URL } from '../../consts';

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
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [activeTags, setActiveTags] = useState<ITag[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/channels/`)
      .then(res => res.json())
      .then(result => {
        setChannels(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/tags/`)
      .then(res => res.json())
      .then(result => {
        setTags(result);
      });
  }, []);

  const filteredData = () => {
    return channels.filter(channel => {
      return activeTags.every(activeTag => {
        return channel.tags.some(channelTag => {
          return activeTag.value === channelTag.value && activeTag.group === channelTag.group;
        });
      });
    });
  };

  return (
    <div className="main">
      <Tags tags={tags} activeTags={activeTags} onSetActiveTags={setActiveTags} />
      <Channels channels={activeTags.length ? filteredData() : channels} />
    </div>
  );
};
