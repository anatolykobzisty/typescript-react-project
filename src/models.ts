export interface IAdmin {
  telegramId: string;
}

export interface ITag {
  group: string;
  value: string;
  displayValue: string;
}

export interface IChannel {
  name: string;
  link: string;
  tags: ITag[];
}
